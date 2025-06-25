import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionReveal } from "@/components/ui/section-reveal"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Zap,
  Wrench,
  Home,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      title: "Electric Work",
      description: "Professional electrical services from installations to emergency repairs",
      icon: Zap,
      href: "/services/electric",
      subServices: ["Emergency electrical", "Installations", "Testing", "Rewiring"],
      image: "/images/electrical-work.jpg",
    },
    {
      title: "Plumbing",
      description: "Complete plumbing solutions for residential and commercial properties",
      icon: Wrench,
      href: "/services/plumbing",
      subServices: ["Emergency plumbing", "Boiler services", "Bathroom fitting"],
      image: "/images/plumbing-service.jpg",
    },
    {
      title: "Smart Home Automation",
      description: "Modern smart home solutions for enhanced comfort and security",
      icon: Home,
      href: "/services/smart-home",
      subServices: ["Home automation", "Security systems", "Lighting control"],
      image: "/images/smart-home.jpg",
    },
    {
      title: "Cleaning",
      description: "Professional cleaning services to keep your property pristine",
      icon: Sparkles,
      href: "/services/cleaning",
      subServices: ["Deep cleaning", "Maintenance cleaning", "Carpet cleaning"],
      image: "/images/cleaning-service.jpg",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available round the clock for urgent repairs",
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete protection and professional certification",
    },
    {
      icon: MapPin,
      title: "Local W2 & W3 Coverage",
      description: "Dedicated service across West London areas",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "All work comes with our satisfaction guarantee",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled professionals with years of experience",
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently high ratings from satisfied customers",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-maintenance.jpg"
            alt="Professional maintenance services"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/60" />
        </div>
        <div className="container relative px-4 z-10">
          <div className="mx-auto max-w-5xl text-center">
            <SectionReveal delay={0.2}>
              <Badge variant="outline" className="mb-6 border-blue-300 text-blue-700 bg-blue-50/90 backdrop-blur-sm">
                <MapPin className="mr-2 h-4 w-4" />
                Serving W2 & W3 London Areas
              </Badge>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-8 text-white drop-shadow-lg">
                Professional
                <br />
                <span className="text-blue-200">Maintenance Services</span>
                <br />
                <span className="text-white">in London</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.6}>
              <p className="mx-auto mt-8 max-w-3xl text-xl text-blue-50 sm:text-2xl leading-relaxed drop-shadow-md">
                Expert electrical, plumbing, smart home automation, and cleaning services. Available 24/7 for
                emergencies across W2 & W3 London areas with guaranteed professional results.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.8}>
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-10 py-4 h-auto professional-gradient hover:professional-glow shadow-lg"
                >
                  <Link href="tel:+447123456789">
                    <Phone className="mr-3 h-6 w-6" />
                    Call Now: 07123 456 789
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

            <SectionReveal delay={1.0}>
              <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-300" />
                  <span className="font-medium">24/7 Emergency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="font-medium">Fully Insured</span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900 mb-4">Our Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive maintenance solutions for your property needs across W2 & W3 London
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <StaggerItem key={index}>
                  <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm h-full">
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
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl text-slate-900 mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-slate-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.subServices.map((subService, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="mr-3 h-4 w-4 text-green-600" />
                            {subService}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full professional-gradient">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900 mb-4">
                Why Choose FaroukFix?
              </h2>
              <p className="text-xl text-slate-600">Your trusted local maintenance partner in W2 & W3 London</p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <StaggerItem key={index}>
                  <Card className="text-center p-8 hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm h-full">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <SectionReveal direction="left">
              <div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900 mb-6">
                  Professional Team You Can Trust
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Our experienced technicians are fully qualified, insured, and committed to delivering exceptional
                  service. We take pride in our work and guarantee your satisfaction.
                </p>
                <StaggerContainer className="grid gap-6 sm:grid-cols-2">
                  <StaggerItem>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Certified Professionals</h4>
                        <p className="text-slate-600">All technicians are fully certified and trained</p>
                      </div>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Quality Equipment</h4>
                        <p className="text-slate-600">Professional-grade tools and materials</p>
                      </div>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Guaranteed Work</h4>
                        <p className="text-slate-600">All services come with our quality guarantee</p>
                      </div>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Local Expertise</h4>
                        <p className="text-slate-600">Deep knowledge of W2 & W3 London areas</p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </SectionReveal>
            <SectionReveal direction="right" delay={0.3}>
              <div className="relative">
                <Image
                  src="/images/professional-team.jpg"
                  alt="Professional maintenance team"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-blue-200/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/emergency-service.jpg" alt="Emergency service" fill className="object-cover opacity-20" />
        </div>
        <div className="container px-4 text-center relative z-10">
          <SectionReveal>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Need Maintenance Services Today?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Get in touch for a free quote or emergency service. Available 24/7 across W2 & W3 London areas with
              guaranteed professional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-10 py-4 h-auto">
                <Link href="tel:+447123456789">
                  <Phone className="mr-3 h-6 w-6" />
                  Emergency: 07123 456 789
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-10 py-4 h-auto bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="mailto:info@faroukfix.com">
                  <Mail className="mr-3 h-6 w-6" />
                  info@faroukfix.com
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <SectionReveal>
        <footer className="border-t border-blue-200/50 py-16 bg-white">
          <div className="container px-4">
            <div className="grid gap-12 md:grid-cols-4">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl professional-gradient text-white shadow-lg">
                    <span className="text-lg font-bold">FF</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-slate-900">FaroukFix</span>
                    <span className="text-xs text-blue-600 font-medium">faroukfix.com</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Professional maintenance services across W2 & W3 London areas. Available 24/7 for emergencies with
                  guaranteed results.
                </p>
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
                    07123 456 789
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-blue-600" />
                    info@faroukfix.com
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-blue-600" />
                    W2 & W3 London
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

      {/* Floating Action Buttons */}
      <SectionReveal delay={1.2}>
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
      </SectionReveal>
    </div>
  )
}
