import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { HeroZoomImage } from "@/components/hero-image";

export function Hero() {
  return (
    <>
      {/* First screenful — the thin rule sits on the 100vh fold on desktop, and the
          hero grows to fill the viewport so the navy peek stays consistent on any height */}
      <div className="lg:flex lg:min-h-[calc(100vh-76px)] lg:flex-col">
        <section
          aria-labelledby="hero-heading"
          className="relative flex min-h-[82vh] items-center bg-white lg:min-h-0 lg:flex-1"
        >
          {/* Mobile image — full-bleed background with the copy overlaid on top.
              Swap src for a dedicated vertical crop when available. */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/hero-dentist.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/45" />
          </div>

          {/* Desktop image — bleeds to the right screen edge; narrower share on
              smaller desktops/iPads so the copy keeps a comfortable gutter */}
          <div className="hidden overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-[51%] xl:w-[53%] 2xl:w-[57%] min-[1800px]:w-3/5">
            <HeroZoomImage />
          </div>

          {/* Copy — overlaid & centered on mobile, 40% column on desktop */}
          <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 lg:px-8 2xl:max-w-[1560px] min-[1800px]:max-w-[1680px]">
            <div className="w-full py-10 lg:w-[46%] lg:py-16 lg:pr-8 xl:w-[43%] xl:pr-14 min-[1800px]:w-2/5">
              <h1
                id="hero-heading"
                className="eyebrow text-white/70 lg:text-accent"
              >
                Family-owned dentist &middot; Edison, NJ
              </h1>
              <p className="mt-4 text-[clamp(1.7rem,7.2vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-white lg:text-[clamp(2.1rem,3.7vw,3.5rem)] lg:text-ink">
                <span className="block whitespace-nowrap">
                  Considered{" "}
                  <span className="text-[#a3c2ff] lg:text-[color:var(--hero-accent)]">
                    care,
                  </span>
                </span>
                <span className="block whitespace-nowrap">
                  considered{" "}
                  <span className="text-[#a3c2ff] lg:text-[color:var(--hero-accent)]">
                    smiles.
                  </span>
                </span>
              </p>
              {/* Mobile: short, larger copy that reads easily over the photo */}
              <p className="mt-5 max-w-md text-[18px] font-medium leading-snug text-white lg:hidden">
                Four dentists, one in-house lab, and care built around what
                actually matters.
              </p>
              {/* Desktop: fuller intro */}
              <p className="mt-5 hidden max-w-lg text-[17px] font-[450] leading-relaxed lg:block lg:text-ink/85">
                Four dentists, an in-house dental lab, and a practice built
                around the work that matters. Dr. Yan Ma has been looking after
                Edison families for two decades.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/book"
                  className="rounded-full bg-navy px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-100 ease-out hover:bg-navy-deep lg:bg-dark lg:hover:bg-[#29374c]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/team"
                  className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-white lg:text-ink"
                >
                  Meet the team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Navy next-section peek — this rule marks the 100vh fold. Grows on
            larger monitors so more blue shows; unchanged on ~13" screens. */}
        <div className="bg-navy" aria-hidden="true">
          <div className="h-24 border-b border-white/15 [@media(min-height:1000px)]:h-36 [@media(min-height:1240px)]:h-44" />
        </div>
      </div>

      {/* Navy section continues below the fold so the full blue band
          (peek + this) spans exactly 100vh from where the blue begins */}
      <div
        className="w-full bg-navy min-h-[calc(100vh-96px)] [@media(min-height:1000px)]:min-h-[calc(100vh-144px)] [@media(min-height:1240px)]:min-h-[calc(100vh-176px)]"
        aria-hidden="true"
      />
    </>
  );
}
