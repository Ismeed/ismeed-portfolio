"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-prem">
        <div className="max-w-3xl">
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Certifications
          </span>
          <h2 className="section-title">
            Credentials backing the work.
          </h2>
          <p className="section-subtitle">
            Formal recognition across software, cybersecurity, data privacy,
            and innovation development.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="card-prem overflow-hidden group"
            >
              {c.image ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-soft mb-5">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ) : (
                <div className="aspect-[16/10] rounded-2xl border border-soft mb-5 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent flex items-center justify-center">
                  <BadgeCheck className="h-10 w-10 text-blue-500/60" />
                </div>
              )}
              <div className="flex items-start gap-2.5">
                <BadgeCheck className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="text-base font-semibold leading-tight">
                    {c.name}
                  </div>
                  <div className="mt-1 text-xs text-muted">{c.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
