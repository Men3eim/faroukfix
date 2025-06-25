import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Sparkles, CheckCircle, ArrowRight, Zap, Home, Brush, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Footer } from "@/app/components/Footer"

export default function CleaningPage() {
  const subServices = [
    {
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning for move-ins, move-outs, and spring cleaning",
      icon: Zap,
      features: ["Move-in/out cleaning", "Spring cleaning", "Post-construction", "One-time deep clean"],
      image: "/images/cleaning-service.jpg",
    },
    {
      title: "Maintenance Cleaning",
      description: "Regular cleaning services to keep your property pristine",
      icon: Calendar,
      features: ["Weekly cleaning", "Bi-weekly service", "Monthly cleaning", "Custom schedules"],
      image: "/images/maintenance-cleaning.jpg",
    },
    {
      title: "Carpet Cleaning",
      description: "Professional carpet and upholstery cleaning services",
      icon: Home,
      features: ["Steam cleaning", "Stain removal", "Upholstery cleaning", "Rug cleaning"],
      image: "/images/carpet-cleaning.jpg",
    },
    {
      title: "Specialized Cleaning",
      description: "Specialized cleaning for specific needs and areas",
      icon: Brush,
      features: ["Window cleaning", "Kitchen deep clean", "Bathroom sanitizing", "Office cleaning"],
      image: "/images/specialized-cleaning.jpg",
    },
  ]

  const benefits = [
    "Fully Insured & Bonded",
    "Eco-Friendly Products",
    "Flexible Scheduling",
    "Satisfaction Guaranteed",
    "Professional Equipment",
    "Local W2 & W3 Service",
  ]

  const process = [
    { step: 1, title: "Free Assessment", description: "Property assessment and cleaning plan" },
    { step: 2, title: "Custom Quote", description: "Transparent pricing based on your needs" },
    { step: 3, title: "Professional Cleaning", description: "Thorough cleaning by trained professionals" },
    { step: 4, title: "Quality Check", description: "Final inspection and satisfaction guarantee" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt="Professional cleaning services"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-blue-900/70" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal delay={0.2}>
              <Badge variant="outline" className="mb-4 border-green-300 text-green-700 bg-green-50/90 backdrop-blur-sm">
                <Sparkles className="mr-1 h-3 w-3" />
                Professional Cleaning Services
              </Badge>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">
                Professional
                <br />
                <span className="text-green-200">Cleaning Services</span>
                <br />
                in W2 & W3 London
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.6}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-green-50 sm:text-xl drop-shadow-md">
                From deep cleaning to regular maintenance, our professional cleaning services keep your property
                spotless across W2 & W3 London areas.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.8}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-10 py-4 h-auto professional-gradient hover:professional-glow shadow-lg"
                >
                  <Link href="tel:+447123456789">
                    <Phone className="mr-3 h-6 w-6" />
                    Call: 07123 456 789
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Cleaning Services</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions for residential and commercial properties
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
                        <Icon className="h-6 w-6 text-green-600" />
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

      {/* Process Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Our Process</h2>
            <p className="mt-4 text-lg text-slate-600">Professional cleaning service from assessment to completion</p>
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
              Why Choose Our Cleaning Services?
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

      {/* Pricing Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900">Transparent Pricing</h2>
            <p className="text-lg text-slate-600 mb-8">
              Fair pricing based on property size and cleaning requirements. No hidden costs.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Regular Cleaning</CardTitle>
                  <CardDescription className="text-slate-600">Weekly/bi-weekly maintenance cleaning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">From £25</div>
                  <p className="text-sm text-slate-600">Per hour, 2-hour minimum</p>
                </CardContent>
              </Card>

              <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Deep Cleaning</CardTitle>
                  <CardDescription className="text-slate-600">One-time comprehensive deep clean</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">From £35</div>
                  <p className="text-sm text-slate-600">Per hour, 3-hour minimum</p>
                </CardContent>
              </Card>

              <Card className="hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Carpet Cleaning</CardTitle>
                  <CardDescription className="text-slate-600">
                    Professional carpet and upholstery cleaning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">From £80</div>
                  <p className="text-sm text-slate-600">Per room, includes treatment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/emergency-service.jpg"
            alt="Professional cleaning service"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Need Professional Cleaning in W2 or W3?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get professional cleaning services with satisfaction guarantee. Flexible scheduling available.
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
