import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Shield, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Investor Information</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access comprehensive resources, performance data, and investment documentation for Collective Alpha Partners
            fund investors.
          </p>
        </div>

        {/* Quick Access Cards */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/80 border-gray-800 hover:border-blue-500 transition-colors">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance Reports</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Access detailed monthly and annual performance reports with comprehensive analytics.
                </p>
                <Link href="/performance">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">View Performance</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 hover:border-green-500 transition-colors">
              <CardContent className="p-6">
                <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fund Documents</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Download offering memorandums, subscription documents, and regulatory filings.
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600">Access Documents</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Account Statements</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  View your account balance, transactions, and detailed investment statements.
                </p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">View Statements</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment Information */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Investment Information</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Fund Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Fund Type</span>
                    <span className="text-white font-semibold">Multi-Strategy Hedge Fund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Investment Style</span>
                    <span className="text-white font-semibold">Systematic Alpha Generation</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Minimum Investment</span>
                    <span className="text-white font-semibold">$1,000,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Management Fee</span>
                    <span className="text-white font-semibold">2.0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Performance Fee</span>
                    <span className="text-white font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Liquidity</span>
                    <span className="text-white font-semibold">Monthly</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Compound Annual Return</span>
                    <span className="text-green-400 font-bold">25.34%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sharpe Ratio</span>
                    <span className="text-blue-400 font-bold">1.97</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Volatility</span>
                    <span className="text-purple-400 font-bold">11.37%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Max Drawdown</span>
                    <span className="text-orange-400 font-bold">-1.57%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Positive Months</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Correlation to S&P 500</span>
                    <span className="text-blue-400 font-bold">0.15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notices */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Important Notices</h2>
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-800">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Regulatory Compliance</h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    This fund is available only to qualified investors as defined by applicable securities regulations.
                    All investments are subject to substantial risk of loss.
                  </p>
                  <p>
                    Past performance does not guarantee future results. The fund's performance may be volatile, and
                    investors may lose some or all of their investment.
                  </p>
                  <p>
                    Please review all fund documents carefully before making an investment decision. Consult with your
                    financial advisor regarding the suitability of this investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Need Assistance?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Our investor relations team is here to help with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                  Contact Investor Relations
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
