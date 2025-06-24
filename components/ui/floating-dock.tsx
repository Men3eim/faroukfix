"use client"
import { cn } from "@/lib/utils"
import { Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

interface FloatingDockProps {
  className?: string
}

export function FloatingDock({ className }: FloatingDockProps) {
  return (
    <div className={cn("fixed bottom-6 right-6 z-50 flex flex-col gap-3", className)}>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/447123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          WhatsApp
          <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 translate-x-full border-l-4 border-r-0 border-t-4 border-b-4 border-l-gray-900 border-t-transparent border-b-transparent"></div>
        </div>
      </Link>

      {/* Call Button */}
      <Link
        href="tel:+447123456789"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full professional-gradient text-white shadow-lg transition-all duration-300 hover:scale-110 hover:professional-glow animate-pulse-glow"
      >
        <Phone className="h-6 w-6" />
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Call Now
          <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 translate-x-full border-l-4 border-r-0 border-t-4 border-b-4 border-l-gray-900 border-t-transparent border-b-transparent"></div>
        </div>
      </Link>
    </div>
  )
}
