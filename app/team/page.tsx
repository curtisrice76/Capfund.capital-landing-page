import { Card, CardContent } from "@/components/ui/card"
import { Users, Construction, Clock, Mail } from "lucide-react"
import { Header } from "@/components/header"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experienced professionals behind Collective Alpha Partners' investment strategies and operations.
          </p>
        </div>

        {/* Under Construction Section */}
        <section className="mb-20">
          <div className="flex items-center justify-center min-h-[60vh]">
            <Card className="bg-gray-900/80 border-gray-800 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="p-6 bg-orange-600/20 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                  <Construction className="h-12 w-12 text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Under Construction</h2>
                <p className="text-xl text-gray-300 mb-8">
                  We're currently building out our comprehensive team profiles and biographies. This section will
                  feature detailed information about our investment professionals, their backgrounds, and expertise.
                </p>

                <div className="bg-black/40 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Coming Soon</h3>
                  </div>
                  <ul className="text-gray-300 space-y-2 text-left max-w-md mx-auto">
                    <li>• Leadership team profiles</li>
                    <li>• Investment committee members</li>
                    <li>• Portfolio manager biographies</li>
                    <li>• Advisory board information</li>
                    <li>• Professional credentials and experience</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Us
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-gray-300 hover:bg-gray-800 font-semibold rounded-lg transition-colors"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Learn About CAP
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Placeholder for Future Content */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-blue-600/20 rounded-lg mb-4">
                  <Users className="h-8 w-8 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Leadership Profiles</h3>
                <p className="text-gray-300 text-sm">
                  Detailed backgrounds of our senior management team and their investment philosophy
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-600/20 rounded-lg mb-4">
                  <Construction className="h-8 w-8 text-green-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Professional Experience</h3>
                <p className="text-gray-300 text-sm">
                  Track records, credentials, and expertise across various investment strategies
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-600/20 rounded-lg mb-4">
                  <Clock className="h-8 w-8 text-purple-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advisory Network</h3>
                <p className="text-gray-300 text-sm">Information about our advisory board and strategic partnerships</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Team?</h2>
            <p className="text-gray-300 mb-6">
              For more information about our investment professionals and their backgrounds, please contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:info@capfund.capital"
                className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
              >
                info@capfund.capital
              </a>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <span className="text-gray-300">(918) 409-9026</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
