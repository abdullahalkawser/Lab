'use client';

import React from 'react';
import { motion, type Variant } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
  magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      magnetic = true,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent hover:from-purple-700 hover:to-blue-700',
      destructive: 'bg-red-600 text-white border-transparent hover:bg-red-700',
      outline: 'border border-gray-700 bg-transparent text-gray-200 hover:bg-gray-800 hover:border-purple-500/50',
      secondary: 'bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 hover:border-gray-600',
      ghost: 'text-gray-200 hover:bg-gray-800/50 hover:text-white',
      link: 'text-purple-400 underline-offset-4 hover:underline',
      gradient: 'bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-blue-600/20 border-purple-500/30 text-white hover:from-purple-600/40 hover:via-cyan-500/40 hover:to-blue-600/40 backdrop-blur-sm',
    };

    const sizeStyles = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-8 px-3 text-xs',
      lg: 'h-12 px-6 text-base',
      icon: 'h-10 w-10',
    };

    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712] disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group';

    const MagneticWrapper = magnetic ? motion.div : React.Fragment;
    const magneticProps = magnetic
      ? {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
        }
      : {};

    return (
      <MagneticWrapper {...magneticProps} className="inline-block">
        <button
          ref={ref}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
          disabled={disabled || isLoading}
          {...props}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
          <span className="relative z-10 transition-all duration-300 group-hover:scale-[1.02]">{children}</span>
          {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}

          {/* Gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </button>
      </MagneticWrapper>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export default Button;