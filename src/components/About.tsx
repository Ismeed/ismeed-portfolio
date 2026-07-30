"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Calendar } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-prem">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-transparent to-transparent blur-2xl" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-soft glass-card">
                <Image
                  src="/images/profile/about-portrait.png"
                  alt="Isma'il Sa'id"
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />
              </div>

              {/* Stat overlay */}
              <div className="absolute -bottom-6 right-4 grid grid-cols-2 gap-3 w-[78%]">
                <div className="card-prem !p-4">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted">
                    Born
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    27 March 2003
                  </div>
                </div>
                <div className="card-prem !p-4">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted">
                    Country
                  </div>
                  <div className="mt-1 text-sm font-semibold">Nigeria 🇳🇬</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="section-label">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              About Me
            </span>
            <h2 className="section-title">
              A founder driven by impact, <br className="hidden md:block" />
              not just innovation.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-[17px] leading-[1.8] text-muted">
              <p>
                Isma&apos;il Sa&apos;id is a Nigerian technology founder,
                software engineering student, public speaker, and youth
                innovation leader from Katsina State. He is the Founder/CEO of{" "}
                <span className="font-medium text-[rgb(var(--fg))]">
                  Swifter Ventures LTD
                </span>
                , building scalable technology solutions focused on healthcare
                accessibility, mobility efficiency, and digital inclusion for
                underserved communities.
              </p>
              <p>
                His work has earned national recognition including winning the{" "}
                <span className="font-medium text-[rgb(var(--fg))]">
                  UNDP Insurance Innovation Challenge 2025
                </span>{" "}
                and being recognized as{" "}
                <span className="font-medium text-[rgb(var(--fg))]">
                  Katsina State Startup of the Year 2025
                </span>{" "}
                with a 5-star rating.
              </p>
              <p>
                He is also a Data Privacy Ambassador with the Nigeria Data
                Protection Commission (NDPC), founder of Eloquent Society, and
                an active mentor supporting young innovators and startup
                founders across Katsina State.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <InfoCard
                icon={<Briefcase className="h-4 w-4" />}
                label="Role"
                value="Founder / CEO"
              />
              <InfoCard
                icon={<MapPin className="h-4 w-4" />}
                label="Based In"
                value="Katsina, Nigeria"
              />
              <InfoCard
                icon={<Calendar className="h-4 w-4" />}
                label="Focus Since"
                value="2022"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="card-prem !p-5">
      <div className="flex items-center gap-2 text-muted">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
          {icon}
        </span>
        <span className="text-[10px] uppercase tracking-[0.16em]">{label}</span>
      </div>
      <div className="mt-3 text-base font-semibold">{value}</div>
    </div>
  );
}
