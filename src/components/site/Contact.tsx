import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const offices = [
  ["New York", "17 Avenue de Monte-Carlo", "+377 99 88 77 66"],
  ["London", "25 Grosvenor Square, Mayfair", "+44 20 7123 4567"],
  ["Dubai", "DIFC, Gate Village 4", "+971 4 555 0140"],
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  return (
    <section id="contact" className=" relative overflow-hidden bg-obsidian text-bone py-28 md:py-40">
      <div className="container-page grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <div className="eyebrow text-bone/60 mb-6">— By appointment</div>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.88] tracking-tight">
              Begin a <em>private</em> conversation.
            </h2>
            <p className="mt-6 text-sm text-bone/70 max-w-lg leading-8">
              Share a few details and an advisor from the nearest office
              will respond, personally, within one business day.
            </p>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-bone/10 shadow-[0_30px_80px_rgba(0,0,0,.35)]">
            <img
              src="/luxuryoffice1.jpg"
              alt="Vesper private office"
              className="h-full w-full object-cover object-center transition-transform duration-[1500ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-bone/60">
                PRIVATE CONSULTATION
              </div>

              <div className="font-display text-3xl mt-2">
                Private Client Lounge
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inset-0 rounded-full bg-gilt opacity-75" />
                <span className="relative h-3 w-3 rounded-full bg-gilt" />
              </span>
              {/* <span className="text-[0.65rem] tracking-[0.28em] uppercase">
                Private Viewing Suite
              </span> */}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offices.map(([city, addr, tel]) => (
              <div key={city} className="group border-t border-bone/10 pt-5 transition-all duration-500 hover:border-gilt">
                <div className="font-display text-xl group-hover:text-gilt transition-colors">{city}</div>
                <div className="text-xs text-bone/60 mt-2 leading-relaxed">
                  {addr}
                </div>
                <div className="text-xs text-bone/80 mt-1">{tel}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7,  ease: [0.22, 1, 0.36, 1], }}
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);

            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form).entries());

            if (!data.name || !data.email || !data.enquiry) {
              setError("Please fill in your name, email, and enquiry before submitting.");
              return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
              setError("Please enter a valid email address.");
              return;
            }

            setSubmitting(true);
            try {
              // TODO: replace with a real submission endpoint, e.g.:
              // await fetch("/api/enquiries", {
              //   method: "POST",
              //   headers: { "Content-Type": "application/json" },
              //   body: JSON.stringify(data),
              // });
              console.log("Enquiry submitted (not yet wired to a backend):", data);
              setSent(true);
              form.reset();
            } catch {
              setError("Something went wrong sending your enquiry. Please try again.");
            } finally {
              setSubmitting(false);
            }
          }}
          className="md:col-span-6 md:col-start-7 bg-bone/5 backdrop-blur-sm border border-bone/10 rounded-2xl p-8 md:p-12 space-y-10"
        >

          <div>
              <div className="eyebrow text-bone/60 mb-4">
               — Private consultation
          </div>

         <h3 className="font-display text-4xl">
              Tell us about your next residence.
         </h3>
          </div>
          <Field label="Full name" name="name" required />
          <div className="grid gap-8 md:grid-cols-2">
            <Field label="Email" name="email" type="email" required />
            <Field label="Telephone" name="tel" type="tel" />
          </div>
          <Field label="Region of interest" name="region" placeholder="e.g. Côte d'Azur, Manhattan" />
          <div>
            <label className="text-[0.65rem] tracking-[0.28em] uppercase text-bone/60">
              Enquiry
            </label>
            <textarea
              name="enquiry"
              required
              rows={4}
              className="mt-3 w-full bg-transparent border-b border-bone/20 py-4 text-base outline-none focus:border-gilt transition-all duration-500 placeholder:text-bone/30 focus:pl-2"
              placeholder="Tell us, briefly, what you're looking for."
            />
          </div>
          {error && (
            <p className="text-[0.72rem] tracking-[0.05em] text-red-400" role="alert">
              {error}
            </p>
          )}
          <div className="flex items-center justify-between pt-4">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-bone/50 max-w-xs">
              All correspondence held in confidence.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-3 rounded-full bg-gilt text-obsidian px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-all duration-500 hover:bg-bone disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : sent ? "Appointment Requested" : "Request an appointment"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[0.65rem] tracking-[0.28em] uppercase text-bone/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-bone/25 py-3 text-base outline-none focus:border-gilt transition-colors placeholder:text-bone/30"
      />
    </div>
  );
}