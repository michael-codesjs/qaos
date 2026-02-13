'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PinInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  error?: boolean;
}

const PinInput = React.forwardRef<HTMLDivElement, PinInputProps>(
  ({ length = 6, value, onChange, disabled, className, error }, ref) => {
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const updateValue = (index: number, val: string) => {
      const newValue = value.split('');
      newValue[index] = val;
      const joinedValue = newValue.join('').slice(0, length);
      onChange(joinedValue);

      // Auto-focus next input
      if (val !== '' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && value[index] === '' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
      const newValue = [...new Array(length)].map((_, i) => pasteData[i] || '');
      onChange(newValue.join(''));

      // Focus the last filled input or the first empty one
      const lastIndex = Math.min(pasteData.length, length - 1);
      inputRefs.current[lastIndex]?.focus();
    };

    const values = value.split('').concat(new Array(length).fill('')).slice(0, length);

    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-between gap-2 md:gap-3', className)}
        onPaste={handlePaste}
      >
        {values.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputRefs.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            disabled={disabled}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, '');
              updateValue(idx, val);
            }}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            className={cn(
              'w-full h-12 md:h-14 text-center text-xl md:text-2xl font-bold rounded-xl bg-gray-50 border border-gray-100 transition-all duration-200 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
              error
                ? 'border-red-500 focus:ring-red-500/20'
                : 'focus:ring-navigator/20 focus:border-navigator',
              digit !== '' && !error && 'border-navigator',
            )}
          />
        ))}
      </div>
    );
  },
);

PinInput.displayName = 'PinInput';

export { PinInput };
