'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      type,
      error,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const errorId = error ? `${id}-error` : undefined;

    return (
      <div className="relative w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-300 mb-2 ml-1"
          >
            {label}
          </label>
        )}
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            id={id}
            className={cn(
              'w-full rounded-xl bg-gray-900/50 border border-gray-700 text-gray-200',
              'px-4 py-3 pl-10 pr-10',
              'placeholder:text-gray-500',
              'focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'transition-all duration-300',
              'hover:border-gray-600',
              'group-hover:bg-gray-900/70',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              className
            )}
            ref={ref}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={errorId}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={errorId} className="mt-1 text-sm text-red-400 ml-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };