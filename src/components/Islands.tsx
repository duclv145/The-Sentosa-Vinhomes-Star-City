"use client";

import Image from "next/image";
import { useState } from "react";
import { ISLANDS } from "@/lib/content";

export default function Islands() {
  const [active, setActive] = useState(1);

  return (
    <section id="islands" className="relative bg-emerald-grad py-28 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Ba toà tháp — Ba hòn đảo</p>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl">
            Ba tính cách,
            <span className="script gold-text"> một hơi thở nghỉ dưỡng</span>
          </h2>
          <div className="gold-rule mx-auto mt-8" />
        </div>

        <div className="mt-16 flex flex-col gap-3 md:h-[560px] md:flex-row">
          {ISLANDS.map((isl, i) => (
            <button
              key={isl.code}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden text-left transition-all duration-700 ease-[var(--ease-lux)] ${
                active === i
                  ? "md:flex-[3.4]"
                  : "md:flex-[1]"
              } h-[280px] md:h-auto`}
            >
              <Image
                src={isl.img}
                alt={isl.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-lux)] group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  active === i
                    ? "bg-gradient-to-t from-ink/92 via-ink/30 to-transparent"
                    : "bg-emerald-deep/70"
                }`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-7 lg:p-9">
                <span className="font-[family-name:var(--font-display)] text-5xl gold-text lg:text-6xl">
                  {isl.code}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-cream lg:text-3xl">
                  {isl.name}
                </h3>
                <p
                  className={`mt-4 max-w-md text-sm font-light leading-relaxed text-cream-muted transition-all duration-500 ${
                    active === i
                      ? "max-h-32 opacity-100"
                      : "max-h-0 overflow-hidden opacity-0 md:max-h-0"
                  }`}
                >
                  {isl.desc}
                </p>
              </div>
              <span
                className={`absolute left-0 top-0 h-1 bg-gold transition-all duration-700 ${
                  active === i ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
