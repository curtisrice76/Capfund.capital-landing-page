import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Shield } from "lucide-react"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Collective Alpha Partners</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded on the principle of generating consistent, uncorrelated returns through systematic investment
            strategies and disciplined risk management.
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
            <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">
                Collective Alpha Partners was established to provide institutional and qualified investors access to
                sophisticated investment strategies that generate alpha independent of traditional market movements.
              </p>
              <p className="text-gray-300 mb-6">
                Our systematic approach combines quantitative analysis, fundamental research, and advanced risk
                management techniques to deliver consistent, tax-efficient returns across all market regimes.
              </p>
              <p className="text-gray-300">
                We believe that true alpha generation requires a disciplined, multi-faceted approach that adapts to
                changing market conditions while maintaining strict risk controls.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/80 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Integrity</h3>
                <p className="text-gray-300 text-sm">
                  Transparent operations and ethical investment practices in all our dealings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">
                  Commitment to delivering superior risk-adjusted returns through disciplined execution.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Partnership</h3>
                <p className="text-gray-300 text-sm">
                  Building long-term relationships based on trust and mutual success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">
                  Continuously evolving our strategies to adapt to changing market dynamics.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regulatory Information */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Regulatory Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Registration & Compliance</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• SEC Registered Investment Adviser</li>
                <li>• CFTC Registered Commodity Pool Operator</li>
                <li>• NFA Member Firm</li>
                <li>• FINRA Member Organization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• ISO 27001 Information Security</li>
                <li>• SOC 2 Type II Compliance</li>
                <li>• GIPS Verification</li>
                <li>• AIMA Due Diligence Questionnaire</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
