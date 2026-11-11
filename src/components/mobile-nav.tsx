"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, CloseIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { primaryNav, servicesMenu, aboutMenu } from "@/lib/nav-data";
import type { MenuColumn } from "@/lib/nav-data";

function AccordionSection({
  label,
  columns,
  linkOnly = [],
  fallbackHref,
  onClose,
}: {
  label: string;
  columns: MenuColumn[];
  // Column titles that should render as a single tappable link (no sub-links)
  // to keep the mobile/tablet menu short and scroll-free.
  linkOnly?: string[];
  fallbackHref: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold transition-colors duration-75 ${
          open ? "text-[#274a90]" : "text-ink"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-75 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-5 pb-5">
            {columns.map((col) => {
              if (linkOnly.includes(col.title)) {
                return (
                  <Link
                    key={col.title}
                    href={col.cta?.href ?? fallbackHref}
                    onClick={onClose}
                    className="block text-[15px] font-bold text-ink"
                  >
                    {col.title}
                  </Link>
                );
              }
              return (
                <div key={col.title}>
                  <Link
                    href={col.cta?.href ?? fallbackHref}
                    onClick={onClose}
                    className="block text-[15px] font-bold text-ink"
                  >
                    {col.title}
                  </Link>
                  <ul className="mt-2 space-y-2">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={onClose}
                          className="text-[15px] text-ink"
                        >
                          {l.label}
                          {l.note && (
                            <span className="ml-1 text-[13px] italic text-muted">
                              ({l.note})
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${
        open ? "" : "invisible pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* top-0 + h-[100svh] (small-viewport height) keeps the scroll area a fixed
          size so the menu reopens to the exact spot even as the iOS URL bar shows/hides */}
      <div className="absolute right-0 top-0 flex h-[100svh] w-full max-w-md flex-col bg-white shadow-xl">
        {/* h-[77px] = 76 + 1px border so the logo centers identically to the sticky header */}
        <div className="flex h-[77px] items-center justify-between border-b border-hairline px-5">
          <Link href="/" onClick={onClose} aria-label="Edison Dental 27 home">
            <Logo className="h-[46px] w-auto" priority />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-ink hover:bg-hairline/60"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5">
          <AccordionSection
            label="Services"
            columns={servicesMenu.columns}
            linkOnly={[
              "Restorative Dentistry",
              "Cosmetic & Orthodontics",
              "Specialty & Advanced",
            ]}
            fallbackHref="/services"
            onClose={onClose}
          />
          <AccordionSection
            label="About Us"
            columns={aboutMenu.columns}
            linkOnly={["Meet Our Team", "Our Office"]}
            fallbackHref="/about"
            onClose={onClose}
          />
          {primaryNav
            .filter((n) => !n.menu)
            .map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={onClose}
                className="block border-b border-hairline py-4 text-[17px] font-semibold text-ink"
              >
                {n.label}
              </Link>
            ))}
        </nav>

        <div className="space-y-3 border-t border-hairline px-5 py-5">
          <Link
            href="/emergency-care"
            onClick={onClose}
            className="block rounded-full border border-brandred px-5 py-3 text-center text-[15px] font-semibold text-brandred"
          >
            Emergency Care
          </Link>
          <Link
            href="/book"
            onClick={onClose}
            className="block rounded-full bg-dark px-5 py-3 text-center text-[15px] font-semibold text-white"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
