import { motion } from "motion/react";
import s1 from "@/assets/showcase-1.jpg";
import s2 from "@/assets/showcase-2.jpg";
import p2 from "@/assets/property-2.jpg";

export function Showcase() {
  return (
    <section id="showcase" className="relative bg-obsidian text-bone py-24 md:py-36 overflow-hidden">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8 mb-20">
          <div className="md:col-span-5">
            <div className="eyebrow text-bone/60 mb-6">— Editorial · Volume XI</div>
            <h2 className="font-display text-2xl transition-colors duration-300 group-hover:text-gilt md:text-6xl leading-[0.95]">
              Interiors that quietly <em>outlast</em> the moment.
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-7 text-base leading-8 text-bone/75 self-end max-w-md">
            A study of light, material and restraint — pulled from three of
            this year's most distinctive commissions across the
            Mediterranean and Pacific.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <ShowcaseTile img={s1} className="col-span-12 md:col-span-7 aspect-[4/5]" caption="I. The Spiral, Marbella" />
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
            <ShowcaseTile img={s2} className="aspect-[4/3]" caption="II. Isla Blanca, Bahamas" />
            <ShowcaseTile img={p2} className="aspect-[4/3]" caption="III. Casa del Monte, Como" />
          </div>
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-28">
            <div className="eyebrow text-bone/60 mb-4">— The Vesper standard</div>
            <p className="font-display text-4xl md:text-5xl leading-[1.1]">
              "We don't sell houses. We place them, once, into hands
              that will keep them."
            </p>
            <div className="mt-4 text-xs tracking-[0.24em] uppercase text-gilt">
              — Vesper Estates, Founder
            </div>
          </div>

          <ul className="md:col-span-7 md:col-start-6 divide-y divide-bone/15 border-y border-bone/15">
            {[
              ["01", "Provenance-first", "Every residence is documented, verified and represented off-market by default."],
              ["02", "Architectural pedigree", "Works by SAOTA, Foster, Bofill, Chipperfield and rising ateliers."],
              ["03", "Discretion, always", "Names are held. Viewings are private. Nothing is broadcast."],
              ["04", "Global stewardship", "Advisors in fourteen cities, one philosophy, one register."],
            ].map(([n, t, d]) => (
             <li key={n} className="group py-8 grid grid-cols-12 gap-4 items-baseline transition-all duration-500 hover:pl-4">
                <span className="col-span-2 md:col-span-1 font-display text-xl text-gilt text-gilt transition-all duration-300 group-hover:scale-125">{n}</span>
                <span className="col-span-10 md:col-span-4 font-display text-2xl">{t}</span>
                <span className="col-span-12 md:col-span-7 text-sm text-bone/70 leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ShowcaseTile({
  img,
  className,
  caption,
}: {
  img: string;
  className?: string;
  caption: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group overflow-hidden ${className ?? ""}`}
    >
      <img
        src={img}
        alt={caption}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute top-5 right-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm">
        Exclusive
      </div>
      <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[0.68rem] tracking-[0.28em] uppercase text-bone transition-colors duration-300 group-hover:text-gilt">
        <span>{caption}</span>
        <span className="opacity-70">2026</span>
      </figcaption>
    </motion.figure>
  );
}
