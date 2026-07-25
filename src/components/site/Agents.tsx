import { motion } from "motion/react";
import a1 from "@/assets/agent-1.jpg";
import a2 from "@/assets/agent-2.jpg";
import a3 from "@/assets/agent-3.jpg";

const advisors = [
  { name: "Elena", role: "Principal Advisor", region: "Europe · MENA", img: a1 },
  { name: "Julian Voss", role: "Senior Partner", region: "Americas", img: a2 },
  { name: "Amara Okonkwo", role: "Head of Private Office", region: "Asia · Pacific", img: a3 },
];

export function Advisors() {
  return (
    <section id="advisors" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 mb-16 md:mb-20 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-6">— The private office</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.88] tracking-tight">
              A small bench. Deeply <em>invested.</em>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-sm leading-relaxed text-stone-2">
            Twenty-two advisors — architects, former stewards of private
            offices, restoration specialists. Every mandate is led personally.
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-stone-400/40 to-transparent mb-14"></div>

        <div className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {advisors.map((a, i) => (
            <motion.article
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group transition-all duration-500 hover:shadow-[0_20px_80px_rgba(0,0,0,.08)]"
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-linen border border-stone-300/30 transition-all duration-500 group-hover:border-[#C9A96E]">
                <img
                  src={a.img}
                  alt={a.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-[1200ms] group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-obsidian/70 to-transparent text-bone opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 text-[0.7rem] tracking-[0.24em] uppercase">
                  Private Consultation →
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl leading-tight transition-transform duration-500 group-hover:-translate-y-1">{a.name}</h3>
                 <div className="text-[0.68rem] tracking-[0.24em] uppercase text-stone-2 mt-1 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-1">
                    {a.role}
                  </div>
                </div>
                <div className="text-[0.65rem] tracking-[0.24em] uppercase text-stone-2 text-right">
                  {a.region}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
