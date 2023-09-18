import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

//media
import image1 from "~/media_section/removevideo/image1.png";
import image2 from "~/media_section/removevideo/image2.png";
import header2 from "~/media_section/removevideo/header2.png";
import headerdesign from "~/media_section/removevideo/headerdesign.png";
import headerimage from "~/media_section/removevideo/headerimage.png";

const RemoveVideo = () => {
  const t = useTranslations("RemoveVideo");

  return (
    <div className=" overflow-hidden font-poppins text-center flex items-center justify-center flex-col bg-background_color -20">
      <div className="flex items-start justify-center  bg-[url('../../public/media_section/removevideo/header.png')]  bg-cover bg-center	bg-no-repeat w-full">
        <div className="flex-col flex items-center justify-center  gap-5 md:gap-10 container max-w-screen-lg w-5/6 py-20">
          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
            {t("rmvideoheaderText")}{" "}
          </h1>
          <div className="text-[12px] md:text-xl font-light text-center">
            {t("rmvideoheaderTextSupport")}
          </div>
          <Image
            src={headerimage}
            alt="python image"
            className=" bg-[#8E098C] "
          />
        </div>
      </div>
      <div className="flex items-start justify-center bg-[url('../../public/media_section/removevideo/header2.png')]  bg-cover bg-center	bg-no-repeat py-20 w-full ">
        <div className="flex-col flex items-center justify-center   gap-20 container max-w-screen-lg w-5/6">
          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold container max-w-screen-lg">
            {t("rmvideoheading1")}
          </h1>
          <div className="  flex items-center justify-center flex-col md:flex-row w-5/6 gap-20">
            <div className="flex-col flex items-center justify-center bg-white rounded-xl w-full  gap-5 md:gap-10  p-4 md:p-10">
              <h1 className=" text-sm md:text-[20px] leading-[20px] md:leading-[40px] font-semibold  text-black">
                {t("rmvideopopupheader")}
              </h1>
              <input
                className="border-2 border-[#1886A2] rounded-3xl w-full p-2 md:p-5 text-[12px] md:text-[16px]  text-black"
                placeholder={t("rmvideopopupplaceholder")}
              />
              <button className="bg-gradient-to-r from-[#1E7BF1] to-[#1E7BF1] px-4 py-1 md:py-4 md:px-5 rounded-xl text-white text-[8px] md:text-[16px]">
                {t("rmvideopopupbutton")}
              </button>
            </div>

            <div className="text-[12px] md:text-xl font-light  md:text-left w-full">
              {t("rmvideopara2")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center py-20 bg-white w-full ">
        <div className=" container max-w-screen-lg w-5/6 flex items-center justify-center flex-col  gap-20">
          <div className="flex items-center justify-center flex-col md:flex-row gap-20 md:text-left">
            <div className="flex items-center justify-center flex-col text-black gap-2">
              <h1 className=" text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold container max-w-screen-lg">
                {t("rmvideoheading2")}
                <span className="araby_ai">ArabyAi</span>
              </h1>
              <div className="text-[12px] md:text-xl font-light">
                {t("rmvideopara2")}
              </div>
            </div>
            <Image src={image1} alt="python image" className="  " />
          </div>
          <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-20 md:text-left">
            <Image src={image2} alt="python image" className="  " />

            <div className="flex items-center justify-center flex-col text-black gap-2">
              <h1 className=" text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold container max-w-screen-lg">
                {t("rmvideoheading3")}
                {t("rmvideoheading3blueText")}
              </h1>
              <div className="text-[12px] md:text-xl font-light">
                {t("rmvideopara3")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveVideo;
