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
                  <div className="text-3xl font-bold text-blue-500 mb-2">1.95%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Average RoR</div>
                  <div className="text-lg text-gray-500">vs 0.79% S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">0.57</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Sharpe Ratio</div>
                  <div className="text-lg text-gray-500">vs 0.16 S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">3.28%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Volatility</div>
                  <div className="text-lg text-gray-500">vs 4.35% S&P 500</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">67.86%</div>
                  <div className="text-sm text-gray-400 mb-1">CAP Gain Frequency</div>
                  <div className="text-lg text-gray-500">vs 62.13% S&P 500</div>
                </CardContent>
              </Card>
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
                  <p className="text-gray-300 text-sm">67.86% monthly gain frequency vs 62.13% for S&P 500</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 border-blue-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Superior Monthly Returns</h3>
                  <p className="text-gray-300 text-sm">1.95% average monthly return vs 0.79% for S&P 500</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border-purple-800">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Lower Monthly Risk</h3>
                  <p className="text-gray-300 text-sm">25% lower monthly volatility (3.28% vs 4.35%)</p>
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
                    <li>• 67.86% monthly gain frequency</li>
                    <li>• 3.6x better monthly Sharpe ratio than S&P 500</li>
                    <li>• 25% lower monthly volatility with higher returns</li>
                    <li>• Positive monthly skewness indicating upside bias</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Monthly Risk Control</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Maximum monthly loss of only -3.15% vs -21.76%</li>
                    <li>• 5.6% lower loss frequency than S&P 500</li>
                    <li>• 67% smaller average losses when they occur</li>
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
