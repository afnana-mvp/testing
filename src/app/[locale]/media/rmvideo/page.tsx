import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

//media
import buttonright from "~/media_section/removevideo/header.png";

import header from "~/media_section/removevideo/header.png";
import header2 from "~/media_section/removevideo/header2.png";

const RemoveVideo = () => {
  const t = useTranslations("RemoveVideo");

  return (
    <div className=" overflow-hidden font-poppins text-center flex items-center justify-center flex-col ">
      <div className=" flex items-start justify-center relative">
        {" "}
        <Image src={header} alt="python image" className="  " />
        <div className="container max-w-screen-lg absolute top-10">
          <div className="flex  items-center  justify-center max-w-screen-lg mx-[20px]  flex-col  gap-[20px]  py-5 ">
            <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
              {t("rmvideoheaderText")}{" "}
            </h1>
            <div className="text-[12px] md:text-xl font-light">
              {t("rmvideoheaderTextSupport")}
            </div>
          </div>
        </div>
        <div className="container max-w-screen-lg"></div>
      </div>
      <div className="flex items-start justify-center bg-background_color relative">
        <Image src={header2} alt="python image" className="  " />
        <div className="flex-col flex items-center justify-center  absolute top-20 gap-20">
          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold container max-w-screen-lg">
            {t("rmvideoheading1")}
          </h1>
          <div className=" container max-w-screen-lg flex items-center justify-center flex-col md:flex-row  gap-20">
            <div className="flex-col flex items-center justify-center bg-white rounded-xl  w-1/2 gap-10 p-10">
              <h1 className=" text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-semibold container max-w-screen-lg text-black">
                {t("rmvideopopupheader")}
              </h1>
              <input
                className="border-2 border-[#1886A2] rounded-3xl w-full py-5"
                placeholder={t("rmvideopopupplaceholder")}
              />
              <button className="bg-gradient-to-r from-[#1E7BF1] to-[#1E7BF1] px-10 py-5 rounded-xl text-white ">
                {t("rmvideopopupbutton")}
              </button>
            </div>

            <div className="text-[12px] md:text-xl font-light w-1/2 text-left">
              {t("rmvideopara2")}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RemoveVideo;
