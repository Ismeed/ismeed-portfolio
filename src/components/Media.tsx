"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/data";

export function Media() {
  return (
    <section id="media" className="section">
      <div className="container-prem">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <span className="section-label">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Media & Ecosystem Engagement
            </span>
            <h2 className="section-title">
              In the rooms where change happens.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted leading-relaxed">
            From government engagements and ecosystem programs to hackathons,
            mentorship sessions, and public speaking — actively shaping the
            innovation conversation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4 md:gap-5">
          {/* Large feature */}
          <MediaCard item={media[0]} className="col-span-12 md:col-span-8 md:row-span-2 aspect-[16/10] md:aspect-auto" />
          <MediaCard item={media[1]} className="col-span-6 md:col-span-4 aspect-square md:aspect-[5/4]" />
          <MediaCard item={media[2]} className="col-span-6 md:col-span-4 aspect-square md:aspect-[5/4]" />

          <MediaCard item={media[3]} className="col-span-6 md:col-span-6 aspect-[4/3]" />
          <MediaCard item={media[4]} className="col-span-6 md:col-span-6 aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}

function MediaCard({
  item,
  className = "",
}: {
  item: (typeof media)[number];
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className={`relative overflow-hidden rounded-3xl border border-soft group cursor-pointer ${className}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        unoptimized={item.image.endsWith(".gif")}
        sizes="(max-width: 768px) 90vw, 50vw"
        className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute top-4 left-4">
        <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white">
          {item.tag}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-white">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="h-display text-xl md:text-2xl leading-tight">
              {item.title}
            </h3>
            <p className="mt-2 max-w-md text-xs md:text-sm text-white/80 leading-relaxed">
              {item.desc}
            </p>
          </div>
          <span className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shrink-0 transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
