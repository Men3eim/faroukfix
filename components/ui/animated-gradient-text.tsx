import type React from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "animate-gradient bg-gradient-to-r from-navy-800 via-royal-600 to-navy-900 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent font-bold",
        className,
      )}
      style={
        {
          "--bg-size": "400%",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
