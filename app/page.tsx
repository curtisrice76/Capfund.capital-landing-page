import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-80 h-80 relative">
              <Image
                src="/images/logo.png"
                alt="Collective Alpha Partners Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="space-y-4 max-w-4xl">
              <Badge variant="outline" className="border-blue-500 text-blue-500 bg-blue-500/10">
                Multi-Asset/Strategy Investment Approach
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Systematic Alpha Generation
                <span className="block text-blue-500">Across All Market Regimes</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Collective Alpha Partners is a systematic, actively managed fund designed to generate uncorrelated,
                risk-adjusted alpha through a multi-strategy, multi-asset, and multi-manager framework.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/strategy">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Collective Alpha Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering consistent, tax-efficient returns through disciplined capital management and systematic
              risk-adjusted strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Uncorrelated Returns</h3>
              <p className="text-gray-300">Generate alpha independent of traditional market movements</p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Risk Management</h3>
              <p className="text-gray-300">Disciplined approach to capital preservation and risk control</p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tax Efficiency</h3>
              <p className="text-gray-300">Optimized structure for maximum after-tax returns</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/strategy">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                Explore Our Strategy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-black/50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Optimize Your Portfolio?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how Collective Alpha Partners can enhance your investment strategy with systematic, risk-adjusted
            alpha generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/performance">
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                View Performance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Collective Alpha Partners. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Disclosures
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
