import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { STATS } from "@/lib/content";

export default function Inspiration() {
  return (
    <section id="inspiration" className="relative bg-emerald-soft py-28 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-7">Tinh thần dự án</p>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl lg:text-[3.6rem]">
            Một tế bào của tư duy
            <span className="script block gold-text">đô thị Singapore</span>
          </h2>
          <div className="gold-rule mx-auto my-9" />
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-cream-muted">
            Từ một ốc đảo hoang sơ, The Sentosa vươn mình thành thiên đường
            nghỉ dưỡng — giải trí hàng đầu xứ Thanh: quy hoạch bài bản, không
            gian sống cân bằng, kiến trúc hiện đại tinh tế và một cộng đồng
            được chọn lọc.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base font-light italic leading-relaxed text-cream/70">
            “Không dành cho số đông — The Sentosa dành cho những người chọn
            sống trên tầm cao để giữ vị thế dẫn đầu.”
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:mt-28 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 110}
              className="bg-ink px-6 py-12 text-center lg:py-16"
            >
              <div className="font-[family-name:var(--font-display)] text-4xl gold-text sm:text-5xl lg:text-6xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-xs font-medium tracking-[0.18em] text-cream-muted uppercase">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
