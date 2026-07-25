import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How does Vesper represent properties off-market?",
    a: "The majority of our register is private. Residences are shared only with pre-qualified principals under strict confidentiality, typically without listing photography ever entering circulation.",
  },
  {
    q: "Do you work on acquisition mandates?",
    a: "Yes. Roughly forty percent of our year is spent as buy-side advisors — sourcing, verifying and negotiating on behalf of a single client, often against briefs we hold for years.",
  },
  {
    q: "What jurisdictions do you cover?",
    a: "Eighteen countries at present. Our advisors sit in Los Angeles, New York, London, Paris, Zürich, Milan, Dubai, Singapore and Tokyo. Regional partners cover the balance.",
  },
  {
    q: "How is Vesper compensated?",
    a: "Traditionally on the transacted side, with an annual retainer available for buy-side mandates. Terms are agreed in writing before any documentation is shared.",
  },
  {
    q: "Can you assist beyond the acquisition?",
    a: "Post-completion is where much of our work happens — architects, restoration ateliers, staffing, insurance, family office coordination and periodic revaluation.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="eyebrow mb-6">— Frequently, quietly asked</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
            Everything worth knowing.
          </h2>
          <p className="mt-8 text-[15px] leading-7 tracking-[0.01em] text-stone-2 max-w-xs leading-relaxed">
            If yours isn't answered here, our private office is available by
            appointment.
          </p>
        </div>

        <ul className="md:col-span-8 divide-y hairline border-y hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
             <motion.li
    key={i}
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{
        duration:0.7,
        delay:i*0.08
    }}
    className="relative overflow-hidden"
>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group w-full flex items-center justify-between gap-8 py-10 md:py-12 text-left transition-all duration-500"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-2xl md:text-[2.2rem] transition-colors duration-500 ${
                     isOpen? "text-gilt": "text-foreground"
                     }`}
                  >
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="shrink-0"
                  >
                    <Plus
    className="h-7 w-7 text-gilt transition-colors duration-500 group-hover:text-gilt-deep"
    strokeWidth={1}
/>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y:20 }}
                      animate={{ height: "auto", opacity: 1, y:0}}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-16 text-[17px] leading-8 tracking-[0.01em] text-stone-2 max-w-2xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gilt transition-all duration-700 group-hover:w-full"></div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
