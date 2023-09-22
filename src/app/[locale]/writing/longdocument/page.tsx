import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

//media
import image1 from "~/writing/longdocument/image1.png";
import image2 from "~/writing/longdocument/image2.png";
import arrow from "~/media_section/create/arrow-right.svg";

const LongDocument = () => {
  const t = useTranslations("LongDocument");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left font-poppins overflow-hidden">
      <div className="bg-[url('../../public/writing/longdocument/bckgrnd.png')] w-full flex items-center bg-cover bg-center	bg-no-repeat justify-center">
        <div className="flex items-center md:items-end justify-center container flex-col md:flex-row w-5/6 ">
          <div className="flex items-center md:items-start justify-center flex-col gap-5 my-10 md:my-20">
            <h1 className="font-semibold text-[40px] md:text-[100px] leading-none">
              {t("lgheading1part1")}{" "}
            </h1>
            <h1 className="font-semibold text-[40px] md:text-[100px]  leading-none">
              {t("lgheading1part2")}
            </h1>
            <p className="  text-[12px] md:text-[20px] lg:w-2/3 ">
              {t("lgpara1")}
            </p>
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 md:px-6 md:py-3 border-gradient-br-start-button border-solid border-1 rounded-full text-gray-100 text-xs md:text-lg gradient-border-3"
            >
              <div className=" flex items-center justify-center gap-[10px]">
                <div className="text-white">{t("lgstartbutton")}</div>
                <Image
                  src={arrow}
                  alt="arrow"
                  width={20}
                  height={20}
                  className="rtl:rotate-180"
                />
              </div>
            </button>
          </div>
          <Image
            src={image1}
            alt="python image"
            className=" w-1/2 h-auto text-center "
          />
        </div>
      </div>

      <div className=" w-5/6 bg-[url('../../public/writing/tiktok/bckgrnd2.png')] bg-contain lg:bg-cover container flex items-center justify-center	bg-no-repeat text-center relative">
        <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute top-0  -right-40"></div>
        <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute bottom-0  -left-40"></div>
        <div className="flex items-center justify-center flex-col  container mt-10 md:w-5/6 gap-10 md:gap-20">
          <p className="  text-[16px] md:text-[20px]  ">{t("lgpara1")}</p>
          <Image src={image2} alt="art image" className="w-full" />
          <p className="  text-[16px] md:text-[20px]  ">{t("lgpara2")}</p>
        </div>
      </div>
    </div>
  );
};

export default LongDocument;
