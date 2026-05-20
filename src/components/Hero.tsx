"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    src: "/images/hero-1.jpg",
    alt: "Vinhomes Star City nhìn từ trên cao — The Sentosa",
    eyebrow: "Vị thế trung tâm",
    h1: "Ốc đảo nghỉ dưỡng",
    h2: "giữa đại lộ thịnh vượng",
    sub: "Vinhomes Star City · Thanh Hoá",
    kbAnim: "kb-slide-0",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Vinhomes Star City ban ngày — The Sentosa",
    eyebrow: "Đô thị chuẩn quốc tế",
    h1: "Trung tâm thịnh vượng",
    h2: "Bắc Trung Bộ",
    sub: "3 toà S1 · S2 · S3 · Singapore phong cách",
    kbAnim: "kb-slide-1",
  },
  {
    src: "/images/facade-s1.jpg",
    alt: "Mặt tiền toà S1 — The Sentosa",
    eyebrow: "Đảo An Nhiên · S1",
    h1: "Kiến trúc tinh tế",
    h2: "chuẩn mực Singapore",
    sub: "Sảnh đón · Sky Garden · Mini Orchard",
    kbAnim: "kb-slide-2",
  },
  {
    src: "/images/facade-s2.jpg",
    alt: "Mặt tiền toà S2 — The Sentosa",
    eyebrow: "Đảo Cân Bằng · S2",
    h1: "Tầm nhìn panorama",
    h2: "đón trọn ánh sáng",
    sub: "Căn hộ Studio · 1PN · 2PN · 3PN",
    kbAnim: "kb-slide-3",
  },
];

const DURATION = 6500;
const FADE_MS  = 1200;

