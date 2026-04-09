"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CircleCheck } from "lucide-react"

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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to transform your billing workflow?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
              Tell us about your team and we will set you up with early access.
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
                We have received your message and will be in touch shortly to
                discuss how PrismIQ can help your billing team.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@hospital.org"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  placeholder="Acme Health Systems"
                />
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Label htmlFor="message">
                  Tell us about your billing challenges
                </Label>
                <Textarea
                  id="message"
                  placeholder="What payer-related challenges does your team face on a daily basis?"
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="mt-8 w-full gap-2">
                <Send className="h-4 w-4" />
                Request Early Access
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
