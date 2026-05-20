import Image from "next/image";
import Reveal from "./Reveal";
import { SIGNATURES } from "@/lib/content";

export default function Signatures() {
  return (
    <section id="signatures" className="relative bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

        {/* Heading */}
        <Reveal>
          <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-5">Đặc quyền biểu tượng</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl lg:text-[3.6rem]">
                Bộ sưu tập tiện ích
                <span className="script block gold-text">chuẩn Singapore</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-cream-muted lg:text-right">
              Ba đặc quyền kiến tạo nên một đẳng cấp sống chưa từng có tại
              Thanh Hoá — nơi nghỉ dưỡng, mua sắm và thư giãn hội tụ trong một
              toà tháp.
            </p>
          </div>
        </Reveal>

        {/* First card — full width */}
        <Reveal variant="scale" delay={0}>
          <div className="group relative mb-4 h-[70vh] min-h-[480px] w-full overflow-hidden">
            <Image
              src={SIGNATURES[0].img}
              alt={SIGNATURES[0].title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[2s] ease-[var(--ease-lux)] group-hover:scale-105"
            />
            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

            {/* Number */}
            <div className="absolute right-8 top-8 font-[family-name:var(--font-display)] text-[6rem] leading-none text-gold/10 select-none lg:text-[10rem]">
              01
            </div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="text-[0.66rem] tracking-[0.34em] text-gold uppercase">
                    {SIGNATURES[0].tag}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-cream lg:text-5xl">
                    {SIGNATURES[0].title}
                  </h3>
                  <p className="mt-2 text-base gold-text">{SIGNATURES[0].sub}</p>
                </div>
                <p className="max-w-sm text-sm font-light leading-relaxed text-cream-muted lg:text-right">
                  {SIGNATURES[0].desc}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Two cards below */}
        <div className="grid gap-4 lg:grid-cols-2">
          {SIGNATURES.slice(1).map((s, i) => (
            <Reveal key={s.title} variant="scale" delay={(i + 1) * 80}>
              <div className="group relative h-[55vh] min-h-[380px] w-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] ease-[var(--ease-lux)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                {/* Number */}
                <div className="absolute right-6 top-6 font-[family-name:var(--font-display)] text-[5rem] leading-none text-gold/10 select-none lg:text-[7rem]">
                  0{i + 2}
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-10">
                  <span className="text-[0.66rem] tracking-[0.34em] text-gold uppercase">
                    {s.tag}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-cream lg:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm gold-text">{s.sub}</p>
                  <div className="h-px w-10 bg-gold/30 my-4" />
                  <p className="max-w-xs text-sm font-light leading-relaxed text-cream-muted">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
