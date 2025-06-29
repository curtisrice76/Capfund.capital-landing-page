import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, TrendingUp, Shield, Target, PieChart } from "lucide-react"
import Link from "next/link"

export default function PitchDeckPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Collective Alpha Partners</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400 mb-4">
            Multi-Asset/Strategy Investment Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Collective Alpha Partners is a systematic, actively managed fund designed to generate uncorrelated,
            risk-adjusted alpha through a multi-strategy, multi-asset, and multi-manager framework. The fund aims to
            deliver consistent, tax-efficient returns across all markets and market regimes—bull, bear, or
            sideways—while maintaining a disciplined management approach to maximize capital efficiency.
          </p>
        </div>

        {/* Download Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Access Full Pitch Deck</h2>
            <p className="text-gray-300 mb-6">
              Download our comprehensive investor presentation or contact us for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/deck.pdf" target="_blank">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </span>
                </Button>
              </Link>
              <Link href="mailto:curtis@capfund.capital">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <span className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    curtis@capfund.capital
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CAP Objectives */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Absolute Returns</h3>
                <p className="text-gray-300 text-sm">
                  Generate positive risk adjusted returns regardless of market direction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Risk Management</h3>
                <p className="text-gray-300 text-sm">Strict drawdown controls across all market conditions.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Low Correlation</h3>
                <p className="text-gray-300 text-sm">Performance independent from traditional market movements.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <PieChart className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Strategy Integration</h3>
                <p className="text-gray-300 text-sm">Combine complementary approaches for enhanced stability.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 bg-gray-900/50 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 text-center">
              Collective Alpha Partners aims to deliver consistent performance through market cycles. Our
              volatility-managed approach maintains stability during turbulence while capturing upside in favorable
              conditions. We aggregate capital, dispersing across diverse asset classes and investment strategies to
              create optimal portfolio. Our focus is on delivering returns that are independent of traditional market
              exposure through sophisticated investment approaches.
            </p>
          </div>
        </section>

        {/* Risk and Reward Balance */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Risk and Reward Balance</h2>
            <blockquote className="text-xl text-gray-300 text-center mb-8 italic">
              "The art of investing is finding the right balance between risk and reward." – Benjamin Graham
            </blockquote>
            <p className="text-2xl font-bold text-green-400 text-center mb-8">CAP masters this balance!</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Optimized Returns</h4>
                <p className="text-gray-300 text-sm">Maximize potential gains while managing risk exposure</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Risk Management</h4>
                <p className="text-gray-300 text-sm">Sophisticated systems to protect capital in volatile markets</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Strategic Risk-Taking</h4>
                <p className="text-gray-300 text-sm">Calculated positions to enhance reward potential</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Balanced Approach</h4>
                <p className="text-gray-300 text-sm">Careful calibration of risk-reward ratios across investments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Market Opportunity and Need</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-900/20 border-red-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Traditional Portfolio Limitations</h3>
                <p className="text-gray-300 mb-4">
                  Equity-focused, passive ETF-driven, or single-strategy hedge funds often fail to perform consistently
                  across all market environments. Single-strategy funds are prone to prolonged periods of
                  underperformance with higher risk profiles.
                </p>
                <h4 className="text-lg font-semibold text-white mb-3">Key Market Gaps Addressed</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Diversification challenges due to increasing asset correlation</li>
                  <li>• Systematic drawdowns in single-strategy funds</li>
                  <li>• Higher risk profiles</li>
                  <li>• Tax efficiency challenges in traditional vehicles</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-green-900/20 border-green-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Expanded Investment Summary Thesis</h3>
                <p className="text-gray-300">
                  This portfolio is a multi-manager investment construct designed to deliver absolute, risk-adjusted
                  returns with low correlation to traditional markets. The fund sources alpha from across a broad
                  spectrum of uncorrelated and diversifying investment strategies, targeting systematic inefficiencies,
                  behavioral patterns, macro dislocations, and volatility premiums.
                </p>
                <p className="text-gray-300 mt-4">
                  Each strategy is institutionally vetted, employs robust risk controls, and is selected for its ability
                  to generate consistent performance across different market regimes. The overarching goal is to combine
                  these strategies into a single, volatility-managed, drawdown-aware fund that performs through trend,
                  chop, crisis, and recovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CAP Portfolio: Five Strategic Pillars */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Portfolio: Five Strategic Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-blue-900/20 border-blue-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Systematic Trend</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Short-term quantitative trading programs using momentum and volatility signals across global futures.
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Dynamic notional funding</li>
                  <li>• Algorithmic execution</li>
                  <li>• Low equity correlation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-red-900/20 border-red-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">Crisis Alpha</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Strategies designed to profit from market dislocations and volatility spikes.
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Long volatility positioning</li>
                  <li>• Machine learning detection</li>
                  <li>• Tail risk hedging</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-green-900/20 border-green-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Global Macro</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Concentrated strategies focusing on inflection points across bonds, FX, and equity indices.
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Catalyst-driven timing</li>
                  <li>• Quantitative overlays</li>
                  <li>• Policy shift opportunism</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-purple-900/20 border-purple-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Volatility & Commodity</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Options-based income and commodity/ag trading provide steady returns and macro exposure.
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Premium decay capture</li>
                  <li>• Supply/demand analysis</li>
                  <li>• Uncorrelated alpha streams</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-20">
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">For More Information</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:curtis@capfund.capital">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                  <span className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    curtis@capfund.capital
                  </span>
                </Button>
              </Link>
              <Link href="mailto:info@capfund.capital">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <span className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@capfund.capital
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Important Disclosures</h3>
          <div className="text-sm text-gray-400 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Investment Terms:</h4>
              <p>
                This presentation is for informational purposes only and does not constitute an offer to buy or sell
                securities. Investments in Collective Alpha Partners (CAP) are exclusively available to accredited
                investors under Regulation D (Rule 506), subject to the Private Placement Memorandum (PPM) terms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Regulatory Status:</h4>
              <p>
                CAP operates as a private investment fund with potential exemption from SEC registration under the
                Investment Company Act of 1940. Our fund manager, Hoyle Creek Capital, operates either as an Exempt
                Reporting Adviser (ERA) or Registered Investment Adviser (RIA), in compliance with applicable federal
                and state regulations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Risk Warning:</h4>
              <p>
                Investors should understand that these investments are illiquid, speculative, and carry risk of complete
                capital loss. While we make forward-looking statements based on careful analysis, actual results may
                differ significantly due to market conditions, economic shifts, and regulatory changes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Regulatory Disclaimer:</h4>
              <p>
                This investment has not been reviewed, approved, or endorsed by the SEC, FINRA, or any other U.S.
                regulatory authority. We strongly advise potential investors to conduct thorough due diligence and seek
                professional financial, legal, and tax counsel before making any investment decisions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
