"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { personal } from "@/lib/data";

const social = [
  { href: personal.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: personal.twitter, icon: Twitter, label: "X" },
  { href: personal.whatsapp, icon: MessageCircle, label: "WhatsApp" },
  { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 md:pt-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 noise pointer-events-none" />
        <div
          className="blob absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-blue-500/25 dark:bg-blue-500/20"
        />
        <div
          className="blob absolute top-1/2 -right-24 h-[460px] w-[460px] rounded-full bg-blue-700/15 dark:bg-blue-600/15"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="blob absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-indigo-500/15 dark:bg-indigo-600/10"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <div className="container-prem">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-soft bg-card px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-muted">
                Available for collaborations & partnerships
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="h-display mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95]"
            >
              Isma&apos;il
              <br />
              <span className="text-gradient">Sa&apos;id.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted"
            >
              {personal.heroText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary">
                View Portfolio <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
                aria-label="Download Resume"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-muted">
                Follow
              </span>
              <div className="h-px flex-1 max-w-12 bg-[rgb(var(--border))]" />
              <div className="flex items-center gap-2">
                {social.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft bg-card transition-all hover:-translate-y-0.5 hover:border-blue-500/50 hover:text-blue-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="relative aspect-[4/5] w-full">
                {/* Glow ring */}
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/40 via-blue-400/10 to-transparent blur-2xl" />

                {/* Frame */}
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-soft glass-card">
                  <Image
                    src="/images/profile/hero-speaking.jpg"
                    alt="Isma'il Sa'id — Founder"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 480px"
                    className="object-cover"
                  />
                  {/* Frame gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating tag */}
                  <div className="absolute left-4 bottom-4 right-4 flex items-center justify-between gap-3 rounded-2xl glass px-4 py-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted">
                        Founder / CEO
                      </div>
                      <div className="text-sm font-semibold">
                        Swifter Ventures LTD
                      </div>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  className="absolute -top-4 -right-4 rounded-2xl glass-card px-4 py-3 shadow-2xl shadow-black/10"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-amber-500">
                      ★
                    </span>
                    <div className="leading-tight">
                      <div className="text-[10px] uppercase tracking-[0.16em] text-muted">
                        UNDP Winner
                      </div>
                      <div className="text-xs font-semibold">2025</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.7 }}
                  className="absolute -bottom-3 -left-5 rounded-2xl glass-card px-4 py-3 shadow-2xl shadow-black/10"
                >
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted">
                    Based in
                  </div>
                  <div className="text-xs font-semibold">Katsina · Nigeria</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted"
        >
          <span>Scroll</span>
          <span className="relative inline-flex h-px w-12 bg-[rgb(var(--border))] overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-1/2 bg-blue-500 animate-pulse" />
          </span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
