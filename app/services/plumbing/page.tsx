import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Droplets,
  Thermometer,
  Bath,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

import { Footer } from "@/app/components/Footer"

export default function PlumbingPage() {
  const subServices = [
    {
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for urgent repairs",
      icon: AlertTriangle,
      features: ["Burst pipe repair", "Leak detection", "Drain unblocking", "Emergency callouts"],
      image: "/images/plumbing-service.jpg",
    },
    {
      title: "Boiler Services",
      description: "Complete boiler installation, repair and maintenance",
      icon: Thermometer,
      features: ["Boiler installation", "Annual servicing", "Repairs", "Gas safety checks"],
      image: "/images/boiler-service.jpg",
    },
    {
      title: "Bathroom Fitting",
      description: "Complete bathroom installations and renovations",
      icon: Bath,
      features: ["Full bathroom suites", "Shower installations", "Toilet fitting", "Bathroom design"],
      image: "/images/bathroom-fitting.jpg",
    },
    {
      title: "General Plumbing",
      description: "All general plumbing maintenance and installations",
      icon: Droplets,
      features: ["Tap repairs", "Pipe work", "Water systems", "Maintenance"],
      image: "/images/general-plumbing.jpg",
    },
  ]

  const benefits = [
    "Gas Safe Registered",
    "24/7 Emergency Service",
    "All Work Guaranteed",
    "Fixed Price Quotes",
    "Fully Insured",
    "Local W2 & W3 Coverage",
  ]

  const process = [
    { step: 1, title: "Emergency Response", description: "Rapid response for urgent plumbing issues" },
    { step: 2, title: "Diagnosis & Quote", description: "Professional assessment and transparent pricing" },
    { step: 3, title: "Expert Repair", description: "Quality repairs using premium materials" },
    { step: 4, title: "Testing & Guarantee", description: "Full testing and work guarantee" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/plumbing-service.jpg"
            alt="Professional plumbing services"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-cyan-900/70" />
        </div>

        <div className="container px-4 relative z-10 text-center">
          <SectionReveal delay={0.2}>
            <Badge variant="outline" className="mb-4 border-blue-300 text-blue-700 bg-blue-50/90 backdrop-blur-sm">
              <Wrench className="mr-1 h-3 w-3" />
              Professional Plumbing Services
            </Badge>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">
              Expert
              <br />
              <span className="text-blue-200">Plumbing Services</span>
              <br />
              in W2 & W3 London
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.6}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-50 sm:text-xl drop-shadow-md">
              From emergency repairs to complete bathroom installations, our Gas Safe registered plumbers provide
              reliable plumbing services across W2 & W3 London areas.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.8}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild

                className="text-lg px-10 py-4 h-auto professional-gradient hover:professional-glow shadow-lg"
              >
                <Link href="tel:+442037251700">

                  <Phone className="mr-3 h-6 w-6" />
                  Emergency: +44 203 725 1700
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild

                className="text-lg px-10 py-4 h-auto border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10"
              >
                <Link href="/contact">
                  Get Free Quote

                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Plumbing Services</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Complete plumbing solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {subServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Clear, upfront pricing for our most popular plumbing services. For a detailed quote, please contact us.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <AlertTriangle className="h-10 w-10 text-blue-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Emergency Call-Out</CardTitle>
                <CardDescription className="text-blue-700 font-bold text-2xl">£95</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">24/7 rapid response for urgent plumbing issues.</p>
              </CardContent>
            </Card>
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <Droplets className="h-10 w-10 text-blue-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Leak Repair (Minor)</CardTitle>
                <CardDescription className="text-blue-700 font-bold text-2xl">£85</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Fixing minor leaks in pipes, taps, or joints.</p>
              </CardContent>
            </Card>
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <Droplets className="h-10 w-10 text-blue-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Tap Replacement</CardTitle>
                <CardDescription className="text-blue-700 font-bold text-2xl">£75</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Supply and fit new taps for kitchen or bathroom.</p>
              </CardContent>
            </Card>
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <Bath className="h-10 w-10 text-blue-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Toilet Repair</CardTitle>
                <CardDescription className="text-blue-700 font-bold text-2xl">£95</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Repairing flush, leaks, or blockages in toilets.</p>
              </CardContent>
            </Card>
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <Thermometer className="h-10 w-10 text-blue-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Boiler Servicing</CardTitle>
                <CardDescription className="text-blue-700 font-bold text-2xl">£120</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Annual service to keep your boiler safe and efficient.</p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-2xl mx-auto mt-8 text-center text-slate-600 text-base">
            <ul className="space-y-2">
              <li>Prices vary based on complexity and materials.</li>
              <li>All labour included; parts quoted separately.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Our Process</h2>
            <p className="mt-4 text-lg text-slate-600">Professional plumbing work with guaranteed results</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full professional-gradient text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
              Why Choose Our Plumbing Services?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="flex items-center space-x-3 p-4 hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-slate-900">{benefit}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 md:py-24 professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/emergency-service.jpg"
            alt="Emergency plumbing service"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Need Plumbing Services in W2 or W3?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert plumbing services from Gas Safe registered professionals. Emergency service available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link href="tel:+442037251700">
                <Phone className="mr-2 h-5 w-5" />
                Call: +44 203 725 1700
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="mailto:info@faroukfix.com">
                <Mail className="mr-2 h-5 w-5" />
                Get Quote
              </Link>
            </Button>
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
              <p className="text-sm text-slate-600">Professional plumbing services across W2 & W3 London areas.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Plumbing Services</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Emergency Plumbing</li>
                <li>Boiler Services</li>
                <li>Bathroom Fitting</li>
                <li>General Plumbing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Other Services</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/services/electric" className="hover:text-blue-600 transition-colors">
                    Electric Work
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
              <h3 className="font-semibold mb-4 text-slate-900">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +44 203 725 1700
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
          href="https://wa.me/442037251700"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
          </svg>
        </Link>

        <Link
          href="tel:+442037251700"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full professional-gradient text-white shadow-lg transition-all duration-300 hover:scale-110 hover:professional-glow"
        >
          <Phone className="h-6 w-6" />
        </Link>
      </div>
    </div>
  )
}
