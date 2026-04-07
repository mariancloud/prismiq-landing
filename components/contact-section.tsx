"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CircleCheck, ShieldCheck } from "lucide-react"

const trustBadges = [
  { label: "SOC 2", icon: ShieldCheck },
  { label: "HIPAA", icon: ShieldCheck },
  { label: "BAA Ready", icon: ShieldCheck },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Request a Pilot
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
              Share a sample of your Anthem denied claims. We&apos;ll show you exactly what was recoverable — and return a ready-to-send appeal for your hardest denial within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-accent/30 bg-accent/5 px-8 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <CircleCheck className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Thank you for your interest
              </h3>
              <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                We have received your request and will be in touch within 24 hours to discuss your pilot.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@practice.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Label htmlFor="practice">Practice Name *</Label>
                <Input
                  id="practice"
                  placeholder="Orthopedic Specialists of NY"
                  required
                />
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Label htmlFor="volume">Tell us about your denial volume *</Label>
                <Textarea
                  id="volume"
                  placeholder="How many denials do you process monthly? Which payers are most challenging?"
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="mt-8 w-full gap-2">
                <Send className="h-4 w-4" />
                Request a Pilot
              </Button>

              <div className="mt-8 flex items-center justify-center gap-6">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
                    <badge.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
