import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "rounded-full bg-[#FF4D8C] text-white hover:bg-[#FF4D8C]/90 transition-colors duration-300 cursor-pointer",
          "transform hover:scale-105 active:scale-100 transition-transform",
          "shadow-md hover:shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CTAButton.displayName = "CTAButton";
