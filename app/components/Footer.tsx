import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { FloatingDock } from "@/components/ui/floating-dock"
import { SectionReveal } from "@/components/ui/section-reveal"
import Image from "next/image"

export function Footer() {
  return (
    <>
        <SectionReveal direction="down" delay={0.2}>
        <footer className="border-t border-blue-200/50 py-16 bg-white">
        <div className="container px-4">
            <div className="grid gap-12 md:grid-cols-4">
            <div>
                <div className="mb-6">
                    <Image
                        src="/images/FaroukFix-logo1.png"
                        alt="FaroukFix Logo"
                        width={220}
                        height={90}
                        className="object-contain drop-shadow-none dark:drop-shadow-[0_0_12px_white]"
                        priority
                    />
                </div>
            </div>

            <div>
                <h3 className="font-bold text-slate-900 mb-6">Services</h3>
                <ul className="space-y-3 text-slate-600">
                <li>
                    <Link href="/services/electric" className="hover:text-blue-600 transition-colors">
                    Electric Work
                    </Link>
                </li>
                <li>
                    <Link href="/services/plumbing" className="hover:text-blue-600 transition-colors">
                    Plumbing
                    </Link>
                </li>
                <li>
                    <Link href="/services/smart-home" className="hover:text-blue-600 transition-colors">
                    Smart Home
                    </Link>
                </li>
                <li>
                    <Link href="/services/cleaning" className="hover:text-blue-600 transition-colors">
                    Cleaning
                    </Link>
                </li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-slate-900 mb-6">Areas</h3>
                <ul className="space-y-3 text-slate-600">
                <li>W2 London</li>
                <li>W3 London</li>
                <li>Emergency Coverage</li>
                <li>24/7 Availability</li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-slate-900 mb-6">Contact</h3>
                <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-blue-600" />
                    +44 203 725 1700
                </li>
                <li className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-blue-600" />
                    info@faroukfix.com
                </li>
                <li className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-blue-600" />
                    W2 & W3 London
                </li>
                <li className="flex items-center space-x-4 mt-4">
                    <a href="https://www.facebook.com/people/FaroukFix/61577631967868" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                        <Facebook className="h-6 w-6 text-blue-600" />
                    </a>
                    <a href="https://www.instagram.com/farouk_fix/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                        <Instagram className="h-6 w-6 text-blue-600" />
                    </a>
                </li>
                </ul>
            </div>
            </div>

            <div className="border-t border-blue-200/50 mt-12 pt-8 text-center text-slate-600">
            <p>
                &copy; {new Date().getFullYear()} FaroukFix - Professional Maintenance Services. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
        </SectionReveal>
        <FloatingDock />
    </>
  )
} 