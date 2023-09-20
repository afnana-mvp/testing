import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
//media
import image1 from "~/writing/blog/image1.png";
import image2 from "~/writing/blog/image2.png";
import arrow from "~/media_section/create/arrow-right.svg";

const Blog = () => {
  const t = useTranslations("Blog");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left ">
      <div className="bg-[url('../../public/writing/blog/bckgrnd1.png')]  w-full bg-cover bg-center	bg-no-repeat flex items-center justify-center h-full  pb-10">
        <div className=" flex items-center justify-center container flex-col gap-20 w-5/6">
          <div className="flex items-center justify-center flex-col container  mt-20 ">
            <h1 className="font-semibold text-[30px] md:text-[50px]">
              {t("blogheading1part1")}{" "}
            </h1>
            <h1 className="font-semibold text-[30px] md:text-[50px]  leading-none">
              {t("blogheading1part2")}
            </h1>
            <h1 className="font-semibold text-[30px] md:text-[50px]  leading-none">
              {t("blogheading1part3")}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 md:px-6 md:py-3 border-gradient-br-start-button border-solid border-1 rounded-full text-gray-100 text-xs md:text-lg gradient-border-3"
            >
              <div className=" flex items-center justify-center gap-[10px]">
                <div className="text-white">{t("blogfreebutton")}</div>
                <Image
                  src={arrow}
                  alt="arrow"
                  width={20}
                  height={20}
                  className="rtl:rotate-180"
                />
              </div>
            </button>
            <p className=" w-1/2 text-[12px] md:text-[20px] rtl:text-right ">
              {t("blogheading1support")}
            </p>
          </div>
        </div>
      </div>
      <div className=" text-[16px] md:text-[30px] rtl:text-right container text-center flex items-center justify-center w-5/6 md:w-2/3 relative">
        {t("blogmainheading")}
        <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute   -right-40"></div>
      </div>
      <Image src={image1} alt="art image" className=" w-5/6 md:w-1/2" />

      <div className="container flex items-center  justify-center flex-col-reverse lg:flex-row w-5/6 md:w-2/3 lg:w-5/6 md:gap-5  pb-10 relative">
        <div className="flex items-center justify-center flex-col basis-1/2 rtl:text-right ">
          <h1 className="font-semibold text-[20px] md:text-[25px] rtl:text-right">
            {t("blogheading1")}{" "}
          </h1>
          <p className=" text-[12px] md:text-[20px] rtl:text-right  ">
            {t("blogpara1")}
          </p>
        </div>
        <div className=" hidden md:block w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute   left-0 -bottom-72"></div>
      </div>
      <div className="flex items-center justify-center flex-col bg-[url('../../public/writing/blog/design.png')] bg-contain 	bg-no-repeat ">
        <Image
          src={image2}
          alt="art image"
          className="w-5/6 md:w-1/2 lg:w-full pb-10 "
        />
      </div>
    </div>
  );
};

export default Blog;
