import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

//media
import image1 from "~/media_section/replacebg/image1.png";
import image2 from "~/media_section/replacebg/image2.png";

const ReplaceBg = () => {
  const t = useTranslations("ReplaceBg");

  return (
    <div className="bg-background_color overflow-hidden font-poppins text-center flex items-center justify-center gap-10 flex-col ">
      <div className="flex-1 container max-w-screen-lg bg-[url('../../public//media_section/replacebg/headerbg.png')]  bg-cover bg-center	bg-no-repeat pt-20 flex items-center justify-center gap-10 flex-col">
        <div className="flex  items-center  justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px] bg-image-height bg-[url('../../public/media_section/replacebg/headertextbg.png')] bg-center bg-no-repeat md:py-5">
          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
            {t("rpbgheading1")} <span className="araby_ai">ArabyAi</span>
          </h1>
          <div className="text-[12px] md:text-xl font-light rtl:text-right">
            {t("rpbgpara1")}
          </div>
        </div>
        <Image
          src={image1}
          alt="python image"
          className=" w-5/6 h-auto text-center "
        />
      </div>
      <div className="flex-1 container max-w-screen-lg flex items-center justify-center flex-col gap-10  w-2/3 md:w-5/6">
        <div className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px] text-sm md:text-[30px] font-bold md:py-5">
          {t("rpbgmainheading")}
        </div>
        <Image
          src={image2}
          alt="python image"
          className=" w-5/6 h-auto text-center "
        />
        <div className="bg-design-height bg-[url('../../public/media_section/replacebg/design.png')] bg-center bg-no-repeat py-[50px] md:py-[200px] ">
          <div className="flex  items-center  justify-center max-w-screen-lg mx-[20px]  flex-col  gap-[20px]  py-5 ">
            <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
              {t("rpbgheading2")}{" "}
              <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">
                {t("rpbgheading2blueText")} {t("rpbgheading2supportText")}
              </span>
            </h1>
            <div className="text-[12px] md:text-xl font-light rtl:text-right">
              {t("rpbgpara2")}
            </div>
            <button className="bg-[#1E7BF1] px-[10px] py-[5px] md:px-[25px] md:py-[15px] flex gap-2 rounded-lg text-[8px] md:text-[20px]">
              {t("rpbgtry")} Araby.Ai{" "}
              <ExternalLink className="rtl:-rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplaceBg;
