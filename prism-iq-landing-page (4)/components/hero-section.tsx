import { Button } from "@/components/ui/button"
import { ArrowRight, Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent/5" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium text-primary">
              Now in Early Access
            </span>
          </div>

          <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl md:leading-[1.1]">
            Policy Intelligence for Medical Billing Teams
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Look up payer requirements in seconds, not hours
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8 text-base">
              Get Started
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

          {/* Visual search bar mockup */}
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="rounded-xl border border-border bg-card p-2 shadow-lg shadow-primary/5">
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-3.5">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-left text-sm text-muted-foreground">
                  Search payer policies, coverage rules, appeal precedents...
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 px-2 pb-2">
                {["UnitedHealthcare", "Aetna", "Blue Cross", "Cigna", "Medicare"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
