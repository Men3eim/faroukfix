import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import { useState } from "react"
import dynamic from "next/dynamic"

const inter = Inter({ subsets: ["latin"] })

const Navbar = dynamic(() => import("@/components/Navbar").then(mod => mod.Navbar), { ssr: false })

export const metadata: Metadata = {
  title: "FaroukFix - Professional Maintenance Services in W2 & W3 London",
  description:
    "Expert electrical, plumbing, smart home automation, and cleaning services across W2 & W3 London areas. Available 24/7 for emergencies. Call +44 203 725 1700",
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
    images: [
      {
        url: "/images/FaroukFix-fav icon opengraph.png",
        width: 1200,
        height: 630,
        alt: "FaroukFix Open Graph Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://faroukfix.com",
  },
  generator: 'v0.dev',
  icons: {
    icon: "/images/FaroukFix-fav icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
