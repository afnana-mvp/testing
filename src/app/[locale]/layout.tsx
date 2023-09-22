import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Tajawal } from "next/font/google";
import { useLocale } from "next-intl";
import Navbar from "@/components/Header/navbar";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const arabic = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Araby AI",
  description: "Introducing Araby.ai, the ultimate productivity Ai designed to empower your workflow with cutting-edge AI tools in both Arabic and English.",
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const locale = useLocale();
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`../../messages/en.json`)).default;
  }

  return (
    <html lang={locale} translate="no" dir={locale === "en" ? "ltr" : "rtl"} className="scroll-smooth">
      <body className={locale === "en" ? poppins.className : arabic.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
