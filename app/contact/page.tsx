"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { sendContactEmailResend } from "@/app/actions/contact-resend"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await sendContactEmailResend(formData)

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to explore how Collective Alpha Partners can enhance your investment portfolio? Get in touch with our
            team to schedule a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-black/60 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              <form id="contact-form" action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-gray-900 border-gray-700 text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-gray-900 border-gray-700 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Tell us about your investment objectives and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@capfund.capital</p>
                      <p className="text-gray-300">investor-relations@capfund.capital</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-400">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Office</h3>
                      <p className="text-gray-300">
                        123 Financial District
                        <br />
                        New York, NY 10004
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-300">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Inquiry */}
            <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Investment Inquiries</h3>
                <p className="text-gray-300 mb-4">
                  Interested in learning more about our investment strategies and fund performance? Our team is ready to
                  discuss how Collective Alpha Partners can fit into your portfolio.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Minimum investment: $1,000,000</li>
                  <li>• Qualified investors only</li>
                  <li>• Monthly liquidity</li>
                  <li>• Comprehensive due diligence materials available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-3">Important Notice</h3>
          <p className="text-sm text-gray-400">
            This website and its contents are intended for qualified investors only. The information provided does not
            constitute an offer to sell or a solicitation to buy securities. Past performance does not guarantee future
            results. Please read all fund documents carefully before making any investment decisions.
          </p>
        </div>
      </div>
    </div>
  )
}
