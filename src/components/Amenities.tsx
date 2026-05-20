import Image from "next/image";
import Reveal from "./Reveal";
import { AMENITIES } from "@/lib/content";

export default function Amenities() {
  return (
    <section id="amenities" className="relative bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-6">Tiện ích nội khu — Tầng 5</p>
            <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl lg:text-[3.4rem]">
              Đặc quyền nghỉ dưỡng
              <span className="script block gold-text">
                ngay trong toà nhà
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-sm text-[0.95rem] font-light leading-relaxed text-cream-muted md:text-right">
              Mỗi toà S1 · S2 · S3 sở hữu hệ tiện ích riêng tại tầng 5 — sảnh
              căn hộ, sinh hoạt cộng đồng, gym, game và Kids Corner chuẩn resort.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {AMENITIES.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 3) * 90}
              as="article"
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={a.src}
                alt={a.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-lux)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[0.62rem] tracking-[0.32em] text-gold uppercase">
                  {a.tag}
                </span>
                <h3 className="mt-2 text-xl text-cream lg:text-2xl">
                  {a.title}
                </h3>
                <span className="mt-3 block h-px w-0 bg-gold transition-all duration-700 ease-[var(--ease-lux)] group-hover:w-14" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
