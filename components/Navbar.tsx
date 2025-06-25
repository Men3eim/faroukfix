"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-blue-200/50 bg-white/95 backdrop-blur-sm transition-shadow ${
        scrolled ? "shadow-lg border-blue-400/80" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl professional-gradient text-white shadow-lg">
            <span className="text-lg font-bold">FF</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900">FaroukFix</span>
            <span className="text-xs text-blue-600 font-medium">Professional Maintenance</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/services/electric" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
            Electric
          </Link>
          <Link href="/services/plumbing" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
            Plumbing
          </Link>
          <Link href="/services/smart-home" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
            Smart Home
          </Link>
          <Link href="/services/cleaning" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
            Cleaning
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg border border-blue-200 text-blue-700 bg-white/80 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="hidden md:flex items-center space-x-3">
          <Button asChild size="sm" className="professional-gradient hover:professional-glow">
            <Link href="tel:+447123456789">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Link>
          </Button>
        </div>
      </div>
      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-blue-200/50 shadow-lg px-4 py-4 flex flex-col space-y-4">
          <Link href="/" className="text-base font-medium text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/services/electric" className="text-base font-medium text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
            Electric
          </Link>
          <Link href="/services/plumbing" className="text-base font-medium text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
            Plumbing
          </Link>
          <Link href="/services/smart-home" className="text-base font-medium text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
            Smart Home
          </Link>
          <Link href="/services/cleaning" className="text-base font-medium text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
            Cleaning
          </Link>
          <Link href="/contact" className="text-base font-medium text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <Button asChild size="sm" className="professional-gradient hover:professional-glow w-full">
            <Link href="tel:+447123456789" onClick={() => setMobileMenuOpen(false)}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Link>
          </Button>
        </nav>
      )}
    </header>
  )
} 