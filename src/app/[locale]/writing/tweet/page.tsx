import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
//media
import image1 from "~/writing/tweet/image1.png";
import image2 from "~/writing/tweet/image2.png";
import image3 from "~/writing/tweet/image3.png";

const Tweet = () => {
  const t = useTranslations("Tweet");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left ">
      <div className="bg-[url('../../public/writing/tweet/bckgrnd.png')] w-full bg-cover bg-center	bg-no-repeat flex items-center justify-center h-full  pb-10">
        <div className="container flex items-center justify-center flex-col gap-10 ">
          <div className="mt-20">
            <h1 className="font-semibold text-[30px] md:text-[40px] rtl:text-right">
              {t("tweetheading1part1")}{" "}
            </h1>
            <div className="flex items-baseline">
              <h1 className="font-semibold text-[30px] md:text-[100px] rtl:ml-1 md:ml-[200px] leading-none">
                {t("tweetheading1part2")}
              </h1>
              <h1 className="font-semibold text-[30px] md:text-[40px] ">
                {t("tweetheading1part3")}
              </h1>
            </div>
          </div>
          <div className=" flex items-center justify-center w-5/6  flex-row-reverse">
            <Image src={image1} alt="art image" className="w-1/3" />
            <div className="flex items-center md:items-start justify-center flex-col  md:ml-10 gap-5  ">
              <p className="  text-[12px] md:text-[20px] lg:w-2/3 rtl:text-right">
                {t("tweetpara1")}
              </p>
              <button className="bg-white rounded-xl px-3 py-3 md:px-10 md:py-5 text-black font-normal text-[12px] md:text-[20px] ">
                {t("tweettrybutton")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container  flex items-center justify-center flex-col relative w-5/6">
        <div className="font-semibold text-[30px] md:text-[35px] rtl:text-right z-[1]">
          {t("tweetmainheading")}
        </div>
        {/* <Image
          src={imagepop}
          alt="art image"
          className=" md:-top-48 lg:-top-96 rtl:left-0 "
        /> */}

        <div className="flex items-center justify-center flex-col lg:flex-row w-5/6 ">
          <Image src={image2} alt="art image" className="" />
          <div className="  md:items-start items-center flex justify-center flex-col relative z-[1]">
            <h1 className="font-semibold text-[20px] md:text-[25px] rtl:text-right">
              {t("tweetheading2")}
            </h1>
            <p className="  text-[12px] md:text-[20px] rtl:text-right ">
              {t("tweetpara2")}
            </p>
            <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute  -top-72 right-0"></div>
          </div>
        </div>
      </div>
      <div className="container flex items-center  justify-center flex-col-reverse lg:flex-row w-2/3 md:gap-5  pb-10 relative">
        <div className="flex items-center justify-center flex-col basis-1/2 rtl:text-right z-[1]">
          <p className="  text-[16px] md:text-[20px]  ">
            {t("tweetheading3part1")}
          </p>
          <p className="  text-[16px] md:text-[20px]  ">
            {t("tweetheading3part2")}
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

export default Tweet;
