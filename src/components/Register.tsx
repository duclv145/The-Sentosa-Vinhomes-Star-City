"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

type Errors = { name?: string; phone?: string };

export default function Register() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "Studio" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Vui lòng nhập họ tên";
    if (!/^(0|\+84)\d{8,10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Số điện thoại không hợp lệ";
    return e;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
    }
  }

  return (
    <section id="register" className="relative overflow-hidden py-28 lg:py-40">
      <Image
        src="/images/hero-1.jpg"
        alt="Vinhomes Star City — đô thị chuẩn quốc tế"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-emerald-deep/85" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-7">Đăng ký tư vấn</p>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-tight text-cream sm:text-5xl lg:text-[3.4rem]">
            Sở hữu vị thế
            <span className="script block gold-text">
              dẫn đầu Bắc Trung Bộ
            </span>
          </h2>
          <div className="gold-rule my-9" />
          <p className="max-w-md text-base font-light leading-relaxed text-cream-muted">
            Để lại thông tin để nhận bảng giá, chính sách bán hàng và lịch tham
            quan căn hộ mẫu sớm nhất từ đội ngũ tư vấn The Sentosa.
          </p>
          <div className="mt-10 flex flex-col gap-2 text-sm text-cream/80">
            <span className="tracking-[0.16em]">
              Hotline:{" "}
              <a href="tel:0961893268" className="gold-text font-medium">
                0961 893 268
              </a>
            </span>
          </div>
        </div>

        <div className="border border-line bg-ink/70 p-8 backdrop-blur-md lg:p-12">
          {sent ? (
            <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold">
                <span className="text-2xl gold-text">✓</span>
              </div>
              <h3 className="mt-7 font-[family-name:var(--font-display)] text-3xl text-cream">
                Cảm ơn quý khách
              </h3>
              <p className="mt-4 max-w-xs text-sm font-light text-cream-muted">
                Thông tin đã được ghi nhận. Chuyên viên The Sentosa sẽ liên hệ
                với quý khách trong thời gian sớm nhất.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-7">
              <Field
                label="Họ và tên"
                error={errors.name}
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Nguyễn Văn A"
              />
              <Field
                label="Số điện thoại"
                error={errors.phone}
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="09xx xxx xxx"
                type="tel"
              />
              <div>
                <label className="mb-3 block text-xs tracking-[0.2em] text-cream-muted uppercase">
                  Loại căn quan tâm
                </label>
                <select
                  value={form.interest}
                  onChange={(e) =>
                    setForm({ ...form, interest: e.target.value })
                  }
                  className="w-full border-b border-line bg-transparent py-3 text-cream outline-none transition-colors focus:border-gold"
                >
                  {["Studio", "1 Phòng ngủ", "2 Phòng ngủ", "3 Phòng ngủ"].map(
                    (o) => (
                      <option key={o} value={o} className="bg-ink">
                        {o}
                      </option>
                    )
                  )}
                </select>
              </div>
              <button
                type="submit"
                className="group relative w-full overflow-hidden border border-gold py-4 text-sm font-medium tracking-[0.24em] text-cream uppercase transition-colors duration-500 hover:text-ink"
              >
                <span className="relative z-10">Gửi đăng ký</span>
                <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 ease-[var(--ease-lux)] group-hover:translate-x-0" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-3 block text-xs tracking-[0.2em] text-cream-muted uppercase">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border-b bg-transparent py-3 text-cream placeholder:text-cream-muted/40 outline-none transition-colors ${
          error ? "border-red-400/70" : "border-line focus:border-gold"
        }`}
      />
      {error && <p className="mt-2 text-xs text-red-400/90">{error}</p>}
    </div>
  );
}
