import Reveal from "./Reveal";
import { VALUES } from "@/lib/content";

export default function Values() {
  return (
    <section id="values" className="relative bg-ink-soft py-28 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">Giá trị tinh hoa</p>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl">
            Sáu đặc quyền làm nên
            <span className="script gold-text"> The Sentosa</span>
          </h2>
          <div className="gold-rule mx-auto mt-8" />
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.n}
              delay={(i % 3) * 110}
              className="group relative bg-ink-soft p-9 transition-colors duration-500 hover:bg-surface lg:p-11"
            >
              <span className="font-[family-name:var(--font-display)] text-5xl text-gold/25 transition-colors duration-500 group-hover:text-gold/55">
                {v.n}
              </span>
              <h3 className="mt-6 text-2xl text-cream">{v.title}</h3>
              <p className="mt-4 text-[0.95rem] font-light leading-relaxed text-cream-muted">
                {v.desc}
              </p>
              <span className="mt-7 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-16" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
