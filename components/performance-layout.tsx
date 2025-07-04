"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PerformanceLayoutProps {
  children: ReactNode
}

export function PerformanceLayout({ children }: PerformanceLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Performance Navigation */}
      <div className="border-b border-gray-800/50 bg-black/60">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center space-x-8 py-4">
            <Link href="/performance">
              <Button
                variant={pathname === "/performance" ? "default" : "ghost"}
                className={
                  pathname === "/performance"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                Annual Performance
              </Button>
            </Link>
            <Link href="/performance/monthly">
              <Button
                variant={pathname === "/performance/monthly" ? "default" : "ghost"}
                className={
                  pathname === "/performance/monthly"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                Monthly Performance
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}
