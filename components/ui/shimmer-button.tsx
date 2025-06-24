import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import React from "react"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
          variant === "default" && "professional-gradient hover:professional-glow",
          variant === "outline" && "border-royal-600 text-royal-700 hover:bg-royal-50 hover:border-royal-700",
          className,
        )}
        variant={variant}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    )
  },
)
ShimmerButton.displayName = "ShimmerButton"

export { ShimmerButton }
