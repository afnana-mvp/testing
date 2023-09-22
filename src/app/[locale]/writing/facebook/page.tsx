import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
//media
import image1 from "~/writing/facebook/image1.png";
import image2 from "~/writing/facebook/image2.png";
import image3 from "~/writing/facebook/image3.png";
import imagepop from "~/writing/facebook/imagepop.png";

const Facebook = () => {
  const t = useTranslations("Facebook");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left overflow-hidden ">
      <div className="bg-[url('../../public/writing/facebook/bckgrnd1.png')] w-full bg-cover bg-center	bg-no-repeat flex items-center justify-center h-full md:pb-96 pb-10">
        <div className="container flex items-center justify-center flex-col md:flex-row gap-10 mt-10 ">
          <Image src={image1} alt="art image" className="w-1/3" />
          <div className=" flex  basis-1/2 flex-col w-5/6 md:w-full">
            <h1 className="font-semibold text-[30px] md:text-[40px] ">
              {t("fbheading1part1")}{" "}
            </h1>
            <div className="flex items-center md:items-start justify-center flex-col  md:ml-10 gap-5  ">
              <h1 className="font-semibold text-[30px] md:text-[40px] ">
                {t("fbheading1part2")}
              </h1>
              <p className="  text-[12px] md:text-[20px] lg:w-2/3 rtl:text-right">
                {t("fbpara1")}
              </p>
              <button className="bg-white rounded-xl px-3 py-3 md:px-10 md:py-5 text-black font-normal text-[12px] md:text-[20px] ">
                {t("fbtrybutton")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container md:pt-72 flex items-center justify-center flex-col relative w-5/6">
        <div className="font-semibold text-[30px] md:text-[35px] rtl:text-right">
          {t("fbmainheading")}
        </div>
        <Image
          src={imagepop}
          alt="art image"
          className="hidden md:block md:absolute md:-top-48 lg:-top-96 rtl:left-0 "
        />

        <div className="flex items-center justify-center flex-col lg:flex-row w-5/6 ">
          <Image src={image2} alt="art image" className="" />
          <div className="  md:items-start items-center flex justify-center flex-col relative">
            <h1 className="font-semibold text-[20px] md:text-[25px] rtl:text-right">
              {t("fbheading2")}
            </h1>
            <p className="  text-[12px] md:text-[20px] rtl:text-right ">
              {t("fbpara2")}
            </p>
            <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute  -top-72 right-0"></div>
          </div>
        </div>
      </div>
      <div className="container flex items-center  justify-center flex-col-reverse lg:flex-row w-2/3 md:gap-5  pb-10 relative">
        <div className="flex items-center justify-center flex-col basis-1/2 rtl:text-right ">
          <p className="  text-[16px] md:text-[20px]  ">
            {t("fbheading3part1")}
          </p>
          <p className="  text-[16px] md:text-[20px]  ">
            {t("fbheading3part2")}
          </p>
        </div>
        <Image
          src={image3}
          alt="art image"
          className="md:h-[500px] object-contain"
        />
        <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute   left-0 bottom-0"></div>
      </div>
    </div>
  );
};

export default Facebook;
