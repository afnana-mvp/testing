import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
//media

import image1 from "~/media_section/create/create_image1.png";
import image2 from "~/media_section/create/create_image2.png";
import image3 from "~/media_section/create/create_image3.png";
import image4 from "~/media_section/create/create_image4.png";
import main_header from "~/media_section/create/create_main_header.png";
import arrow from "~/media_section/create/arrow-right.svg";
const Create = () => {
  const t = useTranslations("Create");
  return (
    <div className="bg-background_color  font-poppins">
      <div className="flex items-center justify-center relative">
        <Image src={main_header} alt="create image" className=" w-full " />
        <div className="flex items-center justify-center absolute flex-col mx-10 top-10 md:top-16 max-w-screen-lg gap-2 md:gap-10 ">
          <h1 className="text-white text-center text-sm  md:text-3xl lg:text-5xl font-bold">
            {t("headerText")}
            <span className="text-blue"> AI Art Generator</span>
          </h1>
          <h1 className=" text-white text-center text-[8px] md:text-[20px] lg:text-2xl mx-10">
            {t("headerTextSupport")}
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center container   max-w-screen-[1024px] mx-auto ">
        <h1 className="text-white text-center text-sm md:text-[30px] my-[20px] md:my-[70px]">
          Discover the Endless Possibilities of AI-generated Art
        </h1>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col md:flex-row gap-[20px]">
        <Image
          src={image1}
          alt="python image"
          className="flex-1 h-[200px] w-[200px] md:h-[500px]"
        />
        <div className="flex items-start justify-center max-w-screen-lg mx-[20px] my-[40px] flex-col flex-1 gap-[30px] ">
          <h1 className="text-white text-sm md:text-[30px] font-bold leading-[40px]">
            {t("heading1")}
          </h1>

          <div className="text-[8px] md:text-[20px] font-light">
            {t("para1")}
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[50px] w-[200px] rounded-[10px] bg-gradient-to-r from-[#5901B1] to-[#056BC2]  ">
              <div className="my-px mx-px h-[45px] w-[195px] rounded-[20px]  bg-background_color "></div>
            </div>
          </div>
          {/* try this button design */}
          <div className=" flex h-[50px]  items-center justify-center ">
            <div className="h-[50px] w-[200px] rounded-[10px] bg-gradient-to-r from-[#5901B1] to-[#056BC2] p-[1px]">
              <div className=" h-[47px] w-[198px]  rounded-[10px]  bg-background_color ">
                <div className=" flex items-center justify-center gap-[10px]">
                  <button className="bg-gradient-to-r from-[#5901B1] to-[#056BC2] inline-block text-transparent bg-clip-text outline-[1px]">
                    Try this feature
                  </button>
                  <Image src={arrow} alt="arrow" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col md:flex-row gap-5 my-14">
        <div className="flex items-center justify-center max-w-screen-lg mx-10  flex-col flex-1">
          <h1 className="text-white text-sm md:text-3xl font-bold">
            {t("heading2")}
          </h1>
          <div className="text-[8px] md:text-xl font-light">{t("para2")}</div>
        </div>
        <Image
          src={image2}
          alt="python image"
          className="flex-1 h-[200px] w-[200px] md:h-[500px]"
        />
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col md:flex-row gap-5">
        <Image
          src={image3}
          alt="python image"
          className="flex-1 h-[200px] w-[200px] md:h-[500px]"
        />
        <div className="flex items-center justify-center max-w-screen-lg mx-10 my-100 flex-col flex-1">
          <h1 className="text-white text-sm md:text-3xl font-bold">
            {t("heading3")}
          </h1>
          <div className="text-[8px] md:text-xl font-light">{t("para3")}</div>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col  gap-10 my-10 md:my-28">
        <h1 className="text-white text-sm md:text-3xl font-bold">
          {t("heading4")}
        </h1>
        <Image src={image4} alt="python image" className="mx-14" />
      </div>
    </div>
  );
};

export default Create;
