import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionReveal } from "@/components/ui/section-reveal"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import { Phone, Mail, MapPin, Zap, CheckCircle, ArrowRight, AlertTriangle, Home, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ElectricPage() {
  const subServices = [
    {
      title: "Emergency Electrical",
      description: "24/7 emergency electrical repairs and fault finding",
      icon: AlertTriangle,
      features: ["Power outages", "Electrical faults", "Emergency repairs", "Safety inspections"],
      image: "/images/electrical-emergency.jpg",
    },
    {
      title: "Electrical Installations",
      description: "Professional electrical installations for homes and businesses",
      icon: Home,
      features: ["New circuits", "Socket installations", "Lighting systems", "Consumer units"],
      image: "/images/electrical-installation.jpg",
    },
    {
      title: "Electrical Testing",
      description: "Comprehensive electrical testing and certification",
      icon: CheckCircle,
      features: ["PAT testing", "EICR certificates", "Safety inspections", "Compliance checks"],
      image: "/images/electrical-testing.jpg",
    },
    {
      title: "Rewiring Services",
      description: "Complete rewiring solutions for older properties",
      icon: Building,
      features: ["Full house rewiring", "Partial rewiring", "Cable upgrades", "Modern standards"],
      image: "/images/electrical-rewiring.jpg",
    },
  ]

  const benefits = [
    "NICEIC Approved Contractors",
    "All Work Guaranteed",
    "Competitive Fixed Prices",
    "Same Day Service Available",
    "Free Safety Inspections",
    "Part P Certified",
  ]

  const process = [
    { step: 1, title: "Initial Assessment", description: "Free consultation and electrical survey" },
    { step: 2, title: "Quote & Planning", description: "Detailed quote with transparent pricing" },
    { step: 3, title: "Professional Installation", description: "Expert installation by certified electricians" },
    { step: 4, title: "Testing & Certification", description: "Full testing and safety certification" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50/30">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/electrical-work.jpg"
            alt="Professional electrical work"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/50 to-orange-900/70" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal delay={0.2}>
              <Badge
                variant="outline"
                className="mb-4 border-yellow-300 text-yellow-700 bg-yellow-50/90 backdrop-blur-sm"
              >
                <Zap className="mr-1 h-3 w-3" />
                Professional Electrical Services
              </Badge>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">
                Expert
                <br />
                <span className="text-yellow-200">Electrical Work</span>
                <br />
                in W2 & W3 London
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.6}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-yellow-50 sm:text-xl drop-shadow-md">
                From emergency repairs to complete installations, our certified electricians provide safe, reliable
                electrical services across W2 & W3 London areas.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.8}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-8 professional-gradient hover:professional-glow shadow-lg"
                >
                  <Link href="tel:+447123456789">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Emergency: 07123 456 789
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10"
                >
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Electrical Services</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive electrical solutions for residential and commercial properties
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {subServices.map((service, index) => {
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
                          <Icon className="h-6 w-6 text-yellow-600" />
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
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Our Process</h2>
              <p className="mt-4 text-lg text-slate-600">
                Professional electrical work following industry best practices
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <StaggerItem key={index}>
                <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full professional-gradient text-white text-xl font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                    <CardDescription className="text-slate-600">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                Why Choose Our Electrical Services?
              </h2>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <Card className="flex items-center space-x-3 p-4 hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium text-slate-900">{benefit}</span>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900">Transparent Pricing</h2>
              <p className="text-lg text-slate-600 mb-8">
                No hidden costs. All quotes include materials, labor, and certification where applicable.
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <StaggerItem>
              <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Emergency Call-Out</CardTitle>
                  <CardDescription className="text-slate-600">24/7 emergency electrical service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">£85</div>
                  <p className="text-sm text-slate-600">First hour, then £65/hour</p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Standard Call-Out</CardTitle>
                  <CardDescription className="text-slate-600">
                    Regular electrical work and installations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">£65</div>
                  <p className="text-sm text-slate-600">Per hour + materials</p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/emergency-service.jpg"
            alt="Emergency electrical service"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container px-4 text-center relative z-10">
          <SectionReveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Need Electrical Work in W2 or W3?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert electrical services from certified professionals. Emergency service available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link href="tel:+447123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 07123 456 789
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
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <SectionReveal>
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
                <p className="text-sm text-slate-600">Professional electrical services across W2 & W3 London areas.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-slate-900">Electrical Services</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Emergency Electrical</li>
                  <li>Installations</li>
                  <li>Testing & Certification</li>
                  <li>Rewiring</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-slate-900">Other Services</h3>
                <ul className="space-y-2 text-sm text-slate-600">
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
