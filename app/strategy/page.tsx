import { Card, CardContent } from "@/components/ui/card"
import { Target, Globe, Users, TrendingUp, Shield, BarChart3 } from "lucide-react"
import { Header } from "@/components/header"

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Investment Strategy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our multi-strategy, multi-asset, and multi-manager framework is designed to generate consistent,
            uncorrelated alpha across all market conditions.
          </p>
        </div>

        {/* Core Strategies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Investment Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/80 border-gray-800 hover:border-blue-400/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                    <Target className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Multi-Strategy</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Diversified approach across multiple investment strategies to maximize alpha generation while
                  minimizing correlation risk.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Long/Short Equity</li>
                  <li>• Market Neutral</li>
                  <li>• Event Driven</li>
                  <li>• Relative Value</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 hover:border-blue-400/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                    <Globe className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Multi-Asset</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Strategic allocation across various asset classes to capture opportunities in different market
                  environments.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Equities</li>
                  <li>• Fixed Income</li>
                  <li>• Commodities</li>
                  <li>• Currencies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 hover:border-blue-400/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Multi-Manager</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Leveraging expertise from multiple specialized managers to optimize performance across different
                  market segments.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Quantitative Specialists</li>
                  <li>• Fundamental Analysts</li>
                  <li>• Technical Experts</li>
                  <li>• Risk Managers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 hover:border-blue-400/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                    <BarChart3 className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Multi-Timeframe</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Applying tailored strategies across long, medium and short horizons to exploit both trending and
                  mean-reverting market dynamics.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Long-term secular trends</li>
                  <li>• Medium-term event cycles</li>
                  <li>• Short-term tactical plays</li>
                  <li>• Cross-timeframe validation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Multi-Timeframe Analysis */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Multi-Timeframe Analysis</h3>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <p className="text-gray-300 mb-8 text-center text-lg">
              Applying tailored strategies across long, medium and short horizons to exploit both trending and
              mean-reverting market dynamics:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-600/20 rounded-lg mr-3">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Long-Term (≥1 year)</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>– Secular trend following</li>
                    <li>– Thematic allocations aligned with macro drivers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Medium-Term (1–6 months)</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>– Event-driven and mean-reversion plays</li>
                    <li>– Sector rotation based on intermediate cycles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-600/20 rounded-lg mr-3">
                      <Target className="h-5 w-5 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Short-Term (intraday to 1 month)</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>– Tactical breakouts and momentum bursts</li>
                    <li>– Counter-trend opportunities at key support/resistance levels</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Investment Process</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Systematic Approach</h3>
              <p className="text-gray-300 mb-8">
                Our investment process combines quantitative analysis with fundamental research to identify and
                capitalize on market inefficiencies across multiple time horizons and market conditions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Alpha Identification</h4>
                    <p className="text-gray-300">Systematic screening for uncorrelated return opportunities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Risk Assessment</h4>
                    <p className="text-gray-300">Comprehensive risk modeling and scenario analysis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Portfolio Construction</h4>
                    <p className="text-gray-300">Optimal allocation for maximum risk-adjusted returns</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Strategy Allocation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Long/Short</span>
                  <span className="text-blue-500 font-semibold">18%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "18%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Market Neutral</span>
                  <span className="text-green-400 font-semibold">27%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: "27%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Event Driven</span>
                  <span className="text-purple-400 font-semibold">18%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: "18%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Relative Value</span>
                  <span className="text-orange-400 font-semibold">36%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{ width: "36%" }}></div>
                </div>
              </div>
            </div>

            {/* Trading Style Allocation */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Trading Style</h3>
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Systematic</span>
                    <span className="text-blue-500 font-semibold">68%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Discretionary</span>
                    <span className="text-orange-400 font-semibold">32%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-orange-400 h-2 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
