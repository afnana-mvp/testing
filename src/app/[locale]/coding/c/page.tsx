import React from "react";
import Image from "next/image";
import cImage from "~/coding/c/c_main.png";
import { useTranslations } from "next-intl";
import cIcon from "~/coding/c/c_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import cCode from "~/coding/c/c_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
const CCoding = () => {
  const t = useTranslations("CCoding");
  return (
    <div className="bg-background_color w-full -z-50 ">
      <div className="flex items-center justify-center">
        <Image src={cImage} alt="python image" className=" w-full h-auto" />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          {t("imageText")}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={cIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">{t("iconText")}</p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          {t("heading")}
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">{t("helpText")}</p>
        <Image className="" src={pythonHelp} alt="python image" height={200} />
      </div>
      <div className=" flex items-center justify-center relative w-full h-full ">
        <div className="absolute  w-full  mt-12">
          <Image
            className="m-auto"
            src={pythonBackground}
            alt="python image"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg relative  ">
        <Image
          src={cCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>{t("bullet1")}</li>
          <li>{t("bullet2")}</li>
          <li>{t("bullet3")}</li>
          <li>{t("bullet4")}</li>
          <li>{t("bullet5")}</li>
          <li>{t("bullet6")}</li>
          <li>{t("bullet7")}</li>
          <li>{t("bullet8")}</li>
          <li>{t("bullet9")}</li>
          <li>{t("bullet10")}</li>
        </ul>
        <Image
          src={pythonSide}
          alt="python image"
          className="scale-50 h-400px absolute top-36 left-full invisible md:visible"
        />
      </div>
    </div>
  );
};

export default CCoding;