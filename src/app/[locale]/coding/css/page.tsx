import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import cssIcon from "~/coding/css/css_icon.png";
import cssCode from "~/coding/css/css_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
const CssCoding = () => {
  const t = useTranslations("Css");

  return (
    <div className="bg-background_color  flex items-center justify-center flex-col gap-[50px] text-center">
      <div className="flex items-center w-full justify-center bg-[url('../../public/coding/csharp_tool/csharp_main.png')]  bg-cover bg-center	bg-no-repeat h-[90vh] ">
        <h1 className="text-white text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold !leading-relaxed ">
          {t("cssimageText")} <br /> {t("language by")} <span className="araby_ai"> ArabyAi</span>
        </h1>
      </div>
      <div className="flex items-center  justify-center gap-10 flex-col md:flex-row w-5/6 ">
        <Image src={cssIcon} alt="python image" width={120} className="" />
        <p className="text-[12px] md:text-xl basis-9/12	md:text-left rtl:text-right">{t("cssiconText")}</p>
      </div>
      <div className="flex items-center justify-center w-5/6 md:w-full">
        <h1 className="text-center text-xl md:text-3xl font-bold container ">
          {t("cssheading")}
          <span className="araby_ai"> Araby AI</span>
        </h1>
      </div>
      <div className="flex items-center justify-center  container flex-col md:flex-row  md:w-2/3 gap-10 md:gap-0 ">
        <p className="mx-8 text-[12px] md:text-xl md:text-left basis-1/2 rtl:text-right">{t("csshelpText")}</p>

        <div className="border-gradient-help inline-flex items-center  border-solid border-2 rounded-xl text-gray-100 text-xs md:text-lg gradient-border-3  flex-col  justify-center  gap-5 md:gap-5 p-1   basis-1/2 w-[200px] md:w-auto h-[500px]">
          <div className="bg-[#1c1c1ccc] w-full  flex justify-center items-center flex-col gap-5  object-contain h-full">
            <div className="text-sm md:text-[40px] leading-[20px] md:leading-[40px] text-[#6A6A6A] text-left"> Araby AI</div>
            <div className="text-sm leading-[20px] md:leading-[40px] md:text-[40px] w-full">{t("csshelpHeading")}</div>
            <input className="border-2 border-[#6900FF] rounded-lg  w-5/6 p-2  text-[12px] md:text-[16px] text-black bg-[#1c1c1ccc]" />
            <button className="bg-gradient-to-r from-[#880CC2] to-[#6900FF] px-10 py-1  text-white text-[8px] md:text-[20px]">{t("cssenter")}</button>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center relative w-full h-full ">
        <div className="absolute  w-full  mt-12">
          <Image className="m-auto hidden md:block" src={pythonBackground} alt="python image" width={500} height={500} />
        </div>
      </div>

      <div className="flex container  flex-col-reverse md:flex-row items-center justify-center  relative  gap-10 md:gap-36 pb-20 ">
        <Image src={cssCode} alt="python image" className=" md:w-1/3 w-1/2  object-cover z-10" />
        <ul className="list-disc marker:text-white text-left text-[12px] md:text-xl rtl:text-right ">
          <li>{t("cssbullet1")}</li>
          <li>{t("cssbullet2")}</li>
          <li>{t("cssbullet3")}</li>
          <li>{t("cssbullet4")}</li>
          <li>{t("cssbullet5")}</li>
          <li>{t("cssbullet6")}</li>
          <li>{t("cssbullet7")}</li>
          <li>{t("cssbullet8")}</li>
          <li>{t("cssbullet9")}</li>
          <li>{t("cssbullet10")}</li>
        </ul>
        <Image src={pythonSide} alt="python image" className="scale-50 h-400px absolute top-36 right-0 invisible md:visible" />
      </div>
    </div>
  );
};

export default CssCoding;
