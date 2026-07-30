import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, MoveRight } from "lucide-react";
import heroImg from "@/assets/hero-villa.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.35, 0.7]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-obsidian text-bone"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Modern architectural villa at golden hour with infinity pool"
          width={1600}
          height={1920}
          className="h-full w-full object-cover object-[60%_center]"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85"
      />

      {/* Asymmetric content */}
      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-end pt-24 md:pt-0 pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8 items-end">
          <div className="md:col-span-8">
           <div className="flex items-center gap-4 mb-6">

            <div className="w-12 h-px bg-gilt" />

            <div className="eyebrow text-neutral-900 font-bold">
             Exclusive residences across the world's most desirable destinations.
            </div>

      </div>
            <h1 className="mt-6 font-display text-[3rem] sm:text-[4.5rem] leading-[0.88] tracking-tight md:text-[8vw] lg:text-[6.8rem]">

  <motion.span
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block"
  >
    Architectural
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.18,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block italic font-normal"
  >
    Residences<span className="text-gilt">.</span>
  </motion.span>

</h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 md:pb-4 space-y-8"
          >
            <p className="max-w-sm text-base leading-6 tracking-[0.01em] max-w-[380px] text-white drop-shadow-lg">
              We represent a discreet selection of architectural residences,
              private estates and coastal retreats — placed with a small
              global clientele who prize quiet, provenance and permanence.
            </p>
            <div className="flex flex-col items-start gap-4">
              <a
                href="#residences"
               className="btn-primary group"
              >
                View residences
                <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                // className="group inline-flex items-center gap-3 text-[0.75rem] tracking-[0.22em] uppercase font-medium text-bone transition-all duration-300 hover:text-gilt"
                 className="btn-primary group"
              >
                Arrange a viewing
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Meta strip */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-bone/10 pt-8 md:grid-cols-4 md:gap-10">
          {[
            ["620+", "Placements worldwide"],
            ["$4.8B", "Transacted in 2025"],
            ["18", "Countries represented"],
            ["1 of 1", "Every commission"],
          ].map(([n, l], i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.08 }}
            >
              <div className="font-display text-4xl md:text-5xl">{n}</div>
              <div className="mt-1 text-[0.6rem] tracking-[0.32em] uppercase text-bone/45">
                {l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
     <motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut",
  }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
>
  <span className="text-[10px] tracking-[0.45em] uppercase text-bone/60">
    Scroll
  </span>

  <div className="h-12 w-px bg-bone/40" />
</motion.div>
    </section>
  );
}
