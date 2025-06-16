import { Header } from "@/components/header"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-20">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Investors</h1>
            <div className="bg-black/60 rounded-2xl p-12 border border-gray-800 max-w-2xl mx-auto">
              <p className="text-2xl text-gray-300">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
