"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PrismLogo } from "@/components/prism-logo"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <PrismLogo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground">
              PrismIQ
            </span>
            <span className="text-xs text-muted-foreground italic hidden sm:block">
              Revenue belongs to the physicians who earned it.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/pilot">Request a Pilot</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
              <Link href="/pilot" onClick={() => setMobileOpen(false)}>Request a Pilot</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
