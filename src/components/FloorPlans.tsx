"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FLOORPLANS } from "@/lib/content";

export default function FloorPlans() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const fp = FLOORPLANS[active];

  useEffect(() => {
    document.body.style.overflow = zoom ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [zoom]);

  return (
    <section id="floorplans" className="relative bg-emerald-grad py-28 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Mặt bằng căn hộ điển hình</p>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl">
            Thiết kế tối ưu
            <span className="script gold-text"> từng mét vuông</span>
          </h2>
          <div className="gold-rule mx-auto mt-8" />
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {FLOORPLANS.map((p, i) => (
            <button
              key={p.key}
              onClick={() => setActive(i)}
              className={`border px-7 py-3 text-sm font-medium tracking-[0.16em] uppercase transition-all duration-400 ${
                i === active
                  ? "border-gold bg-gold text-ink"
                  : "border-line text-cream-muted hover:border-gold/60 hover:text-cream"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setZoom(true)}
          className="group relative mt-4 block aspect-video w-full cursor-zoom-in overflow-hidden border border-line"
        >
          <Image
            key={fp.key}
            src={fp.img}
            alt={`Mặt bằng ${fp.name} ${fp.code} — Toà S2`}
            fill
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="object-contain transition-transform duration-700 ease-[var(--ease-lux)] group-hover:scale-[1.02]"
          />
          <span className="absolute bottom-5 right-5 border border-gold/40 bg-ink/60 px-4 py-2 text-[0.66rem] tracking-[0.2em] text-gold uppercase backdrop-blur">
            Phóng to ⤢
          </span>
        </button>

        <p className="mx-auto mt-9 max-w-2xl text-center text-sm font-light leading-relaxed text-cream-muted">
          Bố trí công năng tối ưu theo chuẩn căn hộ phong cách Singapore — đón
          sáng và gió tự nhiên, hướng trọn tầm nhìn ra ốc đảo cảnh quan. Áp
          dụng cho cả ba toà S1 · S2 · S3.
        </p>
      </div>

      {zoom && (
        <div
          onClick={() => setZoom(false)}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-md animate-[fadeUp_0.4s_ease]"
        >
          <button
            aria-label="Đóng"
            className="absolute right-7 top-7 h-9 w-9"
            onClick={() => setZoom(false)}
          >
            <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cream" />
            <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-cream" />
          </button>
          <div
            className="relative h-[82vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fp.img}
              alt={`Mặt bằng ${fp.name} ${fp.code}`}
              fill
              sizes="92vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
