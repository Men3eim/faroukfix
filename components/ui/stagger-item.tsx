"use client"

import type React from "react"

import { motion } from "framer-motion"

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function StaggerItem({ children, className = "", direction = "up" }: StaggerItemProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
