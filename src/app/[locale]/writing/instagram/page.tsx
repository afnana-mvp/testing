import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
//media
import image1 from "~/writing/instagram/image1.png";
import image2 from "~/writing/instagram/image2.png";
import logo from "~/writing/instagram/logo.png";

const Instagram = () => {
  const t = useTranslations("Instagram");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left ">
      <div className="bg-[url('../../public/writing/instagram/bckgrnd1.png')] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center h-full  pb-10">
        <div className="container flex items-center justify-center flex-col gap-5 md:gap-10 w-5/6 ">
          <Image src={logo} alt="art image" className="" />

          <div className="font-semibold text-[20px] md:text-[40px] mt-[100px] md:mt-[200px] container flex items-center flex-col text-center">
            <div>{t("instaheading1support")}</div>
          </div>
          <div className="flex items-center justify-evenly flex-row w-full ">
            <div className="flex items-start justify-between flex-col ">
              <h1 className="font-semibold text-[40px] md:text-[100px] ">
                {t("instaheading1part1")}{" "}
              </h1>
              <h1 className="font-semibold text-[40px] md:text-[100px]  leading-none">
                {t("instaheading1part2")}
              </h1>
              <h1 className="font-semibold text-[40px] md:text-[100px]  ">
                {t("instaheading1part3")}
              </h1>
            </div>
            <button className="bg-white rounded-xl px-3 py-3 md:px-10 md:py-5 text-black font-normal text-[12px] md:text-[20px] ">
              {t("instafreebutton")}
            </button>
          </div>
        </div>
      </div>

      <div className=" w-5/6 bg-[url('../../public/writing/tiktok/bckgrnd2.png')] bg-contain lg:bg-cover container flex items-center justify-center	bg-no-repeat ">
        <div className="flex items-center justify-center flex-col lg:flex-row-reverse container mt-10 w-2/3 gap-10">
          <Image src={image2} alt="art image" className="w-1/2 h-full" />
          <div className="  md:items-start items-center flex justify-center flex-col relative">
            <p className="  text-[16px] md:text-[20px]  ">{t("instapara1")}</p>
            <Image src={image1} alt="art image" className="w-full" />
            <p className="  text-[16px] md:text-[20px]  ">{t("instapara2")}</p>
          </div>
        </div>
      </div>

      <div className="container flex items-center  justify-center flex-col-reverse lg:flex-row w-2/3 md:gap-5  pb-10 relative bg-[url('../../public/writing/tiktok/design.png')] 	bg-no-repeat  bg-contain  ">
        <h1 className="font-semibold text-[40px] md:text-[50px] w-2/3  ">
          {t("instahashtag")}
        </h1>
      </div>
    </div>
  );
};

export default Instagram;
