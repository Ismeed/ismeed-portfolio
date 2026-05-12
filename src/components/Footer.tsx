"use client";

import { Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { navLinks, personal } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-soft mt-10">
      <div className="container-prem py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                IS
              </span>
              <span>
                <span className="block text-base font-semibold leading-tight">
                  Isma&apos;il Sa&apos;id
                </span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
                  Founder · Builder · Speaker
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              {personal.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft bg-card hover:border-blue-500/40 hover:text-blue-500 transition-all hover:-translate-y-0.5">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={personal.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft bg-card hover:border-blue-500/40 hover:text-blue-500 transition-all hover:-translate-y-0.5">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft bg-card hover:border-blue-500/40 hover:text-blue-500 transition-all hover:-translate-y-0.5">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={`mailto:${personal.email}`} aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft bg-card hover:border-blue-500/40 hover:text-blue-500 transition-all hover:-translate-y-0.5">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted hover:text-[rgb(var(--fg))] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted mb-4">
              More
            </div>
            <ul className="space-y-2.5">
              {navLinks.slice(5).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted hover:text-[rgb(var(--fg))] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted mb-4">
              Contact
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${personal.email}`} className="text-sm text-muted hover:text-[rgb(var(--fg))] transition-colors break-all">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} className="text-sm text-muted hover:text-[rgb(var(--fg))] transition-colors">
                  {personal.phone}
                </a>
              </li>
              <li>
                <span className="text-sm text-muted">{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {year} Isma&apos;il Sa&apos;id · Swifter Ventures LTD. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Designed for the next generation of African builders.
          </p>
        </div>
      </div>
    </footer>
  );
}