export default function Hero() {
  const [idx, setIdx]         = useState(0);
  const [animKeys, setAnimKeys] = useState([0, 0, 0, 0]); // restart KB per slide
  const [textKey, setTextKey] = useState(0);
  const [ready, setReady]     = useState(false);
  const timerRef              = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2600);
    return () => clearTimeout(t);
  }, []);

  const advance = (next: number) => {
    setIdx(next);
    setTextKey((k) => k + 1);
    setAnimKeys((prev) => {
      const a = [...prev];
      a[next] = a[next] + 1; // force animation restart on active slide
      return a;
    });
  };

  const startTimer = (from: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx((cur) => {
        const next = (cur + 1) % SLIDES.length;
        advance(next);
        return next;
      });
    }, DURATION);
  };

  useEffect(() => {
    if (!ready) return;
    // Only show text — do NOT remount image (would cause flash)
    setTextKey((k) => k + 1);
    startTimer(0);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [ready]);

  const goTo = (next: number) => {
    if (next === idx) return;
    advance(next);
    startTimer(next);
  };

  const slide = SLIDES[idx];

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">

      {/* ─── Slides — always in DOM so KB animation works ─── */}
      {SLIDES.map((s, i) => {
        const isActive = i === idx;
        return (
          <div
            key={s.src}
            className="absolute inset-0"
            style={{
              zIndex: isActive ? 2 : 1,
              opacity: isActive ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          >
            {/* image wrapper carries the KB animation */}
            <div
              key={`${i}-${animKeys[i]}`}  // remount = restart animation
              className="absolute inset-0"
              style={{
                animation: isActive
                  ? `${s.kbAnim} ${DURATION + FADE_MS}ms linear forwards`
                  : "none",
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        );
      })}

      {/* ─── Overlays ─── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink/55 via-ink/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-2/5 bg-gradient-to-b from-transparent to-ink/80" />
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-ink/45 to-transparent" />

      {/* ─── Text ─── */}
      <div
        className="absolute inset-0 z-20 flex flex-col justify-end px-8 pb-36 sm:px-14 sm:pb-40 lg:px-20 lg:pb-44"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 1.2s ease" }}
      >
        <div key={textKey} className="max-w-3xl">

          {/* Eyebrow with side lines */}
          <div className="mb-6 flex items-center gap-4"
               style={{ animation: "hIn 0.8s cubic-bezier(0.22,1,0.36,1) 0s both" }}>
            <div className="h-px w-8 bg-gold/60" />
            <p className="text-[0.62rem] tracking-[0.52em] text-gold uppercase">
              {slide.eyebrow}
            </p>
          </div>

          {/* Main headline */}
          <h1
            className="font-[family-name:var(--font-display)] text-[2.8rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            style={{ animation: "hIn 1s cubic-bezier(0.22,1,0.36,1) 0.12s both" }}
          >
            {slide.h1}
          </h1>

          {/* Script italic accent line */}
          <h2
            className="script gold-text mt-1 font-[family-name:var(--font-display)] text-[2.4rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animation: "hIn 1s cubic-bezier(0.22,1,0.36,1) 0.26s both" }}
          >
            {slide.h2}
          </h2>

          {/* Divider + sub */}
          <div
            className="mt-8 flex items-center gap-5"
            style={{ animation: "hIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.44s both" }}
          >
            <div className="h-10 w-px bg-gold/40 shrink-0" />
            <p className="text-[0.7rem] font-light leading-relaxed tracking-[0.28em] text-cream/50 uppercase">
              {slide.sub}
            </p>
          </div>

        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-8 pb-8 sm:px-14 sm:pb-10 lg:px-20"
        style={{
          opacity: ready ? 1 : 0,
          transform: ready ? "none" : "translateY(16px)",
          transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
        }}
      >
        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a href="#register"
             className="group relative overflow-hidden border border-gold bg-gold/10 px-8 py-3.5 text-[0.72rem] font-medium tracking-[0.22em] text-cream uppercase backdrop-blur-sm transition-colors duration-500 hover:text-ink">
            <span className="relative z-10">Nhận bảng giá</span>
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 ease-[var(--ease-lux)] group-hover:translate-x-0" />
          </a>
          <a href="#inspiration"
             className="hidden text-[0.72rem] font-light tracking-[0.22em] text-cream/65 uppercase underline-offset-4 transition-colors hover:text-gold hover:underline sm:inline">
            Khám phá dự án
          </a>
        </div>

        {/* Arrows + dots */}
        <div className="flex items-center gap-4">
          <button onClick={() => goTo((idx - 1 + SLIDES.length) % SLIDES.length)}
                  aria-label="Previous"
                  className="flex h-9 w-9 items-center justify-center border border-cream/20 text-cream/50 transition-all hover:border-gold/60 hover:text-gold">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                      className="relative h-[2px] overflow-hidden bg-cream/20 transition-all duration-500"
                      style={{ width: i === idx ? 40 : 20 }}>
                <span className="absolute inset-0 origin-left bg-gold"
                      style={{
                        transform: i === idx ? "scaleX(1)" : "scaleX(0)",
                        transition: i === idx ? `transform ${DURATION}ms linear` : "transform 0.3s ease",
                      }} />
              </button>
            ))}
          </div>

          <button onClick={() => goTo((idx + 1) % SLIDES.length)}
                  aria-label="Next"
                  className="flex h-9 w-9 items-center justify-center border border-cream/20 text-cream/50 transition-all hover:border-gold/60 hover:text-gold">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ─── Slide counter ─── */}
      <div className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex lg:right-14"
           style={{ opacity: ready ? 0.45 : 0, transition: "opacity 1s ease 0.5s" }}>
        <span className="font-[family-name:var(--font-display)] text-xl text-cream">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <div className="h-10 w-px bg-cream/30" />
        <span className="font-[family-name:var(--font-display)] text-sm text-cream/35">
          {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      <style>{`
        /* Ken Burns — zoom IN, pan nhẹ, linear để liên tục đều */
        @keyframes kb-slide-0 {
          from { transform: scale(1.0)  translate(0%, 0%); }
          to   { transform: scale(1.07) translate(-0.8%, -0.5%); }
        }
        @keyframes kb-slide-1 {
          from { transform: scale(1.0)  translate(0%, 0%); }
          to   { transform: scale(1.07) translate(0.6%, 0.3%); }
        }
        @keyframes kb-slide-2 {
          from { transform: scale(1.0)  translate(0.3%, 0%); }
          to   { transform: scale(1.07) translate(-0.5%, 0%); }
        }
        @keyframes kb-slide-3 {
          from { transform: scale(1.0)  translate(-0.3%, 0%); }
          to   { transform: scale(1.07) translate(0.5%, 0%); }
        }

        /* Text reveal */
        @keyframes hIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
