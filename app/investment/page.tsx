import { Card, CardContent } from "@/components/ui/card"

export default function InvestmentPage() {
  return (
    <div className="container py-24">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Investment Opportunities</h1>
        <p className="text-lg text-gray-300 text-center">
          Explore exclusive investment opportunities with Collective Alpha Partners.
        </p>
      </section>

      {/* Fund Structure */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Fund Structure</h2>
        <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Entity Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Fund Entity</span>
                  <span className="text-white font-semibold">Collective Alpha Partners, LLC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Management Company</span>
                  <span className="text-white font-semibold">CAP-GC, LLC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Portfolio Composition</span>
                  <span className="text-white font-semibold">6 Managed Funds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Collective AUM</span>
                  <span className="text-white font-semibold">$475 Million</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6">Portfolio Overview</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  CAP operates a diversified portfolio structure consisting of six specialized managed funds, each
                  targeting specific market opportunities and risk profiles.
                </p>
                <p className="text-gray-300">
                  This multi-fund approach allows for enhanced diversification, specialized expertise, and optimized
                  risk-adjusted returns across different market conditions.
                </p>
                <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-lg p-4 mt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$475M</div>
                    <div className="text-gray-300">Total Assets Under Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Fee Structure</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-black/60 border-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Base Fee</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-500 mb-2">1.5%</div>
                <div className="text-lg text-gray-300">Annual Management Fee</div>
              </div>
              <p className="text-gray-300 mb-4">Standard annual management fee structure:</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Calculated on net asset value</li>
                <li>• Covers operational expenses</li>
                <li>• Includes research and technology</li>
                <li>• Risk management and compliance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Standard Carry</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-500 mb-2">15%</div>
                <div className="text-lg text-gray-300">Up to 15% Returns</div>
              </div>
              <p className="text-gray-300 mb-4">15% performance fee on returns up to 15%:</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Applied to net profits</li>
                <li>• High water mark protection</li>
                <li>• Calculated annually</li>
                <li>• Crystallized upon redemption</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Higher Carry</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-500 mb-2">20%</div>
                <div className="text-lg text-gray-300">Above 15% Returns</div>
              </div>
              <p className="text-gray-300 mb-4">20% performance fee on excess returns:</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Higher rate on excess returns</li>
                <li>• Rewards exceptional performance</li>
                <li>• Aligns interests with investors</li>
                <li>• Incentivizes alpha generation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Fee Structure Summary */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Tiered Performance Fee Structure</h3>
          <p className="text-gray-300 text-center mb-6">
            Our innovative fee structure is designed to align our interests with investor success, featuring competitive
            rates for standard returns and enhanced incentives for exceptional performance.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">Standard Tier</div>
              <div className="text-gray-300">Returns up to 15% annually</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Performance Tier</div>
              <div className="text-gray-300">Returns exceeding 15% annually</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
