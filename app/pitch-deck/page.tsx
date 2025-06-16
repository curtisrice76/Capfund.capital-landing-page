"use client"

import { useEffect } from "react"
import { trackPitchDeckView } from "@/lib/analytics"
import { Header } from "@/components/header"

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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Pitch Deck</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of our multi-asset/strategy investment approach, performance metrics, and strategic
            framework.
          </p>
        </div>

        {/* Embedded Presentation */}
        <section className="mb-20">
          <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <iframe
                  src="https://gamma.app/embed/wv14qwb5trxrpoh"
                  style={{
                    width: "100%",
                    height: "600px",
                    border: "none",
                    borderRadius: "12px",
                  }}
                  allow="fullscreen"
                  title="Collective Alpha Partners: Multi-Asset/Strategy Investment Approach"
                  className="shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Pitch Deck Highlights</h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Multi-asset/strategy investment framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Historical performance analysis and metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Risk management and portfolio construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Market regime performance analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Investment thesis and strategic outlook</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Consistent alpha generation across market cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Superior risk-adjusted returns with low correlation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Diversified multi-manager approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Systematic risk management framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Tax-efficient structure and operations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn More?</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss how our investment approach can enhance your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </section>
      </div>
    </div>
  )
}
