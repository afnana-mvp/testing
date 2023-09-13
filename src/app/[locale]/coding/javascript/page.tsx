import React from "react";
import Image from "next/image";
import jsImage from "~/coding/javascript_tool/js_main.png";
import jsIcon from "~/coding/javascript_tool/js_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import jsCode from "~/coding/javascript_tool/js_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
import { useTranslations } from "next-intl";

const JSCoding = () => {
  const t = useTranslations("Javascript");

  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center w-full justify-center bg-[url('../../public/coding/javascript_tool/js_main.png')]  bg-cover bg-center	bg-no-repeat h-[90vh]">
        <h1 className="text-white text-center text-xl md:text-3xl font-semibold">
          {t("jsimageText")}
          <span className="araby_ai">ArabyAi</span>
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={jsIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">{t("jsiconText")}</p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-white text-center text-xl md:text-3xl font-semibold my-20">
          {t("jsheading")} <span className="araby_ai"> ArabyAi</span>
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">{t("jshelpText")}</p>
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
          src={jsCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>{t("jsbullet1")}</li>
          <li>{t("jsbullet2")}</li>
          <li>{t("jsbullet3")}</li>
          <li>{t("jsbullet4")}</li>
          <li>{t("jsbullet5")}</li>
          <li>{t("jsbullet6")}</li>
          <li>{t("jsbullet7")}</li>
          <li>{t("jsbullet8")}</li>
          <li>{t("jsbullet9")}</li>
          <li>{t("jsbullet10")}</li>
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

export default JSCoding;
