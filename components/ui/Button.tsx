"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md 
    text-sm font-medium transition-all duration-200 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
    disabled:pointer-events-none py-[12px] px-[16px] min-h-[44px] 
    `,
  {
    variants: {
      variant: {
        primary: `bg-alexandria-primary
          flex items-center justify-center
          text-white shadow
          hover:brightness-90 hover:text-bold 
          focus:brightness-125 focus:scale-105 
          disabled:text-gray-100 disabled:brightness-50 `,

        secondary: `border-2 border-border-alexandria-primary bg-transparent 
          flex items-center justify-center
          text-foreground hover:bg-muted 
          focus:bg-muted/80 disabled:opacity-70 disabled:text-gray-700`,
      },
      size: {
        sm: "min-h-[44px] px-3",
        md: "min-h-[44px] px-4",
        lg: "min-h-[44px] px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
