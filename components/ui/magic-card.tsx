import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import React from "react"

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
}

const MagicCard = React.forwardRef<HTMLDivElement, MagicCardProps>(
  ({ className, children, gradientSize = 200, gradientColor = "#3b82f6", gradientOpacity = 0.1, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-xl border border-royal-200/50 bg-white/80 backdrop-blur-sm p-6 transition-all duration-500",
          "hover:border-royal-300/70 hover:shadow-lg hover:shadow-royal-500/10",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-royal-50/50 before:via-transparent before:to-navy-50/30 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
          className,
        )}
        style={
          {
            "--gradient-size": `${gradientSize}px`,
            "--gradient-color": gradientColor,
            "--gradient-opacity": gradientOpacity,
          } as React.CSSProperties
        }
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </Card>
    )
  },
)
MagicCard.displayName = "MagicCard"

export { MagicCard }
