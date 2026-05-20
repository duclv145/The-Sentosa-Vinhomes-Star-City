export default function Cinematic({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <section
      style={{ height: "100vh", position: "relative" }}
      aria-label={alt}
    >
      {/* Fixed image — GPU composited, zero jitter */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#052a22",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/20" />

      {caption && (
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <span className="border border-gold/40 bg-ink/50 px-6 py-2.5 text-[0.62rem] tracking-[0.36em] text-gold uppercase backdrop-blur">
            {caption}
          </span>
        </div>
      )}
    </section>
  );
}
