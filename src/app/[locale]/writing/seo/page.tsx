import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

//media
import image1 from "~/writing/seo/image1.png";
import image2 from "~/writing/seo/image2.png";
import arrow from "~/media_section/create/arrow-right.svg";

const Seo = () => {
  const t = useTranslations("Seo");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left font-poppins overflow-hidden">
      <div className="bg-[url('../../public/writing/seo/bckgrnd1.png')] w-full flex items-center bg-cover bg-center	bg-no-repeat justify-center relative">
        <div className="flex items-center  justify-center container flex-col md:flex-row py-10 w-5/6">
          <div className="flex items-center md:items-start justify-center flex-col gap-5 my-10 md:my-20">
            <h1 className="font-semibold text-[40px] md:text-[100px] leading-none">
              {t("seoheading1")}{" "}
            </h1>
            <p className="  text-[12px] md:text-[20px] lg:w-2/3 rtl:text-right">
              {t("seopara1")}
            </p>
            <button className="bg-white rounded-xl px-3 py-3 md:px-10 md:py-5 text-black font-normal text-[12px] md:text-[20px] ">
              {t("seofreebutton")}
            </button>
          </div>
          <Image src={image1} alt="seo image" className=" w-1/2 h-auto " />
        </div>
        <div className="bg-white rounded-full flex items-center justify-between absolute -bottom-5 text-[12px] md:text-[20px] w-5/6 md:w-auto ">
          <p className="text-black font-semibold ml-2 ">{t("seosearchtext")}</p>
          <button className=" rounded-full bg-[#0C1435] py-2 px-5 mr-0.5 my-0.5 ">
            {t("seosearchbutton")}
          </button>
        </div>
      </div>

      <div className="bg-[url('../../public/writing/seo/bckgrnd.png')]   bg-bottom  bg-no-repeat w-full  flex items-center justify-center bg-imagebck">
        <div className=" w-5/6  flex items-center justify-center	 relative py-20 container">
          <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute bottom-0  -left-40"></div>
          <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute top-0  -right-40"></div>
          <div className="flex items-center justify-center flex-col  container  md:w-5/6 gap-10 md:gap-40">
            <p className="text-[16px] md:text-[20px] rtl:text-right container text-center flex items-center justify-center w-5/6 md:w-2/3 z-[1] font-bold">
              {t("seopara2")}
            </p>
            <Image
              src={image2}
              alt="seo image"
              className="w-auto h-auto pb-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seo;
