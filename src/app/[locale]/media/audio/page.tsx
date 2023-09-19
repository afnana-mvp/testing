import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
//media
import headerimage from "~/media_section/audio/headerimage.png";
import buttonleft from "~/media_section/audio/buttonleft.png";
import buttonright from "~/media_section/audio/buttonright.png";
import texttop from "~/media_section/audio/texttop.png";
import textbottom from "~/media_section/audio/textbottom.png";
import image1design2 from "~/media_section/audio/image1design2.png";
import image2design from "~/media_section/audio/image2design.png";
import image2 from "~/media_section/audio/image2.png";
import icon1 from "~/media_section/audio/icon1.png";
import icon2 from "~/media_section/audio/icon2.png";
import icon3 from "~/media_section/audio/icon3.png";
import icon32 from "~/media_section/audio/footerbckgrnd.png";

const Audio = () => {
  const t = useTranslations("Audio");

  return (
    <div className="bg-background_color overflow-hidden font-poppins text-center flex items-center justify-center  md:gap-10 flex-col ">
      <div className="  bg-[url('../../public/media_section/audio/headerbg.png')]  bg-cover bg-center	bg-no-repeat w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-10 mt-[50px] container max-w-screen-lg w-5/6">
          <Image src={headerimage} alt="art image" className="w-5/6 " />
          <div className="text-[12px] md:text-xl font-light w-5/6">
            {t("audioheaderText")}
          </div>
          <div className="flex items-center justify-center md:w-1/2 md:5/6 flex-row">
            <Image
              src={buttonleft}
              alt="art image"
              className=" w-2/3 h-[50px] md:md:h-[80px]"
            />
            <p className="text-[8px] md:text-[20px] font-light ">
              {t("audioheaderTextButton")}
            </p>
            <Image
              src={buttonright}
              alt="art image"
              className="h-[50px]  md:h-[80px]"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-10 mt-[50px] container max-w-screen-lg w-5/6">
        <Image src={texttop} alt="art image" className="" />
        <Image src={textbottom} alt="art image" className=" " />
      </div>

      <div className="flex items-center justify-center  gap-10 mt-[50px] container max-w-screen-lg md:w-5/6 flex-col md:flex-row">
        <div className="flex  items-center justify-center max-w-screen-lg mx-[20px] flex-col md:flex-row  gap-[20px]">
          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold w-1/2 md:text-left">
            {t("audioheading1")}{" "}
          </h1>
          <div className="text-[12px] md:text-xl md:text-left font-light md:w-1/2 w-full rtl:text-right">
            {t("audiopara1")}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  gap-10 mt-[50px] container max-w-screen-lg md:w-5/6 flex-col md:flex-row">
        <div className="flex  items-center justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px]">
          <Image src={image1design2} alt="art image" className=" " />

          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
            {t("audioheading2")}{" "}
          </h1>
          <div className="text-[12px] md:text-xl md:text-left font-light rtl:text-right">
            {t("audiopara2")}
          </div>
        </div>
        <div
          className=" flex  items-center justify-center bg-[url('../../public/media_section/audio/image1design1.png')]  bg-cover bg-center	bg-no-repeat w-full md:w-1/2 h-[400px]
        "
        >
          <div className="flex-col flex items-center justify-center bg-white rounded-xl   gap-5 md:gap-10 w-2/3 md:h-[300px]  h-[200px] p-4 md:p-10">
            <h1 className=" text-sm md:text-[20px] leading-[20px] md:leading-[40px] font-semibold  text-black">
              {t("popupheading")}
            </h1>
            <input
              className="border-2 border-[#1886A2] rounded-3xl w-full p-2 md:p-5 text-[12px] md:text-[16px] text-black"
              placeholder={t("popupplaceholder")}
            />
            <button className="bg-gradient-to-r from-[#1E7BF1] to-[#1E7BF1] px-4 py-1 md:py-4 md:px-5 rounded-xl text-white text-[8px] md:text-[16px]">
              {t("popupbutton")}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  gap-10 mt-[50px] container max-w-screen-lg md:w-5/6 flex-col-reverse md:flex-row">
        <Image src={image2} alt="art image" className=" w-1/2" />

        <div className="flex  items-center justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px]">
          <Image src={image2design} alt="art image" className=" " />

          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
            {t("audioheading2")}{" "}
          </h1>
          <div className="text-[12px] md:text-xl md:text-left font-light rtl:text-right">
            {t("audiopara2")}
          </div>
        </div>
      </div>
      <div className=" p-4 flex items-center justify-center md:border-2 border-[#5901B1] rounded-3xl">
        <div className="flex items-center justify-center  gap-10 mt-[50px]  flex-col md:flex-row md:bg-[url('../../public/media_section/audio/image3.png')]  bg-cover bg-center	bg-no-repeat    md:h-[300px] bg-image-height  rounded-3xl w-2/3  ">
          <div className="flex  items-center justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px] container  md:w-5/6  rounded-xl  ">
            <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
              {t("audioheading4")}{" "}
            </h1>
            <div className="text-[12px] md:text-xl font-light rtl:text-right">
              {t("audiopara4")}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col   bg-image bg-no-repeat  gap-20 pb-20 mx-auto w-full md:bg-[url('../../public/media_section/audio/footerbckgrnd.png')] md:h-[500px] mt-20 md:mt-0 ">
        <div className="flex items-center justify-between  gap-10 flex-col md:flex-row container">
          <div className="flex-1 flex items-center justify-center flex-col px-10 md:gap-10 ">
            <Image src={icon1} alt="python image" className="w-[60px] " />
            <div className="font-normal text-sm md:text-[30px] leading-8">
              {t("audiofooter1")}
            </div>
            <div className="rtl:text-right text-[12px] md:text-xl font-light">
              {t("audiofooterpara1")}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col px-10 md:gap-10">
            <Image src={icon2} alt="python image" className="w-[60px]" />
            <div className="font-normal text-sm md:text-[30px] leading-8">
              {t("audiofooter2")}
            </div>
            <div className="rtl:text-right text-[12px] md:text-xl font-light">
              {t("audiofooterpara2")}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col px-10 md:gap-10">
            <Image src={icon3} alt="python image" className="w-[60px]" />
            <div className="font-normal text-sm md:text-[30px] leading-8">
              {t("audiofooter3")}
            </div>
            <div className="rtl:text-right text-[12px] md:text-xl font-light">
              {t("audiofooterpara3")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
