"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { trackContactFormSubmit } from "@/lib/analytics"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message?: string
    error?: string
  } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitContactForm(formData)
      setSubmitResult(result)

      if (result.success) {
        trackContactFormSubmit()
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        error: "An unexpected error occurred. Please try again.",
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
            Connect with our investment professionals to learn more about our strategies and discuss your investment
            objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

                {/* Success/Error Messages */}
                {submitResult && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                      submitResult.success
                        ? "bg-green-900/20 border border-green-800"
                        : "bg-red-900/20 border border-red-800"
                    }`}
                  >
                    {submitResult.success ? (
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    )}
                    <p className={`text-sm ${submitResult.success ? "text-green-300" : "text-red-300"}`}>
                      {submitResult.success ? submitResult.message : submitResult.error}
                    </p>
                  </div>
                )}

                <form id="contact-form" action={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                        placeholder="Doe"
                      />
                    </div>
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
                      className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="investmentSize" className="block text-sm font-medium text-gray-300 mb-2">
                      Investment Size
                    </label>
                    <select
                      id="investmentSize"
                      name="investmentSize"
                      className="w-full bg-black/50 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Select Range</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $10M">$5M - $10M</option>
                      <option value="$10M - $25M">$10M - $25M</option>
                      <option value="$25M+">$25M+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                      placeholder="Tell us about your investment objectives and any specific questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>General Inquiries: info@capfund.capital</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>Main Office: (918) 409-9026</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Office</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="font-semibold text-white">Tulsa Office</p>
                    <p className="text-sm">406 S Boulder Ave</p>
                    <p className="text-sm">Tulsa, OK 74103</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM CST</p>
                  <p>Saturday: 9:00 AM - 1:00 PM CST</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm text-gray-400 mt-2">*Emergency contact available 24/7 for existing investors</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
