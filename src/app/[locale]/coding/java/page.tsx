import React from "react";
import Image from "next/image";
import javaImage from "~/coding/java_tool/java_main.png";
import { useTranslations } from "next-intl";
import javaIcon from "~/coding/java_tool/java_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import javaCode from "~/coding/java_tool/java_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
const JavaCoding = () => {
  const t = useTranslations("Java");

  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center">
        <Image src={javaImage} alt="python image" className=" w-full h-auto" />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          {t("javaimageText")}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={javaIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">{t("javaiconText")}</p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          {t("javaheading")} <span className="araby_ai">ArabyAi</span>
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">{t("javahelpText")}</p>
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
          src={javaCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>{t("javabullet1")}</li>
          <li>{t("javabullet2")}</li>
          <li>{t("javabullet3")}</li>
          <li>{t("javabullet4")}</li>
          <li>{t("javabullet5")}</li>
          <li>{t("javabullet6")}</li>
          <li>{t("javabullet7")}</li>
          <li>{t("javabullet8")}</li>
          <li>{t("javabullet9")}</li>
          <li>{t("javabullet10")}</li>
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

export default JavaCoding;
