"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Shield, Award, BarChart3, Activity, Target } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function AnnualPerformancePage() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("performance")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      {/* Performance Navigation */}
      <div className="border-b border-gray-800/50 bg-black/60">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center space-x-8 py-4">
            <Link href="/performance">
              <Button
                variant={pathname === "/performance" ? "default" : "ghost"}
                className={
                  pathname === "/performance"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                Annual Performance
              </Button>
            </Link>
            <Link href="/performance/monthly">
              <Button
                variant={pathname === "/performance/monthly" ? "default" : "ghost"}
                className={
                  pathname === "/performance/monthly"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                Monthly Performance
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">CAP Performance Advantage</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Demonstrating superior risk-adjusted returns with consistent performance across all market conditions. CAP
            delivers 2-3x higher returns with significantly lower volatility than traditional benchmarks.
          </p>
        </div>

        {/* Performance/Risk Metrics/Market Type/Comparison Tabs */}
        <section className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900/80 rounded-lg p-1 border border-gray-800">
              <Button
                variant={activeTab === "performance" ? "default" : "ghost"}
                onClick={() => setActiveTab("performance")}
                className={
                  activeTab === "performance"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Performance Highlights
              </Button>
              <Button
                variant={activeTab === "comparison" ? "default" : "ghost"}
                onClick={() => setActiveTab("comparison")}
                className={
                  activeTab === "comparison"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                <Target className="h-4 w-4 mr-2" />
                vs S&P 500
              </Button>
              <Button
                variant={activeTab === "risk" ? "default" : "ghost"}
                onClick={() => setActiveTab("risk")}
                className={
                  activeTab === "risk"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Risk Metrics
              </Button>
              <Button
                variant={activeTab === "market" ? "default" : "ghost"}
                onClick={() => setActiveTab("market")}
                className={
                  activeTab === "market"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                <Activity className="h-4 w-4 mr-2" />
                Market Type
              </Button>
            </div>
          </div>

          {activeTab === "performance" && (
            <>
              {/* Performance Highlights */}
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Performance Highlights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-green-400 mb-2">25.34%</div>
                    <div className="text-sm text-gray-400 mb-1">Compound Annual Return</div>
                    <div className="text-xs text-gray-500">vs 8.62% S&P 500</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-blue-500 mb-2">1.97</div>
                    <div className="text-sm text-gray-400 mb-1">Sharpe Ratio</div>
                    <div className="text-xs text-gray-500">vs 0.56 S&P 500</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <TrendingDown className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">-1.57%</div>
                    <div className="text-sm text-gray-400 mb-1">Max Drawdown</div>
                    <div className="text-xs text-gray-500">vs -23.93% S&P 500</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Award className="h-6 w-6 text-orange-400" />
                    </div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400 mb-1">Positive Years</div>
                    <div className="text-xs text-gray-500">Zero Annual Losses</div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {activeTab === "comparison" && (
            <>
              {/* S&P 500 Comparison Section */}
              <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Fund vs S&P 500 Comparison</h2>

              {/* Performance Metrics Comparison Table */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Performance Metrics Comparison</h3>
                <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-2xl p-8 border border-blue-800/50">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left text-white font-semibold py-4 text-lg">Metric</th>
                          <th className="text-center text-blue-400 font-semibold py-4 text-lg">CAP Fund</th>
                          <th className="text-center text-red-400 font-semibold py-4 text-lg">S&P 500</th>
                          <th className="text-center text-green-400 font-semibold py-4 text-lg">CAP Advantage</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800">
                          <td className="py-4 text-lg font-medium">Compound Annual Return</td>
                          <td className="text-center py-4 text-blue-400 font-bold text-lg">25.34%</td>
                          <td className="text-center py-4 text-red-400 font-bold text-lg">8.62%</td>
                          <td className="text-center py-4 text-green-400 font-bold text-lg">+16.72%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-4 text-lg font-medium">Sharpe Ratio</td>
                          <td className="text-center py-4 text-blue-400 font-bold text-lg">1.97</td>
                          <td className="text-center py-4 text-red-400 font-bold text-lg">0.56</td>
                          <td className="text-center py-4 text-green-400 font-bold text-lg">3.5x Better</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-4 text-lg font-medium">Volatility</td>
                          <td className="text-center py-4 text-blue-400 font-bold text-lg">11.37%</td>
                          <td className="text-center py-4 text-red-400 font-bold text-lg">15.06%</td>
                          <td className="text-center py-4 text-green-400 font-bold text-lg">-24% Lower</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-4 text-lg font-medium">Maximum Drawdown</td>
                          <td className="text-center py-4 text-blue-400 font-bold text-lg">-1.57%</td>
                          <td className="text-center py-4 text-red-400 font-bold text-lg">-23.93%</td>
                          <td className="text-center py-4 text-green-400 font-bold text-lg">93% Better</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-4 text-lg font-medium">Positive Years</td>
                          <td className="text-center py-4 text-blue-400 font-bold text-lg">100%</td>
                          <td className="text-center py-4 text-red-400 font-bold text-lg">73%</td>
                          <td className="text-center py-4 text-green-400 font-bold text-lg">+27%</td>
                        </tr>
                        <tr>
                          <td className="py-4 text-lg font-medium">Correlation</td>
                          <td className="text-center py-4 text-blue-400 font-bold text-lg">0.15</td>
                          <td className="text-center py-4 text-red-400 font-bold text-lg">1.00</td>
                          <td className="text-center py-4 text-green-400 font-bold text-lg">Uncorrelated</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Annual Performance History */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Annual Performance History</h3>
                <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left text-white font-semibold py-4">Year</th>
                          <th className="text-center text-blue-400 font-semibold py-4">CAP Fund</th>
                          <th className="text-center text-red-400 font-semibold py-4">S&P 500</th>
                          <th className="text-center text-green-400 font-semibold py-4">Outperformance</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800">
                          <td className="py-3 font-medium">2025 YTD</td>
                          <td className="text-center py-3 text-blue-400 font-bold">+6.64%</td>
                          <td className="text-center py-3 text-red-400 font-bold">+2.31%</td>
                          <td className="text-center py-3 text-green-400 font-bold">+4.33%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 font-medium">2024</td>
                          <td className="text-center py-3 text-blue-400 font-bold">+32.05%</td>
                          <td className="text-center py-3 text-red-400 font-bold">+24.23%</td>
                          <td className="text-center py-3 text-green-400 font-bold">+7.82%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 font-medium">2023</td>
                          <td className="text-center py-3 text-blue-400 font-bold">+25.13%</td>
                          <td className="text-center py-3 text-red-400 font-bold">+26.29%</td>
                          <td className="text-center py-3 text-red-400 font-bold">-1.16%</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-3 font-medium">2022</td>
                          <td className="text-center py-3 text-blue-400 font-bold">+15.32%</td>
                          <td className="text-center py-3 text-red-400 font-bold">-18.11%</td>
                          <td className="text-center py-3 text-green-400 font-bold">+33.43%</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Cumulative</td>
                          <td className="text-center py-3 text-blue-400 font-bold">+94.67%</td>
                          <td className="text-center py-3 text-red-400 font-bold">+28.45%</td>
                          <td className="text-center py-3 text-green-400 font-bold">+66.22%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Risk-Adjusted Performance Analysis */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Risk-Adjusted Performance Analysis</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border-blue-800">
                    <CardContent className="p-8">
                      <h4 className="text-2xl font-bold text-blue-400 mb-6">CAP Fund Risk Profile</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Volatility</span>
                          <span className="text-blue-400 font-bold">11.37%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Skewness</span>
                          <span className="text-green-400 font-bold">+3.04</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Kurtosis</span>
                          <span className="text-blue-400 font-bold">-40.20</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">VaR (95%)</span>
                          <span className="text-purple-400 font-bold">-1.23%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Calmar Ratio</span>
                          <span className="text-green-400 font-bold">16.14</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-800">
                    <CardContent className="p-8">
                      <h4 className="text-2xl font-bold text-red-400 mb-6">S&P 500 Risk Profile</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Volatility</span>
                          <span className="text-red-400 font-bold">15.06%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Skewness</span>
                          <span className="text-red-400 font-bold">-0.94</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Kurtosis</span>
                          <span className="text-red-400 font-bold">+1.43</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">VaR (95%)</span>
                          <span className="text-red-400 font-bold">-2.87%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Calmar Ratio</span>
                          <span className="text-red-400 font-bold">0.36</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Exceptional Outperformance */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Exceptional Outperformance</h3>
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-800/50">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    The CAP Fund has demonstrated exceptional performance relative to the S&P 500. Over the evaluation
                    period, the fund achieved a compound annual return of 25.34%, significantly outperforming the S&P
                    500's 8.62%. This outperformance is accompanied by a notably lower standard deviation of 11.37%
                    compared to 15.06% for the S&P 500, reflecting more stable returns.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The fund has shown consistent annual gains with a 100% gain frequency, whereas the S&P 500 had
                    negative returns nearly 25% of the time, including a worst annual loss of -38.49%.
                  </p>
                </div>
              </div>

              {/* Superior Risk-Adjusted Returns */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Superior Risk-Adjusted Returns</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-800">
                    <CardContent className="p-8">
                      <h4 className="text-2xl font-bold text-green-400 mb-6">CAP Fund Advantages</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <span className="text-gray-300">3.5x higher returns with 25% lower volatility</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <span className="text-gray-300">Sharpe ratio of 1.97 vs 0.56 for S&P 500</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <span className="text-gray-300">100% positive years with zero annual losses</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <span className="text-gray-300">Positive skewness (+3.04) indicating upside bias</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <span className="text-gray-300">Negative kurtosis (-40.20) showing minimal tail risk</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-800">
                    <CardContent className="p-8">
                      <h4 className="text-2xl font-bold text-red-400 mb-6">S&P 500 Limitations</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="text-red-400 mr-3 mt-1">×</span>
                          <span className="text-gray-300">Lower returns with higher volatility exposure</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-red-400 mr-3 mt-1">×</span>
                          <span className="text-gray-300">Poor risk-adjusted returns (Sharpe ratio 0.56)</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-red-400 mr-3 mt-1">×</span>
                          <span className="text-gray-300">25% negative years including severe losses</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-red-400 mr-3 mt-1">×</span>
                          <span className="text-gray-300">Negative skewness (-0.94) showing downside bias</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-red-400 mr-3 mt-1">×</span>
                          <span className="text-gray-300">Positive kurtosis (+1.43) indicating fat-tailed risk</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Statistical Analysis Summary */}
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Statistical Analysis Summary</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The CAP Fund's Sharpe ratio of 1.97 vastly exceeds the S&P 500's 0.56, illustrating a superior return
                  per unit of risk. Moreover, positive skewness of 3.04 and negative kurtosis of -40.20 highlight a
                  favorable asymmetry in return distribution and minimal tail risk exposure. In contrast, the S&P 500's
                  negative skewness of -0.94 and positive kurtosis of 1.43 suggest greater downside asymmetry and
                  fat-tailed risk. Together, these metrics affirm the CAP Fund's ability to deliver strong, consistent,
                  and well-managed returns through various market environments.
                </p>
              </div>
            </>
          )}

          {activeTab === "risk" && (
            <>
              {/* Risk Metrics Section */}
              <h2 className="text-3xl font-bold text-white mb-12 text-center">📊 Risk Metrics Analysis</h2>

              {/* Risk Metrics with RFR = 1% (Flat) */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">📊 RISK METRICS – RFR = 1% (Flat)</h3>
                <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-2xl p-8 border border-blue-800/50">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Sharpe Ratio (Arithmetic)</h4>
                        <div className="text-3xl font-bold text-blue-400 mb-2">2.1</div>
                        <p className="text-gray-300 text-sm">Return per unit of total volatility</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Sharpe Ratio (Geometric)</h4>
                        <div className="text-3xl font-bold text-green-400 mb-2">2.4</div>
                        <p className="text-gray-300 text-sm">Compounded returns perspective</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Sortino Ratio</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-2">9.6</div>
                        <p className="text-gray-300 text-sm">Downside deviation focus</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Treynor Ratio</h4>
                        <div className="text-3xl font-bold text-orange-400 mb-2">0.19</div>
                        <p className="text-gray-300 text-sm">Risk-adjusted return vs beta</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Calmar Ratio</h4>
                        <div className="text-3xl font-bold text-teal-400 mb-2">1.9</div>
                        <p className="text-gray-300 text-sm">Return vs max drawdown</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Beta to S&P 500</h4>
                        <div className="text-3xl font-bold text-red-400 mb-2">1.29</div>
                        <p className="text-gray-300 text-sm">Market sensitivity</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 text-center">
                    <Card className="bg-black/40 border-gray-700 max-w-md mx-auto">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold text-yellow-400 mb-2">Jensen's Alpha</h4>
                        <div className="text-4xl font-bold text-yellow-400 mb-2">8.9%</div>
                        <p className="text-gray-300 text-sm">Excess return unexplained by beta</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Risk Metrics with Actual Month-by-Month RFR */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">
                  📊 RISK METRICS – Actual Month-by-Month RFR
                </h3>
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 border border-red-800/50">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Sharpe Ratio (Arithmetic)</h4>
                        <div className="text-3xl font-bold text-blue-400 mb-2">1.62</div>
                        <p className="text-gray-300 text-sm">Adjusted for actual RFR</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Sortino Ratio</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-2">7.25</div>
                        <p className="text-gray-300 text-sm">Downside risk adjusted</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Treynor Ratio</h4>
                        <div className="text-3xl font-bold text-orange-400 mb-2">0.14</div>
                        <p className="text-gray-300 text-sm">Beta-adjusted performance</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Calmar Ratio</h4>
                        <div className="text-3xl font-bold text-teal-400 mb-2">1.87</div>
                        <p className="text-gray-300 text-sm">Drawdown-adjusted return</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Beta to S&P 500</h4>
                        <div className="text-3xl font-bold text-red-400 mb-2">1.29</div>
                        <p className="text-gray-300 text-sm">Unchanged correlation</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/80 border-gray-800">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Jensen's Alpha</h4>
                        <div className="text-3xl font-bold text-yellow-400 mb-2">0.01%</div>
                        <p className="text-gray-300 text-sm">Adjusted for rising rates</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Footnotes */}
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">📎 Risk Metrics Footnotes</h3>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Sharpe Ratio (Arithmetic):</h4>
                    <p className="text-sm">
                      Measures return per unit of total volatility above the RFR. Arithmetic return is based on the
                      average of monthly returns. The drop from 2.1 (flat RFR) to 1.62 (actual RFR) reflects higher
                      implied opportunity cost from rising short-term Treasury yields.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Sharpe Ratio (Geometric):</h4>
                    <p className="text-sm">
                      Reflects compounded returns (CAGR). Offers a more realistic view of long-term investor experience,
                      especially with volatility. Only shown under flat RFR due to complications with compounding
                      variable RFRs.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Sortino Ratio:</h4>
                    <p className="text-sm">
                      Focuses solely on downside deviation. Lower when using actual RFR since the threshold for what
                      counts as "bad" months rises with the RFR, increasing downside volatility.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Treynor Ratio:</h4>
                    <p className="text-sm">
                      Risk-adjusted return relative to beta. Declines when using actual RFR due to lower average excess
                      return over rising Treasury rates.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mb-2">Calmar Ratio:</h4>
                    <p className="text-sm">
                      Annual return divided by max 12-month drawdown. Stable across both RFR assumptions, since it's
                      less sensitive to small shifts in average return and unaffected by the RFR directly.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Beta to S&P 500:</h4>
                    <p className="text-sm">
                      Unchanged (1.29), as beta reflects co-movement with the S&P 500 and is not influenced by the
                      risk-free rate.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Jensen's Alpha:</h4>
                    <p className="text-sm">
                      Measures excess return unexplained by beta exposure. Drops from 8.9% to near zero under actual
                      RFR, showing that part of the strategy's prior outperformance was absorbed by higher baseline
                      rates (i.e., the "bar" for alpha was raised).
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "market" && (
            <>
              {/* Market Type Performance Section */}
              <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Returns by Market Type</h2>

              {/* Market Type Performance Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-800">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-green-600/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Bull Market</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">+28.6%</div>
                    <div className="text-lg text-gray-300 mb-4">Average Annual Return</div>
                    <p className="text-gray-300 text-sm">
                      Exceptional gains during broad-based equity rallies with strong trend-following and momentum
                      capture
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-800">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-red-600/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <TrendingDown className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Bear Market</h3>
                    <div className="text-4xl font-bold text-red-400 mb-2">+15.32%</div>
                    <div className="text-lg text-gray-300 mb-2">Annual Return</div>
                    <div className="text-sm text-gray-400 mb-4">Max Drawdown: -1.57%</div>
                    <p className="text-gray-300 text-sm">
                      Solid performance during volatility and equity weakness through diversified alpha extraction
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-800">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Activity className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Sideways Market</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">+6.64%</div>
                    <div className="text-lg text-gray-300 mb-4">YTD Return</div>
                    <p className="text-gray-300 text-sm">
                      Steady performance in flat markets through mean-reversion and uncorrelated positioning
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Market Type Performance Summary */}
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Market Type Performance Summary</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">CAP Strategy Composition:</h4>
                  <p className="text-gray-300 mb-4">
                    CAP blends six uncorrelated strategies: Trend-following (Gold vs FX), Ag Macro (Grains/Livestock),
                    Global Macro Tactical, Multi-Strategy Derivatives, Equity Option Income, and Short-Term
                    Momentum/Mean Reversion.
                  </p>
                  <p className="text-gray-300">
                    This diversified architecture enables consistent performance across equity cycles, commodity shocks,
                    and macro volatility.
                  </p>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-400 mb-4">Bull Market:</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      CAP delivered exceptional gains during broad-based equity rallies. Key performance drivers
                      included trend-following systems, breakout momentum capture, and directional macro alignment.
                      Notable surges were recorded in Mar 2024 (+13.26%), Mar 2023 (+5.78%), and Jun 2021 (+6.54%),
                      along with consistent strength across 2021 to 2024.
                    </p>
                    <p className="text-gray-300 text-sm">
                      CAP's diversified strategy exposure enabled strong participation in risk-on environments while
                      maintaining disciplined risk control.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-red-400 mb-4">Bear Market:</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      During periods of elevated volatility, inflation shocks, and equity weakness in 2022 and late 2023
                      through mid-2024, CAP delivered solid performance. Gains in Mar 2022 (+4.90%), May 2022 (+3.82%),
                      and Jul 2022 (+4.25%) illustrate the program's ability to extract alpha from commodities, FX, and
                      macro-driven themes.
                    </p>
                    <p className="text-gray-300 text-sm">
                      CAP's multi-asset design provided resilience and downside protection during these stress periods.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Sideways Market:</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      In flat or indecisive market regimes such as early 2025, CAP maintained steady performance through
                      non-directional strategies. Returns in Jan 2025 (+4.13%), Feb (+1.93%), and Mar (+1.24%) were
                      supported by mean-reversion, short-duration options, and uncorrelated FX positioning.
                    </p>
                    <p className="text-gray-300 text-sm">
                      These outcomes underscore CAP's consistency and adaptability in environments with limited trend or
                      volatility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Market Type Advantage Summary */}
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-800/50">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">All-Weather Performance</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">28.6%</div>
                    <div className="text-white font-semibold mb-2">Bull Market Returns</div>
                    <div className="text-gray-300 text-sm">Strong participation in risk-on environments</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-400 mb-2">15.32%</div>
                    <div className="text-white font-semibold mb-2">Bear Market Returns</div>
                    <div className="text-gray-300 text-sm">Resilience during market stress</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">6.64%</div>
                    <div className="text-white font-semibold mb-2">Sideways Market Returns</div>
                    <div className="text-gray-300 text-sm">Consistency in flat environments</div>
                  </div>
                </div>

                <div className="mt-8 bg-black/40 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-4 text-center">Multi-Strategy Advantage</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Six uncorrelated strategy components</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Performance across all market cycles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Diversified alpha generation sources</span>
                      </li>
                    </ul>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Multi-asset class exposure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Adaptive to changing market conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Consistent risk-adjusted performance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Investment Case Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-800/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The CAP Advantage</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">2.9x</div>
                <div className="text-white font-semibold mb-2">Higher Returns</div>
                <div className="text-gray-300 text-sm">25.34% vs 8.62% annually</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">3.5x</div>
                <div className="text-white font-semibold mb-2">Better Sharpe Ratio</div>
                <div className="text-gray-300 text-sm">Superior risk-adjusted returns</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">93%</div>
                <div className="text-white font-semibold mb-2">Lower Drawdown</div>
                <div className="text-gray-300 text-sm">Exceptional downside protection</div>
              </div>
            </div>

            <div className="mt-8 bg-black/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Key Differentiators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>100% positive annual returns since inception</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Low correlation (0.15) to traditional markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Positive skewness indicating favorable risk profile</span>
                  </li>
                </ul>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Exceptional Calmar ratio of 16.14 vs 0.36</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Systematic alpha generation across market regimes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Tax-efficient structure with Section 1256 benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Portfolio?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Discover how CAP's superior performance can enhance your investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/strategy">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Learn Our Strategy
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Important Performance Disclaimers</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              *Past performance does not guarantee future results. All performance figures are net of management fees
              and expenses unless otherwise noted.
            </p>
            <p>
              Performance comparisons are for illustrative purposes only. The S&P 500 is an unmanaged index and
              investors cannot invest directly in an index.
            </p>
            <p>
              Risk metrics are calculated based on historical data and may not be indicative of future risk
              characteristics. All investments involve substantial risk of loss.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
