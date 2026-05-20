import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center leading-none">
              <Image
                src="/images/logo-sentosa.png"
                alt="The Sentosa"
                width={120}
                height={104}
                className="object-contain"
              />
            </div>
            <p className="mt-7 max-w-sm text-sm font-light leading-relaxed text-cream-muted">
              Toà tháp căn hộ phong cách Singapore đầu tiên tại Thanh Hoá —
              ốc đảo nghỉ dưỡng giữa đại lộ thịnh vượng, trong lòng đại đô thị
              Vinhomes Star City.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.26em] text-gold uppercase">
              Liên hệ
            </h4>
            <ul className="mt-6 space-y-3 text-sm font-light text-cream-muted">
              <li>
                <a
                  href="tel:0961893268"
                  className="transition-colors hover:text-cream"
                >
                  Hotline: 0961 893 268
                </a>
              </li>
              <li>Phường Hạc Thành, TP. Thanh Hoá</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.26em] text-gold uppercase">
              Khám phá
            </h4>
            <ul className="mt-6 space-y-3 text-sm font-light text-cream-muted">
              {[
                ["Cảm hứng Singapore", "#inspiration"],
                ["3 Hòn đảo", "#islands"],
                ["Tiện ích biểu tượng", "#signatures"],
                ["Đăng ký", "#register"],
              ].map(([t, h]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="transition-colors hover:text-cream"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs tracking-[0.14em] text-cream-muted/70 uppercase sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} The Sentosa · Vinhomes Star City</span>
          <span>Thông tin & hình ảnh chỉ mang tính chất tham khảo</span>
        </div>
      </div>
    </footer>
  );
}
