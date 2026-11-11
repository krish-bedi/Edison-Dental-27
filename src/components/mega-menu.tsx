import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { servicesMenu, aboutMenu } from "@/lib/nav-data";

function ColumnHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <h3 className="text-[17px] font-bold text-ink">{title}</h3>
      <p className="eyebrow mt-1 text-[#7a8da9]">{subtitle}</p>
    </>
  );
}

function LinkList({
  links,
}: {
  links: { label: string; href: string; note?: string }[];
}) {
  return (
    <ul className="mt-4 space-y-2.5">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="text-[15px] text-ink transition-colors hover:text-link"
          >
            {l.label}
            {l.note && (
              <span className="ml-1.5 text-[13px] italic text-muted">
                ({l.note})
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SeeAll({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group mt-4 flex items-center gap-1.5 border-t border-hairline pt-4 text-[14px] font-medium italic text-link"
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Services mega menu                                                          */
/* -------------------------------------------------------------------------- */
export function ServicesMega() {
  const [prev, resto, cosmetic, specialty] = servicesMenu.columns;
  return (
    <div className="mx-auto max-w-[1320px] px-8 py-4 2xl:max-w-[1560px] min-[1800px]:max-w-[1680px]">
      {/* In-pain alert */}
      <div className="flex flex-col gap-2 rounded-lg border border-peach-border bg-peach px-5 py-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-[13px] text-ink">
          <span className="h-2 w-2 rounded-full bg-brandred" />
          <span className="font-bold uppercase tracking-wide text-brandred">
            {servicesMenu.alert.label}
          </span>
          <span>{servicesMenu.alert.text}</span>
        </p>
        <p className="flex items-center gap-3 text-[13px]">
          <span className="text-link">Open today &middot; 8am&ndash;6pm</span>
          <a href="tel:+17325550127" className="font-bold text-brandred">
            (732) 555-0127
          </a>
        </p>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-10">
        {/* Preventive & Family */}
        <div>
          <ColumnHeading title={prev.title} subtitle={prev.subtitle} />
          <Link
            href="/new-patients"
            className="mt-3 block rounded-lg border border-hairline px-4 py-2 transition-colors hover:border-accent"
          >
            <span className="eyebrow text-accent">New here</span>
            <span className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-ink">
              Start your first visit <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <LinkList links={prev.links} />
          {prev.cta && <SeeAll {...prev.cta} />}
        </div>

        {/* Restorative */}
        <div>
          <ColumnHeading title={resto.title} subtitle={resto.subtitle} />
          <LinkList links={resto.links} />
          {resto.cta && <SeeAll {...resto.cta} />}
        </div>

        {/* Cosmetic & Orthodontics */}
        <div>
          <ColumnHeading title={cosmetic.title} subtitle={cosmetic.subtitle} />
          <LinkList links={cosmetic.links} />
          <p className="eyebrow mt-4 text-muted">Recent work</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-md bg-hairline/70"
                aria-hidden="true"
              />
            ))}
          </div>
          <SeeAll label="See all smile transformations" href="/our-work" />
        </div>

        {/* Specialty & Advanced */}
        <div>
          <ColumnHeading
            title={specialty.title}
            subtitle={specialty.subtitle}
          />
          <LinkList links={specialty.links} />
          {specialty.cta && <SeeAll {...specialty.cta} />}
          <div className="mt-4 rounded-lg border border-accent/40 bg-lavender px-4 py-2">
            <span className="eyebrow text-accent">In-house lab</span>
            <p className="mt-1 text-[13px] italic text-ink">
              Crowns &amp; veneers made on-site &mdash; often same-week.
            </p>
            <Link
              href="/office/lab"
              className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-link"
            >
              Tour the lab <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Insurance strip */}
      <div className="mt-4 flex flex-col gap-2 rounded-lg bg-lavender px-5 py-2 text-[13px] lg:flex-row lg:items-center lg:justify-between">
        <p className="flex flex-wrap items-center gap-2 text-muted">
          <span className="eyebrow text-ink">In-network</span>
          <span className="font-bold text-ink">Delta Dental</span>
          <span>A fee-for-service practice for all other plans</span>
        </p>
        <p className="flex items-center gap-1.5 text-link">
          Out-of-network PPO claims filed for you &middot; Cherry financing
          available <ArrowRight className="h-3.5 w-3.5" />
        </p>
      </div>

      {/* Footer links */}
      <div className="mt-3 flex flex-col gap-3 border-t border-hairline pt-3 text-[14px] lg:flex-row lg:items-center lg:justify-between">
        <Link
          href={servicesMenu.helpCta.href}
          className="inline-flex items-center gap-1.5 font-medium italic text-link"
        >
          {servicesMenu.helpCta.label} <ArrowRight className="h-4 w-4" />
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {servicesMenu.footerLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-link hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* About mega menu                                                            */
/* -------------------------------------------------------------------------- */
export function AboutMega() {
  return (
    <div className="mx-auto max-w-[1320px] px-8 py-7 2xl:max-w-[1560px] min-[1800px]:max-w-[1680px]">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr_1fr_1.15fr]">
        {aboutMenu.columns.map((col) => (
          <div key={col.title}>
            <ColumnHeading title={col.title} subtitle={col.subtitle} />
            <LinkList links={col.links} />
            {col.cta && <SeeAll {...col.cta} />}
          </div>
        ))}

        {/* Feature card */}
        <div className="rounded-lg border border-hairline p-3">
          <div
            className="aspect-[2/1] w-full rounded-md bg-hairline/70"
            aria-hidden="true"
          />
          <p className="eyebrow mt-4 text-accent">
            {aboutMenu.feature.eyebrow}
          </p>
          <p className="mt-1 text-[15px] font-bold text-ink">
            {aboutMenu.feature.title}
          </p>
          <p className="mt-1 text-[13px] text-muted">
            {aboutMenu.feature.text}
          </p>
        </div>
      </div>

      {/* Footer links */}
      <div className="mt-6 flex flex-col gap-3 border-t border-hairline pt-4 text-[14px] lg:flex-row lg:items-center lg:justify-between">
        <Link
          href={aboutMenu.helpCta.href}
          className="inline-flex items-center gap-1.5 font-medium italic text-link"
        >
          {aboutMenu.helpCta.label} <ArrowRight className="h-4 w-4" />
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {aboutMenu.footerLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-link hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
