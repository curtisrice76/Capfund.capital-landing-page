import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, Globe, Wheat, Zap, Target, DollarSign } from "lucide-react"
import { Header } from "@/components/header"

export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Investment Strategies</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            CAP Portfolio consists of 6 specialized managed funds with collective $457M AUM, leveraging diverse
            expertise across asset classes and strategies to deliver uncorrelated alpha through systematic and
            discretionary methodologies.
          </p>

          {/* AUM Highlight */}
          <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-xl p-6 border border-blue-800/50 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <DollarSign className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-3xl font-bold text-white">$457M</div>
                <div className="text-gray-300">Collective Assets Under Management</div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Cards */}
        <div className="space-y-12">
          {/* Adalpha Asset Management */}
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-blue-600/20 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Adalpha Asset Management, LLC</h3>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500">Systematic Futures</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500">Fund 1 of 6</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">Adalpha Core Program</h4>
                  <p className="text-gray-300 mb-6">
                    A fully systematic, multi-asset strategy launched in 2006, the Core Program targets short- to
                    medium-term market trends using a blend of momentum, mean reversion, and volatility signals. Trading
                    currencies, rates, energy, and equities, the strategy seeks to deliver consistent returns
                    uncorrelated to traditional assets.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Inception</div>
                      <div className="text-white font-semibold">Dec 1, 2006</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">YTD Return</div>
                      <div className="text-green-400 font-semibold">2.35%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Sharpe Ratio</div>
                      <div className="text-blue-400 font-semibold">0.71</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">CAROR</div>
                      <div className="text-green-400 font-semibold">9.64%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Max Drawdown</div>
                      <div className="text-red-400 font-semibold">-16.84%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">S&P Correlation</div>
                      <div className="text-purple-400 font-semibold">-0.20</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Momentum
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Counter-trend
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Trend-following
                    </Badge>
                    <Badge variant="outline" className="border-blue-600 text-blue-400">
                      100% Systematic
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opus Futures */}
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-green-600/20 rounded-lg">
                  <Wheat className="h-8 w-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Opus Futures LLC</h3>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500">Agricultural Futures</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500">Fund 2 of 6</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Advanced Ag Futures Trading Program</h4>
                  <p className="text-gray-300 mb-6">
                    This discretionary futures program specializes in the agricultural markets, blending weather
                    analysis, supply/demand modeling, and direct cash market insights. The strategy focuses primarily on
                    grains and oilseeds, with secondary attention to livestock.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Inception</div>
                      <div className="text-white font-semibold">Feb 1, 2011</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">YTD Return</div>
                      <div className="text-red-400 font-semibold">-3.40%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Sharpe Ratio</div>
                      <div className="text-blue-400 font-semibold">0.46</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">CAROR</div>
                      <div className="text-green-400 font-semibold">10.26%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Max Drawdown</div>
                      <div className="text-red-400 font-semibold">-50.66%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">S&P Correlation</div>
                      <div className="text-purple-400 font-semibold">0.03</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      100% Fundamental
                    </Badge>
                    <Badge variant="outline" className="border-orange-600 text-orange-400">
                      100% Discretionary
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Insch Kintore */}
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-yellow-600/20 rounded-lg">
                  <Globe className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Insch Kintore Ltd</h3>
                    <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-500">Gold vs. FX</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500">Fund 3 of 6</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-yellow-400 mb-4">Cross Border Kintore</h4>
                  <p className="text-gray-300 mb-6">
                    A fully systematic, trend-based program trading gold against a diversified basket of global
                    currencies. The model utilizes breakout signals, volatility triggers, and momentum filters to
                    exploit relative value trends in the FX markets.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Inception</div>
                      <div className="text-white font-semibold">Jan 1, 2015</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">YTD Return</div>
                      <div className="text-green-400 font-semibold">10.58%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Sharpe Ratio</div>
                      <div className="text-blue-400 font-semibold">0.43</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">CAROR</div>
                      <div className="text-green-400 font-semibold">9.51%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Max Drawdown</div>
                      <div className="text-red-400 font-semibold">-40.44%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">S&P Correlation</div>
                      <div className="text-purple-400 font-semibold">-0.06</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      100% Trend-Following
                    </Badge>
                    <Badge variant="outline" className="border-blue-600 text-blue-400">
                      100% Systematic
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ahead Capital Management */}
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-purple-600/20 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Ahead Capital Management LLC</h3>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500">Global Macro</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500">Fund 4 of 6</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">Global Macro Tactical Opportunities</h4>
                  <p className="text-gray-300 mb-6">
                    This global macro strategy capitalizes on directional opportunities across equity, rates, FX, and
                    commodity markets. Focused on macroeconomic inflection points, the strategy concentrates on 1–2
                    high-conviction themes at a time.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Inception</div>
                      <div className="text-white font-semibold">Feb 1, 2020</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">YTD Return</div>
                      <div className="text-green-400 font-semibold">4.93%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Sharpe Ratio</div>
                      <div className="text-blue-400 font-semibold">0.87</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">CAROR</div>
                      <div className="text-green-400 font-semibold">12.11%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Max Drawdown</div>
                      <div className="text-red-400 font-semibold">-10.07%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">S&P Correlation</div>
                      <div className="text-purple-400 font-semibold">0.10</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Event-Driven
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Directional Macro
                    </Badge>
                    <Badge variant="outline" className="border-orange-600 text-orange-400">
                      100% Discretionary
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Le Mans Trading */}
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-red-600/20 rounded-lg">
                  <Zap className="h-8 w-8 text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Le Mans Trading LLC</h3>
                    <Badge className="bg-red-600/20 text-red-400 border-red-500">Options Strategy</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500">Fund 5 of 6</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-red-400 mb-4">Hyperion Fund</h4>
                  <p className="text-gray-300 mb-6">
                    A low-volatility, options-based fund built around five distinct, model-driven strategies. Focused on
                    S&P 500 and volatility-linked instruments, the strategy seeks to deliver consistent return streams
                    while minimizing downside exposure.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Inception</div>
                      <div className="text-white font-semibold">Sep 1, 2020</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">YTD Return</div>
                      <div className="text-green-400 font-semibold">5.68%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Sharpe Ratio</div>
                      <div className="text-blue-400 font-semibold">3.57</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">CAROR</div>
                      <div className="text-green-400 font-semibold">8.59%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Max Drawdown</div>
                      <div className="text-green-400 font-semibold">-1.67%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">S&P Correlation</div>
                      <div className="text-purple-400 font-semibold">-0.02</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      100% Option-Spread
                    </Badge>
                    <Badge variant="outline" className="border-blue-600 text-blue-400">
                      100% Systematic
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Buckingham Global Advisors */}
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-orange-600/20 rounded-lg">
                  <Target className="h-8 w-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Buckingham Global Advisors, LLC</h3>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500">S&P Options</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500">Fund 6 of 6</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-400 mb-4">Strategic Emini Program (SEP)</h4>
                  <p className="text-gray-300 mb-6">
                    This strategy trades short-dated put spreads on the E-mini S&P 500 using a systematic framework.
                    With over 18 years of tested model logic, the approach emphasizes precision timing and structured
                    exits with automated risk parameters.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Inception</div>
                      <div className="text-white font-semibold">Nov 1, 2018</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">YTD Return</div>
                      <div className="text-green-400 font-semibold">2.35%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Sharpe Ratio</div>
                      <div className="text-blue-400 font-semibold">1.07</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">CAROR</div>
                      <div className="text-green-400 font-semibold">9.18%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Max Drawdown</div>
                      <div className="text-red-400 font-semibold">-13.31%</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">S&P Correlation</div>
                      <div className="text-purple-400 font-semibold">0.49</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Option-Writing
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Option-Spread
                    </Badge>
                    <Badge variant="outline" className="border-blue-600 text-blue-400">
                      80% Systematic
                    </Badge>
                    <Badge variant="outline" className="border-orange-600 text-orange-400">
                      20% Discretionary
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Statistics */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Portfolio Overview</h2>
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">6</div>
                <div className="text-gray-300">Managed Funds</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">$457M</div>
                <div className="text-gray-300">Collective AUM</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">-0.02</div>
                <div className="text-gray-300">Avg S&P Correlation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">9.7%</div>
                <div className="text-gray-300">Avg CAROR</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 text-lg">
                Collective Alpha Partners manages six specialized investment funds working in concert to deliver
                diversified, uncorrelated alpha generation across multiple asset classes and market conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-20 bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Important Investment Disclaimers</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              *Past performance does not guarantee future results. All performance figures are based on historical data
              and may not be indicative of future performance.
            </p>
            <p>
              Investment in these strategies involves substantial risk and may not be suitable for all investors. Please
              read the offering memorandum carefully before investing.
            </p>
            <p>
              Performance data is net of management fees and expenses. Individual investor returns may vary based on
              timing of investment and redemption. CAROR = Compound Annual Rate of Return. AUM figures as of latest
              reporting period.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
