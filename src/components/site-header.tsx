"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ChevronDown, MenuIcon } from "@/components/icons";
import { ServicesMega, AboutMega } from "@/components/mega-menu";
import { MobileNav } from "@/components/mobile-nav";
import { primaryNav } from "@/lib/nav-data";

type OpenMenu = "services" | "about" | null;

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Remember the last panel so its content stays rendered while fading out.
  const [lastMenu, setLastMenu] = useState<Exclude<OpenMenu, null>>("services");

  const open = (menu: Exclude<OpenMenu, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setLastMenu(menu);
    setOpenMenu(menu);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-hairline bg-white font-nav"
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 lg:px-8 2xl:max-w-[1560px] min-[1800px]:max-w-[1680px]">
        <Link href="/" aria-label="Edison Dental 27 home" className="shrink-0">
          <Logo className="h-[46px] w-auto lg:h-[50px]" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.menu ? (
              <div
                key={item.href}
                className="flex items-center"
                onMouseEnter={() => open(item.menu!)}
              >
                <button
                  type="button"
                  aria-expanded={openMenu === item.menu}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu((cur) =>
                      cur === item.menu ? null : item.menu!,
                    )
                  }
                  className="flex items-center gap-1 text-[15px] font-medium text-ink transition-colors hover:text-link"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openMenu === item.menu ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={scheduleClose}
                className="text-[15px] font-medium text-ink transition-colors hover:text-link"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/emergency-care"
            className="rounded-full border border-brandred px-5 py-2 text-[14px] font-semibold text-brandred transition-colors duration-100 ease-out hover:bg-brandred hover:text-white"
          >
            Emergency Care
          </Link>
          <Link
            href="/book"
            className="rounded-full bg-dark px-5 py-2 text-[14px] font-semibold text-white transition-colors duration-100 ease-out hover:bg-[#29374c]"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-md p-2 text-ink hover:bg-hairline/60 lg:hidden"
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      {/* Desktop mega-menu panel */}
      <div
        className={`absolute inset-x-0 top-full hidden border-y border-hairline bg-white shadow-[0_16px_40px_-24px_rgba(28,36,52,0.35)] transition-[opacity,transform] ease-out lg:block ${
          openMenu
            ? "opacity-100 translate-y-0 duration-[75ms]"
            : "pointer-events-none -translate-y-1 opacity-0 duration-[70ms]"
        }`}
        aria-hidden={!openMenu}
        onMouseEnter={() => openMenu && open(openMenu)}
        onMouseLeave={scheduleClose}
      >
        {(openMenu ?? lastMenu) === "services" ? (
          <ServicesMega />
        ) : (
          <AboutMega />
        )}
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
