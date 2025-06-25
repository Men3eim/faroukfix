import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FaroukFix - Professional Maintenance Services in W2 & W3 London",
  description:
    "Expert electrical, plumbing, smart home automation, and cleaning services across W2 & W3 London areas. Available 24/7 for emergencies. Call 07123 456 789",
  keywords:
    "maintenance services London, electrician W2 W3, plumber London, smart home automation, cleaning services, emergency repairs, Bayswater, Paddington, Acton, FaroukFix",
  authors: [{ name: "FaroukFix" }],
  openGraph: {
    title: "FaroukFix - Professional Maintenance Services in London",
    description:
      "Expert maintenance services across W2 & W3 London areas. Electrical, plumbing, smart home, and cleaning services available 24/7.",
    type: "website",
    locale: "en_GB",
    url: "https://faroukfix.com",
    siteName: "FaroukFix",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://faroukfix.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b border-blue-200/50 bg-white/95 backdrop-blur-sm">
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

            <div className="flex items-center space-x-3">
              <Button asChild size="sm" className="professional-gradient hover:professional-glow">
                <Link href="tel:+447123456789">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
