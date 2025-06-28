import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Calculator, Building, TrendingUp, Shield, Globe, Users, Award, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"

export default function BackOfficePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Back Office Operations</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            CAP partners with industry-leading service providers to ensure robust operational infrastructure, regulatory
            compliance, and institutional-grade fund administration across all aspects of our investment operations.
          </p>
        </div>

        {/* Service Providers Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Professional Service Network</h2>
            <p className="text-gray-300 text-lg text-center mb-8">
              Our operational excellence is supported by established, reputable firms with decades of experience serving
              the alternative investment industry.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <Scale className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Legal Counsel</h3>
                  <p className="text-gray-300 text-sm">Clark Hill</p>
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-500 mt-2">Est. 1890</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <Calculator className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Auditor</h3>
                  <p className="text-gray-300 text-sm">Ryan & Juraska LLP</p>
                  <Badge className="bg-green-600/20 text-green-400 border-green-500 mt-2">Est. 1991</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <Building className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Administrator</h3>
                  <p className="text-gray-300 text-sm">Formidium Corp</p>
                  <Badge className="bg-purple-600/20 text-purple-400 border-purple-500 mt-2">$28B+ AUA</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800 text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Clearing House</h3>
                  <p className="text-gray-300 text-sm">ADM Investor Services</p>
                  <Badge className="bg-orange-600/20 text-orange-400 border-orange-500 mt-2">58+ Years</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Counsel */}
        <section className="mb-20">
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-blue-600/20 rounded-lg">
                  <Scale className="h-8 w-8 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Legal Counsel: Clark Hill</h3>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500">Established 1890</Badge>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    Clark Hill is a law firm established in 1890 with over 750 attorneys across the United States,
                    Ireland, and Mexico. The firm provides comprehensive legal services with deep expertise in financial
                    services regulation and alternative investment structures.
                  </p>

                  <div className="bg-black/40 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Our Attorney: William Bolotin</h4>
                    <p className="text-gray-300 mb-4">
                      William Bolotin's practice has been concentrated in futures regulation and managed funds for over
                      30 years. Bill advises futures industry registrants on compliance with exchange, Commodity Futures
                      Trading Commission (CFTC) and National Futures Association (NFA) rules and regulations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Expertise Areas:</h5>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• CFTC & NFA Compliance</li>
                          <li>• Futures Regulation</li>
                          <li>• Managed Fund Structures</li>
                          <li>• Exchange Rules & Regulations</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Experience:</h5>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• 30+ Years Futures Industry</li>
                          <li>• Regulatory Compliance Specialist</li>
                          <li>• Alternative Investment Expert</li>
                          <li>• Industry Registration Advisor</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">750+</div>
                      <div className="text-gray-300 text-sm">Attorneys</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">130+</div>
                      <div className="text-gray-300 text-sm">Years Experience</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">Global</div>
                      <div className="text-gray-300 text-sm">Presence</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Auditor */}
        <section className="mb-20">
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-green-600/20 rounded-lg">
                  <Calculator className="h-8 w-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Auditor: Ryan & Juraska LLP</h3>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500">Founded 1991</Badge>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    Ryan & Juraska LLP was founded in 1991 by Philip C. Ryan and Alan R. Juraska. At Ryan & Juraska LLP,
                    we take pride in providing audit, tax, and consulting services to the international securities and
                    derivatives industry.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-xl font-semibold text-green-400 mb-4">Service Specializations</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Securities & Derivatives Industry Audits</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Alternative Investment Fund Auditing</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Tax Planning & Compliance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Financial Consulting Services</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-400 mb-4">Industry Focus</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Commodity Trading Advisors (CTAs)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Hedge Funds & Private Funds</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Futures Commission Merchants</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Investment Advisers</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-800">
                    <p className="text-green-300 font-semibold text-center">
                      Specialized expertise in international securities and derivatives industry with 30+ years of
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fund Administrator */}
        <section className="mb-20">
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-purple-600/20 rounded-lg">
                  <Building className="h-8 w-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Fund Administrator: Formidium Corp</h3>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500">Global Leader</Badge>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    Formidium Corp is a leading global fund administrator specializing in alternative investment funds.
                    They are one of the leading fund administrators globally serving alternative investment funds. Since
                    2016, the firm has built a global presence with offices in the U.S., India, Canada, Singapore and UK
                    supporting 600+ clients, 1,700+ multi-asset funds, and managing $28B+ in assets under administration
                    (AUA) across 25+ jurisdictions.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">600+</div>
                      <div className="text-gray-300 text-sm">Clients Served</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">1,700+</div>
                      <div className="text-gray-300 text-sm">Multi-Asset Funds</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">$28B+</div>
                      <div className="text-gray-300 text-sm">Assets Under Admin</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                      <div className="text-gray-300 text-sm">Jurisdictions</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-purple-400 mb-4">Global Presence</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-purple-600 text-purple-400">
                          United States
                        </Badge>
                        <Badge variant="outline" className="border-purple-600 text-purple-400">
                          India
                        </Badge>
                        <Badge variant="outline" className="border-purple-600 text-purple-400">
                          Canada
                        </Badge>
                        <Badge variant="outline" className="border-purple-600 text-purple-400">
                          Singapore
                        </Badge>
                        <Badge variant="outline" className="border-purple-600 text-purple-400">
                          United Kingdom
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-purple-400 mb-4">Service Excellence</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Alternative Investment Fund Specialization</li>
                        <li>• Multi-Asset Fund Administration</li>
                        <li>• Cross-Border Regulatory Expertise</li>
                        <li>• Institutional-Grade Operations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Clearing House */}
        <section className="mb-20">
          <Card className="bg-gray-900/80 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-orange-600/20 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Clearing House: ADM Investor Services</h3>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500">58+ Years</Badge>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    For more than 58 years, ADM Investor Services (ADMIS) has been a leader in the futures industry
                    providing comprehensive brokerage services to institutional, commercial and retail clients.
                    Headquartered in Chicago, Illinois, ADMIS is a registered Futures Commission Merchant supported by a
                    network of affiliated brokers and sister companies across the United States and around the globe.
                  </p>

                  <div className="bg-black/40 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-semibold text-orange-400 mb-4">Comprehensive Services</h4>
                    <p className="text-gray-300 mb-4">
                      Together, we provide swift and accurate trade execution and clearing services, insightful market
                      analysis and risk management strategies with exceptional customer service to our clients in this
                      24/7 marketplace.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-orange-400 mb-4">Service Capabilities</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Swift & Accurate Trade Execution</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Professional Clearing Services</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Insightful Market Analysis</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Risk Management Strategies</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-orange-400 mb-4">Client Base</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <Users className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Institutional Clients</span>
                        </li>
                        <li className="flex items-start">
                          <Building className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Commercial Entities</span>
                        </li>
                        <li className="flex items-start">
                          <Globe className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Global Network Coverage</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>24/7 Marketplace Support</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-orange-900/20 rounded-lg p-4 border border-orange-800">
                    <p className="text-orange-300 font-semibold text-center">
                      Registered Futures Commission Merchant with 58+ years of industry leadership and global reach
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Operational Excellence Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Operational Excellence</h2>
            <p className="text-gray-300 text-lg text-center mb-8">
              CAP's back office infrastructure is built on partnerships with industry leaders, ensuring
              institutional-grade operations, regulatory compliance, and investor protection across all aspects of fund
              management.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Regulatory Compliance</h3>
                <p className="text-gray-300 text-sm">
                  Expert legal counsel with 30+ years futures regulation experience
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-green-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Financial Integrity</h3>
                <p className="text-gray-300 text-sm">Specialized auditing firm with derivatives industry expertise</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-purple-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fund Administration</h3>
                <p className="text-gray-300 text-sm">Global administrator managing $28B+ across 25+ jurisdictions</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-orange-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Trade Execution</h3>
                <p className="text-gray-300 text-sm">58+ years of futures industry leadership and 24/7 support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Service Provider Disclaimers</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              *Information about service providers is based on publicly available information and their own marketing
              materials. CAP does not guarantee the accuracy of third-party information.
            </p>
            <p>
              Service provider relationships are subject to change. Current arrangements are outlined in fund documents
              and may be updated as operational needs evolve.
            </p>
            <p>
              All service providers are independently selected based on their expertise, reputation, and ability to
              serve CAP's operational requirements and investor interests.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
