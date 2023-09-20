import Image from "next/image";
import mada from "~/Footer/mada.png";
import visa from "~/Footer/visa.png";
import mastercard from "~/Footer/card.png";
import paypal from "~/Footer/paypal.png";
import apple from "~/Footer/apple-logo.png";
import playstore from "~/Footer/playstore.png";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Icons } from "../Icons/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-10 relative overflow-hidden">
      <div className="w-80 h-80 bg-[#0038FF] opacity-[0.2] md:opacity-[0.4] absolute blur-[120px] -top-10 -left-10" />
      <div className="w-80 h-80 bg-[#8f00ff5c] opacity-[0.5] absolute blur-3xl -top-10 right-0" />
      <section className="text-sm container grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto z-10 relative py-5">
        <ul className=" grid gap-y-3">
          <h3 className="text-xl font-semibold text-[#e6e6e6]">Company</h3>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">About</li>
          </Link>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Blog</li>
          </Link>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Careers</li>
          </Link>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Contact</li>
          </Link>
        </ul>
        <ul className="grid gap-y-3">
          <h3 className="text-xl font-semibold text-[#e6e6e6]">Features</h3>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Text Generation</li>
          </Link>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Image Generation</li>
          </Link>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Video Generation</li>
          </Link>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Audio Generation</li>
          </Link>
        </ul>
        <ul className="grid gap-y-3">
          <h3 className="text-xl font-semibold text-[#e6e6e6]">Support</h3>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Help Center</li>
          </Link>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Terms of Service</li>
          </Link>
          <Link href="">
            <li className=" hover:text-blue text-[#c8c5c5]">Privacy Policy</li>
          </Link>
        </ul>
        <ul className="grid gap-y-3">
          <h3 className="text-xl font-semibold text-[#e6e6e6]">Follow Us</h3>
          <Link href="https://www.facebook.com/">
            <li className=" hover:text-blue flex items-center gap-3 text-[#c8c5c5]">
              <Facebook /> Facebook
            </li>
          </Link>
          <Link href="https://www.twitter.com/">
            <li className=" hover:text-blue flex items-center gap-3 text-[#c8c5c5]">
              <Icons.Twitter fill="white" className="w-6 h-5 hover:text-blue" /> Twitter
            </li>
          </Link>
          <Link href="https://www.instagram.com/">
            <li className=" hover:text-blue flex items-center gap-3 text-[#c8c5c5]">
              <Instagram /> Instagram
            </li>
          </Link>
          <Link href="https://www.linkedin.com/">
            <li className=" hover:text-blue flex items-center gap-3 text-[#c8c5c5]">
              <Linkedin /> LinkedIn
            </li>
          </Link>
        </ul>
      </section>
      <h5 className="container mx-auto mt-7 text-sm relative z-10">We accept payments online using Visa and MasterCard credit/debit card in SAR</h5>
      <section className="container mx-auto flex gap-5 md:gap-10 items-center relative justify-between z-10 flex-wrap">
        <div className="flex gap-5 md:gap-10 items-center flex-wrap">
          <Image src={mada} width={100} alt="mada branding" className="w-20" />
          <Image src={visa} width={80} alt="Visa card" />
          <Image src={mastercard} width={70} height={70} alt="master card" />
          <Image src={paypal} width={40} height={40} alt="paypal payment" />
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <Link href="" className="flex gap-5 items-center bg-white text-black rounded-full py-2 px-3 w-48">
            <Image src={apple} width={30} height={30} alt="apple store" />
            <span>
              <h6 className="text-xs">DOWNLOAD ON THE</h6>
              <h5 className="text-base font-semibold">APPSTORE</h5>
            </span>
          </Link>
          <Link href="" className="flex gap-5 items-center bg-white text-black rounded-full py-2 px-4  w-48">
            <Image src={playstore} width={30} height={30} alt="play store" />
            <span>
              <h6 className="text-xs">GET IT ON</h6>
              <h5 className="text-base font-semibold">PLAYSTORE</h5>
            </span>
          </Link>
        </div>
      </section>
      <div className="w-[30rem] h-96 bg-[#00D1FF] absolute blur-[100px] top-3/4 opacity-[0.4]  left-2/4" />
    </footer>
  );
};

export default Footer;
