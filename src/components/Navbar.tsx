"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-soft glass py-2"
            : "border-b border-transparent py-4"
        }`}
      >
        <div className="container-prem flex items-center justify-between">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Home"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
              IS
              <span className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 opacity-40 blur-md transition group-hover:opacity-70" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold leading-tight">
                Isma&apos;il Sa&apos;id
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
                Founder · Builder
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-[rgb(var(--fg))]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft bg-card lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[rgb(var(--bg))] border-l border-soft p-7"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-sm font-semibold">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    className="rounded-2xl border border-soft bg-card px-5 py-4 text-base font-medium transition hover:border-blue-500/40 hover:translate-x-1"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-accent w-full mt-8"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
