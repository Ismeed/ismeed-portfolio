"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Mic, Sprout, GraduationCap, Crown, Leaf } from "lucide-react";
import { leadership, impactStats } from "@/lib/data";

const icons = [
  <Crown key="crown" className="h-4 w-4" />,
  <Mic key="mic" className="h-4 w-4" />,
  <Sprout key="sprout" className="h-4 w-4" />,
  <GraduationCap key="grad" className="h-4 w-4" />,
  <Users key="users" className="h-4 w-4" />,
  <Leaf key="leaf" className="h-4 w-4" />,
];

export function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container-prem">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="section-label">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Leadership & Community Impact
            </span>
            <h2 className="section-title">
              Leading communities, <br className="hidden md:block" />
              raising the next generation.
            </h2>
            <p className="section-subtitle">
              Beyond ventures and code, Isma&apos;il invests deeply in people —
              mentoring founders, leading societies, and serving his community.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {impactStats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} index={i} />
          ))}
        </div>

        {/* Leadership Roles */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadership.map((l, i) => (
            <motion.div
              key={l.role + l.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="card-prem"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                  {icons[i % icons.length]}
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    {l.org}
                  </div>
                  <div className="text-base font-semibold">{l.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState<string>(value);

  useEffect(() => {
    if (!inView) return;
    const numericMatch = value.match(/^(\d+)(\+?)$/);
    if (!numericMatch) {
      setCount(value);
      return;
    }
    const target = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2];
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.floor(target * eased);
      setCount(`${v}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="card-prem relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="h-display text-4xl md:text-5xl bg-gradient-to-br from-[rgb(var(--fg))] to-blue-600 bg-clip-text text-transparent">
        {count}
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
        {label}
      </div>
    </motion.div>
  );
}
