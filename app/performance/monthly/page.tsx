"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Shield, Award } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MonthlyPerformancePage() {
  const pathname = usePathname()

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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">CAP Monthly Performance Advantage</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Superior monthly risk-adjusted returns with exceptional consistency. CAP delivers 2.5x higher monthly
            returns with significantly lower volatility and better downside protection than the S&P 500.
          </p>
        </div>

        {/* Key Monthly Metrics Comparison */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Monthly Performance Metrics Comparison</h2>
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
                    <td className="py-4 text-lg font-medium">Average Monthly Return</td>
                    <td className="text-center py-4 text-blue-400 font-bold text-lg">1.95%</td>
                    <td className="text-center py-4 text-red-400 font-bold text-lg">0.79%</td>
                    <td className="text-center py-4 text-green-400 font-bold text-lg">+1.16%</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 text-lg font-medium">Monthly Sharpe Ratio</td>
                    <td className="text-center py-4 text-blue-400 font-bold text-lg">0.57</td>
                    <td className="text-center py-4 text-red-400 font-bold text-lg">0.16</td>
                    <td className="text-center py-4 text-green-400 font-bold text-lg">3.6x Better</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 text-lg font-medium">Monthly Volatility</td>
                    <td className="text-center py-4 text-blue-400 font-bold text-lg">3.28%</td>
                    <td className="text-center py-4 text-red-400 font-bold text-lg">4.35%</td>
                    <td className="text-center py-4 text-green-400 font-bold text-lg">-25% Lower</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 text-lg font-medium">Worst Monthly Loss</td>
                    <td className="text-center py-4 text-blue-400 font-bold text-lg">-3.15%</td>
                    <td className="text-center py-4 text-red-400 font-bold text-lg">-21.76%</td>
                    <td className="text-center py-4 text-green-400 font-bold text-lg">85% Better</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 text-lg font-medium">Gain Frequency</td>
                    <td className="text-center py-4 text-blue-400 font-bold text-lg">67.86%</td>
                    <td className="text-center py-4 text-red-400 font-bold text-lg">62.13%</td>
                    <td className="text-center py-4 text-green-400 font-bold text-lg">+5.73%</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-lg font-medium">Monthly Skewness</td>
                    <td className="text-center py-4 text-blue-400 font-bold text-lg">1.15</td>
                    <td className="text-center py-4 text-red-400 font-bold text-lg">-0.57</td>
                    <td className="text-center py-4 text-green-400 font-bold text-lg">Positive vs Negative</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Monthly Performance Highlights */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Monthly Performance Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">1.95%</div>
                <div className="text-sm text-gray-400 mb-1">Average Monthly Return</div>
                <div className="text-xs text-gray-500">vs 0.79% S&P 500</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-blue-500 mb-2">0.57</div>
                <div className="text-sm text-gray-400 mb-1">Monthly Sharpe Ratio</div>
                <div className="text-xs text-gray-500">vs 0.16 S&P 500</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">-3.15%</div>
                <div className="text-sm text-gray-400 mb-1">Worst Monthly Loss</div>
                <div className="text-xs text-gray-500">vs -21.76% S&P 500</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">67.86%</div>
                <div className="text-sm text-gray-400 mb-1">Gain Frequency</div>
                <div className="text-xs text-gray-500">vs 62.13% S&P 500</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risk-Adjusted Monthly Analysis */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Monthly Risk-Adjusted Analysis</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border-blue-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">CAP Monthly Risk Profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Standard Deviation</span>
                    <span className="text-blue-400 font-bold">3.28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Gain</span>
                    <span className="text-green-400 font-bold">3.42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Loss</span>
                    <span className="text-purple-400 font-bold">-1.15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Loss Frequency</span>
                    <span className="text-orange-400 font-bold">32.14%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Skewness</span>
                    <span className="text-green-400 font-bold">+1.15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">S&P 500 Monthly Risk Profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Standard Deviation</span>
                    <span className="text-red-400 font-bold">4.35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Gain</span>
                    <span className="text-red-400 font-bold">3.38%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Loss</span>
                    <span className="text-red-400 font-bold">-3.48%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Loss Frequency</span>
                    <span className="text-red-400 font-bold">37.69%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Skewness</span>
                    <span className="text-red-400 font-bold">-0.57</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Monthly Investment Case Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-800/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The CAP Monthly Advantage</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">2.5x</div>
                <div className="text-white font-semibold mb-2">Higher Monthly Returns</div>
                <div className="text-gray-300 text-sm">1.95% vs 0.79% average monthly</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">3.6x</div>
                <div className="text-white font-semibold mb-2">Better Monthly Sharpe</div>
                <div className="text-gray-300 text-sm">Superior risk-adjusted performance</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-white font-semibold mb-2">Better Downside Protection</div>
                <div className="text-gray-300 text-sm">-3.15% vs -21.76% worst month</div>
              </div>
            </div>

            <div className="mt-8 bg-black/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Monthly Performance Differentiators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Higher gain frequency (67.86% vs 62.13%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Lower monthly volatility (3.28% vs 4.35%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Positive skewness vs negative for S&P 500</span>
                  </li>
                </ul>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Smaller average losses (-1.15% vs -3.48%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Lower loss frequency (32.14% vs 37.69%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Consistent monthly alpha generation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Experience Monthly Consistency</h2>
            <p className="text-xl text-gray-300 mb-6">
              Discover how CAP's superior monthly performance can enhance your investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/performance">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  View Annual Performance
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Important Monthly Performance Disclaimers</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              *Past performance does not guarantee future results. All performance figures are net of management fees
              and expenses unless otherwise noted.
            </p>
            <p>
              Monthly performance comparisons are for illustrative purposes only. The S&P 500 is an unmanaged index and
              investors cannot invest directly in an index.
            </p>
            <p>
              Risk metrics are calculated based on historical monthly data and may not be indicative of future monthly
              risk characteristics. All investments involve substantial risk of loss.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
