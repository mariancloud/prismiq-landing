"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-tight text-balance">
              Overturn Denials with Policy-Level Precision
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Every month, a biller at a small orthopedic or spine surgery practice gets a remittance back from Anthem Blue Cross and makes a quiet decision: is this worth fighting? PrismIQ answers that question before she picks up the phone — and drafts the appeal before she finishes her coffee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/pilot">Request a Pilot</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Claims Analysis Card */}
          <div className="relative">
            <Card className="bg-card border shadow-xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm text-muted-foreground">3 claims analyzed</span>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-0">
                    2 appealable
                  </Badge>
                </div>

                {/* Claim 1 */}
                <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-emerald-500/10 text-emerald-600 border-0 text-xs">
                        CLM-2024-1847
                      </Badge>
                      <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-600">
                        Appeal Ready
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Total Knee Arthroplasty</p>
                    <p className="text-sm text-muted-foreground">Anthem Blue Cross</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">$24,000</span>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Win Prob</p>
                        <p className="font-semibold text-emerald-600">72%</p>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        View Appeal
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Claim 2 */}
                <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-amber-500/10 text-amber-600 border-0 text-xs">
                        CLM-2024-1901
                      </Badge>
                      <Badge variant="outline" className="text-xs border-amber-500 text-amber-600">
                        In Review
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Cervical Fusion</p>
                    <p className="text-sm text-muted-foreground">UnitedHealthcare</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">$18,500</span>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Win Prob</p>
                      <p className="font-semibold text-amber-600">68%</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center">+ 1 more claim pending analysis</p>

                <div className="flex items-center justify-center gap-2 pt-2 border-t">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Appeal generated in</span>
                  <span className="font-mono font-semibold text-primary">00:47</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
