import Image from "next/image";
import logo from "../../../public/brand.png";
import { FC } from "react";
import Link from "next/link";
import LLink from "next-intl/link";
import saudi from "../../../public/languages/saudi.png";
import uk from "../../../public/languages/uk.png";
import { ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  const locale = useLocale();

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Business",
      path: "/business",
    },
    {
      name: "Features",
      path: "/features",
      icons: true,
      drop: [
        {
          name: "Coding",
          path: "/coding",
          icons: true,
          drop: [
            {
              name: "C",
              path: "/c",
            },
            {
              name: "C++",
              path: "/c++",
            },
            {
              name: "Java",
              path: "/java",
            },
            {
              name: "Python",
              path: "/python",
            },
            {
              name: "Javascript",
              path: "/javascript",
            },
            {
              name: "PHP",
              path: "/php",
            },
            {
              name: "Ruby",
              path: "/ruby",
            },
            {
              name: "C#",
              path: "/csharp",
            },
            {
              name: "Dart",
              path: "/dart",
            },
          ],
        },

        {
          name: "Media",
          path: "/media",
          icons: true,
          drop: [
            {
              name: "Create",
              path: "/create",
            },
            {
              name: "Upscale",
              path: "/upscale",
            },
          ],
        },
      ],
    },
  ];

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
          <ul className="flex items-center gap-10">
            <li className=" hover:text-[#026fad]">
              <Link href="/" className="flex justify-between gap-2 items-center">
                Home
              </Link>
            </li>
            <li className="hover:text-[#026fad]">
              <Link href="/pricing" className="flex justify-between gap-2 items-center">
                Pricing
              </Link>
            </li>
            <li className="hover:text-[#026fad]">
              <Link href="/contact" className="flex justify-between gap-2 items-center">
                Contact
              </Link>
            </li>
            <li className="hover:text-[#026fad]">
              <Link href="/blogs" className="flex justify-between gap-2 items-center">
                Blogs
              </Link>
            </li>
            <li className="hover:text-[#026fad]">
              <Link href="/business" className="flex justify-between gap-2 items-center">
                Business
              </Link>
            </li>
            <li className="hover:text-[#026fad] group/feature">
              <Link href="/features" className="flex justify-between gap-2 items-center">
                Features
                <ChevronDown className="w-5" />
              </Link>
              <ul className="absolute invisible group-hover/feature:visible bg-white/50 rounded-md w-40">
                <li className="text-white flex justify-between gap-2 cursor-pointer px-5 py-2 items-center hover:text-[#026fad] group/coding">
                  <Link href="/login">Coding</Link>
                  <ChevronRight className="w-5" />
                  <ul className="bg-white/50 text-start rounded-box w-40 rounded-md invisible group-hover/coding:visible absolute left-[10.2rem]  top-1">
                    <li className="relative flex items-center justify-between px-4 py-2 text-white hover:text-[#026fad]">
                      <Link href="/coding/c">C</Link>
                    </li>
                    <li className="relative flex items-center justify-between px-4 py-2 text-white hover:text-[#026fad]">
                      <Link href="/coding/c++">C++</Link>
                    </li>
                  </ul>
                </li>
                <li className="text-white flex justify-between gap-2 cursor-pointer group/media items-center px-5 py-2  hover:text-[#026fad]">
                  <Link href="/login">Media</Link>
                  <ChevronRight className="w-5 ml-auto" />
                  <ul className="bg-white/50 text-start rounded-box w-40 rounded-md invisible group-hover/media:visible absolute left-[10.2rem] top-1">
                    <li className="relative flex items-center justify-between px-4 py-2 text-white hover:text-[#026fad]">
                      <Link href="/c">Create</Link>
                    </li>
                    <li className="relative flex items-center justify-between px-4 py-2 text-white hover:text-[#026fad]">
                      <Link href="/c++">Enhance</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
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
