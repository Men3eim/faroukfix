import { SectionReveal } from "@/components/ui/section-reveal"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Shield, MapPin, Star, Wrench, Zap, Home, Sparkles } from "lucide-react"
import Image from "next/image"
import { FloatingDock } from "@/components/ui/floating-dock"
import { Footer } from "@/app/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/professional-team.jpg"
            alt="FaroukFix Team"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/70" />
        </div>
        <div className="container px-4 relative z-10 flex flex-col items-center justify-center text-center">
          <SectionReveal delay={0.2}>
            <Badge variant="outline" className="mb-4 border-blue-300 text-blue-700 bg-blue-50/90 backdrop-blur-sm">
              <Users className="mr-2 h-4 w-4" />
              About Us
            </Badge>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">
              Meet FaroukFix
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.6}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-50 sm:text-xl drop-shadow-md">
              FaroukFix is a family-run business dedicated to providing top-quality maintenance services across W2 & W3 London. With over 20 years of experience, our team is committed to delivering reliable, professional, and friendly service—every time.<br /><br />
              We specialize in <span className="font-semibold text-blue-200">electrical</span>, <span className="font-semibold text-blue-200">plumbing</span>, <span className="font-semibold text-blue-200">smart home automation</span>, and <span className="font-semibold text-blue-200">cleaning</span> for both homes and businesses. Our mission is to make your property safer, smarter, and more comfortable.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">Our Story</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Founded with a passion for helping our local community, FaroukFix started as a small team of skilled professionals. Today, we proudly serve homes and businesses throughout West London, offering a full range of maintenance solutions—from electrical and plumbing to smart home automation and cleaning.<br /><br />
                We believe in building lasting relationships with our clients, and our reputation is built on trust, quality, and a genuine desire to help.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50/50 to-slate-50/30">
        <div className="container px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">Our Values</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We believe in honesty, quality, and putting our customers first. Our values guide every job we do:
              </p>
            </div>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Award className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg text-slate-900">Quality Workmanship</CardTitle>
                <CardDescription className="text-slate-600">We guarantee the highest standards on every project.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Shield className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg text-slate-900">Trust & Integrity</CardTitle>
                <CardDescription className="text-slate-600">Honest advice, transparent pricing, and respect for your property.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <MapPin className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg text-slate-900">Local Expertise</CardTitle>
                <CardDescription className="text-slate-600">Proudly serving the W2 & W3 London community.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Star className="mx-auto mb-4 h-8 w-8 text-yellow-500" />
                <CardTitle className="text-lg text-slate-900">Customer Satisfaction</CardTitle>
                <CardDescription className="text-slate-600">We're not happy until you are—5-star service, every time.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">Meet the Team</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our team is made up of experienced, friendly professionals who care about your home or business as much as you do.
              </p>
            </div>
          </SectionReveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Image src="/placeholder-user.jpg" alt="Team Member" width={80} height={80} className="mx-auto rounded-full mb-4 object-cover" />
                <CardTitle className="text-lg text-slate-900">Farouk El-Masry</CardTitle>
                <CardDescription className="text-slate-600">Founder & Lead Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">With over 20 years of experience, Farouk leads the team with a passion for quality and service.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Image src="/placeholder-user.jpg" alt="Team Member" width={80} height={80} className="mx-auto rounded-full mb-4 object-cover" />
                <CardTitle className="text-lg text-slate-900">Sarah Ahmed</CardTitle>
                <CardDescription className="text-slate-600">Customer Service Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Sarah ensures every customer receives prompt, friendly, and helpful support.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Image src="/placeholder-user.jpg" alt="Team Member" width={80} height={80} className="mx-auto rounded-full mb-4 object-cover" />
                <CardTitle className="text-lg text-slate-900">Mohamed Ali</CardTitle>
                <CardDescription className="text-slate-600">Senior Technician</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Mohamed brings technical expertise and a can-do attitude to every job.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 