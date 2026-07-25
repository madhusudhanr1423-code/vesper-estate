import { motion } from "motion/react";
import { ArrowUpRight, BedDouble, Bath, Ruler, MapPin } from "lucide-react";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

const items = [
  {
    id: "01",
    name: "Villa Solene",
    location: "Cap d'Antibes, France",
    price: "€24,500,000",
    beds: 7,
    baths: 9,
    area: "1,240 m²",
    tag: "Coastal",
    img: p1,
    description:
      "A waterfront architectural estate with private sea access, expansive terraces and uninterrupted Mediterranean views.",
  },
  {
    id: "02",
    name: "Casa del Monte",
    location: "Lake Como, Italy",
    price: "€12,900,000",
    beds: 5,
    baths: 6,
    area: "820 m²",
    tag: "Hillside",
    img: p2,
    description:
      "An elegant hillside villa overlooking Lake Como, blending Italian craftsmanship with contemporary interiors.",
  },
  {
    id: "03",
    name: "The Meridian Penthouse",
    location: "Manhattan, New York",
    price: "$18,750,000",
    beds: 4,
    baths: 5,
    area: "540 m²",
    tag: "Skyline",
    img: p3,
    description:
      "A full-floor penthouse with panoramic skyline views, bespoke finishes and private outdoor entertaining spaces.",
  },
];

export function Properties() {
  return (
    <section id="residences" className="relative py-24 md:py-36">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-12 mb-16 md:mb-24 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-6">— The winter collection</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Currently on quiet <em className="italic">offer.</em>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-sm leading-relaxed text-stone-2">
            A tightly edited list of residences we are presenting this
            season — most never publicly listed. Enquire discreetly for
            complete documentation, provenance and appointment.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {items.map((it, i) => (
            <PropertyRow key={it.id} item={it} flip={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyRow({
  item,
  flip,
  index,
}: {
  item: (typeof items)[number];
  flip: boolean;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-8 md:grid-cols-12 md:gap-14 items-center"
    >
      <div
        className={`md:col-span-8 ${flip ? "md:order-2" : ""} relative group overflow-hidden`}
      >
        <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-linen">
          <motion.img
            src={item.img}
            alt={item.name}
            loading="lazy"
            width={1200}
            height={1500}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-bone/90 px-3.5 py-1.5 text-[0.65rem] tracking-[0.24em] uppercase text-obsidian">
            <span className="h-1.5 w-1.5 rounded-full bg-gilt" />
            {item.tag}
          </div>
          <div className="absolute top-5 right-5 font-display text-2xl italic text-bone/90 mix-blend-difference">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className={`md:col-span-4 ${flip ? "md:order-1" : ""} space-y-8`}>
        <div className="text-[0.65rem] tracking-[0.28em] uppercase text-stone-2 flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-gilt" /> {item.location}
        </div>
        <h3 className="font-display text-4xl md:text-5xl transition-colors duration-300 group-hover:text-gilt">
          {item.name}
        </h3>
        <p className="text-sm leading-7 text-stone-2">
  {item.description}
</p>
        <div className="rule" />
        <div className="grid grid-cols-3 gap-4 text-sm">
          <Spec icon={<BedDouble className="h-4 w-4" />} label="Bedrooms" value={item.beds} />
          <Spec icon={<Bath className="h-4 w-4" />} label="Baths" value={item.baths} />
          <Spec icon={<Ruler className="h-4 w-4" />} label="Interior" value={item.area} />
        </div>
        <div className="rule" />
        <div className="flex items-end justify-between pt-2">
          <div>
            <div className="text-[0.65rem] tracking-[0.24em] uppercase text-stone-2">
              Guide price
            </div>
            <div className="font-display text-4xl mt-1">{item.price}</div>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[0.72rem] tracking-[0.24em] uppercase transition-colors duration-300 hover:text-gilt"
          >
            Enquire
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-gilt">{icon}</div>
      <div className="mt-2 font-display text-xl">{value}</div>
      <div className="text-[0.6rem] tracking-[0.24em] uppercase text-stone-2 mt-0.5">
        {label}
      </div>
    </div>
  );
}
