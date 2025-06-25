"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Footer } from "@/app/components/Footer"
import { useState } from "react"

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

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, service, area, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setFeedback({ type: "success", message: data.message || "Message sent!" });
        setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setService(""); setArea(""); setMessage("");
      } else {
        setFeedback({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (err) {
      setFeedback({ type: "error", message: "Failed to send. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Professional-team.jpg"
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
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-10 py-4 h-auto professional-gradient hover:professional-glow shadow-lg"
                >
                  <Link href="tel:+442037251700">
                    <Phone className="mr-3 h-6 w-6" />
                    Call Us
                  </Link>
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
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-10 py-4 h-auto professional-gradient hover:professional-glow shadow-lg"
                >
                  <Link href="mailto:info@faroukfix.com">
                    Email Us
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+44 203 725 1700" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Select value={service} onValueChange={setService} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area</Label>
                    <Select value={area} onValueChange={setArea} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area} value={area}>{area}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Please describe your requirements..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {feedback && (
                    <div className={`rounded px-4 py-3 text-sm mb-2 ${feedback.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {feedback.message}
                    </div>
                  )}

                  <Button type="submit" className="w-full professional-gradient" disabled={loading}>
                    {loading ? <span>Sending...</span> : (<><Send className="mr-2 h-4 w-4" />Send Message</>)}
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
                    <Link href="tel:+442037251700">
                      <Phone className="mr-2 h-5 w-5" />
                      Emergency: +44 203 725 1700
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
