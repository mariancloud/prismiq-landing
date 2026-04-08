import { Upload, Brain, FileCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Connect your ERA/835 feed",
    description:
      "Upload denied claims or connect your ERA/835 feed directly. We accept all major clearinghouse formats.",
  },
  {
    number: "02",
    icon: Brain,
    title: "PrismIQ analyzes payer policy",
    description:
      "Our AI cross-references the denial reason code against current payer policy language and medical necessity criteria.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Receive your appeal letter",
    description:
      "You receive a policy-cited, ready-to-send appeal letter within 24 hours. No templates — constructed arguments.",
  },
]

const highlights = [
  "Built for orthopedic + spine billing teams",
  "24-hour appeal turnaround",
  "Anthem, UHC, Aetna policy coverage",
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            From denied claim to appeal letter in three simple steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="font-display text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
              </div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
