"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-prem">
        <div className="max-w-3xl">
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Featured Ventures
          </span>
          <h2 className="section-title">
            Building products that solve real problems for{" "}
            <span className="text-gradient">real people.</span>
          </h2>
          <p className="section-subtitle">
            Flagship ventures under Swifter Ventures LTD — designed for
            scale, built for inclusion, engineered for impact.
          </p>
        </div>

        <div className="mt-16 space-y-10 md:space-y-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} reversed={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  reversed,
}: {
  project: (typeof projects)[number];
  index: number;
  reversed: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[2rem] border border-soft bg-card"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Visual */}
        <div className={`relative p-6 md:p-10 ${reversed ? "lg:order-2" : ""}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-soft bg-gradient-to-br from-blue-500/10 to-transparent">
            <Image
              src={project.images[0]}
              alt={`${project.name} preview`}
              fill
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Logo badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
              <span className="relative h-5 w-5 overflow-hidden rounded">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </span>
              <span className="text-xs font-medium">{project.name}</span>
            </div>
          </div>

          {/* Secondary preview */}
          {project.images[1] && (
            <div className="relative aspect-[16/9] mt-4 w-[70%] ml-auto overflow-hidden rounded-2xl border border-soft hidden md:block">
              <Image
                src={project.images[1]}
                alt={`${project.name} secondary`}
                fill
                sizes="35vw"
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 md:p-10 lg:p-12 flex flex-col justify-center ${reversed ? "lg:order-1" : ""}`}>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Venture · {String(index + 1).padStart(2, "0")}
            </span>
            <StatusPill status={project.status} />
          </div>

          <h3 className="h-display mt-5 text-3xl md:text-5xl leading-[1.05]">
            {project.name}
          </h3>
          <div className="mt-2 text-sm text-muted">{project.tagline}</div>

          <p className="mt-5 text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-7">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted mb-3">
              Core Features
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Get a Demo <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Partnership Enquiry
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatusPill({ status }: { status: string }) {
  const isLive = status.toLowerCase().includes("live");
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${
        isLive
          ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30"
          : "bg-amber-500/10 text-amber-500 border border-amber-500/30"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isLive ? "bg-emerald-500" : "bg-amber-500"
        } animate-pulse`}
      />
      {status}
    </span>
  );
}
