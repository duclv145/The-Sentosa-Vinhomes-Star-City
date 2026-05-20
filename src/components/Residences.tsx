"use client";

import Image from "next/image";
import { useState } from "react";
import { RESIDENCES } from "@/lib/content";

export default function Residences() {
  const [active, setActive] = useState(0);
  const r = RESIDENCES[active];

  return (
    <section id="residences" className="relative bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Không gian sống</p>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl">
            Căn hộ phong cách
            <span className="script gold-text"> Singapore</span>
          </h2>
          <div className="gold-rule mx-auto mt-8" />
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div className="relative aspect-[16/11] w-full overflow-hidden">
            {RESIDENCES.map((res, i) => (
              <Image
                key={res.key}
                src={res.img}
                alt={res.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={`object-cover transition-all duration-[1100ms] ease-[var(--ease-lux)] ${
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 ring-1 ring-inset ring-line" />
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {RESIDENCES.map((res, i) => (
                <button
                  key={res.key}
                  onClick={() => setActive(i)}
                  className={`border px-5 py-2.5 text-xs font-medium tracking-[0.16em] uppercase transition-all duration-400 ${
                    i === active
                      ? "border-gold bg-gold text-ink"
                      : "border-line text-cream-muted hover:border-gold/60 hover:text-cream"
                  }`}
                >
                  {res.name}
                </button>
              ))}
            </div>

            <div key={r.key} className="mt-10 animate-[fadeUp_0.6s_ease]">
              <span className="text-sm tracking-[0.26em] text-gold uppercase">
                {r.area}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-cream lg:text-4xl">
                {r.name}
              </h3>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-cream-muted">
                {r.desc}
              </p>
              <a
                href="#register"
                className="mt-9 inline-flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-gold uppercase"
              >
                Xem chi tiết
                <span className="h-px w-10 bg-gold" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
