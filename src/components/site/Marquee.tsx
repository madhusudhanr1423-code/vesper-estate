export function Marquee() {
  const items = [
    "Bel Air",
    "Lake Como",
    "Ibiza",
    "St. Barths",
    "Aspen",
    "Kyoto",
    "Amalfi",
    "Palm Beach",
    "Zermatt",
    "Marrakech",
    "Cap Ferrat",
    "Dubai",
  ];
  const row = [...items, ...items];
  return (
    <section
      aria-hidden
     className="relative overflow-hidden border-y hairline bg-linen py-8 md:py-10"
    >
      <div className="flex marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span
  key={i}
  className="group mx-10 inline-flex items-center gap-8 font-display text-4xl md:text-5xl italic tracking-tight text-obsidian/80 transition-colors duration-300 hover:text-gilt"
>
            {t}
            <span className="h-2 w-2 rounded-full bg-gilt shadow-[0_0_8px_rgba(176,141,87,0.35)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
