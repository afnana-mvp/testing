import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

//media
import image1 from "~/writing/companycontent/image1.png";
import image2 from "~/writing/companycontent/image2.png";
import arrow from "~/media_section/create/arrow-right.svg";
import { Icons } from "@/components/Icons/Icons";
import design from "~/writing/companycontent/design.png";
//list
const companyData1 = [
  {
    title: "name1",
    content: "content1",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/companyName.svg",
  },
  {
    title: "name2",
    content: "content2",
    icon: " https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/companyMission.svg",
  },
  {
    title: "name3",
    content: "content3",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/companyVision.svg",
  },
];
const companyData2 = [
  {
    title: "name4",
    content: "content4",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/newProductIdeas.svg",
  },
  {
    title: "name5",
    content: "content5",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/productName.svg",
  },

  {
    title: "name6",
    content: "content7",
    icon: " https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/productDescription.svg",
  },
];
const companyData3 = [
  {
    title: "name7",
    content: "content8",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/productFeatures.svg",
  },
  {
    title: "name8",
    content: "content9",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/mottoGenerator.svg",
  },
  {
    title: "name9",
    content: "content10",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/interviewQuestion.svg",
  },
];
const companyData4 = [
  {
    title: "name10",
    content: "content11",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/JobDescription.svg",
  },
  {
    title: "name11",
    content: "content12",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/startUpIdeas.svg",
  },
  {
    title: "name12",
    content: "content13",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/marketingPlan.svg",
  },
];
const companyData5 = [
  {
    title: "name13",
    content: "content14",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/businessPlan.svg",
  },
  {
    title: "name14",
    content: "content15",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/testyMonial.svg",
  },
  {
    title: "name15",
    content: "content6",
    icon: "https://use-case-icons.s3.me-south-1.amazonaws.com/newCases/toCharger.svg",
  },
];

