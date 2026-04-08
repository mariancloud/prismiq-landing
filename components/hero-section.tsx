"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Check } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-foreground leading-[1.1] text-balance">
              Overturn Denials with Policy-Level Precision
            </h1>
            
            {/* Teal underline accent */}
            <div className="w-16 h-1 bg-primary" />
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Every month, a biller at a small orthopedic or spine surgery practice gets a remittance back from Anthem Blue Cross and makes a quiet decision: is this worth fighting? PrismIQ answers that question before she picks up the phone — and drafts the appeal before she finishes her coffee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base px-8 bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/pilot">Request a Pilot</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 border-foreground/30 text-foreground hover:bg-foreground/10">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>

          {/* Vertical Gradient Line */}
          <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-primary" />

          {/* Right Content - Claims Analysis Card */}
          <div className="relative lg:pl-8">
            <Card className="bg-card border-border shadow-2xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">3 claims analyzed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">2 appealable</span>
                  </div>
                </div>

                {/* Claim 1 */}
                <div className="rounded-lg p-4 space-y-3 border border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">CLM-2024-1847</span>
                    <span className="text-sm text-primary font-medium">Appeal Ready</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Total Knee Arthroplasty</p>
                    <p className="text-sm text-muted-foreground">Anthem Blue Cross</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">$24,000</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">Win Prob </span>
                      <span className="font-semibold text-primary">72%</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-primary-foreground">
                    View Appeal
                  </Button>
                </div>

                {/* Claim 2 */}
                <div className="rounded-lg p-4 space-y-3 border border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">CLM-2024-1901</span>
                    <span className="text-sm text-amber-500 font-medium">In Review</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Cervical Fusion</p>
                    <p className="text-sm text-muted-foreground">UnitedHealthcare</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">$18,500</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">Win Prob </span>
                      <span className="font-semibold text-primary">68%</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center">+ 1 more claim pending analysis</p>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Appeal generated in</span>
                  </div>
                  <span className="font-mono font-semibold text-primary">00:47</span>
                </div>
                
                {/* Progress bar */}
                <div className="h-1 bg-primary/30 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
