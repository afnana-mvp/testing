import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import pythonIcon from "~/coding/python_tool/python_icon.png";
import pythonCode from "~/coding/python_tool/python_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";

const PythonCoding = () => {
  const t = useTranslations("Python");

  return (
    <main className="bg-background_color">
      <div className="flex items-center w-full justify-center bg-[url('../../public/coding/python_tool/python_main.png')] bg-cover bg-center bg-no-repeat h-[50vh] lg:h-[90vh]">
        <div className="container mx-auto">
          <h1 className="text-white text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold !leading-relaxed ">
            {t("pythonimageText")}
            <br />
            {t("language by")} <span className="araby_ai"> ArabyAi</span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-5 md:gap-10 flex-col md:flex-row my-10 mx-2">
          <Image src={pythonIcon} alt="python image" width={100} className="w-20 md:w-32" />
          <p className="text-sm text-center md:text-lg basis-9/12	md:text-left md:rtl:text-right">{t("pythoniconText")}</p>
        </div>
        <h2 className="text-center text-base md:text-3xl font-bold mx-2">
          {t("pythonheading")}
          <span className="araby_ai"> Araby AI</span>
        </h2>
        <div className="flex items-center justify-center flex-col md:flex-row gap-5 md:gap-5 md:my-10 md:mx-10 relative z-10">
          <p className="mx-8 text-sm md:text-lg md:text-left text-center my-2 basis-1/2 rtl:text-right">{t("pythonhelpText")}</p>
          <div className="border-gradient-help inline-flex items-center border-solid border-2 rounded-xl text-gray-100 text-xs md:text-lg gradient-border-3 flex-col justify-center gap-5 md:gap-5 p-1 basis-1/2 w-[250px] h-[330px] m-2">
            <div className="bg-[#1c1c1ccc] w-full  flex justify-center items-center flex-col gap-5  object-contain h-full">
              <h5 className="text-sm md:text-2xl leading-[20px] md:leading-[40px] text-[#6A6A6A]">Araby AI</h5>
              <h6 className="text-sm leading-[20px] md:leading-[40px] md:text-xl text-center w-full">{t("pythonhelpHeading")}</h6>
              <input className="border-2 border-[#6900FF] rounded-lg  w-5/6 p-2  text-sm md:text-[16px] text-black bg-[#1c1c1ccc]" />
              <button className="bg-gradient-to-r from-[#880CC2] to-[#6900FF] px-10 py-1 text-white text-[8px] md:text-[20px]">{t("pythonenter")}</button>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center relative w-full h-full ">
          <div className="absolute  w-full  mt-12">
            <Image className="m-auto hidden md:block" src={pythonBackground} alt="python image" width={500} height={500} />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center relative gap-10 md:gap-20 lg:gap-36 py-10 ">
          <Image src={pythonCode} alt="python image" className="w-80 md:w-96  object-cover z-10" />
          <ul className="list-disc marker:text-white text-left text-sm md:text-base rtl:text-right ">
            <li>{t("pythonbullet1")}</li>
            <li>{t("pythonbullet2")}</li>
            <li>{t("pythonbullet3")}</li>
            <li>{t("pythonbullet4")}</li>
            <li>{t("pythonbullet5")}</li>
            <li>{t("pythonbullet6")}</li>
            <li>{t("pythonbullet7")}</li>
            <li>{t("pythonbullet8")}</li>
            <li>{t("pythonbullet9")}</li>
            <li>{t("pythonbullet10")}</li>
          </ul>
          <Image src={pythonSide} alt="python image" className="scale-50 h-400px absolute top-36 right-0 invisible md:visible" />
        </div>
      </div>
    </main>
  );
};

export default PythonCoding;
