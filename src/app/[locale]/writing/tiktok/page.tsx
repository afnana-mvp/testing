import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
//media
import image1 from "~/writing/tiktok/image1.png";
import image2 from "~/writing/tiktok/image2.png";
import image3 from "~/writing/tiktok/image3.png";
import backgrnd2 from "~/writing/tiktok/bckgrnd2.png";
const Tiktok = () => {
  const t = useTranslations("Tiktok");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left ">
      <div className="bg-[url('../../public/writing/tiktok/bckgrnd1.png')] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center h-full  pb-10">
        <div className="container flex items-center justify-center flex-col gap-5 md:gap-10 w-5/6 ">
          <div className="font-semibold text-[20px] md:text-[40px] mt-[100px] md:mt-[200px] container flex items-center flex-col">
            <div>{t("tiktokheading1supporttoppart1")}</div>
            <div>{t("tiktokheading1supporttoppart2")}</div>
          </div>
          <div className="">
            <h1 className="font-semibold text-[40px] md:text-[100px] md:ml-[200px]">
              {t("tiktokheading1part1")}{" "}
            </h1>
            <h1 className="font-semibold text-[40px] md:text-[100px]  leading-none">
              {t("tiktokheading1part2")}
            </h1>
            <h1 className="font-semibold text-[40px] md:text-[100px] md:ml-[200px] ">
              {t("tiktokheading1part3")}
            </h1>
          </div>
          <div className=" flex items-center justify-center w-5/6  flex-row-reverse">
            <div className="flex items-center justify-between flex-row w-full ">
              <p className="  text-[12px] md:text-[20px] lg:w-2/3 rtl:text-right">
                {t("tiktokheading1supportbottom")}
              </p>
              <button className="bg-white rounded-xl px-3 py-3 md:px-10 md:py-5 text-black font-normal text-[12px] md:text-[20px] ">
                {t("tiktokfreebutton")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-5/6 bg-[url('../../public/writing/tiktok/bckgrnd2.png')] bg-contain lg:bg-cover container flex items-center justify-center	bg-no-repeat ">
        <div className="flex items-center justify-center flex-col lg:flex-row-reverse container mt-10 w-2/3 gap-10">
          <Image src={image2} alt="art image" className="" />
          <div className="  md:items-start items-center flex justify-center flex-col relative">
            <h1 className="font-medium text-[20px] md:text-[25px] rtl:text-right">
              {t("tiktokheading2")}
            </h1>
            <Image src={image1} alt="art image" className="w-full" />
          </div>
        </div>
      </div>

      <div className="container flex items-center  justify-center flex-col-reverse lg:flex-row w-2/3 md:gap-5  pb-10 relative bg-[url('../../public/writing/tiktok/design.png')] 	bg-no-repeat  bg-contain  ">
        <div className="flex items-center justify-center flex-col basis-1/2 rtl:text-right gap-5">
          <p className="  text-[16px] md:text-[20px]  ">
            {t("tiktokheading3")}
          </p>
          <p className="  text-[16px] md:text-[20px]  ">{t("tiktokpara3")}</p>
        </div>
        <Image
          src={image3}
          alt="art image"
          className="md:w-1/2 object-contain"
        />
        <div className="w-[200px] h-[200px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute   left-0 bottom-0"></div>
      </div>
    </div>
  );
};

export default Tiktok;
