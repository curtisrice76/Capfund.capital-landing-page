import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Collective Alpha Partners</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic, actively managed fund designed to generate uncorrelated, risk-adjusted alpha through
            innovative multi-strategy, multi-asset, and multi-manager frameworks.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              To deliver consistent, tax-efficient returns that outperform traditional market benchmarks while
              maintaining superior risk management. We achieve this through systematic alpha generation strategies that
              remain uncorrelated to conventional market movements across all market regimes.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance Excellence</h3>
                <p className="text-gray-300 text-sm">
                  Delivering superior risk-adjusted returns through disciplined execution
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Risk Management</h3>
                <p className="text-gray-300 text-sm">
                  Protecting capital through systematic risk controls and diversification
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">
                  Continuously evolving strategies to adapt to changing market conditions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Client Focus</h3>
                <p className="text-gray-300 text-sm">Aligning our success with our investors' long-term objectives</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Overview */}
        <section className="mb-20">
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8">Company Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Investment Philosophy</h3>
                <p className="text-gray-300 mb-6">
                  Our investment philosophy centers on systematic alpha generation through diversified strategies that
                  maintain low correlation to traditional markets. We believe in the power of quantitative analysis
                  combined with disciplined risk management to deliver consistent returns across all market
                  environments.
                </p>

                <h3 className="text-xl font-semibold text-green-400 mb-4">Competitive Advantages</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Multi-strategy approach reducing single-point-of-failure risk
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Systematic processes minimizing emotional decision-making
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Tax-efficient structure optimizing after-tax returns
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Proven track record of consistent performance
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Strategic Focus</h3>
                <p className="text-gray-300 mb-6">
                  We focus on generating positive gamma and uncorrelated alpha through a diversified portfolio of
                  systematic trading strategies. Our multi-manager framework allows us to capture opportunities across
                  various asset classes and market conditions while maintaining strict risk controls.
                </p>

                <h3 className="text-xl font-semibold text-orange-400 mb-4">Key Differentiators</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    100% positive annual returns since inception
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Superior Sharpe ratio of 1.97 vs market benchmarks
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Low volatility with high returns (11.37% std dev)
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Positive skewness indicating favorable risk profile
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn More?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Discover how Collective Alpha Partners can enhance your investment portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="/strategy"
                className="border border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Strategy
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
