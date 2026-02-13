'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-lg bg-gray-50 border border-gray-100 px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navigator/20 focus-visible:border-navigator disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none',
  {
    variants: {
      variant: {
        default: '',
        error: 'border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
  label?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, label, helperText, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            {label}
          </label>
        )}
        <textarea className={cn(textareaVariants({ variant, className }))} ref={ref} {...props} />
        {helperText && (
          <p
            className={cn(
              'text-[10px] font-medium transition-colors',
              variant === 'error' ? 'text-red-500' : 'text-gray-400',
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
