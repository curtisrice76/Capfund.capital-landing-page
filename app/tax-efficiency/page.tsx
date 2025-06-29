"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingDown, RefreshCw, Shield, DollarSign, FileText, Receipt, Coins } from "lucide-react"
import { Header } from "@/components/header"

export default function EfficiencyPage() {
  const [activeTab, setActiveTab] = useState("tax")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Efficiency</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            CAP Funds optimize both tax efficiency and capital efficiency to maximize investor returns through strategic
            structuring and advanced margin management.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 rounded-lg p-1 border border-gray-800">
            <Button
              variant={activeTab === "tax" ? "default" : "ghost"}
              onClick={() => setActiveTab("tax")}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === "tax"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Receipt className="h-4 w-4 mr-2" />
              Tax
            </Button>
            <Button
              variant={activeTab === "capital" ? "default" : "ghost"}
              onClick={() => setActiveTab("capital")}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === "capital"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Coins className="h-4 w-4 mr-2" />
              Capital
            </Button>
          </div>
        </div>

        {/* Tax Tab Content */}
        {activeTab === "tax" && (
          <div className="space-y-20">
            {/* Section 1256 Overview */}
            <section>
              <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Section 1256 (60/40 Rule) Overview</h2>
                <p className="text-gray-300 text-lg text-center mb-8 max-w-4xl mx-auto">
                  Section 1256 provides significant tax advantages for futures-based investment strategies, creating a
                  lower effective tax rate and enhanced after-tax returns for investors.
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
            <section>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Federal Tax Rate Advantage</h2>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Section 1256 Blended Rate – Highest Federal Bracket
                  </h3>
                  <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                    <h4 className="text-lg font-semibold text-green-400 mb-4">
                      Federal Tax Treatment Under Section 1256:
                    </h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-gray-400 border-b border-gray-700 pb-2">
                        <span>Component</span>
                        <span>Rate (%)</span>
                        <span>Effective Impact (%)</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-gray-300">
                        <span>60% Long-Term Capital Gains</span>
                        <span className="text-green-400 font-semibold">20%</span>
                        <span className="text-green-400 font-semibold">12.0%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-gray-300">
                        <span>40% Short-Term Capital Gains</span>
                        <span className="text-blue-400 font-semibold">37%</span>
                        <span className="text-blue-400 font-semibold">14.8%</span>
                      </div>
                      <div className="border-t border-gray-700 pt-4">
                        <div className="grid grid-cols-3 gap-4">
                          <span className="text-white font-semibold text-lg">Blended Federal Rate</span>
                          <span></span>
                          <span className="text-green-400 font-bold text-xl">26.8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Traditional Short-Term Trading Tax (Top Bracket)
                  </h3>
                  <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-gray-400 border-b border-gray-700 pb-2">
                        <span>Component</span>
                        <span>Rate (%)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <span>Short-Term Capital Gains</span>
                        <span className="text-red-400 font-semibold">37%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <span>Wash Sale Rules</span>
                        <span className="text-red-400 font-semibold">Applies</span>
                      </div>
                      <div className="border-t border-gray-700 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <span className="text-white font-semibold text-lg">Effective Rate</span>
                          <span className="text-red-400 font-bold text-xl">37.0%+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Badge className="bg-green-600/20 text-green-400 border-green-500 text-lg px-6 py-2">
                  📉 Federal Tax Savings with Section 1256: ~10.2 percentage points
                </Badge>
              </div>
            </section>

            {/* State Tax Impact */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Combined Federal + State Tax Impact</h2>
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    🧾 Blended Section 1256 Rate vs. Traditional Short-Term Trading
                  </h3>
                  <p className="text-gray-300 text-lg">
                    <span className="text-blue-400 font-semibold">Federal Tax Bracket: 37%</span> |
                    <span className="text-purple-400 font-semibold"> State: Varies</span> |
                    <span className="text-green-400 font-semibold"> Wash Sale Rules: Do Not Apply to 1256</span>
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 text-center">
                    📊 Federal Blended Rate (Section 1256):
                  </h4>
                  <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-800 max-w-2xl mx-auto">
                    <div className="space-y-3 text-center">
                      <div className="text-gray-300">
                        60% @ 20% LT Cap Gains = <span className="text-green-400 font-semibold">12.0%</span>
                      </div>
                      <div className="text-gray-300">
                        40% @ 37% ST Cap Gains = <span className="text-blue-400 font-semibold">14.8%</span>
                      </div>
                      <div className="border-t border-blue-700 pt-3 mt-3">
                        <div className="text-white font-bold text-lg">
                          ✅ Blended Federal Rate: <span className="text-green-400">26.8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-6 text-center">
                    🌍 Combined Federal + State Effective Rates (Approximate)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left text-white font-semibold py-4 px-4">State</th>
                          <th className="text-center text-white font-semibold py-4 px-4">Top State Tax Rate</th>
                          <th className="text-center text-green-400 font-semibold py-4 px-4">1256 Blended Rate</th>
                          <th className="text-center text-red-400 font-semibold py-4 px-4">Short-Term Rate</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4 font-semibold">California</td>
                          <td className="text-center py-3 px-4">13.3%</td>
                          <td className="text-center py-3 px-4 text-green-400 font-semibold">~40.1%</td>
                          <td className="text-center py-3 px-4 text-red-400 font-semibold">~50.3%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4 font-semibold">New York (NYC)</td>
                          <td className="text-center py-3 px-4">~10.9% + 3.88% NYC</td>
                          <td className="text-center py-3 px-4 text-green-400 font-semibold">~41.6%</td>
                          <td className="text-center py-3 px-4 text-red-400 font-semibold">~51.9%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4 font-semibold">New Jersey</td>
                          <td className="text-center py-3 px-4">10.75%</td>
                          <td className="text-center py-3 px-4 text-green-400 font-semibold">~37.6%</td>
                          <td className="text-center py-3 px-4 text-red-400 font-semibold">~47.75%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4 font-semibold">Hawaii</td>
                          <td className="text-center py-3 px-4">11.0%</td>
                          <td className="text-center py-3 px-4 text-green-400 font-semibold">~37.8%</td>
                          <td className="text-center py-3 px-4 text-red-400 font-semibold">~48.0%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4 font-semibold">Minnesota</td>
                          <td className="text-center py-3 px-4">9.85%</td>
                          <td className="text-center py-3 px-4 text-green-400 font-semibold">~36.7%</td>
                          <td className="text-center py-3 px-4 text-red-400 font-semibold">~46.85%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4 font-semibold">Oregon</td>
                          <td className="text-center py-3 px-4">9.9%</td>
                          <td className="text-center py-3 px-4 text-green-400 font-semibold">~36.7%</td>
                          <td className="text-center py-3 px-4 text-red-400 font-semibold">~46.9%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 px-4 font-semibold">Illinois</td>
                          <td className="text-center py-3 px-4">4.95% (flat)</td>
                          <td className="text-center py-3 px-4 text-green-400 font-semibold">~31.75%</td>
                          <td className="text-center py-3 px-4 text-red-400 font-semibold">~41.95%</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold">Oklahoma</td>
                          <td className="text-center py-3 px-4">4.75%</td>
                          <td className="text-center py-3 px-4 text-green-400 font-semibold">~31.55%</td>
                          <td className="text-center py-3 px-4 text-red-400 font-semibold">~41.75%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 border border-green-800/50">
                  <h4 className="text-xl font-bold text-white mb-4 text-center">💡 Tax Savings Opportunity</h4>
                  <p className="text-gray-300 text-lg text-center">
                    Across most high-tax states, Section 1256 contracts yield{" "}
                    <span className="text-green-400 font-bold">~9–11 percentage points</span> lower effective tax rates
                    compared to traditional short-term strategies — and avoid wash sale limitations.
                  </p>
                </div>
              </div>
            </section>

            {/* Why CAP Funds Are Tax-Efficient */}
            <section>
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
                          CAP Funds allocate a significant portion of assets to trading regulated futures contracts,
                          which qualify under Section 1256, providing investors with:
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
                          Investors in CAP Funds generally pay lower blended tax rates than traditional equity
                          investors, improving after-tax returns—particularly valuable for high-income or active
                          traders.
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
            <section>
              <div className="bg-gradient-to-r from-green-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Tax Efficiency Summary</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">~10.2%</div>
                    <div className="text-gray-300">Lower Federal Tax Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">9-11%</div>
                    <div className="text-gray-300">Combined Tax Savings (High-Tax States)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                    <div className="text-gray-300">Loss Deductibility</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Important Tax Disclaimers</h3>
              <div className="text-sm text-gray-400 space-y-2">
                <p>
                  *Tax treatment may vary based on individual circumstances. This information is for educational
                  purposes only and should not be considered tax advice.
                </p>
                <p>
                  Investors should consult with their tax advisors regarding the specific tax implications of investing
                  in CAP Funds based on their individual situations.
                </p>
                <p>
                  Section 1256 treatment applies to qualified futures contracts and may be subject to changes in tax
                  law. Past tax benefits do not guarantee future tax treatment.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* Capital Tab Content */}
        {activeTab === "capital" && (
          <div className="space-y-20">
            {/* Cross-Collateralization Overview */}
            <section>
              <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Cross-Collateralization of Margin</h2>
                <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center">
                  Optimizing Capital Efficiency Across Multiple Managed Futures Accounts
                </h3>

                <div className="space-y-6 text-gray-300 text-lg max-w-4xl mx-auto">
                  <p>
                    Cross-Collateralization allows margin to be shared across multiple managed futures accounts under
                    the same entity or master agreement.
                  </p>
                  <p>Enables aggregate margining, reducing excess cash drag and maximizing capital utilization.</p>
                  <p>
                    Particularly beneficial when allocating across non-correlated strategies or CTAs with offsetting
                    exposures.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Benefits</h2>
              <div className="space-y-8">
                {/* Capital Efficiency */}
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="p-4 bg-green-600/20 rounded-lg">
                        <DollarSign className="h-8 w-8 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          <span className="text-green-400">✅</span> Capital Efficiency
                        </h3>
                        <ul className="text-gray-300 space-y-2 text-lg">
                          <li>• Combines margin requirements across accounts, reducing total collateral needed.</li>
                          <li>• Frees up idle capital for additional strategies or risk budgeting.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Management */}
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="p-4 bg-blue-600/20 rounded-lg">
                        <Shield className="h-8 w-8 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          <span className="text-green-400">✅</span> Risk Management
                        </h3>
                        <ul className="text-gray-300 space-y-2 text-lg">
                          <li>• Reduces margin calls through netting of positions with opposing exposures.</li>
                          <li>• Enhances liquidity management across diversified programs.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cost Savings */}
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="p-4 bg-purple-600/20 rounded-lg">
                        <Calculator className="h-8 w-8 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          <span className="text-green-400">✅</span> Cost Savings
                        </h3>
                        <ul className="text-gray-300 space-y-2 text-lg">
                          <li>• Lower financing and opportunity costs compared to standalone margining.</li>
                          <li>• Consolidated clearing fees and reporting.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Insight */}
            <section>
              <div className="bg-gradient-to-r from-orange-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Key Insight</h2>
                <div className="text-center mb-8">
                  <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-6">
                    Even with exposure to diverse, active strategies, the weighted average margin-equity ratio remains
                    well below 20%, supporting:
                  </p>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="p-4 bg-blue-600/20 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <DollarSign className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Capital Efficiency</h3>
                    </div>
                    <div className="text-center">
                      <div className="p-4 bg-green-600/20 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <TrendingDown className="h-8 w-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">Risk-Adjusted Leverage</h3>
                    </div>
                    <div className="text-center">
                      <div className="p-4 bg-purple-600/20 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <RefreshCw className="h-8 w-8 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-purple-400 mb-2">Cross-Collateralization Benefits</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Efficient Use of Margin */}
            <section>
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Efficient Use of Margin Across Equal-Weighted Managed Futures Accounts
                </h2>

                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-800/50">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-4">&lt;20%</div>
                    <div className="text-xl text-gray-300 mb-4">Weighted Average Margin-Equity Ratio</div>
                    <p className="text-gray-300 text-lg">
                      Through strategic cross-collateralization, CAP maintains efficient capital utilization while
                      preserving risk management discipline across all managed futures strategies.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
