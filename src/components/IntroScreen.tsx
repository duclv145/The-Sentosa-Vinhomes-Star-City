"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 500);
    const t2 = setTimeout(() => setPhase("out"),  2000);
    const t3 = setTimeout(() => setPhase("done"), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  const isOut = phase === "out";

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden">
      {/* Main panel — slides UP */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-ink"
        style={{
          transform: isOut ? "translateY(-100%)" : "translateY(0)",
          transition: isOut
            ? "transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)"
            : "none",
        }}
      >
        {/* Gold sweep line at bottom edge of panel */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #cba35c 30%, #ecd49e 50%, #cba35c 70%, transparent)",
            opacity: isOut ? 0 : 0.7,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Logo */}
        <div
          style={{
            opacity: phase === "in" ? 0 : 1,
            transform: phase === "in"
              ? "scale(0.85) translateY(20px)"
              : isOut
              ? "scale(1.08) translateY(-10px)"
              : "scale(1) translateY(0)",
            transition: phase === "in"
              ? "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)"
              : "opacity 0.4s ease, transform 1.1s cubic-bezier(0.76,0,0.24,1)",
          }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/logo-sentosa.png"
            alt="The Sentosa"
            width={150}
            height={130}
            priority
            className="object-contain"
          />
          <div
            style={{
              opacity: phase === "hold" ? 1 : 0,
              transition: "opacity 0.8s ease 0.3s",
            }}
            className="flex flex-col items-center gap-3"
          >
            <div className="gold-rule" />
            <span className="text-[0.58rem] tracking-[0.55em] text-gold/60 uppercase">
              Vinhomes Star City · Thanh Hoá
            </span>
          </div>
        </div>
      </div>

      {/* Secondary thin panel — slides up slightly delayed (split effect) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[30%] bg-ink/60 backdrop-blur-sm"
        style={{
          transform: isOut ? "translateY(100%)" : "translateY(0)",
          transition: isOut
            ? "transform 1.0s cubic-bezier(0.76, 0, 0.24, 1) 0.08s"
            : "none",
        }}
      />
    </div>
  );
}
