import React from "react";
import email from "~/writing/email/email.png";
import emailar from "~/writing/email/emailar.png";
import email1 from "~/writing/email/email2.png";
import email2 from "~/writing/email/email3.png";
import email3 from "~/writing/email/email4.png";

import { useTranslations } from "next-intl";
import { Icons } from "@/components/Icons/Icons";
import Image from "next/image";

const Email = () => {
  const t = useTranslations("Emails");
  return (
    <main className="bg-[#111828] h-full">
      <section className="bg-[url('../../public/writing/email/emailban.png')] h-[50vh] bg-center md:h-[90vh] bg-no-repeat bg-cover">
        <div className="flex items-center justify-center h-3/5	flex-col text-center container mx-auto">
          <h1 className="text-2xl mx-2 md:mx-0 md:text-5xl font-semibold">
            {t("emailheading1part1")}
            <br />
            {t("emailheading1part2")}
          </h1>
          <button className="my-4 inline-flex gap-2 items-center py-1 px-4 border-gradient-br-start-button border-solid border-1 rounded-full text-gray-100 text-sm gradient-border-3">
            {t("emailfreebutton")} <Icons.GetStartedEmail className="w-5 rtl:rotate-180" />
          </button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <h2 className="text-base mx-10 md:mx-0 md:text-2xl text-center my-10">{t("emailmainheading")}</h2>
      </section>
      <section className="flex items-center flex-col md:flex-row container mx-auto h-[500px] relative ">
        <div className="basis-1/2 ">
          <Image src={email1} alt="email with computer" className="hidden ltr:block w-full h-[200px] md:h-[400px] object-contain" />
          <Image src={emailar} alt="email with computer" className="hidden rtl:block w-full h-[200px] md:h-[400px] object-contain" />
        </div>
        <div className="md:basis-1/2 ">
          <h2 className="text-center text-xl md:text-3xl font-light leading-8 md:leading-relaxed	md:my-10 rtl:md:text-right ltr:md:text-left relative z-10">
            {t("emailpara1")}
            <br />
            {t("emailpara1_2")} <br />
            {t("emailpara1_3")}
            <br />
            {t("emailpara1_4")}
            <br />
            {t("emailpara1_5")}
            <br />
          </h2>
        </div>
        <div className="hidden md:block bg-gradient-to-t from-purple-900 via-blue-500 to-blue-600 absolute w-[35rem] h-[35rem] blur-3xl rounded-full rtl:left-0 ltr:right-0" />
      </section>
      <section className="max-w-6xl mx-auto">
        <h3 className="mx-8 md:mx-0 text-sm md:text-lg leading-7 text-center md:my-10 relative z-10">{t("emailpara2")}</h3>
      </section>
      <section className="flex items-center container flex-col md:flex-row mx-auto justify-between relative">
        <div className="relative z-10 basis-1/2">
          <Image src={email2} alt="email with computer" width={600} className="rtl:scale-x-[-1] w-96 md:[600px]" />
        </div>
        <div className="md:basis-1/2">
          <Image src={email} alt="email with computer" width={600} className="hidden md:block w-96 md:[600px] absolute z-0 top-1/4" />
          <ul className="list-disc text-lg md:text-2xl font-normalmarker:text-white relative z-10">
            <h4 className="text-xl md:text-3xl font-light !leading-relaxed my-3">
              {t("emailheading2")} <br /> {t("emailheading2_1")}
            </h4>
            <li>{t("email2list1")}</li>
            <li>{t("email2list2")}</li>
            <li>{t("email2list3")}</li>
            <li>{t("email2list4")}</li>
            <li>{t("email2list5")}</li>
            <li>{t("email2list6")}</li>
          </ul>
        </div>
        <div className="hidden md:block bg-gradient-to-t from-purple-800 via-blue-500 to-blue-600 absolute w-[35rem] h-[35rem] blur-3xl rounded-full rtl:-right-60 ltr:-left-60" />
      </section>
      <section className="max-w-6xl mx-auto">
        <h2 className="text-sm mx-8 md:mx-0 md:text-lg leading-7 text-center my-10 relative z-10">{t("emailpara3")}</h2>
      </section>
      <section className="flex justify-center items-center py-10 mx-5 md:mx-0">
        <div className="bg-[#FFFFFF2B] rounded-3xl p-5 shadow-sm ">
          <Image src={email3} alt="reference image from araby ai website" width={700} className=" mx-auto" />
        </div>
      </section>
    </main>
  );
};

export default Email;
