import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section className="relative bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-6">Video dự án</p>
            <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl">
              Khám phá
              <span className="script gold-text"> The Sentosa</span>
            </h2>
            <div className="gold-rule mx-auto mt-8" />
          </div>
        </Reveal>

        <Reveal variant="scale" delay={120}>
          <div className="relative mt-14 w-full overflow-hidden border border-line" style={{ aspectRatio: "16/9" }}>
            <iframe
              src="https://www.youtube.com/embed/V-Hw-xetNao?si=L28oayqtlaJWhqyl"
              title="The Sentosa — Vinhomes Star City"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
