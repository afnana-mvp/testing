"use client";
import Image from "next/image";
import logo from "../../../public/brand.png";
import { FC, useState } from "react";
import Link from "next/link";
import LLink from "next-intl/link";
import saudi from "../../../public/languages/saudi.png";
import uk from "../../../public/languages/uk.png";
import { ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const locale = useLocale();
  const [showMenu, setShowMenu] = useState(false);
  const [showCoding, setShowCoding] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const media = [
    {
      name: "art",
      link: "/media/art",
    },
    {
      name: "audio",
      link: "/media/audio",
    },
    {
      name: "create",
      link: "/media/create",
    },
    {
      name: "enhance",
      link: "/media/enhance",
    },
    {
      name: "redesign",
      link: "/media/redesign",
    },
    {
      name: "removebg",
      link: "/media/removebg",
    },
    {
      name: "replacebg",
      link: "/media/replacebg",
    },
  ];

  const codingData = [
    {
      name: "c",
      link: "/coding/c",
    },
    {
      name: "c++",
      link: "/coding/c++",
    },
    {
      name: "java",
      link: "/coding/java",
    },
    {
      name: "python",
      link: "/coding/python",
    },
    {
      name: "ruby",
      link: "/coding/ruby",
    },
    {
      name: "Dart",
      link: "/coding/dart",
    },
    {
      name: "php",
      link: "/coding/php",
    },
    {
      name: "javascript",
      link: "/coding/javascript",
    },
    {
      name: "HTML",
      link: "/coding/html",
    },
  ];

  const LanguageButton = () => {
    if (locale === "en") {
      return (
        <LLink href="/" locale="ar" className="py-1 px-1 md:py-2 md:px-3 border border-[#4F5689] rounded-full flex items-center gap-2">
          <Image src={saudi} alt="company logo" width={20} loading="lazy" className="w-5 md:auto border-2 rounded-full border-white " />
          <span className="hidden md:block"> عربي</span>
        </LLink>
      );
    } else {
      return (
        <LLink href="/" locale="en" className="py-1 px-1 md:py-2 md:px-3 border border-[#4F5689] rounded-full flex items-center gap-2 rtl:flex-row-reverse">
          <Image src={uk} alt="company logo" width={25} loading="lazy" className="w-5 md:auto border-2 rounded-full border-white " />
          <span className="hidden md:block">Eng</span>
        </LLink>
      );
    }
  };

  const mobileMenu = () => {
    setShowMobile(!showMobile);
  };

  return (
    <main className="sticky top-0 bg-black z-10">
      <nav className="container lg:mx-auto mx-auto px-3 py-2 flex justify-between items-center">
        <section className="flex items-center gap-2 lg:gap-10 text-sm font-semibold tracking-wide justify-between">
          <button className="lg:hidden block transition-transform" onClick={mobileMenu}>
            {showMobile ? <X /> : <Menu />}
          </button>
          <Image src={logo} alt="company logo" width={65} loading="lazy" className="w-10 md:w-16 ltr:mr-5 rtl:ml-5" />
          {showMobile && (
            <ul className="text-white text-xl absolute py-5 w-full text-center top-12 left-0 bg-black flex flex-col gap-5 justify-center items-center">
              <li className="hover:text-[#026fad]">
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
              <li className="hover:text-[#026fad]">
                <Link href="/business" className="flex justify-between gap-2 items-center">
                  Features
                </Link>
              </li>
            </ul>
          )}
          <ul className="hidden lg:flex items-center lg:gap-5 xl:gap-10 mx-5 md:mx-0">
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
            <li className="hover:text-[#026fad]">
              <button onClick={() => setShowMenu(!showMenu)} className="flex justify-between gap-2 items-center">
                Features
                <ChevronDown className="w-5" />
              </button>
              {showMenu && (
                <ul className="absolute bg-white rounded-md w-40">
                  <li
                    className="text-black flex justify-between gap-2 cursor-pointer px-5 py-2 items-center hover:text-[#026fad]"
                    onClick={() => {
                      setShowCoding(!showCoding);
                      setShowMedia(false);
                    }}
                  >
                    <button>Coding</button>
                    <ChevronRight className="w-5" />
                    {showCoding && (
                      <ul className="bg-white text-start  w-40 rounded-md absolute left-[10.2rem] top-1">
                        {codingData.map((item, index) => (
                          <Link
                            href={item.link}
                            key={index}
                            onClick={() => {
                              setShowMenu(false);
                              setShowCoding(false);
                            }}
                            className=" :hover:bg-black/50]"
                          >
                            <li className="relative flex items-center justify-between px-4 py-2 text-black hover:text-[#026fad]">{item.name}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li
                    className="text-black flex justify-between gap-2 cursor-pointer  items-center px-5 py-2  hover:text-[#026fad]"
                    onClick={() => {
                      setShowMedia(!showMedia);
                      setShowCoding(false);
                    }}
                  >
                    <button>Media</button>
                    <ChevronRight className="w-5 ml-auto" />
                    {showMedia && (
                      <ul className="bg-white text-start  w-40 rounded-md   absolute left-[10.2rem] top-1">
                        {media.map((item, index) => (
                          <Link
                            href={item.link}
                            key={index}
                            onClick={() => {
                              setShowMenu(false);
                              setShowMedia(false);
                            }}
                          >
                            <li className="relative flex items-center justify-between px-4 py-2 text-black hover:text-[#026fad]">{item.name}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </section>
        <section className="flex items-center gap-2 md:gap-5 text-sm tracking-wide">
          <button className="text-[12px] mr-1 md:mr-0 md:text-sm font-semibold hover:text-[#026fad] ease-in duration-100">Logout</button>
          <button className="text-[10px] md:text-sm font-semibold px-4 md:px-10 py-0.5 md:py-3 rounded-full flex items-center gap-2 glow_button">
            Join Now <ArrowRight className="w-5 rtl:rotate-180" />
          </button>
          <LanguageButton />
        </section>
      </nav>
    </main>
  );
};

export default Navbar;
