"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle, FileText } from "lucide-react"

const claims = [
  {
    id: "CLM-2024-1847",
    status: "Appeal Ready",
    procedure: "Total Knee Arthroplasty",
    payer: "Anthem Blue Cross",
    amount: "$24,000",
    winProb: 72,
  },
  {
    id: "CLM-2024-1901",
    status: "In Review",
    procedure: "Cervical Fusion",
    payer: "UnitedHealthcare",
    amount: "$18,500",
    winProb: 68,
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent/5" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl md:leading-[1.1]">
              Overturn Denials with Policy-Level Precision
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Every month, a biller at a small orthopedic or spine surgery practice gets a remittance back from Anthem Blue Cross and makes a quiet decision: is this worth fighting? PrismIQ answers that question before she picks up the phone — and drafts the appeal before she finishes her coffee.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 px-8 text-base">
                Request a Pilot
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-8 text-base"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right column - Claims dashboard mockup */}
          <div className="relative">
            <div className="rounded-xl border border-border bg-card p-6 shadow-lg shadow-primary/5">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-foreground">3 claims analyzed</span>
                </div>
                <span className="text-sm text-accent font-medium">2 appealable</span>
              </div>

              {/* Claims list */}
              <div className="space-y-4">
                {claims.map((claim) => (
                  <div
                    key={claim.id}
                    className="rounded-lg border border-border bg-secondary/30 p-4"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-muted-foreground">{claim.id}</span>
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                            claim.status === "Appeal Ready" 
                              ? "bg-accent/10 text-accent" 
                              : "bg-primary/10 text-primary"
                          }`}>
                            {claim.status === "Appeal Ready" ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                            {claim.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-foreground">{claim.procedure}</p>
                        <p className="text-xs text-muted-foreground">{claim.payer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-foreground">{claim.amount}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Win Prob</span>
                        <span className="text-sm font-semibold text-accent">{claim.winProb}%</span>
                      </div>
                      {claim.status === "Appeal Ready" && (
                        <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                          <FileText className="h-3 w-3" />
                          View Appeal
                        </Button>
                      )}
                    </div>
                  </div>
                ))}

                {/* More claims indicator */}
                <div className="text-center py-2">
                  <span className="text-xs text-muted-foreground">+ 1 more claim pending analysis</span>
                </div>
              </div>

              {/* Appeal generation time */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-2">
                <span className="text-xs text-muted-foreground">Appeal generated in</span>
                <span className="font-mono text-sm font-semibold text-primary">00:47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
