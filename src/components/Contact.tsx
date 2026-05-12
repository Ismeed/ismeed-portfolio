"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import { personal } from "@/lib/data";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: personal.phone,
    href: personal.whatsapp,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/isma-il-sa-id",
    href: personal.linkedin,
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    value: "@Ismeed3213",
    href: personal.twitter,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
      <div className="container-prem">
        <div className="relative rounded-[2.5rem] border border-soft bg-card overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="relative p-8 md:p-14 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <span className="section-label">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Get in touch
                </span>
                <h2 className="section-title">
                  Let&apos;s build something <br className="hidden md:block" />
                  <span className="text-gradient">that matters.</span>
                </h2>
                <p className="section-subtitle">
                  Open to collaborations, partnerships, speaking engagements,
                  and innovation opportunities — whether you&apos;re an
                  investor, accelerator, government partner, or fellow founder.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${personal.email}`}
                    className="btn-accent"
                  >
                    Start a Conversation <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-3 text-sm text-muted">
                  <MapPin className="h-4 w-4" />
                  <span>{personal.address} · {personal.location}</span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm text-muted">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${personal.phone}`} className="hover:text-blue-500 transition-colors">
                    {personal.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-5 space-y-3"
              >
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-soft bg-[rgb(var(--bg))] px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-muted">
                          {c.label}
                        </div>
                        <div className="text-sm font-semibold truncate">
                          {c.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:rotate-45 group-hover:text-blue-500 shrink-0" />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
