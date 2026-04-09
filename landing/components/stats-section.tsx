const stats = [
  { value: "3.2s", label: "Average lookup time" },
  { value: "40%", label: "Fewer initial denials" },
  { value: "2.5x", label: "Faster appeal turnaround" },
  { value: "850+", label: "Payer policies indexed" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-secondary/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
