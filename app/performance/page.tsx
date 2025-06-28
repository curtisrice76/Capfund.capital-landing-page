"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, Target, Shield, Award, Activity, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { PerformanceLayout } from "@/components/performance-layout"

export default function PerformancePage() {
  const [activeView, setActiveView] = useState<"overview" | "market-type" | "risk-metrics" | "sp500-comparison">(
    "overview",
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />
      <PerformanceLayout>
        <div className="container mx-auto px-4 lg:px-6 py-20">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Annual Performance Overview</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track record of consistent, risk-adjusted returns with superior annual performance metrics compared to
              traditional market benchmarks.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveView("overview")}
              variant={activeView === "overview" ? "default" : "outline"}
              className={
                activeView === "overview"
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              }
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance Overview
            </Button>
            <Button
              onClick={() => setActiveView("market-type")}
              variant={activeView === "market-type" ? "default" : "outline"}
              className={
                activeView === "market-type"
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              }
            >
              <Activity className="h-4 w-4 mr-2" />
              Market Type Performance
            </Button>
            <Button
              onClick={() => setActiveView("risk-metrics")}
              variant={activeView === "risk-metrics" ? "default" : "outline"}
              className={
                activeView === "risk-metrics"
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              }
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Risk Metrics
            </Button>
            <Button
              onClick={() => setActiveView("sp500-comparison")}
              variant={activeView === "sp500-comparison" ? "default" : "outline"}
              className={
                activeView === "sp500-comparison"
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              }
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Compared to S&P 500
            </Button>
          </div>

          {/* Performance Overview */}
          {activeView === "overview" && (
            <>
              {/* Key Performance Comparison */}
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP vs S&P 500 Annual Performance</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="text-3xl font-bold text-blue-500 mb-2">25.34%</div>
                      <div className="text-sm text-gray-400 mb-1">CAP Compound RoR</div>
                      <div className="text-lg text-gray-500">vs 8.62% S&P 500</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <Target className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="text-3xl font-bold text-green-400 mb-2">1.97</div>
                      <div className="text-sm text-gray-400 mb-1">CAP Sharpe Ratio</div>
                      <div className="text-lg text-gray-500">vs 0.56 S&P 500</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-purple-400" />
                      </div>
                      <div className="text-3xl font-bold text-purple-400 mb-2">11.37%</div>
                      <div className="text-sm text-gray-400 mb-1">CAP Volatility</div>
                      <div className="text-lg text-gray-500">vs 15.06% S&P 500</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-orange-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <Award className="h-6 w-6 text-orange-400" />
                      </div>
                      <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                      <div className="text-sm text-gray-400 mb-1">CAP Gain Frequency</div>
                      <div className="text-lg text-gray-500">vs 75.22% S&P 500</div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Key Highlights */}
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Annual Performance Highlights</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="bg-green-900/20 border-green-800">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-green-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">Zero Losses</h3>
                      <p className="text-gray-300 text-sm">100% positive return frequency with no losing years</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-900/20 border-blue-800">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-blue-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Superior Returns</h3>
                      <p className="text-gray-300 text-sm">25.34% compound return vs 8.62% for S&P 500</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-purple-900/20 border-purple-800">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-purple-600/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-purple-400 mb-2">Lower Volatility</h3>
                      <p className="text-gray-300 text-sm">24% lower volatility than S&P 500 (11.37% vs 15.06%)</p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </>
          )}

          {/* Market Type Performance */}
          {activeView === "market-type" && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Returns by Market Type</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-green-900/20 border-green-800">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Bull Market</h3>
                    <div className="text-4xl font-bold text-white mb-4">+25–32%</div>
                    <p className="text-gray-300 mb-4">Annual Return</p>
                    <div className="text-sm text-gray-400 space-y-1">
                      <p>2023: +25.13%</p>
                      <p>2024: +32.05%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-red-900/20 border-red-800">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Bear Market</h3>
                    <div className="text-4xl font-bold text-white mb-4">+15.32%</div>
                    <p className="text-gray-300 mb-4">Annual Return</p>
                    <div className="text-sm text-gray-400 space-y-1">
                      <p>2022: +15.32%</p>
                      <p>Max DD: -1.57%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-900/20 border-blue-800">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Sideways Market</h3>
                    <div className="text-4xl font-bold text-white mb-4">+6.64%</div>
                    <p className="text-gray-300 mb-4">YTD 2025</p>
                    <div className="text-sm text-gray-400 space-y-1">
                      <p>Range-bound environment</p>
                      <p>Consistent gains</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Market Type Analysis</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-400 mb-4">Bull Market Performance</h4>
                    <p className="text-gray-300 mb-4">
                      CAP generated exceptional returns during strong equity rallies, with key contributing months
                      including +13.26% (Mar 2024), +5.78% (Mar 2023), and consistent positive returns. The strategy
                      maintained a Sharpe ratio of 1.97 with low S&P 500 correlation of 0.15.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-400 mb-4">Bear Market Performance</h4>
                    <p className="text-gray-300 mb-4">
                      Despite challenging 2022 conditions (rising rates, inflation, broad equity losses), CAP delivered
                      +15.32% with monthly gains of +4.90% (Mar), +3.82% (May), and +4.25% (Jul), demonstrating
                      resilience through diversification.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Sideways Market Performance</h4>
                    <p className="text-gray-300 mb-4">
                      In 2025's range-bound environment, CAP returned +6.64% YTD with gains in Jan (+4.13%), Feb
                      (+1.93%), and Mar (+1.24%), showing ability to harvest returns in indecisive markets.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">Strategy Composition</h4>
                    <p className="text-gray-300 mb-4">
                      CAP's diversified blend of six CTA programs includes momentum/mean reversion, ag macro,
                      gold/currency trend, macro tactical, multi-strategy, and option income components, promoting
                      performance across varied market types.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Risk Metrics */}
          {activeView === "risk-metrics" && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">📊 Risk Metrics Analysis</h2>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* RFR = 1% */}
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Risk Metrics – RFR = 1%</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sharpe Ratio (Arithmetic)</span>
                        <span className="text-blue-400 font-semibold">2.1</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sharpe Ratio (Geometric)</span>
                        <span className="text-green-400 font-semibold">2.4</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sortino Ratio</span>
                        <span className="text-purple-400 font-semibold">9.6</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Treynor Ratio</span>
                        <span className="text-orange-400 font-semibold">0.19</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Calmar Ratio</span>
                        <span className="text-yellow-400 font-semibold">1.9</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Beta to S&P 500</span>
                        <span className="text-red-400 font-semibold">1.29</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Jensen's Alpha</span>
                        <span className="text-green-400 font-semibold">8.9%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actual Month-by-Month RFR */}
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Risk Metrics – Actual Month-by-Month RFR</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sharpe Ratio (Arithmetic)</span>
                        <span className="text-blue-400 font-semibold">1.62</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sortino Ratio</span>
                        <span className="text-purple-400 font-semibold">7.25</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Treynor Ratio</span>
                        <span className="text-orange-400 font-semibold">0.14</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Calmar Ratio</span>
                        <span className="text-yellow-400 font-semibold">1.87</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Beta to S&P 500</span>
                        <span className="text-red-400 font-semibold">1.29</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Jensen's Alpha</span>
                        <span className="text-green-400 font-semibold">0.01%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Risk Metrics Explanations */}
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">📎 Risk Metrics Footnotes</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">Sharpe Ratio (Arithmetic)</h4>
                      <p className="text-gray-300 text-sm">
                        Measures return per unit of total volatility above the RFR. The drop from 2.1 (flat RFR) to 1.62
                        (actual RFR) reflects higher implied opportunity cost from rising short-term Treasury yields.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Sharpe Ratio (Geometric)</h4>
                      <p className="text-gray-300 text-sm">
                        Reflects compounded returns (CAGR). Offers a more realistic view of long-term investor
                        experience, especially with volatility. Only shown under flat RFR due to complications with
                        compounding variable RFRs.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Sortino Ratio</h4>
                      <p className="text-gray-300 text-sm">
                        Focuses solely on downside deviation. Lower when using actual RFR since the threshold for what
                        counts as "bad" months rises with the RFR, increasing downside volatility.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-400 mb-2">Treynor Ratio</h4>
                      <p className="text-gray-300 text-sm">
                        Risk-adjusted return relative to beta. Declines when using actual RFR due to lower average
                        excess return over rising Treasury rates.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-400 mb-2">Calmar Ratio</h4>
                      <p className="text-gray-300 text-sm">
                        Annual return divided by max 12-month drawdown. Stable across both RFR assumptions, since it's
                        less sensitive to small shifts in average return and unaffected by the RFR directly.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-2">Beta to S&P 500</h4>
                      <p className="text-gray-300 text-sm">
                        Unchanged (1.29), as beta reflects co-movement with the S&P 500 and is not influenced by the
                        risk-free rate.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Jensen's Alpha</h4>
                      <p className="text-gray-300 text-sm">
                        Measures excess return unexplained by beta exposure. Drops from 8.9% to near zero under actual
                        RFR, showing that part of the strategy's prior outperformance was absorbed by higher baseline
                        rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* S&P 500 Comparison */}
          {activeView === "sp500-comparison" && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">CAP Fund vs S&P 500 Detailed Analysis</h2>

              {/* Performance Comparison Summary */}
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-gray-800 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Exceptional Outperformance</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  The CAP Fund has demonstrated exceptional performance relative to the S&P 500. Over the evaluation
                  period, the fund achieved a compound annual return of{" "}
                  <span className="text-green-400 font-semibold">25.34%</span>, significantly outperforming the S&P
                  500's <span className="text-gray-400">8.62%</span>. This outperformance is accompanied by a notably
                  lower standard deviation of <span className="text-blue-400 font-semibold">11.37%</span> compared to{" "}
                  <span className="text-gray-400">15.06%</span> for the S&P 500, reflecting more stable returns.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The fund has shown consistent annual gains with a{" "}
                  <span className="text-green-400 font-semibold">100% gain frequency</span>, whereas the S&P 500 had
                  negative returns nearly 25% of the time, including a worst annual loss of{" "}
                  <span className="text-red-400">-38.49%</span>.
                </p>
              </div>

              {/* Key Metrics Comparison */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">CAP Fund Performance</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Compound Annual Return</span>
                        <span className="text-green-400 font-bold text-xl">25.34%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Standard Deviation</span>
                        <span className="text-blue-400 font-semibold">11.37%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sharpe Ratio (1% RFR)</span>
                        <span className="text-purple-400 font-semibold">1.97</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Gain Frequency</span>
                        <span className="text-green-400 font-semibold">100%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Worst Annual Loss</span>
                        <span className="text-green-400 font-semibold">0%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Skewness</span>
                        <span className="text-green-400 font-semibold">+3.04</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Kurtosis</span>
                        <span className="text-blue-400 font-semibold">-40.20</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/80 border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-400 mb-6 text-center">S&P 500 Performance</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Compound Annual Return</span>
                        <span className="text-gray-400 font-bold text-xl">8.62%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Standard Deviation</span>
                        <span className="text-gray-400 font-semibold">15.06%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sharpe Ratio (1% RFR)</span>
                        <span className="text-gray-400 font-semibold">0.56</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Gain Frequency</span>
                        <span className="text-gray-400 font-semibold">75.22%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Worst Annual Loss</span>
                        <span className="text-red-400 font-semibold">-38.49%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Skewness</span>
                        <span className="text-red-400 font-semibold">-0.94</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Kurtosis</span>
                        <span className="text-orange-400 font-semibold">+1.43</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Risk-Return Analysis */}
              <div className="bg-black/60 rounded-2xl p-8 border border-gray-800 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Superior Risk-Adjusted Returns</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-400 mb-4">CAP Fund Advantages</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>
                          <strong>3.5x higher returns</strong> with 25% lower volatility
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>
                          <strong>Sharpe ratio of 1.97</strong> vs 0.56 for S&P 500
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>
                          <strong>100% positive years</strong> with zero annual losses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>
                          <strong>Positive skewness (+3.04)</strong> indicating upside bias
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>
                          <strong>Negative kurtosis (-40.20)</strong> showing minimal tail risk
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-400 mb-4">S&P 500 Limitations</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">×</span>
                        <span>
                          <strong>Lower returns</strong> with higher volatility exposure
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">×</span>
                        <span>
                          <strong>Poor risk-adjusted returns</strong> (Sharpe ratio 0.56)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">×</span>
                        <span>
                          <strong>25% negative years</strong> including severe losses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">×</span>
                        <span>
                          <strong>Negative skewness (-0.94)</strong> showing downside bias
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">×</span>
                        <span>
                          <strong>Positive kurtosis (+1.43)</strong> indicating fat-tailed risk
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Statistical Significance */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Statistical Analysis Summary</h3>
                <p className="text-gray-300 text-lg leading-relaxed text-center">
                  The CAP Fund's Sharpe ratio of <span className="text-purple-400 font-semibold">1.97</span> vastly
                  exceeds the S&P 500's <span className="text-gray-400">0.56</span>, illustrating a superior return per
                  unit of risk. Moreover, positive skewness of{" "}
                  <span className="text-green-400 font-semibold">3.04</span> and negative kurtosis of{" "}
                  <span className="text-blue-400 font-semibold">-40.20</span> highlight a favorable asymmetry in return
                  distribution and minimal tail risk exposure. In contrast, the S&P 500's negative skewness of{" "}
                  <span className="text-red-400">-0.94</span> and positive kurtosis of{" "}
                  <span className="text-orange-400">1.43</span> suggest greater downside asymmetry and fat-tailed risk.
                  Together, these metrics affirm the CAP Fund's ability to deliver strong, consistent, and well-managed
                  returns through various market environments.
                </p>
              </div>
            </section>
          )}

          {/* Disclaimer */}
          <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Important Disclaimers</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                *Past performance does not guarantee future results. All performance figures are based on historical
                data and may not be indicative of future performance.
              </p>
              <p>
                Investment in the fund involves substantial risk and may not be suitable for all investors. Please read
                the offering memorandum carefully before investing.
              </p>
              <p>
                Performance data is net of management fees and expenses. Individual investor returns may vary based on
                timing of investment and redemption. Risk-free rate (RFR) used for Sharpe ratio calculation varies by
                analysis.
              </p>
            </div>
          </section>
        </div>
      </PerformanceLayout>
    </div>
  )
}
