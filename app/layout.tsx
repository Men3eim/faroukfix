import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PageTransition } from "@/components/ui/page-transition"

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
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
