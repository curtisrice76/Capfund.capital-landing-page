import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/header"
import Link from "next/link"

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

        <div className="max-w-3xl mx-auto">
          {/* Email Card - Prominent */}
          <Card className="bg-gray-900/80 border-gray-800 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Mail className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Email Us</h3>
              </div>
              <div className="text-center">
                <Link
                  href="mailto:info@capfund.capital"
                  className="text-xl md:text-2xl text-blue-400 hover:text-blue-300 transition-colors"
                >
                  info@capfund.capital
                </Link>
                <p className="mt-4 text-gray-300">
                  For inquiries about our investment strategies, partnership opportunities, or to schedule a
                  consultation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Other Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
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

            <Card className="bg-gray-900/80 border-gray-800 md:col-span-2">
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
