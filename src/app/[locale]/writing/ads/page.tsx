import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
//media
import image1 from "~/writing/ads/image1.png";
import image2 from "~/writing/ads/image2.png";
import image3 from "~/writing/ads/image3.png";
import arrow from "~/media_section/create/arrow-right.svg";

const Ads = () => {
  const t = useTranslations("Ads");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left ">
      <div className="bg-black w-full bg-cover bg-center	bg-no-repeat flex items-center justify-center h-full  pb-10">
        <div className=" flex items-center justify-center container flex-col md:flex-row">
          <div className="flex items-center md:items-start justify-center flex-col container  gap-5 mt-20 ">
            <h1 className="font-semibold text-[30px] md:text-[40px]">
              {t("adsheading1part1")}{" "}
            </h1>
            <h1 className="font-semibold text-[30px] md:text-[20px]  leading-none">
              {t("adsheading1part2")}
            </h1>
            <p className="  text-[12px] md:text-[20px] lg:w-2/3 rtl:text-right">
              {t("adspara1")}
            </p>
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 md:px-6 md:py-3 border-gradient-br-start-button border-solid border-1 rounded-full text-gray-100 text-xs md:text-lg gradient-border-3"
            >
              <div className=" flex items-center justify-center gap-[10px]">
                <div className="text-white">{t("adsstartbutton")}</div>
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
          <Image src={image1} alt="art image" className="w-1/2" />
        </div>
      </div>
      <div className="font-semibold text-[20px] md:text-[35px] rtl:text-right container flex items-center justify-center w-5/6">
        {t("adsmainheading")}
      </div>
      <div className="container  flex items-center justify-center flex-col relative w-5/6">
        <div className="flex items-center justify-center flex-col lg:flex-row w-5/6 md:gap-5">
          <Image src={image2} alt="art image" className="lg:w-1/2" />
          <div className="  md:items-start items-center flex justify-center flex-col relative">
            <h1 className="font-semibold text-[20px] md:text-[25px] rtl:text-right">
              {t("adsheading2")}
            </h1>
            <p className="  text-[12px] md:text-[20px] rtl:text-right ">
              {t("adspara2")}
            </p>
            <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute  -top-72 right-0"></div>
          </div>
        </div>
      </div>
      <div className="container flex items-center  justify-center flex-col-reverse lg:flex-row w-2/3 md:gap-5  pb-10 relative">
        <div className="flex items-center justify-center flex-col basis-1/2 rtl:text-right ">
          <h1 className="font-semibold text-[20px] md:text-[25px] rtl:text-right">
            {t("adsheading3")}{" "}
          </h1>
          <p className=" text-[12px] md:text-[20px] rtl:text-right  ">
            {t("adspara3")}
          </p>
        </div>
        <Image src={image3} alt="art image" className="lg:w-1/2" />
        <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute   left-0 bottom-0"></div>
      </div>
    </div>
  );
};

export default Ads;
