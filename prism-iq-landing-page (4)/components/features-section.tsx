import { Search, ShieldAlert, Scale } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Instant Policy Lookup",
    description:
      "Search any payer's requirements in real-time. Get the exact coverage criteria, documentation requirements, and authorization rules you need — all in one place.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldAlert,
    title: "Denial Intelligence",
    description:
      "Understand why claims were denied and what to do next. Our system analyzes denial patterns and surfaces actionable insights to maximize your recovery rate.",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Scale,
    title: "Precedent Tracking",
    description:
      "Learn from past appeals and decisions. Build a living knowledge base of precedents that helps your team write stronger appeals backed by historical outcomes.",
    accent: "bg-primary/10 text-primary",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything your billing team needs
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            PrismIQ centralizes payer intelligence so your team spends less time
            searching and more time getting claims paid.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.accent}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
