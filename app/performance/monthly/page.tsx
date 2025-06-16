import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart3, Target, Shield, Award } from "lucide-react"
import { Header } from "@/components/header"
import { PerformanceLayout } from "@/components/performance-layout"

export default function MonthlyPerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />
      <PerformanceLayout>
        <div className="container mx-auto px-4 lg:px-6 py-20">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Monthly Performance Overview</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed monthly performance analysis showing consistent risk-adjusted returns with superior monthly
              metrics compared to traditional market benchmarks.
            </p>
          </div>

          {/* Key Performance Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP vs S&P 500 Monthly Performance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">1.30%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Average RoR</div>
                  <div className="text-lg text-gray-500">vs 0.79% S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">0.69</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Sharpe Ratio</div>
                  <div className="text-lg text-gray-500">vs 0.16 S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">1.75%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Volatility</div>
                  <div className="text-lg text-gray-500">vs 4.35% S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">85.45%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Gain Frequency</div>
                  <div className="text-lg text-gray-500">vs 62.13% S&P 500</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Detailed Performance Metrics */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Comprehensive Monthly Analysis</h2>

            {/* Reward Metrics */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Reward Metrics</h3>
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left text-white font-semibold py-3">Metric</th>
                        <th className="text-right text-blue-500 font-semibold py-3">CAP</th>
                        <th className="text-right text-gray-400 font-semibold py-3">S&P 500</th>
                        <th className="text-right text-white font-semibold py-3">Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Average Rate of Return</td>
                        <td className="text-right text-blue-400 font-semibold">1.30%</td>
                        <td className="text-right">0.79%</td>
                        <td className="text-right text-green-400">+0.51%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Maximum Gain</td>
                        <td className="text-right text-blue-400 font-semibold">8.57%</td>
                        <td className="text-right">13.18%</td>
                        <td className="text-right text-red-400">-4.61%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Gain Frequency</td>
                        <td className="text-right text-blue-400 font-semibold">85.45%</td>
                        <td className="text-right">62.13%</td>
                        <td className="text-right text-green-400">+23.32%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Average Gain</td>
                        <td className="text-right text-blue-400 font-semibold">1.65%</td>
                        <td className="text-right">3.38%</td>
                        <td className="text-right text-red-400">-1.73%</td>
                      </tr>
                      <tr>
                        <td className="py-3">Gain Deviation</td>
                        <td className="text-right text-blue-400 font-semibold">1.63%</td>
                        <td className="text-right">2.56%</td>
                        <td className="text-right text-green-400">-0.93%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Risk Metrics */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Risk Metrics</h3>
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left text-white font-semibold py-3">Metric</th>
                        <th className="text-right text-blue-500 font-semibold py-3">CAP</th>
                        <th className="text-right text-gray-400 font-semibold py-3">S&P 500</th>
                        <th className="text-right text-white font-semibold py-3">Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Standard Deviation</td>
                        <td className="text-right text-blue-400 font-semibold">1.75%</td>
                        <td className="text-right">4.35%</td>
                        <td className="text-right text-green-400">-2.60%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Worst Loss</td>
                        <td className="text-right text-blue-400 font-semibold">-2.24%</td>
                        <td className="text-right">-21.76%</td>
                        <td className="text-right text-green-400">+19.52%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Loss Frequency</td>
                        <td className="text-right text-blue-400 font-semibold">14.55%</td>
                        <td className="text-right">37.69%</td>
                        <td className="text-right text-green-400">-23.14%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Average Loss</td>
                        <td className="text-right text-blue-400 font-semibold">-0.78%</td>
                        <td className="text-right">-3.48%</td>
                        <td className="text-right text-green-400">+2.70%</td>
                      </tr>
                      <tr>
                        <td className="py-3">Loss Deviation</td>
                        <td className="text-right text-blue-400 font-semibold">0.64%</td>
                        <td className="text-right">3.16%</td>
                        <td className="text-right text-green-400">-2.52%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Reward/Risk Metrics */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Reward/Risk Metrics</h3>
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left text-white font-semibold py-3">Metric</th>
                        <th className="text-right text-blue-500 font-semibold py-3">CAP</th>
                        <th className="text-right text-gray-400 font-semibold py-3">S&P 500</th>
                        <th className="text-right text-white font-semibold py-3">Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Sharpe Ratio (RFR=1%)</td>
                        <td className="text-right text-blue-400 font-semibold">0.69</td>
                        <td className="text-right">0.16</td>
                        <td className="text-right text-green-400">+0.53</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Skewness</td>
                        <td className="text-right text-blue-400 font-semibold">1.74</td>
                        <td className="text-right">-0.57</td>
                        <td className="text-right text-green-400">+2.31</td>
                      </tr>
                      <tr>
                        <td className="py-3">Kurtosis</td>
                        <td className="text-right text-blue-400 font-semibold">5.34</td>
                        <td className="text-right">1.74</td>
                        <td className="text-right text-blue-400">Higher Peak</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Key Highlights */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Monthly Performance Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-green-900/20 border-green-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Consistent Gains</h3>
                  <p className="text-gray-300 text-sm">85.45% monthly gain frequency vs 62.13% for S&P 500</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 border-blue-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Superior Monthly Returns</h3>
                  <p className="text-gray-300 text-sm">1.30% average monthly return vs 0.79% for S&P 500</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border-purple-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Lower Monthly Risk</h3>
                  <p className="text-gray-300 text-sm">60% lower monthly volatility (1.75% vs 4.35%)</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Performance Summary */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why CAP Excels Monthly</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Monthly Consistency</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 85.45% monthly gain frequency</li>
                    <li>• 4.3x better monthly Sharpe ratio than S&P 500</li>
                    <li>• 60% lower monthly volatility with higher returns</li>
                    <li>• Positive monthly skewness indicating upside bias</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Monthly Risk Control</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Maximum monthly loss of only -2.24% vs -21.76%</li>
                    <li>• 23% lower loss frequency than S&P 500</li>
                    <li>• Smaller average losses when they occur</li>
                    <li>• Consistent month-to-month performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Important Disclaimers</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                *Past performance does not guarantee future results. All performance figures are based on historical
                monthly data and may not be indicative of future performance.
              </p>
              <p>
                Investment in the fund involves substantial risk and may not be suitable for all investors. Please read
                the offering memorandum carefully before investing.
              </p>
              <p>
                Monthly performance data is net of management fees and expenses. Individual investor returns may vary
                based on timing of investment and redemption. Risk-free rate (RFR) used for Sharpe ratio calculation is
                1% annually.
              </p>
            </div>
          </section>
        </div>
      </PerformanceLayout>
    </div>
  )
}
