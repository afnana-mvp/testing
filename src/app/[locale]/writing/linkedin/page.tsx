import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
//media
import image1 from "~/writing/linkedin/image1.png";
import image2 from "~/writing/linkedin/image2.png";
import image3 from "~/writing/linkedin/image3.png";

const LinkedIn = () => {
  const t = useTranslations("LinkedIn");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left ">
      <div className="bg-[url('../../public/writing/linkedin/bckgrnd1.png')] w-full bg-cover bg-center	bg-no-repeat flex items-center justify-center h-full md:pb-96 pb-10">
        <div className="container flex items-center justify-center flex-col mt-10 w-5/6">
          <h1 className="font-semibold text-[30px] lg:text-[60px]  ">
            {t("linkheading1part1")}{" "}
          </h1>
          <h1 className="font-semibold text-[30px] lg:text-[60px] ">
            {t("linkheading1part2")}
          </h1>
          <div className=" flex items-center flex-col md:flex-row  w-5/6 ">
            <div className="flex items-center md:items-start flex-col gap-5 ">
              <p className="  text-[12px] md:text-[20px] lg:w-2/3 rtl:text-right">
                {t("linkpara1")}
              </p>
              <button className="bg-white rounded-xl px-5 py-2 text-black font-normal text-[12px] md:text-[20px] ">
                {t("linktrybutton")}
              </button>
            </div>
            <Image src={image1} alt="art image" className=" w-2/3 md:w-1/3" />
          </div>
        </div>
      </div>
      <div className="container md:pt-72 flex items-center justify-center flex-col relative w-5/6">
        <Image
          src={image2}
          alt="art image"
          className="hidden md:block md:w-2/3 lg:w-[600px] md:absolute md:-top-48 lg:-top-96 rtl:left-0 "
        />

        <div className="flex items-center justify-center flex-col lg:flex-row w-5/6 text-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1267"
            height="600"
            viewBox="0 0 1267 968"
            fill="none"
            className=" hidden lg:block absolute -bottom-5 -right-72"
          >
            <path
              d="M1266 0V853C1266 915.96 1214.96 967 1152 967H0"
              stroke="url(#paint0_linear_360_65578)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_360_65578"
                x1="919.014"
                y1="685.785"
                x2="787.706"
                y2="575.23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="   items-center flex justify-center flex-col gap-10 mt-10 relative z-[1]">
            <h1 className="font-semibold text-[20px] md:text-[25px] rtl:text-right">
              {t("linkheading2")}
            </h1>
            <p className="  text-[12px] md:text-[20px] rtl:text-right ">
              {t("linkpara2")}
            </p>
            <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute  -top-72 left-0"></div>
          </div>
        </div>
      </div>
      <div className="container flex items-center  justify-center flex-col lg:flex-row-reverse w-2/3 md:gap-5  pb-10 relative">
        <div className="flex items-center justify-center flex-col  rtl:text-right z-[1] ">
          <p className="  text-[16px] md:text-[20px]  ">
            {t("linkheading3part1")}
          </p>
          <p className="  text-[16px] md:text-[20px]  ">
            {t("linkheading3part2")}
          </p>
        </div>
        <Image
          src={image3}
          alt="art image"
          className="md:h-[500px] object-contain"
        />
        <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute   -right-20 top-0"></div>
        <div className=" hidden md:block w-[200px] h-[200px] origin-center rounded-3xl bg-gradient-to-t from-[#018fe0ba] to-[#023d4d4a] blur-2xl mr-0 absolute   -left-10 bottom-0"></div>
      </div>
    </div>
  );
};

export default LinkedIn;
