import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionReveal } from "@/components/ui/section-reveal"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import { Phone, Mail, MapPin, Zap, CheckCircle, ArrowRight, AlertTriangle, Home, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FloatingDock } from "@/components/ui/floating-dock"
import { Footer } from "@/app/components/Footer"

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
      image: "/images/Rewiring Services.jpg",
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
                <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="text-lg px-10 py-4 h-auto professional-gradient hover:professional-glow shadow-lg"
                  >
                    <Link href="tel:+442037251700">
                      <Phone className="mr-3 h-6 w-6" />
                      Call Now: +44 203 725 1700
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
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
