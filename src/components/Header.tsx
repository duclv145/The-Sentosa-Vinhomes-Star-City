"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Cảm hứng", href: "#inspiration" },
  { label: "3 Hòn đảo", href: "#islands" },
  { label: "Tiện ích", href: "#signatures" },
  { label: "Căn hộ", href: "#residences" },
  { label: "Mặt bằng", href: "#floorplans" },
  { label: "Vị trí", href: "#location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          top: hidden ? "-120px" : "0",
          transition: "top 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" className="flex items-center leading-none">
            <Image
              src="/images/logo-sentosa.png"
              alt="The Sentosa"
              width={100}
              height={87}
              className="object-contain"
              priority
            />
          </a>

          <button
            aria-label="Mở menu"
            onClick={() => setOpen(true)}
            className="flex flex-col gap-[6px] p-2"
          >
            <span className="block h-px w-7 bg-cream" />
            <span className="block h-px w-7 bg-cream" />
            <span className="block h-px w-5 bg-gold" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm transition-opacity duration-500"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 z-[70] flex w-[min(420px,100vw)] flex-col bg-emerald-deep/98 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex items-center justify-between px-8 py-7">
          <Image
            src="/images/logo-sentosa.png"
            alt="The Sentosa"
            width={72}
            height={63}
            className="object-contain"
          />
          <button
            aria-label="Đóng menu"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2 text-[0.65rem] tracking-[0.3em] text-cream/60 uppercase transition-colors hover:text-gold"
          >
            <span>Đóng</span>
            <div className="relative h-6 w-6">
              <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
            </div>
          </button>
        </div>

        <div className="mx-8 h-px bg-line" />

        <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 border-b border-line/50 py-5 transition-colors"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateX(20px)",
                transition: `opacity 0.4s ease ${i * 55 + 100}ms, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 55 + 100}ms`,
              }}
            >
              <span className="w-5 text-[0.6rem] tracking-[0.2em] text-gold/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[family-name:var(--font-display)] text-2xl text-cream group-hover:text-gold">
                {n.label}
              </span>
            </a>
          ))}
        </nav>

        <div
          className="px-8 pb-10"
          style={{
            opacity: open ? 1 : 0,
            transition: `opacity 0.4s ease ${NAV.length * 55 + 150}ms`,
          }}
        >
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="group relative block overflow-hidden border border-gold py-4 text-center text-sm font-medium tracking-[0.24em] text-cream uppercase transition-colors duration-500 hover:text-ink"
          >
            <span className="relative z-10">Đăng ký tư vấn</span>
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 ease-[var(--ease-lux)] group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </>
  );
}
