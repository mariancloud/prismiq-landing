"use client"

import { useState } from "react"
import { Clock, DollarSign, FileText, TrendingUp, CheckCircle, Shield, Lock, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PilotPage() {
  const [formData, setFormData] = useState({
    name: "",
    practiceName: "",
    role: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-400">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            Free Pilot Program
          </div>
          <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
            Find out which denied claims are worth fighting
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl text-pretty">
            One remittance file. 48 hours. Full picture. Free.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-teal-500 px-8 py-6 text-lg font-medium text-navy-950 hover:bg-teal-400"
              onClick={() =>
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request Free Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-navy-800 bg-navy-900/50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <StatCard icon={Clock} value="48 hrs" label="Turnaround" />
            <StatCard icon={DollarSign} value="$0" label="Cost" />
            <StatCard icon={TrendingUp} value="10-15%" label="Avg Revenue Uncollected" />
            <StatCard icon={FileText} value="1 file" label="Needed" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-semibold text-white md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Three simple steps to uncover your hidden revenue
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <StepCard
              number="1"
              title="Upload Your Remittance File"
              description="Share a single 835 remittance file from any payer. We accept standard EDI formats."
            />
            <StepCard
              number="2"
              title="We Analyze Your Denials"
              description="Our AI reviews every denial code, identifies patterns, and scores appeal potential."
            />
            <StepCard
              number="3"
              title="Receive Your Report"
              description="Within 48 hours, get a comprehensive analysis with actionable recommendations."
            />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-navy-900/50 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-semibold text-white md:text-4xl">
            What You Get
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Comprehensive deliverables to help you recover lost revenue
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <DeliverableCard
              icon={FileCheck}
              title="Denial Scorecard"
              description="A prioritized list of denied claims ranked by appeal success likelihood, denial reason, and dollar value."
            />
            <DeliverableCard
              icon={FileText}
              title="Ready-to-Send Appeal Drafts"
              description="Pre-written appeal letters tailored to specific denial codes and payer requirements."
            />
            <DeliverableCard
              icon={TrendingUp}
              title="Payer Breakdown"
              description="Analysis of denial patterns by payer, revealing which insurance companies are most problematic."
            />
            <DeliverableCard
              icon={DollarSign}
              title="Recoverable Revenue Estimate"
              description="A clear projection of how much revenue you could recover through strategic appeals."
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-semibold text-white md:text-4xl">
            Request Your Free Analysis
          </h2>
          <p className="mx-auto mb-10 max-w-md text-center text-slate-400">
            Fill out the form below and we&apos;ll be in touch within one business day.
          </p>

          {isSubmitted ? (
            <div className="rounded-xl border border-teal-500/30 bg-teal-500/10 p-8 text-center">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-teal-400" />
              <h3 className="mb-2 font-serif text-xl font-semibold text-white">
                Request Received
              </h3>
              <p className="text-slate-300">
                Thank you for your interest. We&apos;ll contact you within one business day to get started.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-navy-700 bg-navy-900 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="practice" className="mb-2 block text-sm font-medium text-slate-300">
                  Practice Name
                </label>
                <Input
                  id="practice"
                  type="text"
                  required
                  value={formData.practiceName}
                  onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                  className="border-navy-700 bg-navy-900 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Your practice or organization"
                />
              </div>
              <div>
                <label htmlFor="role" className="mb-2 block text-sm font-medium text-slate-300">
                  Role
                </label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                >
                  <SelectTrigger className="border-navy-700 bg-navy-900 text-white focus:border-teal-500 focus:ring-teal-500">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="border-navy-700 bg-navy-900">
                    <SelectItem value="billing-manager">Billing Manager</SelectItem>
                    <SelectItem value="practice-administrator">Practice Administrator</SelectItem>
                    <SelectItem value="revenue-cycle-director">Revenue Cycle Director</SelectItem>
                    <SelectItem value="physician">Physician / Provider</SelectItem>
                    <SelectItem value="cfo">CFO / Finance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-navy-700 bg-navy-900 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="you@yourpractice.com"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-500 py-6 text-lg font-medium text-navy-950 hover:bg-teal-400 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Request Free Analysis"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-t border-navy-800 bg-navy-900/50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <TrustBadge icon={Shield} label="HIPAA Compliant" />
            <TrustBadge icon={FileCheck} label="BAA Ready" />
            <TrustBadge icon={Lock} label="PHI Safe" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-800 bg-navy-950 px-4 py-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-serif text-lg font-medium text-white">prismiqlabs.ai</p>
          <a
            href="mailto:hello@prismiqlabs.ai"
            className="mt-2 inline-block text-sm text-slate-400 transition-colors hover:text-teal-400"
          >
            hello@prismiqlabs.ai
          </a>
        </div>
      </footer>
    </div>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="mb-3 h-6 w-6 text-teal-400" />
      <p className="font-serif text-2xl font-semibold text-white md:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="relative rounded-xl border border-navy-700 bg-navy-900/50 p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-lg font-semibold text-teal-400">
        {number}
      </div>
      <h3 className="mb-2 font-serif text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}

function DeliverableCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-navy-700 bg-navy-900/80 p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-500/20">
        <Icon className="h-6 w-6 text-teal-400" />
      </div>
      <div>
        <h3 className="mb-1 font-serif text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  )
}

function TrustBadge({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <div className="flex items-center gap-2 text-slate-400">
      <Icon className="h-5 w-5 text-teal-400" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
