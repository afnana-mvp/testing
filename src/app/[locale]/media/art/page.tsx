import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

//media
import image1 from "~/media_section/art/image1.png";
import header1 from "~/media_section/art/header1.png";
import header2 from "~/media_section/art/header2.png";

import image2 from "~/media_section/art/image2.png";
import image3 from "~/media_section/art/image3.png";

const Art = () => {
  const t = useTranslations("Art");

  return (
    <div className="bg-background_color overflow-hidden font-poppins text-center md:text-left flex items-center justify-center gap-20 flex-col ">
      <div
        className="flex justify-center items-end flex-row container max-w-screen-lg
    mt-[50px] md:mt-[100px] gap-2 h-full w-5/6 "
      >
        <div className="">
          <Image src={header1} alt="art image" className=" " />
        </div>
        <div className="flex flex-col relative">
          {" "}
          <div className="container">
            <div className="w-full h-full origin-center rounded-lg md:bg-gradient-to-r from-[#5901b16e] to-[#ff73b66e] blur-2xl absolute "></div>
          </div>
          <div className="flex items-start md:items-start  max-w-screen-lg mx-auto my-100 flex-col flex-1 gap-[10px] md:gap-[20px] text-left container w-1/2 ">
            <h1 className="text-white text-sm md:text-[30px] font-semibold leading-[20px] md:leading-[40px]">
              {t("artheading1")}
              <span className="araby_ai">ArabyAi</span>
            </h1>
            <div className="text-[10px] md:text-xl font-light">
              {t("artpara1")}
            </div>
          </div>
          <Image src={header2} alt="python image" className="w-1/2 " />
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto  flex-col-reverse md:flex-row gap-5 ">
        <div className="flex  items-center md:items-start justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px]">
          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
            {t("artheading2")}{" "}
            <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">
              {" "}
              {t("artheading2blueText")}
            </span>
          </h1>
          <div className="text-[12px] md:text-xl font-light">
            {t("artpara2")}
          </div>
        </div>
        <div className="relative w-1/2">
          <Image src={image2} alt="python image" className="" />
          <div className="container">
            <div className="w-[300px] h-full origin-center rounded-lg md:bg-gradient-to-r from-[#5901b16e] to-[#ff73b66e] blur-2xl absolute top-0 -right-20"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto  flex-col-reverse md:flex-row gap-5 ">
        <div className="relative w-1/2">
          <Image src={image3} alt="python image" className="" />
          <div className="container">
            <div className="w-[300px] h-full origin-center rounded-lg md:bg-gradient-to-r from-[#5901b16e] to-[#ff73b66e] blur-2xl absolute top-0 -left-10"></div>
          </div>
        </div>

        <div className="flex  items-center md:items-start justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px]">
          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
            {t("artheading3")}{" "}
            <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">
              {" "}
              {t("artheading3blueText")}
            </span>
          </h1>
          <div className="text-[12px] md:text-xl font-light">
            {t("artpara3")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
