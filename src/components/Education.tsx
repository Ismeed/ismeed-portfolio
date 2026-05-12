"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-prem">
        <div className="max-w-3xl">
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Education
          </span>
          <h2 className="section-title">
            Built on a strong academic foundation.
          </h2>
          <p className="section-subtitle">
            From early excellence to advanced software engineering — a
            consistent track record of academic distinction and applied
            innovation.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[rgb(var(--border))] to-transparent" />
          <div className="space-y-6">
            {education.map((e, i) => (
              <motion.div
                key={e.school}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="relative pl-16"
              >
                <span className="absolute left-0 top-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="card-prem">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h3 className="h-display text-lg md:text-xl leading-tight max-w-xl">
                      {e.school}
                    </h3>
                    <span className="chip">{e.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {e.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
