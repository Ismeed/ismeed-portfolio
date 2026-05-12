"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Trophy, Star, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Award: <Trophy className="h-4 w-4" />,
  Appointment: <ShieldCheck className="h-4 w-4" />,
  Fellowship: <Sparkles className="h-4 w-4" />,
  Certificate: <GraduationCap className="h-4 w-4" />,
  Program: <Star className="h-4 w-4" />,
};

export function Achievements() {
  return (
    <section id="achievements" className="section relative overflow-hidden">
      <div className="absolute -top-32 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="container-prem">
        <div className="max-w-3xl">
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Achievements
          </span>
          <h2 className="section-title">
            Recognition rooted in impact, <br className="hidden md:block" />
            not just ambition.
          </h2>
          <p className="section-subtitle">
            From state-level honors to UN-backed recognition — milestones that
            mark a journey of building, leading, and creating real change.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgb(var(--border))] to-transparent" />

          <div className="space-y-10 md:space-y-14">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.04 }}
                className={`relative grid grid-cols-[40px_1fr] md:grid-cols-2 md:gap-12 items-start ${
                  i % 2 === 0 ? "md:[&>div:first-child]:order-1" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 z-10">
                  <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-[rgb(var(--bg))]">
                    <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-60" />
                  </span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block" />

                {/* Card */}
                <div className={`col-start-2 md:col-start-auto ${i % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right md:order-first"}`}>
                  <div className="card-prem group">
                    <div className={`flex items-center gap-3 ${i % 2 === 0 || true ? "" : "md:flex-row-reverse"}`}>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                        {iconMap[a.type] ?? <Award className="h-4 w-4" />}
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                          {a.year} · {a.type}
                        </div>
                      </div>
                    </div>
                    <h3 className="h-display mt-4 text-xl md:text-2xl leading-tight">
                      {a.title}
                    </h3>
                    <div className="mt-2 text-sm text-muted">{a.org}</div>

                    {a.image && (
                      <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-2xl border border-soft">
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          sizes="(max-width: 768px) 90vw, 40vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
