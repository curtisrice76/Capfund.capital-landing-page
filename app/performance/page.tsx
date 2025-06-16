import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart3, Target, Shield, Award } from "lucide-react"
import { Header } from "@/components/header"
import { PerformanceLayout } from "@/components/performance-layout"

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />
      <PerformanceLayout>
        <div className="container mx-auto px-4 lg:px-6 py-20">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Annual Performance Overview</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track record of consistent, risk-adjusted returns with superior annual performance metrics compared to
              traditional market benchmarks.
            </p>
          </div>

          {/* Key Performance Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP vs S&P 500 Annual Performance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">16.53%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Compound RoR</div>
                  <div className="text-lg text-gray-500">vs 8.62% S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">2.40</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Sharpe Ratio</div>
                  <div className="text-lg text-gray-500">vs 0.56 S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">6.06%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Volatility</div>
                  <div className="text-lg text-gray-500">vs 15.06% S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Gain Frequency</div>
                  <div className="text-lg text-gray-500">vs 75.22% S&P 500</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Detailed Performance Metrics */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Comprehensive Annual Analysis</h2>

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
                        <td className="py-3">Compound Rate of Return</td>
                        <td className="text-right text-blue-400 font-semibold">16.53%</td>
                        <td className="text-right">8.62%</td>
                        <td className="text-right text-green-400">+7.91%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Average Rate of Return</td>
                        <td className="text-right text-blue-400 font-semibold">16.44%</td>
                        <td className="text-right">9.88%</td>
                        <td className="text-right text-green-400">+6.56%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Maximum Gain</td>
                        <td className="text-right text-blue-400 font-semibold">21.34%</td>
                        <td className="text-right">34.11%</td>
                        <td className="text-right text-red-400">-12.77%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Gain Frequency</td>
                        <td className="text-right text-blue-400 font-semibold">100.00%</td>
                        <td className="text-right">75.22%</td>
                        <td className="text-right text-green-400">+24.78%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Average Gain</td>
                        <td className="text-right text-blue-400 font-semibold">16.44%</td>
                        <td className="text-right">17.00%</td>
                        <td className="text-right text-red-400">-0.56%</td>
                      </tr>
                      <tr>
                        <td className="py-3">Gain Deviation</td>
                        <td className="text-right text-blue-400 font-semibold">5.65%</td>
                        <td className="text-right">8.88%</td>
                        <td className="text-right text-green-400">-3.23%</td>
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
                        <td className="text-right text-blue-400 font-semibold">6.06%</td>
                        <td className="text-right">15.06%</td>
                        <td className="text-right text-green-400">-9.00%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Worst Loss</td>
                        <td className="text-right text-blue-400 font-semibold">0.00%</td>
                        <td className="text-right">-38.49%</td>
                        <td className="text-right text-green-400">+38.49%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Loss Frequency</td>
                        <td className="text-right text-blue-400 font-semibold">0.00%</td>
                        <td className="text-right">24.78%</td>
                        <td className="text-right text-green-400">-24.78%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Average Loss</td>
                        <td className="text-right text-blue-400 font-semibold">N/A</td>
                        <td className="text-right">-11.73%</td>
                        <td className="text-right text-green-400">No Losses</td>
                      </tr>
                      <tr>
                        <td className="py-3">Loss Deviation</td>
                        <td className="text-right text-blue-400 font-semibold">N/A</td>
                        <td className="text-right">10.95%</td>
                        <td className="text-right text-green-400">No Losses</td>
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
                        <td className="text-right text-blue-400 font-semibold">2.40</td>
                        <td className="text-right">0.56</td>
                        <td className="text-right text-green-400">+1.84</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Skewness</td>
                        <td className="text-right text-blue-400 font-semibold">8.76</td>
                        <td className="text-right">-0.94</td>
                        <td className="text-right text-green-400">+9.70</td>
                      </tr>
                      <tr>
                        <td className="py-3">Kurtosis</td>
                        <td className="text-right text-blue-400 font-semibold">-107.38</td>
                        <td className="text-right">1.43</td>
                        <td className="text-right text-blue-400">Lower Tail Risk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Key Highlights */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Annual Performance Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-green-900/20 border-green-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Zero Losses</h3>
                  <p className="text-gray-300 text-sm">100% positive return frequency with no losing years</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 border-blue-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Superior Returns</h3>
                  <p className="text-gray-300 text-sm">16.53% compound return vs 8.62% for S&P 500</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border-purple-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Low Volatility</h3>
                  <p className="text-gray-300 text-sm">60% lower volatility than S&P 500 (6.06% vs 15.06%)</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Important Disclaimers</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                *Past performance does not guarantee future results. All performance figures are based on historical
                data and may not be indicative of future performance.
              </p>
              <p>
                Investment in the fund involves substantial risk and may not be suitable for all investors. Please read
                the offering memorandum carefully before investing.
              </p>
              <p>
                Performance data is net of management fees and expenses. Individual investor returns may vary based on
                timing of investment and redemption. Risk-free rate (RFR) used for Sharpe ratio calculation is 1%.
              </p>
            </div>
          </section>
        </div>
      </PerformanceLayout>
    </div>
  )
}
