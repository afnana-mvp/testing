import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
//media
import image1 from "~/writing/tiktok/image1.png";
import image2 from "~/writing/tiktok/image2.png";
import image3 from "~/writing/tiktok/image3.png";

const Tiktok = () => {
  const t = useTranslations("Tiktok");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left ">
      <div className="bg-[url('../../public/writing/tiktok/bckgrnd1.png')] w-full bg-cover bg-center	bg-no-repeat flex items-center justify-center h-full  pb-10">
        <div className="container flex items-center justify-center flex-col gap-10 ">
          <h1 className="font-semibold text-[30px] md:text-[40px] mt-10 container">
            {t("tiktokheading1supporttop")}{" "}
          </h1>
          <div className="mt-20">
            <h1 className="font-semibold text-[30px] md:text-[40px]">
              {t("tiktokheading1part1")}{" "}
            </h1>
            <h1 className="font-semibold text-[30px] md:text-[100px] md:ml-[200px] leading-none">
              {t("tiktokheading1part2")}
            </h1>
            <h1 className="font-semibold text-[30px] md:text-[40px] ">
              {t("tiktokheading1part3")}
            </h1>
          </div>
          <div className=" flex items-center justify-center w-5/6  flex-row-reverse">
            <Image src={image1} alt="art image" className="w-1/3" />
            <div className="flex items-center md:items-start justify-center flex-col  md:ml-10 gap-5  ">
              <p className="  text-[12px] md:text-[20px] lg:w-2/3 rtl:text-right">
                {t("tiktokpara1")}
              </p>
              <button className="bg-white rounded-xl px-3 py-3 md:px-10 md:py-5 text-black font-normal text-[12px] md:text-[20px] ">
                {t("tiktoktrybutton")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col lg:flex-row w-5/6 bg-[url('../../public/writing/tiktok/bckgrnd2.png')] ">
        <Image src={image2} alt="art image" className="" />
        <div className="  md:items-start items-center flex justify-center flex-col relative">
          <h1 className="font-semibold text-[20px] md:text-[25px] rtl:text-right">
            {t("tiktokheading2")}
          </h1>
          <Image src={image1} alt="art image" className="" />

          <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute  -top-72 right-0"></div>
        </div>
      </div>

      <div className="container flex items-center  justify-center flex-col-reverse lg:flex-row w-2/3 md:gap-5  pb-10 relative bg-[url('../../public/writing/tiktok/bckgrnd3.png')]">
        <div className="flex items-center justify-center flex-col basis-1/2 rtl:text-right ">
          <p className="  text-[16px] md:text-[20px]  ">
            {t("tiktokheading3")}
          </p>
          <p className="  text-[16px] md:text-[20px]  ">{t("tiktokpara3")}</p>
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

export default Tiktok;
