import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

//media
import image1 from "~/media_section/redesign/header1.png";
import image2 from "~/media_section/redesign/header2.png";
import image3 from "~/media_section/redesign/header3.png";
import image4 from "~/media_section/redesign/header4.png";
import image5 from "~/media_section/redesign/header5.png";

const Redesign = () => {
  const t = useTranslations("Redesign");

  return (
    <div className="bg-background_color overflow-hidden font-poppins">
      <div className=" grid container grid-cols-4 grid-rows-2 max-w-screen-lg ">
        <div className="flex items-center md:items-start justify-center max-w-screen-lg mx-[20px] my-100 flex-col flex-1 gap-[20px]">
          <h1 className="text-white text-sm md:text-[30px] font-semibold leading-[20px] md:leading-[40px]">
            {t("redesignheaderText")}
            <span className="bg-gradient-to-r from-[#216BD9] to-[#7BADF2] inline-block text-transparent bg-clip-text outline-[1px]">
              {t("blueText")}
            </span>
          </h1>
          <div className="text-[12px] md:text-xl font-light">
            {t("redesignheaderTextSupport")}
          </div>
          <button className="bg-[#1E7BF1] px-[10px] py-[5px] md:px-[25px] md:py-[15px] flex gap-2 rounded-lg text-[8px] md:text-[20px]">
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
        <Image
          src={image1}
          alt="python image"
          className="flex-1 h-[150px] w-[200px] md:h-[300px] md:w-[350px] "
        />
        <Image
          src={image2}
          alt="python image"
          className="flex-1 h-[150px] w-[200px] md:h-[300px] md:w-[350px] "
        />
        <Image
          src={image3}
          alt="python image"
          className="flex-1 h-[150px] w-[200px] md:h-[300px] md:w-[350px] "
        />
        <Image
          src={image4}
          alt="python image"
          className="flex-1 h-[150px] w-[200px] md:h-[300px] md:w-[350px] "
        />
        <Image
          src={image5}
          alt="python image"
          className="flex-1 h-[150px] w-[200px] md:h-[300px] md:w-[350px] "
        />
      </div>
    </div>
  );
};

export default Redesign;
