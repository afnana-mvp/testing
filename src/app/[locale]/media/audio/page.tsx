import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
//media
import headerimage from "~/media_section/audio/headerimage.png";
import buttonleft from "~/media_section/audio/buttonleft.png";
import buttonright from "~/media_section/audio/buttonright.png";

const Audio = () => {
  const t = useTranslations("Audio");

  return (
    <div className="bg-background_color overflow-hidden font-poppins text-center flex items-center justify-center gap-10 flex-col ">
      <div className="container max-w-screen-lg  bg-[url('../../public//media_section/audio/headerbg.png')]  bg-cover bg-center	bg-no-repeat flex items-center justify-center flex-col gap-10 mt-[50px]">
        <Image src={headerimage} alt="art image" className="w-5/6 " />
        <div className="text-[12px] md:text-xl font-light w-5/6">
          {t("audioheaderText")}
        </div>
        <div className="flex items-center justify-center gap-5  w-1/2 md:5/6 flex-row">
          <Image src={buttonleft} alt="art image" className=" " />
          <p className="text-[8px] md:text-[20px] font-light">
            {t("audioheaderTextButton")}
          </p>
          <Image src={buttonright} alt="art image" className=" " />
        </div>
      </div>
    </div>
  );
};

export default Audio;
