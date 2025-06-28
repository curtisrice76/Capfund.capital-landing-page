import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Target, BarChart3, Globe, Zap, Wheat, TrendingDown } from "lucide-react"
import { Header } from "@/components/header"

export default function ThesisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Investment Thesis & Strategy</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A multi-manager investment construct designed to deliver absolute, risk-adjusted returns with low
            correlation to traditional markets through systematic alpha generation across diverse strategies.
          </p>
        </div>

        {/* Investment Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6">📘 Investment Summary Thesis</h2>
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                This portfolio is a multi-manager investment construct designed to deliver absolute, risk-adjusted
                returns with low correlation to traditional markets. The fund sources alpha from across a broad spectrum
                of uncorrelated and diversifying investment strategies, targeting systematic inefficiencies, behavioral
                patterns, macro dislocations, and volatility premiums.
              </p>
              <p>
                Each strategy is institutionally vetted, employs robust risk controls, and is selected for its ability
                to generate consistent performance across different market regimes. The overarching goal is to combine
                these strategies into a single, volatility-managed, drawdown-aware fund that performs through trend,
                chop, crisis, and recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">📊 Six Core Strategy Categories</h2>
          <div className="space-y-8">
            {/* Strategy 1 - Positive Gamma */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-green-600/20 rounded-lg">
                    <TrendingDown className="h-8 w-8 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">1. Positive Gamma: Convex Alpha Generation</h3>
                      <Badge className="bg-green-600/20 text-green-400 border-green-500">Core Strategy</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Convex Payoff: Systematic approach to "cut losses, let winners run," ensuring asymmetric returns
                      that buffer downside risks and magnify upside potential.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Unitized Risk Position Sizing</li>
                          <li>• Add to Winning Positions</li>
                          <li>• Positive Gamma Profile</li>
                          <li>• Enhanced Tail Returns</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Portfolio Role:</h4>
                        <p className="text-green-400 font-semibold">
                          Convex alpha generation with asymmetric risk-reward profile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 2 */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-blue-600/20 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">2. Systematic Trend and Short-Term Futures</h3>
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-500">~25%</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      A core allocation is made to short-term quantitative trading programs that use signals derived
                      from momentum, mean reversion, and volatility across global futures markets. These programs are
                      fully systematic and frequently recalibrate based on market conditions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Dynamic notional funding</li>
                          <li>• Orthogonal model suites</li>
                          <li>• Algorithmic execution</li>
                          <li>• High liquidity and risk-targeting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Portfolio Role:</h4>
                        <p className="text-blue-400 font-semibold">
                          Core alpha driver and volatility-managed growth anchor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 3 */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-red-600/20 rounded-lg">
                    <Zap className="h-8 w-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">3. Crisis Alpha and Volatility-Based Models</h3>
                      <Badge className="bg-red-600/20 text-red-400 border-red-500">~20%</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      This segment includes strategies specifically designed to profit from market dislocations,
                      volatility spikes, and systemic stress. Some utilize machine learning to detect early warning
                      signs of corrections.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Long volatility structures</li>
                          <li>• Behavioral sentiment exploitation</li>
                          <li>• Asymmetry in market reactions</li>
                          <li>• Systemic feedback loop detection</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Portfolio Role:</h4>
                        <p className="text-red-400 font-semibold">Volatility hedge, regime insurance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 4 */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-purple-600/20 rounded-lg">
                    <Globe className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        4. Discretionary Global Macro and Thematic Trades
                      </h3>
                      <Badge className="bg-purple-600/20 text-purple-400 border-purple-500">~15%</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Exposure is taken in concentrated macro strategies that focus on key inflection points, market
                      narratives, and macroeconomic catalysts across sovereign bonds, FX, and equity indices.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Top-down views with quantitative overlays</li>
                          <li>• Catalyst-driven timing</li>
                          <li>• Tight risk controls</li>
                          <li>• Dynamic sizing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Portfolio Role:</h4>
                        <p className="text-purple-400 font-semibold">
                          Opportunistic alpha, convexity, fundamental reactivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 5 */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-yellow-600/20 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        5. Volatility Harvesting and Options-Based Income
                      </h3>
                      <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-500">~10%</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      This allocation targets strategies that sell short-dated, deep out-of-the-money options and/or
                      manage volatility spreads with systematic or discretionary overlays.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Premium decay capture</li>
                          <li>• Hedged volatility spreads</li>
                          <li>• VIX overlays and cash buffers</li>
                          <li>• Stop-losses and spread limits</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Portfolio Role:</h4>
                        <p className="text-yellow-400 font-semibold">
                          Steady cashflow, uncorrelated alpha, volatility curve arbitrage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 6 */}
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-orange-600/20 rounded-lg">
                    <Wheat className="h-8 w-8 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">6. Commodity and Ag Macro Alpha</h3>
                      <Badge className="bg-orange-600/20 text-orange-400 border-orange-500">~5%</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      A niche but high-conviction sleeve dedicated to strategies that trade commodities and global ag
                      markets based on deep, fundamental research incorporating supply/demand analysis and geopolitical
                      dynamics.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Energy, metals, agriculture, freight</li>
                          <li>• Physical market knowledge</li>
                          <li>• Weather models and freight trends</li>
                          <li>• Geopolitical dynamics analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Portfolio Role:</h4>
                        <p className="text-orange-400 font-semibold">
                          Fundamental dislocation alpha, non-financial macro exposure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Portfolio Objectives */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">🎯 Portfolio Objectives and Risk Profile</h2>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* CAP Targets */}
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">CAP Forward Targets</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left text-white font-semibold py-4 text-lg">Objective</th>
                        <th className="text-right text-blue-500 font-semibold py-4 text-lg">Target Range</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Annual Return (Net)</td>
                        <td className="text-right text-blue-400 font-semibold text-lg">17–27%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Volatility</td>
                        <td className="text-right text-green-400 font-semibold text-lg">9–14%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Sharpe Ratio</td>
                        <td className="text-right text-purple-400 font-semibold text-lg">1.5–2.5</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Max Annual Drawdown</td>
                        <td className="text-right text-orange-400 font-semibold text-lg">{"< 5%"}</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Gain Frequency</td>
                        <td className="text-right text-green-400 font-semibold text-lg">{"≥ 85%"}</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-lg">Beta to S&P 500</td>
                        <td className="text-right text-gray-400 font-semibold text-lg">0.0 to 0.3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* S&P 500 Historical */}
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-6 text-center">S&P 500 Historical</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left text-white font-semibold py-4 text-lg">Metric</th>
                        <th className="text-right text-gray-400 font-semibold py-4 text-lg">Actual</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Annual Return</td>
                        <td className="text-right text-gray-400 font-semibold text-lg">8.62%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Volatility</td>
                        <td className="text-right text-gray-400 font-semibold text-lg">15.06%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Sharpe Ratio</td>
                        <td className="text-right text-gray-400 font-semibold text-lg">0.56</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Max Annual Drawdown</td>
                        <td className="text-right text-gray-400 font-semibold text-lg">-38.49%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 text-lg">Gain Frequency</td>
                        <td className="text-right text-gray-400 font-semibold text-lg">75.22%</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-lg">Beta to S&P 500</td>
                        <td className="text-right text-gray-400 font-semibold text-lg">1.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Performance Comparison Summary */}
            <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-xl p-6 border border-blue-800/50">
              <h4 className="text-xl font-bold text-white mb-4 text-center">CAP Advantage vs S&P 500</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">2-3x</div>
                  <div className="text-gray-300 text-sm">Higher Returns</div>
                  <div className="text-xs text-gray-400">(17-27% vs 8.62%)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">3-4x</div>
                  <div className="text-gray-300 text-sm">Better Sharpe Ratio</div>
                  <div className="text-xs text-gray-400">(1.5-2.5 vs 0.56)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">Lower Volatility</div>
                  <div className="text-xs text-gray-400">(9-14% vs 15.06%)</div>
                </div>
              </div>
            </div>

            {/* Historical Performance Note */}
            <div className="mt-8 bg-green-900/20 rounded-lg p-6 border border-green-800">
              <h4 className="text-lg font-semibold text-green-400 mb-3">📈 Historical Achievement</h4>
              <p className="text-gray-300 text-sm">
                CAP has historically delivered 25.34% compound annual returns with 11.37% volatility, 100% gain
                frequency, and zero annual losses. Forward targets are conservatively set based on this track record
                while maintaining superior risk-adjusted performance relative to traditional equity markets.
              </p>
            </div>
          </div>
        </section>

        {/* Execution & Portfolio Management */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">🧩 Execution & Portfolio Management</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Dynamic Management</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Dynamic rebalancing based on volatility, correlation, and cross-strategy drawdowns</li>
                  <li>• Overlay controls include trailing stops and portfolio insurance</li>
                  <li>• Real-time stress testing across all positions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Risk Controls</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Volatility budgeting used to scale exposures</li>
                  <li>• Concentration limits and tail risk caps</li>
                  <li>• Holistic portfolio construction blending multiple signal types</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategy Allocation Visualization */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Strategy Allocation Overview</h2>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
                  <span className="text-gray-300">Positive Gamma: Convex Alpha</span>
                </div>
                <span className="text-green-400 font-semibold">Core Strategy</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                  <span className="text-gray-300">Systematic Trend & Futures</span>
                </div>
                <span className="text-blue-500 font-semibold">25%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: "25%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-400 rounded mr-3"></div>
                  <span className="text-gray-300">Crisis Alpha & Volatility</span>
                </div>
                <span className="text-red-400 font-semibold">20%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-red-400 h-3 rounded-full" style={{ width: "20%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-400 rounded mr-3"></div>
                  <span className="text-gray-300">Global Macro & Thematic</span>
                </div>
                <span className="text-purple-400 font-semibold">15%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-purple-400 h-3 rounded-full" style={{ width: "15%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded mr-3"></div>
                  <span className="text-gray-300">Volatility Harvesting</span>
                </div>
                <span className="text-yellow-400 font-semibold">10%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: "10%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-400 rounded mr-3"></div>
                  <span className="text-gray-300">Commodity & Ag Macro</span>
                </div>
                <span className="text-orange-400 font-semibold">5%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-orange-400 h-3 rounded-full" style={{ width: "5%" }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
