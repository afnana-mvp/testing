import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

//media
import image1 from "~/media_section/redesign/header1.png";
import header_bottom from "~/media_section/redesign/header_bottom.png";
import header_side from "~/media_section/redesign/header_side.png";
import before from "~/media_section/redesign/before.png";
import after from "~/media_section/redesign/after.png";
import icon1 from "~/media_section/redesign/icon1.png";
import icon2 from "~/media_section/redesign/icon2.png";
import icon3 from "~/media_section/redesign/icon3.png";

const Redesign = () => {
  const t = useTranslations("Redesign");

  return (
    <div className="bg-background_color overflow-hidden font-poppins text-center md:text-left flex items-center justify-center gap-20 flex-col relative">
      <div
        className="flex items-end justify-center flex-row container max-w-screen-lg
      mt-[50px] md:mt-[100px] gap-2 h-full w-5/6 "
      >
        <div className="flex items-center justify-center flex-col-reverse">
          {" "}
          <Image src={header_bottom} alt="python image" className=" " />
          <div className=" container max-w-screen-lg ">
            <div className="flex items-start md:items-start  max-w-screen-lg mx-[20px] my-100 flex-col flex-1 gap-[10px] md:gap-[20px] text-left">
              <h1 className="text-white text-sm md:text-[30px] font-semibold leading-[20px] md:leading-[40px]">
                {t("redesignheaderText")}
                <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">{t("blueText")}</span>
              </h1>
              <div className="text-[10px] md:text-xl font-light">{t("redesignheaderTextSupport")}</div>
              <button className="bg-[#1E7BF1] px-[10px] py-[5px] md:px-[25px] md:py-[15px] flex gap-2 rounded-lg text-[8px] md:text-[20px] text-left">
                {t("try")} Araby.Ai{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-external-link w-[10px] h-[10px] md:w-[25px] md:h-[25px]"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" h-[350px] md:h-[650px] lg:h-[750px]">
          {" "}
          <Image src={header_side} alt="python image" className="h-full" />
        </div>
      </div>

      <div className="container">
        <div className="w-[300px] h-[300px] origin-center rounded-lg bg-gradient-to-r from-[#5901b16e] to-[#ff73b66e] blur-2xl mr-0 absolute  top-0"></div>
      </div>
      <div className="container max-w-screen-lg flex items-center justify-center flex-col text-center mx-auto w-5/6">
        <h1 className="text-white text-sm md:text-[30px] font-bold leading-[20px] md:leading-[40px] ">{t("redesignMainHeading")}</h1>
        <div className="text-[12px] md:text-[20px] ">{t("redesignMainHeadingsupport")}</div>
      </div>

      <div className=" flex items-center justify-center flex-col  md:bg-[url('../../public/media_section/redesign/frame.png')] bg-image bg-no-repeat bg-bottom gap-20 pb-20 mx-auto w-full">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <div className="flex items-center justify-center flex-col">
            <button className="bg-gradient-to-b from-[#0579C6] to-[#5901B1] rounded-lg px-[5px] md:px-[10px] md:py-[5px] text-black">{t("before")}</button>
            <Image src={before} alt="python image" className="w-5/6" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <button className="bg-gradient-to-b from-[#0579C6] to-[#5901B1] rounded-lg px-[5px] md:px-[10px] md:py-[5px] text-black">{t("after")}</button>
            <Image src={after} alt="python image" className="w-5/6" />
          </div>
        </div>
        <div className="flex items-center justify-between m-auto gap-10 flex-col md:flex-row container">
          <div className="flex-1 flex items-center justify-center flex-col px-10 gap-10 ">
            <Image src={icon1} alt="python image" className="w-[60px] " />
            <div className="font-normal text-sm md:text-[30px] leading-8">{t("redesignheading1")}</div>
            <div>{t("redesignpara1")}</div>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col px-10 gap-10">
            <Image src={icon2} alt="python image" className="w-[60px]" />
            <div className="font-normal text-sm md:text-[30px] leading-8">{t("redesignheading2")}</div>
            <div>{t("redesignpara2")}</div>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col px-10 gap-10">
            <Image src={icon3} alt="python image" className="w-[60px]" />
            <div className="font-normal text-sm md:text-[30px] leading-8">{t("redesignheading3")}</div>
            <div>{t("redesignpara3")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redesign;
