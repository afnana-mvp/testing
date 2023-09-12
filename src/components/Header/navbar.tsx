import Image from "next/image";
import logo from "../../../public/brand.png";
import { FC } from "react";
import Link from "next/link";
import LLink from "next-intl/link";
import saudi from "../../../public/languages/saudi.png";
import uk from "../../../public/languages/uk.png";
import { ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const locale = useLocale();

  const LanguageButton = () => {
    if (locale === "en") {
      return (
        <LLink href="/" locale="ar" className="py-2 px-3 border border-[#4F5689] rounded-full flex items-center gap-2">
          <Image src={saudi} alt="company logo" width={20} loading="lazy" className="border-2 rounded-full border-white " />
          عربي
        </LLink>
      );
    } else {
      return (
        <LLink href="/" locale="en" className="py-2 px-3 border border-[#4F5689] rounded-full flex items-center gap-2 rtl:flex-row-reverse">
          <Image src={uk} alt="company logo" width={25} loading="lazy" className="border-2 rounded-full border-white " />
          Eng
        </LLink>
      );
    }
  };

  return (
    <main className="sticky top-0 bg-black z-10">
      <nav className="container m-auto py-2 flex justify-between items-center">
        <section className="flex items-center gap-10 text-sm font-semibold tracking-wide ">
          <Image src={logo} alt="company logo" width={65} loading="lazy" className="mr-5" />

          <Link href="/" className="hover:text-[#026fad] ease-in duration-100">
            Home
          </Link>
          <Link href="/pricing" className="hover:text-[#026fad] ease-in duration-100">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-[#026fad] ease-in duration-100 ">
            Contact
          </Link>
          <Link href="/blogs" className="hover:text-[#026fad] ease-in duration-100">
            Blogs
          </Link>
          <Link href="/business" className="hover:text-[#026fad] ease-in duration-100">
            Business
          </Link>
        </section>
        <section className="flex items-center gap-5 text-sm tracking-wide">
          <button className="font-semibold hover:text-[#026fad] ease-in duration-100">Logout</button>
          <button className="font-semibold px-10 py-3 rounded-full flex items-center gap-2 glow_button">
            Join Now <ArrowRight className="rtl:rotate-180" />
          </button>
          <LanguageButton />
        </section>
      </nav>
    </main>
  );
};

export default Navbar;

import { useRouter } from "next/router";
