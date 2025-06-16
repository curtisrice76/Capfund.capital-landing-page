"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { trackContactFormSubmit } from "@/lib/analytics"

export default function ContactPage() {
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
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
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
                      className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="investmentSize" className="block text-sm font-medium text-gray-300 mb-2">
                      Investment Size
                    </label>
                    <select className="w-full bg-black/50 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none">
                      <option value="">Select Range</option>
                      <option value="1-5m">$1M - $5M</option>
                      <option value="5-10m">$5M - $10M</option>
                      <option value="10-25m">$10M - $25M</option>
                      <option value="25m+">$25M+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="bg-black/50 border-gray-700 text-white focus:border-blue-500"
                      placeholder="Tell us about your investment objectives and any specific questions you have..."
                    />
                  </div>

                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => trackContactFormSubmit()}
                  >
                    Send Message
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