const CompanyContent = () => {
  const t = useTranslations("CompanyContent");

  return (
    <div className="flex items-center justify-center flex-col gap-[50px] bg-background_color text-center md:text-left font-poppins overflow-hidden">
      <div className="bg-[url('../../public/writing/companycontent/bckgrnd1.png')] w-full flex items-center bg-cover bg-center	bg-no-repeat justify-center">
        <div className="flex items-center md:items-end justify-center container flex-col lg:flex-row  ">
          <div className="flex items-center md:items-start justify-center flex-col gap-5 my-10 md:my-20 w-5/6">
            <h1 className="font-semibold text-[40px] md:text-[100px] leading-none">
              {t("ccheading1part1")}{" "}
            </h1>
            <h1 className=" text-[10px] md:text-[50px]  leading-none">
              {t("ccheading1part2")}
            </h1>
            <div className="flex items-center justify-between flex-col md:flex-row gap-2">
              <p className="  text-[12px] md:text-[20px] lg:w-2/3 rtl:text-right">
                {t("ccpara1")}
              </p>
              <button
                type="button"
                className="inline-flex items-center px-3 py-1 md:px-6 md:py-3 border-gradient-br-start-button border-solid border-1 rounded-full text-gray-100 text-xs md:text-cc gradient-border-3"
              >
                <div className=" flex items-center justify-center gap-[10px]">
                  <div className="text-white">{t("ccstartbutton")}</div>
                  <Image
                    src={arrow}
                    alt="arrow"
                    width={20}
                    height={20}
                    className="rtl:rotate-180"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container  flex items-center justify-center flex-col relative w-5/6">
        <div className="flex items-center justify-center flex-col lg:flex-row w-5/6 md:gap-5">
          <Image src={image1} alt="art image" className="lg:w-1/2" />
          <div className="  md:items-start items-center flex justify-center flex-col relative">
            <h1 className="font-semibold text-[20px] md:text-[25px] rtl:text-right">
              {t("ccheading2")}
            </h1>
            <p className="  text-[12px] md:text-[20px] rtl:text-right ">
              {t("ccpara2")}
            </p>
            <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute  -top-72 right-0"></div>
          </div>
        </div>
      </div>
      <div className=" w-5/6 bg-[url('../../public/writing/tiktok/bckgrnd2.png')] bg-contain lg:bg-cover container flex items-center justify-center	bg-no-repeat text-center relative pb-20">
        <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute top-0  -right-40"></div>
        <div className="w-[300px] h-[300px] origin-center rounded-full bg-gradient-to-t from-[#ca00fd40] to-[#001aff40] blur-2xl mr-0 absolute bottom-0  -left-40"></div>
        <div className="flex items-center justify-center flex-col  container mt-10 md:w-5/6 gap-10 md:gap-10 ">
          <p className="  text-[16px] md:text-[20px]  ">{t("ccmainheading")}</p>
          {/* <Image src={image2} alt="art image" className="w-full" /> */}
          {/* one row of grid start */}
          <div className="flex items-center justify-center gap-[20px] flex-col ">
            <Image src={design} alt="arrow" className="w-5/6" />
            <div className="flex items-center justify-center gap-[20px] flex-wrap">
              {companyData1.map((item, index) => (
                <div key={index} className="">
                  <div className="flex items-center justify-center md:justify-between gap-[10px] px-3 md:py-[50px] bg-gray-300 hover:bg-white rounded-xl w-[100px] h-[110px]  md:w-[200px] md:h-[60px] flex-col md:flex-row ">
                    <Image
                      src={item.icon}
                      alt="art image"
                      width={40}
                      height={40}
                      className=""
                    />
                    <div className="flex items-start flex-col gap-[10px]">
                      <h1 className="text-[12px] text-black font-bold md:text-left">
                        {t(item.title)}
                      </h1>
                      <p className="text-[9px] text-gray-500 text-left hidden md:block">
                        {t(item.content)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end of one row of grid */}
          {/* one row of grid start */}
          <div className=" hidden lg:flex items-center justify-center gap-[20px] flex-col lg:ml-[200px] ">
            <Image src={design} alt="arrow" className="w-5/6" />
            <div className="flex items-center justify-center gap-[20px]  ">
              {companyData2.map((item, index) => (
                <div key={index} className="">
                  <div className="flex items-center justify-center gap-[10px] px-3 py-[50px] bg-gray-300 hover:bg-white rounded-xl w-[200px] h-[60px]">
                    <Image
                      src={item.icon}
                      alt="art image"
                      width={50}
                      height={50}
                      className=""
                    />
                    <div className="flex items-start flex-col gap-[10px]">
                      <h1 className="text-[12px] text-black font-bold ">
                        {t(item.title)}
                      </h1>
                      <p className="text-[9px] text-gray-500 text-left">
                        {t(item.content)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end of one row of grid */}
          {/* one row of grid start */}
          <div className=" flex items-center justify-center gap-[20px] flex-col">
            <Image src={design} alt="arrow" className="w-5/6" />
            <div className="flex items-center justify-center gap-[20px] flex-wrap">
              {companyData3.map((item, index) => (
                <div key={index} className="">
                  <div className="flex items-center justify-center md:justify-between gap-[10px] px-3 md:py-[50px] bg-gray-300 hover:bg-white rounded-xl w-[100px] h-[110px]  md:w-[200px] md:h-[60px] flex-col md:flex-row ">
                    <Image
                      src={item.icon}
                      alt="art image"
                      width={40}
                      height={40}
                      className=""
                    />
                    <div className="flex items-start flex-col gap-[10px]">
                      <h1 className="text-[12px] text-black font-bold md:text-left">
                        {t(item.title)}
                      </h1>
                      <p className="text-[9px] text-gray-500 text-left hidden md:block">
                        {t(item.content)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end of one row of grid */}
          {/* one row of grid start */}
          <div className="hidden lg:flex items-center justify-center gap-[20px] flex-col lg:ml-[200px] ">
            <Image src={design} alt="design" className="w-5/6" />
            <div className="flex items-center justify-center gap-[20px] ">
              {companyData4.map((item, index) => (
                <div key={index} className="">
                  <div className="flex items-center justify-center gap-[10px] px-3 py-[50px] bg-gray-300 hover:bg-white rounded-xl w-[200px] h-[60px]">
                    <Image
                      src={item.icon}
                      alt="art image"
                      width={50}
                      height={50}
                      className=""
                    />
                    <div className="flex items-start flex-col gap-[10px]">
                      <h1 className="text-[12px] text-black font-bold ">
                        {t(item.title)}
                      </h1>
                      <p className="text-[9px] text-gray-500 text-left">
                        {t(item.content)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end of one row of grid */}
          {/* one row of grid start */}
          <div className="flex items-center justify-center gap-[20px] flex-col ">
            <Image src={design} alt="design" className="w-5/6" />
            <div className="flex items-center justify-center gap-[20px] flex-wrap">
              {companyData5.map((item, index) => (
                <div key={index} className="">
                  <div className="flex items-center justify-center md:justify-between gap-[10px] px-3 md:py-[50px] bg-gray-300 hover:bg-white rounded-xl w-[100px] h-[110px]  md:w-[200px] md:h-[60px] flex-col md:flex-row  ">
                    <Image
                      src={item.icon}
                      alt="art image"
                      width={40}
                      height={40}
                      className=""
                    />
                    <div className="flex items-start flex-col gap-[10px]">
                      <h1 className="text-[12px] text-black font-bold md:text-left">
                        {t(item.title)}
                      </h1>
                      <p className="text-[9px] text-gray-500 text-left hidden md:block">
                        {t(item.content)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end of one row of grid */}
        </div>
      </div>
    </div>
  );
};

export default CompanyContent;
