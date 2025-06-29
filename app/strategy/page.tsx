import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, BarChart3, Target, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Investment Strategy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our systematic approach to alpha generation combines multiple strategies, asset classes, and managers to
            deliver consistent, uncorrelated returns across all market environments.
          </p>
        </div>

        {/* Strategy Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Multi-Strategy Framework</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              Collective Alpha Partners employs a sophisticated multi-strategy, multi-asset, and multi-manager framework
              designed to generate positive gamma and risk-adjusted alpha. Our systematic approach ensures consistent
              performance while maintaining low correlation to traditional market benchmarks.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Multi-Strategy</h3>
                <p className="text-gray-300 text-sm">Diversified approach across six distinct CTA programs</p>
              </div>

              <div className="text-center">
                <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Multi-Asset</h3>
                <p className="text-gray-300 text-sm">Coverage across commodities, currencies, and macro markets</p>
              </div>

              <div className="text-center">
                <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Multi-Manager</h3>
                <p className="text-gray-300 text-sm">Systematic selection and allocation across proven managers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strategies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Strategy Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Momentum/Mean Reversion</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Systematic identification and exploitation of trending and reverting market patterns across multiple
                  timeframes and asset classes.
                </p>
                <div className="text-xs text-gray-400">
                  <p>• Multi-timeframe analysis</p>
                  <p>• Adaptive signal generation</p>
                  <p>• Risk-adjusted position sizing</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Agricultural Macro</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Specialized focus on agricultural commodities with deep fundamental analysis combined with technical
                  execution strategies.
                </p>
                <div className="text-xs text-gray-400">
                  <p>• Weather pattern analysis</p>
                  <p>• Supply/demand fundamentals</p>
                  <p>• Seasonal pattern recognition</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-yellow-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Gold/Currency Trend</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Systematic trend-following strategies focused on precious metals and major currency pairs with macro
                  overlay.
                </p>
                <div className="text-xs text-gray-400">
                  <p>• Central bank policy analysis</p>
                  <p>• Inflation hedge positioning</p>
                  <p>• Cross-currency arbitrage</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Macro Tactical</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Top-down macroeconomic analysis driving tactical allocation decisions across global markets and asset
                  classes.
                </p>
                <div className="text-xs text-gray-400">
                  <p>• Economic indicator analysis</p>
                  <p>• Policy impact assessment</p>
                  <p>• Cross-asset correlation modeling</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-red-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Strategy CTA</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Diversified commodity trading advisor approach combining multiple systematic strategies within a
                  single allocation.
                </p>
                <div className="text-xs text-gray-400">
                  <p>• Strategy diversification</p>
                  <p>• Dynamic risk allocation</p>
                  <p>• Performance optimization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Option Income</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Systematic option strategies designed to generate consistent income while providing portfolio
                  protection and positive gamma exposure.
                </p>
                <div className="text-xs text-gray-400">
                  <p>• Volatility harvesting</p>
                  <p>• Income generation</p>
                  <p>• Downside protection</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risk Management */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Risk Management Framework</h2>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-4">Portfolio-Level Controls</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Maximum 2% daily value-at-risk limit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Dynamic position sizing based on volatility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Correlation monitoring across strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Stress testing under extreme scenarios</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Strategy-Level Controls</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Individual strategy drawdown limits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Performance-based allocation adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Real-time monitoring and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Systematic stop-loss mechanisms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Characteristics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Strategy Performance Characteristics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Target Outcomes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Annual Return Target</span>
                    <span className="text-green-400 font-bold">15-25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Target Sharpe Ratio</span>
                    <span className="text-green-400 font-bold">{">"}1.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Maximum Drawdown</span>
                    <span className="text-green-400 font-bold">{"<"}5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Correlation to S&P 500</span>
                    <span className="text-green-400 font-bold">{"<"}0.3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Actual Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Compound Annual Return</span>
                    <span className="text-blue-400 font-bold">25.34%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Achieved Sharpe Ratio</span>
                    <span className="text-blue-400 font-bold">1.97</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Maximum Drawdown</span>
                    <span className="text-blue-400 font-bold">-1.57%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">S&P 500 Correlation</span>
                    <span className="text-blue-400 font-bold">0.15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Our Strategy?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Learn more about how our systematic approach can enhance your investment portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/performance">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                  View Performance
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
