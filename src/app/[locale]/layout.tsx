import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Tajawal } from "next/font/google";
import { useLocale } from "next-intl";
import Navbar from "@/components/Header/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const arabic = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  return (
    <html
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
      className="scroll-smooth"
    >
      <body className={locale === "en" ? poppins.className : arabic.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
