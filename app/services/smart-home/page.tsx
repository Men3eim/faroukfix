import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Home, CheckCircle, ArrowRight, Smartphone, Shield, Lightbulb, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Footer } from "@/app/components/Footer"

export default function SmartHomePage() {
  const subServices = [
    {
      title: "Home Automation Systems",
      description: "Complete smart home automation and control systems",
      icon: Home,
      features: ["Smart lighting", "Climate control", "Voice control", "Mobile app control"],
      image: "/images/home-automation.jpg",
    },
    {
      title: "Security Systems",
      description: "Advanced security solutions for your property",
      icon: Shield,
      features: ["CCTV systems", "Smart locks", "Alarm systems", "Access control"],
      image: "/images/security-systems.jpg",
    },
    {
      title: "Lighting Control",
      description: "Smart lighting solutions for comfort and efficiency",
      icon: Lightbulb,
      features: ["Automated lighting", "Dimmer controls", "Scene setting", "Energy saving"],
      image: "/images/lighting-control.jpg",
    },
    {
      title: "Smart Monitoring",
      description: "Remote monitoring and control systems",
      icon: Camera,
      features: ["Remote access", "Real-time alerts", "Energy monitoring", "System integration"],
      image: "/images/screen-monitoring.jpg",
    },
  ]

  const benefits = [
    "Certified Smart Home Installers",
    "Custom System Design",
    "Professional Installation",
    "Ongoing Support & Maintenance",
    "Energy Efficiency Solutions",
    "Future-Proof Technology",
  ]

  const process = [
    { step: 1, title: "Consultation", description: "Assess your needs and property requirements" },
    { step: 2, title: "System Design", description: "Custom smart home solution design" },
    { step: 3, title: "Installation", description: "Professional installation and setup" },
    { step: 4, title: "Training & Support", description: "User training and ongoing support" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/smart-home.jpg" alt="Smart home automation" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/70" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal delay={0.2}>
              <Badge
                variant="outline"
                className="mb-4 border-purple-300 text-purple-700 bg-purple-50/90 backdrop-blur-sm"
              >
                <Home className="mr-1 h-3 w-3" />
                Smart Home Automation
              </Badge>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">
                Transform Your Home with
                <br />
                <span className="text-purple-200">Smart Technology</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.6}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-50 sm:text-xl drop-shadow-md">
                Professional smart home automation services in W2 & W3 London. From lighting control to complete home
                automation systems, we make your home smarter and more efficient.
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
                    Call: +44 203 725 1700
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-10 py-4 h-auto border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10"
                >
                  <Link href="mailto:info@faroukfix.com">
                    Free Consultation
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Smart Home Services</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive smart home solutions for modern living
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
                        <Icon className="h-6 w-6 text-purple-600" />
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
      <section className="py-12 md:py-24 bg-gradient-to-br from-purple-50/50 to-slate-50/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Clear, upfront pricing for our most popular smart home automation services. For a detailed quote, please contact us.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <Smartphone className="h-10 w-10 text-purple-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Smart Thermostat Installation</CardTitle>
                <CardDescription className="text-purple-700 font-bold text-2xl">£150</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Install and configure smart thermostats for energy savings and comfort.</p>
              </CardContent>
            </Card>
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <Lightbulb className="h-10 w-10 text-purple-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Smart Lighting Setup (per room)</CardTitle>
                <CardDescription className="text-purple-700 font-bold text-2xl">£95</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Automated lighting control for convenience and efficiency.</p>
              </CardContent>
            </Card>
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <Camera className="h-10 w-10 text-purple-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Home Security Camera Installation</CardTitle>
                <CardDescription className="text-purple-700 font-bold text-2xl">£130</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Professional installation of smart security cameras for peace of mind.</p>
              </CardContent>
            </Card>
            <Card className="group hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center pt-6">
                <Home className="h-10 w-10 text-purple-600" />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-slate-900">Full Home Automation Consultation</CardTitle>
                <CardDescription className="text-green-600 font-bold text-2xl">FREE</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Expert advice and planning for your complete smart home setup.</p>
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
            <p className="mt-4 text-lg text-slate-600">
              Professional smart home installation from consultation to completion
            </p>
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
              Why Choose Our Smart Home Services?
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

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Smart Home Benefits</h2>
              <p className="mt-4 text-lg text-slate-600">Experience the convenience and efficiency of a smart home</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">Energy Efficiency</h3>
                    <p className="text-sm text-slate-600">
                      Reduce energy costs with automated lighting, heating, and smart device management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">Enhanced Security</h3>
                    <p className="text-sm text-slate-600">
                      Monitor and control your home security from anywhere with smart cameras and locks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <Smartphone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">Remote Control</h3>
                    <p className="text-sm text-slate-600">
                      Control your entire home from your smartphone, tablet, or voice commands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <Home className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">Comfort & Convenience</h3>
                    <p className="text-sm text-slate-600">
                      Automate daily routines and create the perfect environment for any occasion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                    <ArrowRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">Increased Property Value</h3>
                    <p className="text-sm text-slate-600">
                      Smart home features can increase your property value and appeal to buyers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">Future-Ready Technology</h3>
                    <p className="text-sm text-slate-600">
                      Stay ahead with the latest smart home technology and regular updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/emergency-service.jpg"
            alt="Smart home consultation"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Make Your Home Smarter?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation for smart home automation in W2 & W3 London. Transform your home today.
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
                Free Consultation
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
