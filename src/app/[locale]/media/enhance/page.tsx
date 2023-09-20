import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import image1 from "~/media_section/enhance/enhance_image1.png";
import image2 from "~/media_section/enhance/enhance_image2.png";
import image3 from "~/media_section/enhance/enhance_image3.png";
import image4 from "~/media_section/enhance/enhance_image4.png";
import image5 from "~/media_section//enhance/enhance_image5.png";
import image6 from "~/media_section//enhance/enhance_image6.png";

const Enhance = () => {
  const t = useTranslations("Enhance");
  return (
    <div className="bg-background_color overflow-hidden font-poppins text-center md:text-left flex items-center justify-center gap-10 flex-col ">
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col md:flex-row gap-5 mt-[100px]">
        <div className="flex  items-center md:items-start justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px] ">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold !leading-relaxed lg:rtl:text-right">
            {t("enhanceheaderText")} <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]"> {t("portrait")}</span>
          </h1>
          <div className="text-sm md:text-[20px] font-light lg:rtl:text-right !leading-7">{t("enhanceheaderTextSupport")}</div>
          <button className="bg-[#1E7BF1] px-2 py-1 md:px-3 md:py-2 flex gap-2 rounded-lg text-sm md:text-lg">
            {t("try")} Araby.Ai <ExternalLink className="w-5 rtl:-rotate-90" />
          </button>
        </div>
        <div>
          <Image src={image1} alt="python image" width={100} className="flex-1 h-96 w-96 object-contain" />
        </div>
      </div>
      <div className="container">
        <div className="w-[300px] h-[300px] origin-center rounded-lg bg-gradient-to-r from-[#5901b16e] to-[#ff73b66e] blur-2xl mr-0 absolute -right-40"></div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto  flex-col gap-5 ">
        <div className=" flex items-start justify-center relative ">
          <Image src={image2} alt="python image" className="w-5/6 h-auto block object-cover" />
          <div className="absolute flex items-center justify-between w-4/6 py-[30px] md:py-[50px] text-[8px] md:text-[12px]">
            <div className="bg-white rounded-lg px-[5px] md:px-[10px] md:py-[5px] text-black">{t("before")}</div>
            <div className="bg-white rounded-lg px-[5px] md:px-[10px] md:py-[5px] text-black">{t("after")}</div>
          </div>
        </div>
        <div className="text-base">
          {" "}
          {t("authentic")} <span className="font-semibold">{t("authenticBold")}</span>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto  flex-col-reverse md:flex-row gap-5 ">
        <Image src={image3} alt="python image" className="flex-1 h-[200px] w-[200px] md:h-[500px] object-contain" />
        <div className="flex  items-center md:items-start justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px]">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl !leading-relaxed font-semibold">
            {t("enhanceheading1")} <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]"> {t("flaws")}</span>
          </h1>
          <div className="text-[12px] md:text-xl font-light lg:rtl:text-right">{t("enhancepara1")}</div>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto  flex-col md:flex-row gap-5">
        <div className="flex items-center md:items-start justify-center max-w-screen-lg mx-[20px] my-100 flex-col flex-1 gap-[20px]">
          <h1 className="text-white text-xl  font-semibold sm:text-2xl md:text-3xl lg:text-4xl !leading-relaxed lg:rtl:text-right">
            {t("enhanceheading2")}
            <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">{t("innerglow")}</span>
          </h1>
          <div className="text-[12px] md:text-xl font-light lg:rtl:text-right">{t("enhancepara2")}</div>
        </div>
        <Image src={image4} alt="python image" className="flex-1 h-[200px] w-[200px] md:h-[500px] object-contain" />
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto flex-col-reverse md:flex-row gap-5">
        <Image src={image6} alt="python image" className="flex-1 h-[200px] w-[200px] md:h-[500px] object-contain" />
        <div className="flex items-center md:items-start justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px]">
          <Image src={image5} alt="python image" className="flex-1 h-0 w-0 md:h-[500px] md:w-auto object-cover" />
          <h1 className="text-white  font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl !leading-relaxed ">
            {t("enhanceheading3")}
            <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]"> {t("version")}</span>
          </h1>
          <div className="text-[12px] md:text-xl font-light lg:rtl:text-right">{t("enhancepara3")}</div>
        </div>
      </div>
    </div>
  );
};

export default Enhance;
