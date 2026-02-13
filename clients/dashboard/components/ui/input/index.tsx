'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Eye, EyeSlash } from 'iconsax-react';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-lg bg-gray-50 border border-gray-100 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navigator/20 focus-visible:border-navigator disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  {
    variants: {
      variant: {
        default: '',
        error: 'border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500',
      },
      inputSize: {
        default: 'h-11 px-4 py-3',
        sm: 'h-9 px-3 py-2',
        lg: 'h-12 px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, inputSize, type, label, leftIcon, rightIcon, helperText, ...props },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            {label}
          </label>
        )}
        <div className="relative flex items-center group">
          {leftIcon && (
            <div className="absolute left-3 flex items-center justify-center text-gray-400 group-focus-within:text-navigator transition-colors">
              {React.isValidElement(leftIcon)
                ? React.cloneElement(leftIcon as React.ReactElement<any>, {
                    size: 18,
                    color: 'currentColor',
                  })
                : leftIcon}
            </div>
          )}
          <input
            type={inputType}
            className={cn(
              inputVariants({ variant, inputSize, className }),
              leftIcon && 'pl-10',
              (rightIcon || isPassword) && 'pr-10',
            )}
            ref={ref}
            {...props}
          />
          {isPassword ? (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 flex items-center justify-center text-gray-400 hover:text-foreground transition-colors outline-none"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeSlash size={18} color="currentColor" variant="Linear" />
              ) : (
                <Eye size={18} color="currentColor" variant="Linear" />
              )}
            </button>
          ) : (
            rightIcon && (
              <div className="absolute right-3 flex items-center justify-center text-gray-400 group-focus-within:text-navigator transition-colors">
                {React.isValidElement(rightIcon)
                  ? React.cloneElement(rightIcon as React.ReactElement<any>, {
                      size: 18,
                      color: 'currentColor',
                    })
                  : rightIcon}
              </div>
            )
          )}
        </div>
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
Input.displayName = 'Input';

export { Input, inputVariants };
