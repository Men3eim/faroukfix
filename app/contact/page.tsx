import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

export default function ContactPage() {
  const services = [
    "Electric Work",
    "Plumbing",
    "Smart Home Automation",
    "Cleaning",
    "Emergency Service",
    "General Inquiry",
  ]

  const areas = ["W2 - Bayswater", "W2 - Paddington", "W3 - Acton", "Other London Area"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-200/50 bg-white/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl professional-gradient text-white shadow-lg">
                <span className="text-lg font-bold">FF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900">FaroukFix</span>
                <span className="text-xs text-blue-600 font-medium">Professional Maintenance</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link
              href="/services/electric"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Electric
            </Link>
            <Link
              href="/services/plumbing"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Plumbing
            </Link>
            <Link
              href="/services/smart-home"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Smart Home
            </Link>
            <Link
              href="/services/cleaning"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Cleaning
            </Link>
            <Link href="/contact" className="text-sm font-medium text-blue-600">
              Contact
            </Link>
          </nav>

          <Button asChild size="sm" className="professional-gradient hover:professional-glow">
            <Link href="tel:+447123456789">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/professional-team.jpg"
            alt="Contact FaroukFix team"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/70" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal delay={0.2}>
              <Badge variant="outline" className="mb-4 border-blue-300 text-blue-700 bg-blue-50/90 backdrop-blur-sm">
                <MapPin className="mr-1 h-3 w-3" />
                W2 & W3 London Coverage
              </Badge>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">
                Get in Touch for
                <br />
                <span className="text-blue-200">Expert Maintenance</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.6}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-50 sm:text-xl drop-shadow-md">
                Contact FaroukFix for professional electrical, plumbing, smart home, and cleaning services across W2 &
                W3 London areas. Available 24/7 for emergencies.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Call Us</CardTitle>
                <CardDescription className="text-slate-600">Available 24/7 for emergencies</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full professional-gradient">
                  <Link href="tel:+447123456789">07123 456 789</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Email Us</CardTitle>
                <CardDescription className="text-slate-600">Get a detailed quote</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Link href="mailto:info@faroukfix.com">info@faroukfix.com</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Service Areas</CardTitle>
                <CardDescription className="text-slate-600">Local coverage areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>W2 - Bayswater, Paddington</div>
                  <div>W3 - Acton</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Get Free Quote</CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="07123 456 789" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, "-")}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full professional-gradient">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="space-y-8">
              <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900">
                    <Clock className="mr-2 h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-medium text-slate-900">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-medium text-slate-900">Emergency Only</span>
                  </div>
                  <div className="pt-2 border-t border-blue-200/50">
                    <div className="flex justify-between">
                      <span className="text-blue-600 font-medium">Emergency Service</span>
                      <span className="font-medium text-slate-900">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">24/7 Emergency Service</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">Fully Licensed & Insured</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">Local W2 & W3 Coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">Free Quotes & Consultations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">Satisfaction Guaranteed</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">Competitive Pricing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Emergency Service</CardTitle>
                  <CardDescription className="text-slate-600">
                    Need immediate assistance? We're available 24/7 for emergency repairs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" className="w-full professional-gradient">
                    <Link href="tel:+447123456789">
                      <Phone className="mr-2 h-5 w-5" />
                      Emergency: 07123 456 789
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200/50 py-12 bg-white">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg professional-gradient text-white">
                  <span className="text-sm font-bold">FF</span>
                </div>
                <span className="text-lg font-bold text-slate-900">FaroukFix</span>
              </div>
              <p className="text-sm text-slate-600">
                Professional maintenance services across W2 & W3 London areas. Available 24/7 for emergencies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Services</h3>
              <ul className="space-y-2 text-sm text-slate-600">
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
              <h3 className="font-semibold mb-4 text-slate-900">Areas</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>W2 London</li>
                <li>W3 London</li>
                <li>Emergency Coverage</li>
                <li>24/7 Availability</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  07123 456 789
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  info@faroukfix.com
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  W2 & W3 London
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-200/50 mt-8 pt-8 text-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} FaroukFix. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Link
          href="https://wa.me/447123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
          </svg>
        </Link>

        <Link
          href="tel:+447123456789"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full professional-gradient text-white shadow-lg transition-all duration-300 hover:scale-110 hover:professional-glow"
        >
          <Phone className="h-6 w-6" />
        </Link>
      </div>
    </div>
  )
}
