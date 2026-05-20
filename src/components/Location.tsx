import Image from "next/image";
import Reveal from "./Reveal";
import { LOCATION_POINTS } from "@/lib/content";

export default function Location() {
  return (
    <section id="location" className="relative overflow-hidden bg-ink py-28 lg:py-40">

      {/* ── Heading ── */}
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-5">Vị trí kim cương</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl lg:text-[3.6rem]">
                Trung tâm Thanh Hoá
                <span className="script block gold-text">cửa ngõ thịnh vượng</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-cream-muted lg:text-right">
              Toạ lạc tại phường Hạc Thành — "khu nhà giàu" của Thanh Hoá,
              ngay cửa ngõ chiến lược Vinhomes Star City, trên trục đại lộ
              Nam Sông Mã — Nguyễn Hoàng.
            </p>
          </div>
        </Reveal>

        {/* ── Image full-width ── */}
        <Reveal variant="scale" delay={80}>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/images/sk-location.jpg"
              alt="Vị trí The Sentosa — trung tâm Thanh Hoá"
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute left-6 top-6 border border-gold/40 bg-ink/60 px-5 py-3 backdrop-blur-sm sm:left-10 sm:top-10">
              <p className="text-[0.58rem] tracking-[0.35em] text-gold uppercase">Vị trí dự án</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-base text-cream">
                Phường Hạc Thành, Thanh Hoá
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Distance strip ── */}
        <div className="mt-0 border border-t-0 border-line">
          <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {LOCATION_POINTS.map((p, i) => (
              <Reveal key={p.place} delay={i * 70}>
                <div className="flex flex-col gap-2 px-7 py-7">
                  <span className="font-[family-name:var(--font-display)] text-2xl gold-text">
                    {p.time}
                  </span>
                  <div className="h-px w-8 bg-gold/30" />
                  <span className="text-[0.82rem] font-light leading-snug text-cream-muted">
                    {p.place}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
