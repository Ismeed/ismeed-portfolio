"use client";

import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="section !py-20 md:!py-28">
      <div className="container-prem">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            icon={<Compass className="h-5 w-5" />}
            kicker="Vision"
            title="Scalable infrastructure for an inclusive Africa."
            body="To build scalable technology infrastructure that improves access, efficiency, and inclusion across Africa."
            delay={0}
          />
          <Card
            icon={<Target className="h-5 w-5" />}
            kicker="Mission"
            title="Youth-driven innovation, solving real problems."
            body="Leveraging technology, innovation, and youth-driven leadership to solve real-world problems in underserved communities."
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  kicker,
  title,
  body,
  delay,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay }}
      className="relative card-prem overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
          {icon}
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          {kicker}
        </span>
      </div>
      <h3 className="h-display mt-5 text-2xl md:text-3xl leading-tight">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
    </motion.div>
  );
}
