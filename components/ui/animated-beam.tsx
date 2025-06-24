"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface AnimatedBeamProps {
  className?: string
  containerRef: React.RefObject<HTMLElement>
  fromRef: React.RefObject<HTMLElement>
  toRef: React.RefObject<HTMLElement>
  curvature?: number
  reverse?: boolean
  duration?: number
  delay?: number
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = React.useId()
  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  const updatePath = React.useCallback(() => {
    if (containerRef.current && fromRef.current && toRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const rectA = fromRef.current.getBoundingClientRect()
      const rectB = toRef.current.getBoundingClientRect()

      const svgWidth = containerRect.width
      const svgHeight = containerRect.height
      setSvgDimensions({ width: svgWidth, height: svgHeight })

      const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
      const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
      const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
      const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

      const controlPointX = startX + (endX - startX) / 2
      const controlPointY = startY - curvature

      const d = `M ${startX},${startY} Q ${controlPointX},${controlPointY} ${endX},${endY}`
      setPathD(d)
    }
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset])

  useEffect(() => {
    updatePath()
    window.addEventListener("resize", updatePath)
    return () => window.removeEventListener("resize", updatePath)
  }, [updatePath])

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} fill="none" />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="5 5"
        className={cn("animate-beam", reverse && "animate-beam-reverse")}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
