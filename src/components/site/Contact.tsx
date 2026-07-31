import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
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

  const requestId = `VC-${new Date().getFullYear()}-${Math.floor(
    10000 + Math.random() * 90000
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-obsidian text-bone py-28 md:py-40"
    >

      {/* ambient luxury glow */}
      <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gilt/10 blur-[180px]" />


      <div className="container-page grid gap-16 md:grid-cols-12">

        {/* LEFT CONTENT */}

        <div className="md:col-span-5 space-y-10">

          <div>
            <div className="eyebrow text-bone/60 mb-6">
              — By appointment
            </div>

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
              alt="Private consultation lounge"
              className="
              h-full w-full object-cover
              transition-transform duration-[1500ms]
              group-hover:scale-105
              "
            />


            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>


            <div className="absolute bottom-6 left-6">

              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-bone/60">
                PRIVATE CONSULTATION
              </div>

              <div className="font-display text-3xl mt-2">
                Private Client Lounge
              </div>

            </div>


          </div>



          <div className="grid gap-6 md:grid-cols-3">

          {offices.map(([city,addr,tel])=>(

            <div
            key={city}
            className="
            group
            border-t border-bone/10
            pt-5
            transition-all
            duration-500
            hover:border-gilt
            "
            >

              <div className="
              font-display text-xl
              group-hover:text-gilt
              transition-colors
              ">
                {city}
              </div>


              <div className="text-xs text-bone/60 mt-2 leading-relaxed">
                {addr}
              </div>


              <div className="text-xs text-bone/80 mt-1">
                {tel}
              </div>


            </div>

          ))}


          </div>


        </div>





        {/* FORM / SUCCESS AREA */}

        <div className="md:col-span-6 md:col-start-7">


        <AnimatePresence mode="wait">


        {!sent ? (

        <motion.form

        key="form"

        initial={{
          opacity:0,
          y:30
        }}

        animate={{
          opacity:1,
          y:0
        }}

        exit={{
          opacity:0,
          y:-30,
          scale:.96
        }}

        transition={{
          duration:.7,
          ease:[0.22,1,0.36,1]
        }}


        onSubmit={async(e)=>{

          e.preventDefault();

          setError(null);

          const form=e.currentTarget;

          const data=Object.fromEntries(
            new FormData(form).entries()
          );


          if(!data.name || !data.email || !data.enquiry){

            setError(
            "Please fill in your name, email, and enquiry."
            );

            return;

          }


          setSubmitting(true);


          await new Promise(
            resolve=>setTimeout(resolve,1200)
          );


          setSent(true);

          form.reset();

          setSubmitting(false);


        }}


        className="
        bg-white/[0.04]
        backdrop-blur-xl
        border border-bone/10
        rounded-2xl
        p-8 md:p-12
        space-y-10
        shadow-[0_35px_80px_rgba(0,0,0,.35)]
        "

        >


        <div>

        <div className="eyebrow text-bone/60 mb-4">
        — Private consultation
        </div>


        <h3 className="font-display text-4xl">
        Tell us about your next residence.
        </h3>


        </div>


        <Field label="Full name" name="name" required/>


        <div className="grid gap-8 md:grid-cols-2">

        <Field label="Email" name="email" type="email" required/>

        <Field label="Telephone" name="tel" type="tel"/>

        </div>


        <Field 
        label="Region of interest"
        name="region"
        placeholder="e.g. Côte d'Azur, Manhattan"
        />



        <div>

        <label className="text-[0.65rem] tracking-[0.28em] uppercase text-bone/60">
        Enquiry
        </label>


        <textarea
        name="enquiry"
        rows={4}
        required
        className="
        mt-3
        w-full
        bg-transparent
        border-b
        border-bone/20
        py-4
        outline-none
        focus:border-gilt
        transition-all
        "
        placeholder="Tell us briefly what you are looking for."
        />


        </div>


        {error && (
        <p className="text-red-400 text-sm">
        {error}
        </p>
        )}



        <div className="flex items-center justify-between pt-4">


        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-bone/50 max-w-xs">
        All correspondence held in confidence.
        </p>



        <button
        disabled={submitting}
        className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-gilt
        text-obsidian
        px-8
        py-4
        text-[0.72rem]
        tracking-[0.24em]
        uppercase
        transition-all
        duration-500
        hover:bg-bone
        hover:-translate-y-1
        "
        >

        {submitting
        ?"Sending..."
        :"Request an appointment"
        }


        <ArrowUpRight className="h-4 w-4"/>


        </button>


        </div>



        </motion.form>


        ) : (

        <SuccessCard requestId={requestId}/>

        )}



        </AnimatePresence>


        </div>


      </div>

    </section>
  );
}

function SuccessCard({
  requestId,
}: {
  requestId: string;
}) {

  return (

    <motion.div

      key="success"

      initial={{
        opacity:0,
        y:40,
        scale:.96
      }}

      animate={{
        opacity:1,
        y:0,
        scale:1
      }}

      exit={{
        opacity:0,
        y:-20
      }}

      transition={{
        duration:.8,
        ease:[0.22,1,0.36,1]
      }}

      className="
      relative
      overflow-hidden
      rounded-2xl
      border
      border-bone/10
      bg-white/[0.05]
      backdrop-blur-xl
      p-8
      md:p-12
      shadow-[0_35px_90px_rgba(0,0,0,.45)]
      "

    >


      {/* glow */}

      <div
      className="
      absolute
      -top-24
      left-1/2
      h-64
      w-64
      -translate-x-1/2
      rounded-full
      bg-gilt/20
      blur-[100px]
      "
      />



      <div className="relative z-10 space-y-10">


        {/* ICON */}

        <motion.div

        initial={{
          scale:0,
          rotate:-20
        }}

        animate={{
          scale:1,
          rotate:0
        }}

        transition={{
          delay:.2,
          type:"spring",
          stiffness:150
        }}

        className="
        relative
        mx-auto
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        border
        border-gilt/40
        bg-gilt/10
        "

        >


          <motion.div

          animate={{
            opacity:[.4,1,.4],
            scale:[1,1.15,1]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="
          absolute
          inset-0
          rounded-full
          bg-gilt/20
          blur-xl
          "

          />


          <Check
          className="
          relative
          h-9
          w-9
          text-gilt
          "
          />


        </motion.div>





        {/* TITLE */}


        <div className="text-center space-y-5">


          <div className="
          eyebrow
          text-bone/60
          "
          >
          — Request received
          </div>



          <h3
          className="
          font-display
          text-4xl
          md:text-5xl
          leading-tight
          "
          >

          Your private consultation
          has been reserved.

          </h3>



          <p
          className="
          text-sm
          text-bone/70
          leading-8
          max-w-md
          mx-auto
          "
          >

          Thank you for contacting our private client team.
          A dedicated advisor will carefully review your enquiry
          and respond within one business day.

          </p>


        </div>





        {/* REQUEST ID */}


        <div
        className="
        flex
        items-center
        justify-center
        "
        >

          <div
          className="
          rounded-full
          border
          border-bone/10
          bg-black/20
          px-6
          py-3
          text-xs
          tracking-[0.25em]
          uppercase
          text-bone/60
          "
          >

          Reference&nbsp;

          <span className="text-gilt">

          {requestId}

          </span>


          </div>


        </div>






        {/* TIMELINE */}


        <div
        className="
        grid
        grid-cols-3
        gap-3
        pt-4
        "
        >

        {[
          "Received",
          "Reviewing",
          "Confirmation"
        ].map((item,index)=>(


          <div
          key={item}
          className="text-center"
          >

            <div
            className={`
            mx-auto
            mb-3
            h-2
            w-2
            rounded-full
            ${
              index===0
              ?
              "bg-gilt shadow-[0_0_20px_rgba(176,141,87,.8)]"
              :
              index===1
              ?
              "bg-gilt/60"
              :
              "bg-bone/20"
            }
            `}
            />


            <p
            className="
            text-[0.65rem]
            uppercase
            tracking-[0.2em]
            text-bone/60
            "
            >

            {item}

            </p>


          </div>


        ))}



        </div>






        {/* CTA */}


        <div className="flex justify-center pt-4">


        <button

        onClick={()=>window.scrollTo({
          top:0,
          behavior:"smooth"
        })}

        className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-gilt
        px-8
        py-4
        text-[0.72rem]
        tracking-[0.24em]
        uppercase
        text-obsidian
        transition-all
        duration-500
        hover:bg-bone
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(176,141,87,.35)]
        "

        >

        Explore Our Collection


        <Sparkles
        className="
        h-4
        w-4
        transition-transform
        group-hover:rotate-12
        "
        />


        </button>


        </div>



      </div>


    </motion.div>

  );
}





function Field({
  label,
  name,
  type="text",
  placeholder,
  required,
}:{
  label:string;
  name:string;
  type?:string;
  placeholder?:string;
  required?:boolean;
}){


return (

<div>


<label
htmlFor={name}
className="
text-[0.65rem]
tracking-[0.28em]
uppercase
text-bone/60
"
>

{label}

</label>



<input

id={name}
name={name}
type={type}
required={required}
placeholder={placeholder}

className="
mt-3
w-full
bg-transparent
border-b
border-bone/25
py-3
text-base
outline-none
transition-all
duration-500
focus:border-gilt
focus:pl-2
placeholder:text-bone/30
"

/>


</div>

)

}