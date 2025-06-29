"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { trackGetStartedClick } from "@/lib/analytics"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="border-b border-gray-800/50 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-500 transition-colors">
            Collective Alpha Partners
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            className={`transition-colors ${isActive("/about") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            About
          </Link>
          <Link
            href="/thesis"
            className={`transition-colors ${isActive("/thesis") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Thesis
          </Link>
          <Link
            href="/strategy"
            className={`transition-colors ${isActive("/strategy") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Strategy
          </Link>
          <Link
            href="/tax-efficiency"
            className={`transition-colors ${isActive("/tax-efficiency") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Efficiency
          </Link>
          <Link
            href="/investment"
            className={`transition-colors ${isActive("/investment") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Investments
          </Link>
          <Link
            href="/performance"
            className={`transition-colors ${isActive("/performance") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Performance
          </Link>
          <Link
            href="/team"
            className={`transition-colors ${isActive("/team") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Team
          </Link>
          <Link
            href="/back-office"
            className={`transition-colors ${isActive("/back-office") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Back Office
          </Link>
          <Link
            href="/pitch-deck"
            className={`transition-colors ${isActive("/pitch-deck") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Pitch
          </Link>
          <Link
            href="/investors"
            className={`transition-colors ${isActive("/investors") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Investors
          </Link>
          <Link
            href="/contact"
            className={`transition-colors ${isActive("/contact") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-black/95 border-gray-800">
              <DropdownMenuItem asChild>
                <Link
                  href="/about"
                  className={`w-full ${isActive("/about") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/thesis"
                  className={`w-full ${isActive("/thesis") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Thesis
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/strategy"
                  className={`w-full ${isActive("/strategy") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Strategy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/tax-efficiency"
                  className={`w-full ${isActive("/tax-efficiency") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Efficiency
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/investment"
                  className={`w-full ${isActive("/investment") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Investments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/performance"
                  className={`w-full ${isActive("/performance") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Performance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/team"
                  className={`w-full ${isActive("/team") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/back-office"
                  className={`w-full ${isActive("/back-office") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Back Office
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/pitch-deck"
                  className={`w-full ${isActive("/pitch-deck") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Pitch
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/investors"
                  className={`w-full ${isActive("/investors") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Investors
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/contact"
                  className={`w-full ${isActive("/contact") ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                >
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Link href="/contact" className="hidden md:block">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => trackGetStartedClick("header")}>
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  )
}
