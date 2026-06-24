"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Build Your Bowl", href: "/build-your-own" },
  { label: "Allergens", href: "/allergens" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3">
      <nav className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 rounded-full border border-white/55 bg-ivory/72 px-4 shadow-soft backdrop-blur-2xl sm:px-6">
        <Link href="/" className="inline-flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-sm font-black text-ivory">
            PC
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-forest">POKE CITY</span>
            <span className="block text-xs font-black uppercase tracking-[0.22em] text-sage">
              Bolzano
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs font-black uppercase tracking-[0.14em] transition ${
                  active ? "text-forest" : "text-forest/58 hover:text-sage"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/order" className="hidden lg:inline-flex primary-button">
          Order Now
        </Link>

        <button
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/10 bg-white/64 shadow-sm backdrop-blur-xl lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 rounded-full bg-forest transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 rounded-full bg-forest transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 rounded-full bg-forest transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 -z-10 bg-forest/28 backdrop-blur-xl lg:hidden">
          <div className="mx-3 mt-24 rounded-[2rem] border border-white/45 bg-ivory/92 p-4 shadow-soft backdrop-blur-2xl">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-4 text-lg font-black transition ${
                    pathname === item.href ? "bg-mint text-forest" : "text-forest hover:bg-mint/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/order" onClick={() => setOpen(false)} className="primary-button mt-4 w-full">
              Order Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
