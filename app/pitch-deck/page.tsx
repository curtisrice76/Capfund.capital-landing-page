"use client"

import { useEffect } from "react"
import { trackPitchDeckView } from "@/lib/analytics"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Target, BarChart3, AlertTriangle, Download, ExternalLink } from "lucide-react"

export default function InvestmentDeckPage() {
  useEffect(() => {
    trackPitchDeckView()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Collective Alpha Partners:
            <span className="block text-blue-500">Multi-Asset/Strategy Investment Approach</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Collective Alpha Partners is a systematic, actively managed fund designed to generate uncorrelated,
            risk-adjusted alpha through a multi-strategy, multi-asset, and multi-manager framework. The fund aims to
            deliver consistent, tax-efficient returns across all markets and market regimes—bull, bear, or
            sideways—while maintaining a disciplined management approach to maximize capital efficiency.
          </p>

          {/* Pitch Deck Access Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8"
              onClick={() => {
                const element = document.getElementById("embedded-deck")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              View Interactive Pitch Deck
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
              onClick={() => window.open("https://gamma.app/embed/wv14qwb5trxrpoh", "_blank")}
            >
              <Download className="h-5 w-5 mr-2" />
              Open in New Tab
            </Button>
          </div>
        </div>

        {/* Embedded Pitch Deck */}
        <section id="embedded-deck" className="mb-20">
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <div className="flex justify-center">
              <div className="w-full max-w-6xl">
                <iframe
                  src="https://gamma.app/embed/wv14qwb5trxrpoh"
                  style={{
                    width: "100%",
                    height: "700px",
                    border: "none",
                    borderRadius: "12px",
                  }}
                  allow="fullscreen"
                  title="Collective Alpha Partners: Multi-Asset/Strategy Investment Approach"
                  className="shadow-2xl"
                />
              </div>
            </div>

            {/* Deck Navigation Help */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Use arrow keys or click to navigate through the presentation. Press F for fullscreen mode.
              </p>
            </div>
          </div>
        </section>

        {/* Pitch Deck Highlights */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Pitch Deck Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Presentation Topics</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Multi-asset/strategy investment framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Positive Gamma convex alpha generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Five strategic pillars and portfolio construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Performance comparison vs S&P 500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Risk management and fund structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Tax efficiency advantages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Investment Advantages</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>25.34% compound annual returns vs 8.62% S&P 500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Lower volatility with superior risk-adjusted returns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>100% annual gain frequency with zero losing years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Uncorrelated performance across market regimes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Tax-efficient structure with 60/40 treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>$475M collective AUM across 6 managed funds</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disclosure Section */}
        <section className="mb-20">
          <Card className="bg-red-900/20 border-red-800">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3" />
                Disclosure
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">Investment Terms:</h3>
                  <p className="mb-4">
                    This presentation is for informational purposes only and does not constitute an offer to buy or sell
                    securities. Investments in Collective Alpha Partners (CAP) are exclusively available to accredited
                    investors under Regulation D (Rule 506), subject to the Private Placement Memorandum (PPM) terms.
                  </p>

                  <h3 className="font-semibold text-white mb-2">Regulatory Status:</h3>
                  <p>
                    CAP operates as a private investment fund with potential exemption from SEC registration under the
                    Investment Company Act of 1940. Our fund manager, Hoyle Creek Capital, operates either as an Exempt
                    Reporting Adviser (ERA) or Registered Investment Adviser (RIA), in compliance with applicable
                    federal and state regulations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Risk Warning:</h3>
                  <p className="mb-4">
                    Investors should understand that these investments are illiquid, speculative, and carry risk of
                    complete capital loss. While we make forward-looking statements based on careful analysis, actual
                    results may differ significantly due to market conditions, economic shifts, and regulatory changes.
                  </p>

                  <h3 className="font-semibold text-white mb-2">Regulatory Disclaimer:</h3>
                  <p>
                    This investment has not been reviewed, approved, or endorsed by the SEC, FINRA, or any other U.S.
                    regulatory authority. We strongly advise potential investors to conduct thorough due diligence and
                    seek professional financial, legal, and tax counsel before making any investment decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CAP Objective */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Objective</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-gray-900/80 border-gray-800 text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Absolute Returns</h3>
                <p className="text-gray-300 text-sm">
                  Generate positive risk adjusted returns regardless of market direction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Risk Management</h3>
                <p className="text-gray-300 text-sm">Strict drawdown controls across all market conditions.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Low Correlation</h3>
                <p className="text-gray-300 text-sm">Performance independent from traditional market movements.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 text-center">
              <CardContent className="p-6">
                <BarChart3 className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Strategy Integration</h3>
                <p className="text-gray-300 text-sm">Combine complementary approaches for enhanced stability.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <p className="text-gray-300 text-lg leading-relaxed">
              Collective Alpha Partners aims to deliver consistent performance through market cycles. Our
              volatility-managed approach maintains stability during turbulence while capturing upside in favorable
              conditions. We aggregate capital, dispersing across diverse asset classes and investment strategies to
              create optimal portfolio. Our focus is on delivering returns that are independent of traditional market
              exposure through sophisticated investment approaches. This is achieved through active collaboration with
              premier CTAs and investment managers while working alongside strategic capital partners to enable
              institutional-scale capital deployment to achieve the refined granularity of optimization.
            </p>
          </div>
        </section>

        {/* Performance Targets */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Expected Outcomes and Performance Targets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-green-900/20 border-green-800 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">17-27%</div>
                <div className="text-white font-semibold mb-2">Annualized Return</div>
                <div className="text-gray-300 text-sm">Target range for yearly returns</div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border-blue-800 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">&lt;15%</div>
                <div className="text-white font-semibold mb-2">Volatility</div>
                <div className="text-gray-300 text-sm">Expected range of price fluctuations</div>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-800 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">~2.0</div>
                <div className="text-white font-semibold mb-2">Sharpe Ratio</div>
                <div className="text-gray-300 text-sm">Measure of risk-adjusted performance</div>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/20 border-orange-800 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-orange-400 mb-2">&lt;=10%</div>
                <div className="text-white font-semibold mb-2">Max Drawdown</div>
                <div className="text-gray-300 text-sm">Historical maximum loss from peak to trough</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fund Structure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fund Structure</h2>
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800 mb-8">
            <p className="text-gray-300 text-lg text-center mb-8">
              CAP - Collective Alpha Partners, LLC is managed by CAP-GC, LLC
              <br />
              CAP Portfolio consist of 6 managed funds, with collective $475M AUM
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1.5%</div>
                  <div className="text-white font-semibold mb-2">Base Fee</div>
                  <div className="text-gray-300 text-sm">Annual management fee</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">15%</div>
                  <div className="text-white font-semibold mb-2">Standard Carry</div>
                  <div className="text-gray-300 text-sm">Up to 15% return</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">20%</div>
                  <div className="text-white font-semibold mb-2">Higher Carry</div>
                  <div className="text-gray-300 text-sm">On returns above 15%</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* S&P 500 Comparison */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Portfolio vs S&P 500</h2>
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-gray-800">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The CAP Fund has demonstrated exceptional performance relative to the S&P 500. Over the evaluation period,
              the fund achieved a compound annual return of <span className="text-green-400 font-semibold">25.34%</span>
              , significantly outperforming the S&P 500's <span className="text-gray-400">8.62%</span>. This
              outperformance is accompanied by a notably lower standard deviation of{" "}
              <span className="text-blue-400 font-semibold">11.37%</span>
              compared to <span className="text-gray-400">15.06%</span> for the S&P 500, reflecting more stable returns.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The fund has shown consistent annual gains with a{" "}
              <span className="text-green-400 font-semibold">100% gain frequency</span>, whereas the S&P 500 had
              negative returns nearly 25% of the time, including a worst annual loss of
              <span className="text-red-400"> -38.49%</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              The CAP Fund's Sharpe ratio of <span className="text-purple-400 font-semibold">1.97</span> (using a 1%
              risk-free rate) vastly exceeds the S&P 500's <span className="text-gray-400">0.56</span>, illustrating a
              superior return per unit of risk. Moreover, positive skewness of{" "}
              <span className="text-green-400 font-semibold">3.04</span> and negative kurtosis of
              <span className="text-blue-400 font-semibold"> -40.20</span> highlight a favorable asymmetry in return
              distribution and minimal tail risk exposure.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn More?</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss how our investment approach can enhance your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="/performance"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 text-gray-300 hover:bg-gray-800 font-semibold rounded-lg transition-colors"
              >
                View Performance
              </a>
            </div>

            {/* Contact Information */}
            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">For more information</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:curtis@capfund.capital"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                >
                  curtis@capfund.capital
                </a>
                <span className="text-gray-500 hidden sm:inline">/</span>
                <a
                  href="mailto:info@capfund.capital"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                >
                  info@capfund.capital
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
