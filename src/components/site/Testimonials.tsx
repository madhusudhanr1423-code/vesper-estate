import { motion } from "motion/react";
import { Quote } from "lucide-react";

const quotes = [
  {
    q: "They found a house that wasn't looking for us — and made it feel inevitable. Two years on, we still can't imagine another home.",
    who: "H. & M. Laurent",
    where: "Placed in Cap Ferrat, 2024",
  },
  {
    q: "Vesper handled a legacy estate with the discretion of a private bank and the eye of a museum curator. Uncommon combination.",
    who: "Founder, Family Office",
    where: "Zürich",
  },
  {
    q: "Six months of quiet searching, one afternoon in Como, and it was done. No noise, no theatre, no chasing.",
    who: "R. Nakamura",
    where: "Placed in Lake Como, 2025",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 bg-linen">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-12 mb-16 items-end">
          <div className="md:col-span-6">
            <div className="eyebrow mb-6">— In their words</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              The register speaks <em>softly.</em>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {quotes.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-bone p-8 md:p-10 border hairline transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] ${
                i === 0
                  ? "md:col-span-7 md:row-span-2"
                  : "md:col-span-5"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gilt/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              <Quote className="h-6 w-6 text-gilt mb-6 transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.15}/>
              <blockquote
               className={`font-display leading-[1.15] transition-colors duration-300 group-hover:text-gilt ${
              i === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
              }`}
              >
                "{t.q}"
              </blockquote>
              <div className="mt-8 h-px w-16 bg-gilt transition-all duration-500 group-hover:w-28"></div>
              <figcaption className="mt-10 flex items-center justify-between border-t hairline pt-4 text-[0.68rem] tracking-[0.24em] uppercase text-stone-2">
                <span>{t.who}</span>
                <span className="text-obsidian font-medium">{t.where}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
