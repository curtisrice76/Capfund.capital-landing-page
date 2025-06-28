import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, DollarSign, TrendingUp, Shield, FileText, Calculator } from "lucide-react"
import { Header } from "@/components/header"

export default function FundStructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Fund Structure</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of CAP's organizational structure, management framework, and fee arrangements
            designed to align interests and optimize investor returns.
          </p>
        </div>

        {/* Fund Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Fund Overview</h2>
            <div className="text-center mb-8">
              <div className="text-2xl text-gray-300 mb-4">
                <span className="text-blue-400 font-bold">CAP - Collective Alpha Partners, LLC</span> is managed by{" "}
                <span className="text-green-400 font-bold">CAP-GC, LLC</span>
              </div>
              <div className="text-xl text-gray-300">
                CAP Portfolio consists of <span className="text-purple-400 font-bold">6 managed funds</span>, with
                collective <span className="text-orange-400 font-bold">$475M AUM</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Fund Entity</h3>
                  <p className="text-gray-300 text-sm">Collective Alpha Partners, LLC</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Management Company</h3>
                  <p className="text-gray-300 text-sm">CAP-GC, LLC</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Total AUM</h3>
                  <p className="text-gray-300 text-sm">$475 Million</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fee Structure</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-blue-900/20 border-blue-800 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-4">1.5%</div>
                <h3 className="text-xl font-bold text-white mb-3">Base Fee</h3>
                <p className="text-gray-300">Annual management fee</p>
                <div className="mt-4 text-sm text-gray-400">
                  <p>• Covers operational expenses</p>
                  <p>• Fund administration costs</p>
                  <p>• Risk management systems</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-800 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-green-600/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-4">15%</div>
                <h3 className="text-xl font-bold text-white mb-3">Standard Carry</h3>
                <p className="text-gray-300">Up to 15% return</p>
                <div className="mt-4 text-sm text-gray-400">
                  <p>• Performance-based incentive</p>
                  <p>• Aligns manager interests</p>
                  <p>• Applied to net profits</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-800 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-purple-600/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-4">20%</div>
                <h3 className="text-xl font-bold text-white mb-3">Higher Carry</h3>
                <p className="text-gray-300">On returns above 15%</p>
                <div className="mt-4 text-sm text-gray-400">
                  <p>• Rewards exceptional performance</p>
                  <p>• Tiered incentive structure</p>
                  <p>• Encourages alpha generation</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fee Structure Details */}
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Fee Structure Details</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Management Fee (1.5%)</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Calculated annually on committed capital</li>
                  <li>• Covers fund operations and administration</li>
                  <li>• Includes risk management and compliance costs</li>
                  <li>• Competitive rate compared to industry standards</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-400 mb-4">Performance Fees</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 15% carry on returns up to 15% annually</li>
                  <li>• 20% carry on returns exceeding 15% annually</li>
                  <li>• Subject to high-water mark provisions</li>
                  <li>• Calculated net of management fees</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Composition */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Portfolio Composition</h2>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">6 Managed Funds Overview</h3>
            <p className="text-gray-300 text-lg text-center mb-8">
              CAP's diversified approach leverages six specialized investment managers, each contributing unique
              expertise and strategies to the overall portfolio performance.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-500 mb-3">Fund 1</Badge>
                  <h4 className="text-lg font-semibold text-white mb-2">Adalpha Asset Management</h4>
                  <p className="text-gray-300 text-sm">Systematic futures trading program</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <Badge className="bg-green-600/20 text-green-400 border-green-500 mb-3">Fund 2</Badge>
                  <h4 className="text-lg font-semibold text-white mb-2">Opus Futures LLC</h4>
                  <p className="text-gray-300 text-sm">Agricultural futures specialization</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-500 mb-3">Fund 3</Badge>
                  <h4 className="text-lg font-semibold text-white mb-2">Insch Kintore Ltd</h4>
                  <p className="text-gray-300 text-sm">Gold vs. FX systematic trading</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <Badge className="bg-purple-600/20 text-purple-400 border-purple-500 mb-3">Fund 4</Badge>
                  <h4 className="text-lg font-semibold text-white mb-2">Ahead Capital Management</h4>
                  <p className="text-gray-300 text-sm">Global macro tactical opportunities</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <Badge className="bg-red-600/20 text-red-400 border-red-500 mb-3">Fund 5</Badge>
                  <h4 className="text-lg font-semibold text-white mb-2">Le Mans Trading LLC</h4>
                  <p className="text-gray-300 text-sm">Options-based strategies</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <Badge className="bg-orange-600/20 text-orange-400 border-orange-500 mb-3">Fund 6</Badge>
                  <h4 className="text-lg font-semibold text-white mb-2">Buckingham Global Advisors</h4>
                  <p className="text-gray-300 text-sm">S&P options systematic program</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Structure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Legal Structure & Governance</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Fund Structure</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Entity Type</h4>
                    <p className="text-gray-300">Limited Liability Company (LLC)</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Jurisdiction</h4>
                    <p className="text-gray-300">Delaware, United States</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Investment Structure</h4>
                    <p className="text-gray-300">Private placement under Regulation D</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Investor Qualification</h4>
                    <p className="text-gray-300">Accredited investors only</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Governance</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">General Partner</h4>
                    <p className="text-gray-300">CAP-GC, LLC</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Investment Manager</h4>
                    <p className="text-gray-300">Hoyle Creek Capital</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Administrator</h4>
                    <p className="text-gray-300">Third-party fund administration</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Auditor</h4>
                    <p className="text-gray-300">Independent certified public accountant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment Terms */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Investment Terms</h2>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Minimum Investment</h4>
                <div className="text-2xl font-bold text-blue-400 mb-2">$250K</div>
                <p className="text-gray-300 text-sm">Initial commitment</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Lock-up Period</h4>
                <div className="text-2xl font-bold text-green-400 mb-2">12 Months</div>
                <p className="text-gray-300 text-sm">Initial lock-up</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Redemption</h4>
                <div className="text-2xl font-bold text-purple-400 mb-2">Quarterly</div>
                <p className="text-gray-300 text-sm">After lock-up</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Notice Period</h4>
                <div className="text-2xl font-bold text-orange-400 mb-2">90 Days</div>
                <p className="text-gray-300 text-sm">Redemption notice</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Important Disclaimers</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              *This information is for educational purposes only and does not constitute an offer to buy or sell
              securities. Investment terms are subject to change and final documentation.
            </p>
            <p>
              All investments involve substantial risk and may not be suitable for all investors. Please consult with
              qualified financial, legal, and tax advisors before making investment decisions.
            </p>
            <p>
              Fund structure details are subject to the terms and conditions outlined in the Private Placement
              Memorandum (PPM) and Limited Partnership Agreement.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
