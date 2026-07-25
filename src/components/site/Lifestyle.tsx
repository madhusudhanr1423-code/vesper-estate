import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import lifestyleImg from "@/assets/lifestyle.jpg";

export function Lifestyle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="lifestyle" ref={ref} className="relative overflow-hidden bg-obsidian text-bone">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={lifestyleImg}
          alt="Lifestyle scene"
          loading="lazy"
         className="h-full w-full object-cover scale-105 opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/90"/>

      <div className="container-page relative py-36 md:py-52">
        <div className="max-w-3xl">
          <div className="eyebrow text-bone/60 mb-6">— The Vesper way of living</div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.88] tracking-tight">
            A Lifestyle <em>without</em> Compromise.
          </h2>
          <p className="mt-8 text-[17px] leading-8 tracking-[0.01em] text-bone/80 max-w-xl">
            Private berthing in Portofino. A vintner in Barolo who keeps
            three cases in your name. A restoration atelier in Kyoto that
            answers within the hour. Vesper is the register that keeps
            the life you've built quietly running.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-4 md:gap-6 text-sm">
          {[
            ["Private Air", "On-demand fleet, twelve gateways."],
            ["Estae Restoration", "Curators of atelier partners in nine cities."],
            ["Household Concierge", "24/7, one advisor per household."],
            ["Investment", "Yield strategy on legacy real estate."],
          ].map(([t, d], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group border-t border-bone/10 pt-6 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="font-display text-2xl transition-colors duration-300 group-hover:text-gilt">{t}</div>
              <div className="mt-3 leading-7 text-bone/90">{d}</div>
              <div className="mt-5 h-px w-10 bg-bone/20 transition-all duration-500 group-hover:w-24 group-hover:bg-gilt"></div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
    </section>
  );
}
