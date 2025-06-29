import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Shield, FileText, Users, DollarSign, Calendar } from "lucide-react"

export default function FundStructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Fund Structure</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of Collective Alpha Partners' legal structure, operational framework, and investor
            terms.
          </p>
        </div>

        {/* Legal Structure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Legal Structure</h2>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Fund Entity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Entity Type</span>
                    <span className="text-white font-semibold">Delaware Limited Partnership</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">General Partner</span>
                    <span className="text-white font-semibold">CAP Management LLC</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Investment Adviser</span>
                    <span className="text-white font-semibold">Collective Alpha Advisors</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Administrator</span>
                    <span className="text-white font-semibold">Prime Fund Services</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-6">Service Providers</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Prime Broker</span>
                    <span className="text-white font-semibold">Goldman Sachs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Custodian</span>
                    <span className="text-white font-semibold">State Street Bank</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Auditor</span>
                    <span className="text-white font-semibold">Ernst & Young</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Legal Counsel</span>
                    <span className="text-white font-semibold">Sidley Austin LLP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Terms */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Investment Terms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Minimum Investment</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">$1,000,000</div>
                <p className="text-gray-300 text-sm">
                  Initial minimum for qualified investors with subsequent investments of $100,000
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Liquidity</h3>
                <div className="text-2xl font-bold text-blue-500 mb-2">Monthly</div>
                <p className="text-gray-300 text-sm">
                  Redemptions available monthly with 30-day advance notice requirement
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lock-up Period</h3>
                <div className="text-2xl font-bold text-purple-400 mb-2">12 Months</div>
                <p className="text-gray-300 text-sm">
                  Initial lock-up period for new investments with limited exceptions
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fee Structure Detail */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Detailed Fee Structure</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Management Fee</h3>
                <div className="text-4xl font-bold text-blue-500 mb-4">2.0%</div>
                <p className="text-gray-300 mb-4">Annual management fee structure:</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Calculated monthly on net asset value</li>
                  <li>• Charged in advance on the first business day</li>
                  <li>• Covers all operational and administrative expenses</li>
                  <li>• No additional fees for research or technology</li>
                  <li>• Includes risk management and compliance costs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Performance Fee</h3>
                <div className="text-4xl font-bold text-green-500 mb-4">20%</div>
                <p className="text-gray-300 mb-4">Performance fee details:</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 20% of net profits above high water mark</li>
                  <li>• Calculated and charged annually</li>
                  <li>• High water mark protection for all investors</li>
                  <li>• No performance fee on unrealized gains</li>
                  <li>• Crystallized only upon redemption or year-end</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Operational Framework */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Operational Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fund Administration</h3>
                <p className="text-gray-300 text-sm">
                  Daily NAV calculation, investor reporting, and regulatory compliance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Risk Management</h3>
                <p className="text-gray-300 text-sm">
                  Real-time monitoring, VaR calculations, and stress testing protocols
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Reporting</h3>
                <p className="text-gray-300 text-sm">
                  Monthly investor statements, quarterly letters, and annual audited financials
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Investor Relations</h3>
                <p className="text-gray-300 text-sm">
                  Dedicated support team for subscriptions, redemptions, and inquiries
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Regulatory Compliance</h2>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Registration & Oversight</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>SEC-registered investment adviser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>CFTC-registered commodity pool operator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>NFA member and commodity trading advisor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Annual regulatory examinations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">Investor Protections</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Independent board oversight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Third-party custody of assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Annual independent audit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Comprehensive compliance program</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Considerations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Tax Considerations</h2>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Tax Structure</h3>
                <p className="text-gray-300 mb-4">
                  The fund is structured as a pass-through entity for tax purposes, with investors receiving K-1 forms
                  annually.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Partnership taxation (pass-through)</li>
                  <li>• Annual K-1 distribution to investors</li>
                  <li>• No entity-level taxation</li>
                  <li>• Tax-efficient trading strategies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-4">Tax Reporting</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive tax reporting and support provided to all investors through our professional tax
                  preparation team.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• K-1 forms delivered by March 15th</li>
                  <li>• Tax support and consultation available</li>
                  <li>• Coordination with investor tax advisors</li>
                  <li>• Detailed transaction reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Important Legal Disclaimers</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              This information is provided for informational purposes only and does not constitute an offer to sell or
              solicitation to buy securities.
            </p>
            <p>
              All fund terms are subject to the definitive offering documents. Investors should carefully review all
              fund documents before making any investment decisions.
            </p>
            <p>
              Tax considerations may vary based on individual circumstances. Investors should consult with their tax
              advisors regarding the tax implications of an investment.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
