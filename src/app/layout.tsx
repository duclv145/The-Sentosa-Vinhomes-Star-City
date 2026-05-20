import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Sentosa | Vinhomes Star City — Phong Cách Singapore tại Thanh Hoá",
  description:
    "The Sentosa — toà tháp căn hộ phong cách Singapore đầu tiên tại Thanh Hoá. Ốc đảo nghỉ dưỡng giữa đại lộ thịnh vượng, 3 toà S1·S2·S3 trong lòng Vinhomes Star City.",
  keywords: [
    "The Sentosa",
    "Vinhomes Star City",
    "căn hộ Thanh Hoá",
    "phong cách Singapore",
    "ốc đảo nghỉ dưỡng",
  ],
  openGraph: {
    title: "The Sentosa | Vinhomes Star City Thanh Hoá",
    description:
      "Toà tháp căn hộ phong cách Singapore đầu tiên tại Thanh Hoá — ốc đảo nghỉ dưỡng giữa đại lộ thịnh vượng.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${beVietnam.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
