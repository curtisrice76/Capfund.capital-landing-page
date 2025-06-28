import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingDown, RefreshCw, Shield, DollarSign, FileText } from "lucide-react"
import { Header } from "@/components/header"

export default function TaxEfficiencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Tax Efficiency</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            CAP Funds leverage Section 1256 (60/40 Rule) to deliver superior after-tax returns through preferential tax
            treatment of futures-based strategies and systematic tax optimization.
          </p>
        </div>

        {/* Section 1256 Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Section 1256 (60/40 Rule) Overview</h2>
            <p className="text-gray-300 text-lg text-center mb-8 max-w-4xl mx-auto">
              Section 1256 provides significant tax advantages for futures-based investment strategies, creating a lower
              effective tax rate and enhanced after-tax returns for investors.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-green-400 mb-2">60/40 Split</h3>
                  <p className="text-gray-300 text-sm">60% long-term, 40% short-term capital gains treatment</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">Mark-to-Market</h3>
                  <p className="text-gray-300 text-sm">Annual realization regardless of holding period</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-400 mb-2">No Wash Sales</h3>
                  <p className="text-gray-300 text-sm">Exempt from wash sale rule limitations</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <TrendingDown className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-orange-400 mb-2">Loss Carryback</h3>
                  <p className="text-gray-300 text-sm">3-year carryback for net losses</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tax Rate Comparison */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Effective Tax Rate Advantage</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Section 1256 Blended Rate</h3>
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">60% Long-Term Capital Gains (15%)</span>
                    <span className="text-green-400 font-semibold">9.0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">40% Short-Term Capital Gains (24%)</span>
                    <span className="text-blue-400 font-semibold">9.6%</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">Blended Effective Rate</span>
                      <span className="text-green-400 font-bold text-xl">18.6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Traditional Trading (24% Bracket)</h3>
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Short-Term Trading Gains</span>
                    <span className="text-red-400 font-semibold">24.0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Wash Sale Limitations</span>
                    <span className="text-red-400 font-semibold">Loss of Deductions</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">Effective Rate</span>
                      <span className="text-red-400 font-bold text-xl">24.0%+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Badge className="bg-green-600/20 text-green-400 border-green-500 text-lg px-6 py-2">
              Tax Savings: ~5.4 percentage points lower effective rate
            </Badge>
          </div>
        </section>

        {/* Why CAP Funds Are Tax-Efficient */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why CAP Funds Are Tax-Efficient</h2>
          <div className="space-y-8">
            {/* Futures-Based Strategy */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-blue-600/20 rounded-lg">
                    <DollarSign className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Futures-Based Strategy</h3>
                    <p className="text-gray-300 mb-4">
                      CAP Funds allocate a significant portion of assets to trading regulated futures contracts, which
                      qualify under Section 1256, providing investors with:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-gray-300 space-y-2">
                        <li>• Preferential 60/40 tax treatment</li>
                        <li>• Annual mark-to-market accounting</li>
                      </ul>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Loss carryback provisions</li>
                        <li>• Cleaner tax reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wash Sale Avoidance */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-green-600/20 rounded-lg">
                    <RefreshCw className="h-8 w-8 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Avoidance of Wash Sales</h3>
                    <p className="text-gray-300 mb-4">
                      CAP's futures-centric approach avoids disallowed losses due to wash sale rules, maximizing
                      realized tax losses for investors and enabling more aggressive tax loss harvesting strategies.
                    </p>
                    <div className="bg-green-900/20 rounded-lg p-4 border border-green-800">
                      <p className="text-green-300 font-semibold">
                        Result: Full deductibility of losses without 30-day waiting periods
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blended Tax Rate Advantage */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-purple-600/20 rounded-lg">
                    <Calculator className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Blended Tax Rate Advantage</h3>
                    <p className="text-gray-300 mb-4">
                      Investors in CAP Funds generally pay lower blended tax rates than traditional equity investors,
                      improving after-tax returns—particularly valuable for high-income or active traders.
                    </p>
                    <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800">
                      <p className="text-purple-300 font-semibold">
                        Benefit: Systematic tax alpha through preferential rate structure
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategic Tax Management */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-orange-600/20 rounded-lg">
                    <Shield className="h-8 w-8 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Strategic Tax Management</h3>
                    <p className="text-gray-300 mb-4">
                      By intentionally structuring exposure through instruments governed by Section 1256 and using
                      volatility-timed allocations, CAP Funds optimize timing and character of gains.
                    </p>
                    <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-800">
                      <p className="text-orange-300 font-semibold">
                        Outcome: Systematic tax alpha generation through strategic structuring
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tax Efficiency Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Tax Efficiency Summary</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">~5.4%</div>
                <div className="text-gray-300">Lower Effective Tax Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Loss Deductibility</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">3 Years</div>
                <div className="text-gray-300">Loss Carryback Period</div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Important Tax Disclaimers</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              *Tax treatment may vary based on individual circumstances. This information is for educational purposes
              only and should not be considered tax advice.
            </p>
            <p>
              Investors should consult with their tax advisors regarding the specific tax implications of investing in
              CAP Funds based on their individual situations.
            </p>
            <p>
              Section 1256 treatment applies to qualified futures contracts and may be subject to changes in tax law.
              Past tax benefits do not guarantee future tax treatment.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
