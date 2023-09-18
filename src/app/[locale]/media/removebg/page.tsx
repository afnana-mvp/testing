import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
//media
import main from "~/media_section/removebg/main.png";
import image1 from "~/media_section/removebg/image1.png";
import image2 from "~/media_section/removebg/image2.png";
import image3 from "~/media_section/removebg/image3.png";
import image4 from "~/media_section/removebg/image4.png";
import design from "~/media_section/removebg/design.png";

const RemoveBg = () => {
  const t = useTranslations("RemoveBg");
  return (
    <div className="bg-background_color overflow-hidden font-poppins text-center md:text-left flex items-center justify-center gap-10 flex-col  ">
      <div className="flex items-center justify-center text-center container  max-w-screen-lg mx-auto my-100 flex-col md:flex-row gap-5 mt-[100px]">
        <div className="flex  items-center  justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px] bg-image-height bg-[url('../../public/media_section/removebg/design.png')] bg-center	bg-no-repeat relative">
          <div className="flex items-start ">
            <div className="w-1/2 right-0 left-0 h-full origin-center rounded-lg bg-gradient-to-r from-[#5901b16e] to-[#ff73b66e] blur-2xl absolute m-auto  "></div>
          </div>

          <h1 className="text-white text-sm md:text-[30px] font-bold leading-[20px] md:leading-[40px] text-center ">
            {t("rmbgheaderText")} <span className="araby_ai">ArabyAi</span>
          </h1>
          <div className="text-[12px] md:text-[20px] font-light ">
            {t("rmbgheaderTextSupport")}
          </div>
        </div>
      </div>
      {/* purple design */}

      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto  flex-col gap-5 ">
        <div className=" flex items-start justify-center relative ">
          <div className="relative flex items-start justify-center">
            <Image
              src={main}
              alt="python image"
              className=" w-5/6 h-auto text-center "
            />
            <div className="absolute flex items-center justify-between w-5/6 py-[30px] md:py-[50px] text-[8px] md:text-[12px] px-10 md:px-20">
              <div className="bg-white rounded-lg px-[5px] md:px-[10px] md:py-[5px] text-black">
                {t("rmbgbefore")}
              </div>
              <div className="bg-white rounded-lg px-[5px] md:px-[10px] md:py-[5px] text-black">
                {t("rmbgafter")}
              </div>
            </div>
          </div>
          <div className="w-[300px] h-1/3 origin-center rounded-lg bg-gradient-to-r from-[#5901b16e] via-[#ff73b66e] to-background_color blur-2xl absolute -right-20 bottom-0"></div>
        </div>
        <div className="text-[8px] md:text-[16px]">
          {" "}
          {t("rmbgauthentic")}{" "}
          <span className="font-bold">{t("rmbgauthenticBold")}</span>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto  flex-col-reverse md:flex-row gap-5 ">
        <Image
          src={image1}
          alt="python image"
          className="flex-1 h-[200px] w-5/6 md:object-cover md:h-[500px] "
        />
        <div className="flex  items-center md:items-start justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px]">
          <h1 className="text-white text-sm md:text-[30px] leading-[20px] md:leading-[40px] font-bold">
            {t("rmbgheading1")}{" "}
            <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">
              {" "}
              {t("rmbgheading1blueText")}
            </span>
          </h1>
          <div className="text-[12px] md:text-xl font-light">
            {t("rmbgpara1")}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto  flex-col md:flex-row gap-5">
        <div className="flex items-center md:items-start justify-center max-w-screen-lg mx-[20px] my-100 flex-col flex-1 gap-[20px]">
          <h1 className="text-white text-sm md:text-[30px] font-bold leading-[20px] md:leading-[40px]">
            {t("rmbgheading2")}
            <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">
              {" "}
              {t("rmbgheading2blueText")}
            </span>
          </h1>
          <div className="text-[12px] md:text-xl font-light">
            {t("rmbgpara2")}
          </div>
        </div>
        <Image
          src={image2}
          alt="python image"
          className="flex-1 h-[200px] w-5/6 md:object-cover md:h-[500px] object-cover"
        />
      </div>
      <div className="flex items-center justify-center md:mt-10 container  max-w-screen-lg mx-auto flex-col-reverse md:flex-row gap-5">
        <Image
          src={image3}
          alt="python image"
          className="flex-1 h-[200px]  md:h-[500px] w-5/6 md:object-cover"
        />
        <div className="flex items-center md:items-start justify-center max-w-screen-lg mx-[20px]  flex-col flex-1 gap-[20px]">
          <Image
            src={image4}
            alt="python image"
            className="flex-1 h-0 w-0 md:h-[500px] md:w-auto"
          />
          <h1 className="text-white text-sm md:text-[30px] font-bold leading-[20px] md:leading-[40px]">
            {t("rmbgheading3")}
            <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">
              {" "}
              {t("rmbgheading3blueText")}
            </span>
          </h1>
          <div className="text-[12px] md:text-xl font-light">
            {t("rmbgpara3")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBg;
