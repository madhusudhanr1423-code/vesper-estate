import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Residences", href: "#residences" },
  { label: "Showcase", href: "#showcase" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Advisors", href: "#advisors" },
  // { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.35,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
     className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
  scrolled
    ? "bg-bone/95 backdrop-blur-xl border-b border-black/5 shadow-[0_10px_35px_rgba(0,0,0,.08)] text-obsidian"
    : "bg-black/25 backdrop-blur-xl border-b border-white/10 text-bone"
}`}
    >
     <div
  className={`container-page flex items-center justify-between transition-all duration-500 ${
    scrolled ? "py-3.5 md:py-4" : "py-5 md:py-6"
  }`}
>
       <a
  href="#top"
  className="group flex items-baseline gap-2 font-display text-[1.9rem] tracking-tight transition-all duration-500"
>
         <span className={`transition-colors duration-500 ${scrolled ? "text-obsidian" : "text-white"} group-hover:text-gilt`}>
  Vesper
</span>
          <span
             className={`text-[0.55rem] tracking-[0.4em] uppercase font-sans font-medium transition-colors duration-500 ${
             scrolled ? "text-stone-2" : "text-bone/70"
             }`}
          >
  Estates
</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-[0.78rem] tracking-[0.18em] uppercase">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative group py-1 transition-colors duration-300 ${
  activeSection === l.href.replace("#", "")
    ? "text-gilt"
    : "hover:text-gilt"
}`}
            >
              <span>{l.label}</span>
             <span
  className={`absolute -bottom-0.5 left-0 h-px bg-gilt transition-all duration-500 ${
    activeSection === l.href.replace("#", "")
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
/>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <span
  className={`text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-500 ${
    scrolled ? "text-obsidian/70" : "text-bone/90"
  }`}
>
            +1 310 555 0188
          </span>
          <a
  href="#contact"
  className={`rounded-full px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase transition-all duration-500 ${
   scrolled
? "border border-obsidian bg-transparent text-obsidian hover:bg-obsidian hover:text-bone"
: "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-obsidian"
  }`}
>
  Private Viewing
</a>
        </div>

        <button
          className="lg:hidden p-2"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu
  className={`h-5 w-5 transition-colors duration-500 ${
    scrolled ? "text-obsidian" : "text-white"
  }`}
/>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
           initial={{
            opacity:0,
            y:-20,
            backdropFilter:"blur(0px)"
            }}

           animate={{
            opacity:1,
            y:0,
            backdropFilter:"blur(18px)"
           }}

           exit={{
            opacity:0,
            y:-20
           }}  
            className="fixed inset-0 z-[9999] bg-[#0B0908] text-bone"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-2xl">Vesper</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
               <X className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col px-8 pt-28 pb-12 gap-8"
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="group font-display text-4xl md:text-5xl tracking-tight transition-all duration-500 hover:translate-x-4 hover:text-gilt"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
