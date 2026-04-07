"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Clock,
  DollarSign,
  TrendingUp,
  FileText,
  ClipboardCheck,
  BarChart3,
  Calculator,
  Upload,
  Search,
  FileCheck,
  CircleCheck,
  Shield,
  Lock,
  CheckCircle2,
  Mail,
} from "lucide-react"

export default function PilotPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-teal-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-medium text-teal-300 tracking-wide">
              Free Denial Analysis Pilot
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance leading-tight">
            Find out which denied claims
            <br />
            <span className="text-teal-400">are worth fighting</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300 font-serif leading-relaxed">
            One remittance file. 48 hours. Full picture. Free.
          </p>

          <Button
            size="lg"
            className="mt-10 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-6 text-lg"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request Free Analysis
          </Button>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-slate-700/50 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-teal-400" />
              </div>
              <p className="text-3xl font-bold text-white font-serif">48hrs</p>
              <p className="text-sm text-slate-400 mt-1">Turnaround</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-6 w-6 text-teal-400" />
              </div>
              <p className="text-3xl font-bold text-white font-serif">$0</p>
              <p className="text-sm text-slate-400 mt-1">Cost</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-teal-400" />
              </div>
              <p className="text-3xl font-bold text-white font-serif">10-15%</p>
              <p className="text-sm text-slate-400 mt-1">Avg Revenue Uncollected</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <FileText className="h-6 w-6 text-teal-400" />
              </div>
              <p className="text-3xl font-bold text-white font-serif">1</p>
              <p className="text-sm text-slate-400 mt-1">File Needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-400 mb-3">
              How It Works
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl text-balance">
              Three simple steps to uncover
              <br />
              hidden revenue
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-xl border border-slate-700/50 bg-slate-800/30 p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-slate-900 font-bold text-sm">
                1
              </div>
              <div className="mt-4 flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10">
                  <Upload className="h-7 w-7 text-teal-400" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Upload Your File
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Send us one remittance file (835) via our secure upload. No
                integrations required.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-xl border border-slate-700/50 bg-slate-800/30 p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-slate-900 font-bold text-sm">
                2
              </div>
              <div className="mt-4 flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10">
                  <Search className="h-7 w-7 text-teal-400" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                We Analyze Everything
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our AI scores every denial for appeal viability, maps payer
                patterns, and identifies quick wins.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-xl border border-slate-700/50 bg-slate-800/30 p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-slate-900 font-bold text-sm">
                3
              </div>
              <div className="mt-4 flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10">
                  <FileCheck className="h-7 w-7 text-teal-400" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Get Your Report
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Receive a complete analysis with actionable insights and
                ready-to-use appeal drafts within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-28 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-400 mb-3">
              What You Get
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl text-balance">
              Your complete denial intelligence package
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Deliverable 1 */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
                <ClipboardCheck className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Denial Scorecard
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every denial scored by appeal success likelihood, prioritized
                  so you know exactly where to focus your limited bandwidth.
                </p>
              </div>
            </div>

            {/* Deliverable 2 */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
                <FileText className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Ready-to-Send Appeal Drafts
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pre-written appeal letters customized to each denial reason
                  and payer, ready for your review and submission.
                </p>
              </div>
            </div>

            {/* Deliverable 3 */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
                <BarChart3 className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Payer Breakdown
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Visual breakdown of denials by payer, reason code, and
                  service type to reveal systemic issues and patterns.
                </p>
              </div>
            </div>

            {/* Deliverable 4 */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
                <Calculator className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Recoverable Revenue Estimate
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Dollar-value projection of what you could recover by pursuing
                  the high-probability appeals we identify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-slate-700/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="h-5 w-5 text-teal-400" />
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-5 w-5 text-teal-400" />
              <span className="text-sm font-medium">BAA Ready</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Lock className="h-5 w-5 text-teal-400" />
              <span className="text-sm font-medium">PHI Safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Get Started
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl text-balance">
              Request your free analysis
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Fill out the form below and we will reach out within one business
              day to get your pilot started.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-teal-400/30 bg-teal-500/10 px-8 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/20">
                <CircleCheck className="h-7 w-7 text-teal-400" />
              </div>
              <h3 className="font-serif text-xl font-semibold">
                Thank you for your interest
              </h3>
              <p className="max-w-md text-sm text-slate-400 leading-relaxed">
                We have received your request and will be in touch shortly to
                get your free denial analysis pilot started.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-8"
            >
              <div className="grid gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-slate-300">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Jane Smith"
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-400 focus:ring-teal-400/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="practice" className="text-slate-300">
                    Practice Name
                  </Label>
                  <Input
                    id="practice"
                    placeholder="Acme Medical Group"
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-400 focus:ring-teal-400/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="role" className="text-slate-300">
                    Your Role
                  </Label>
                  <Select required>
                    <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white focus:border-teal-400 focus:ring-teal-400/20">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="billing-manager">
                        Billing Manager
                      </SelectItem>
                      <SelectItem value="revenue-cycle">
                        Revenue Cycle Director
                      </SelectItem>
                      <SelectItem value="practice-admin">
                        Practice Administrator
                      </SelectItem>
                      <SelectItem value="biller">Biller</SelectItem>
                      <SelectItem value="coder">Coder</SelectItem>
                      <SelectItem value="physician">Physician</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-slate-300">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@acmemedical.com"
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-400 focus:ring-teal-400/20"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-8 w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold"
              >
                Request Free Analysis
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-500">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3L9 1L15 3L17 9L15 15L9 17L3 15L1 9L3 3Z"
                    stroke="#0a1628"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M9 5L13 9L9 13L5 9L9 5Z" fill="#0a1628" opacity="0.7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-white">PrismIQ</span>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm text-slate-400">
              <a
                href="https://prismiqlabs.ai"
                className="hover:text-teal-400 transition-colors"
              >
                prismiqlabs.ai
              </a>
              <a
                href="mailto:hello@prismiqlabs.ai"
                className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@prismiqlabs.ai
              </a>
            </div>

            <p className="text-xs text-slate-500 mt-2">
              {"© 2026 PrismIQ Labs. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
