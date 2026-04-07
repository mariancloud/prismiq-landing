import { Upload, Brain, FileText, Clock, Building2, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    number: "01",
    title: "Connect your ERA/835 feed",
    description:
      "Upload denied claims or connect your ERA/835 feed directly. We accept all major clearinghouse formats.",
    icon: Upload,
  },
  {
    number: "02",
    title: "PrismIQ analyzes payer policy",
    description:
      "Our AI cross-references the denial reason code against current payer policy language and medical necessity criteria.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Receive your appeal letter",
    description:
      "You receive a policy-cited, ready-to-send appeal letter within 24 hours. No templates — constructed arguments.",
    icon: FileText,
  },
]

const highlights = [
  {
    icon: Building2,
    text: "Built for orthopedic + spine billing teams",
  },
  {
    icon: Clock,
    text: "24-hour appeal turnaround",
  },
  {
    icon: Shield,
    text: "Anthem, UHC, Aetna policy coverage",
  },
]

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
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
              <span className="absolute -top-4 left-8 font-display text-5xl font-bold text-primary/10">
                {step.number}
              </span>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
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

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {highlights.map((highlight) => (
            <Badge
              key={highlight.text}
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              <highlight.icon className="h-4 w-4 text-primary" />
              {highlight.text}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
