"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Brain,
  Mic,
  Shield,
  Compass,
  Smartphone,
  Lightbulb,
  Users,
  HeartPulse,
  Lock,
  GraduationCap,
} from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "Software Engineering": <Code2 className="h-4 w-4" />,
  "Startup Development": <Rocket className="h-4 w-4" />,
  "Product Strategy": <Brain className="h-4 w-4" />,
  "Public Speaking": <Mic className="h-4 w-4" />,
  Cybersecurity: <Shield className="h-4 w-4" />,
  Leadership: <Compass className="h-4 w-4" />,
  "React Native": <Smartphone className="h-4 w-4" />,
  "Innovation Management": <Lightbulb className="h-4 w-4" />,
  "Community Building": <Users className="h-4 w-4" />,
  "Digital Health Systems": <HeartPulse className="h-4 w-4" />,
  "Data Privacy": <Lock className="h-4 w-4" />,
  Mentorship: <GraduationCap className="h-4 w-4" />,
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-prem">
        <div className="max-w-3xl">
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Skills & Expertise
          </span>
          <h2 className="section-title">
            A multi-disciplinary toolkit.
          </h2>
          <p className="section-subtitle">
            Engineering depth, founder breadth, and the soft skills required to
            lead teams, communities, and ecosystems.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group card-prem !p-5 cursor-default"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-all group-hover:bg-blue-500 group-hover:text-white">
                {iconMap[s] ?? <Code2 className="h-4 w-4" />}
              </span>
              <div className="mt-4 text-sm font-semibold">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
