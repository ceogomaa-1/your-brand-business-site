"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

const bullets = [
  "Premium conversion-focused landing page",
  "Mobile responsive sections and strong CTA flow",
  "Built cleanly by Jarvis OS1 with a deploy-ready Next.js stack",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-sm font-semibold uppercase tracking-[0.28em]">Your Brand</div>
        <a href="#contact" className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)]">
          Start now
        </a>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-muted)]">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" />
            Built from your request
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            A sharper web presence for Your Brand.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            can u please create us a new website for our real estate agency, this is the current website,analyze it, and I need u to build better than it: https://propertypartnersrealestate.ca/
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-black">
              Launch the project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#strategy" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-[var(--text-primary)]">
              View strategy
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-[var(--border)] bg-[linear-gradient(145deg,rgba(200,75,49,0.18),rgba(243,234,217,0.04))] p-8 shadow-2xl">
          <div className="mb-10 h-48 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(200,75,49,0.75),transparent_35%),linear-gradient(135deg,#181818,#050505)]" />
          <div className="space-y-4">
            {bullets.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="strategy" className="border-y border-[var(--border)] bg-[var(--surface)]/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          {["Positioning", "Offer", "Conversion"].map((label, index) => (
            <div key={label} className="rounded-2xl border border-[var(--border)] bg-black/20 p-6">
              <div className="mb-4 text-sm text-[var(--accent)]">0{index + 1}</div>
              <h2 className="text-2xl font-semibold">{label}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                Clear, premium messaging shaped to help visitors understand the value quickly and take action.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">Ready to turn attention into action?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
          This version is the reliable deploy fallback. Jarvis can refine copy, sections, and visuals from here.
        </p>
      </section>
    </main>
  )
}
