import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative grain bg-bone text-obsidian border-t hairline">
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-7xl md:text-8xl leading-[0.85] tracking-tight">
              Vesper<span className="text-gilt">.</span>
            </div>
            <p className="mt-6 max-w-sm text-sm text-stone-2 leading-relaxed">
              A discreet register of architectural residences, private
              estates and coastal retreats. Est. 2004.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <div className="eyebrow mb-5">— The Property Journal</div>
            <p className="text-sm text-stone-2 mb-4">
             Quarterly insights featuring exceptional residences, discreet market commentary, and architectural stories.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="group flex items-center border-b border-obsidian/20 transition-all duration-300 hover:border-gilt"
            >
              <input
                type="email"
                placeholder="your@address.com"
                className="flex-1 bg-transparent py-4 text-sm tracking-wide outline-none placeholder:text-stone-2/50"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="ml-3 p-2 transition-all duration-300 hover:text-gilt hover:-translate-y-0.5"
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="md:col-span-3 md:col-start-10 grid grid-cols-2 gap-4 text-[0.72rem] tracking-[0.2em] uppercase">
            {[
              "Residences",
              "Showcase",
              "Lifestyle",
              "Advisors",
              "Journal",
              "Contact",
              "Privacy",
              "Terms",
            ].map((l) => (
              <a key={l} href="#" className="relative transition-colors duration-300 hover:text-gilt after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gilt after:transition-all after:duration-300 hover:after:w-50px">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-t border-obsidian/10 pt-6 text-[0.65rem] tracking-[0.28em] uppercase text-stone-2">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>© 2026 Vesper Estates S.A.</span>
            <span>Licenced brokerage</span>
            <span>DRE 01 774 891</span>
          </div>
          <div className="flex gap-5">
            {["Instagram", "LinkedIn", "Journal"].map((s) => (
              <a key={s} href="#" className="transition-all duration-300 hover:text-gilt hover:-translate-y-0.5">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
