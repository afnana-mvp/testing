import React from "react";
import Image from "next/image";
import cIcon from "~/coding/c/c_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import cCode from "~/coding/c/c_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
import { useTranslations } from "next-intl";
const CCoding = () => {
  const t = useTranslations("CCoding");
  return (
    <div className="bg-background_color">
      <div className="flex items-center w-full justify-center bg-[url('../../public/coding/c/deepLearning_background.png')]  bg-cover bg-center	bg-no-repeat h-[90vh]">
        <h1 className="text-white text-center text-xl md:text-3xl font-semibold">
          Powerful for &#123; developers &#125; C <br />
          language by <span className="araby_ai">ArabyAi</span>
        </h1>
      </div>
      <div className="container mx-auto md:px-32">
        <div className="flex items-center m-auto justify-center gap-10 my-10">
          <Image src={cIcon} alt="python image" width={120} />
          <p className="text-xs md:text-base basis-9/12	">
            Certainly! Here is some information about the C programming
            language: C is a general-purpose programming language that was
            developed in the early 1970s by Dennis Ritchie at Bell Labs. It is a
            low-level language that provides a high degree of control over
            hardware and memory, making it suitable for system programming and
            developing efficient applications.
          </p>
        </div>
        <div>
          <h1 className="text-center text-xl md:text-3xl font-bold my-20">
            How to Generate C Code by <span className="araby_ai">Araby AI</span>
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-row items-center justify-center gap-y-10  ">
          <p className="mx-8 text-xs md:text-base basis-2/4	">
            Araby.AI can be a valuable assistant for C programmers by automating
            repetitive tasks, enhancing code quality, and providing intelligent
            suggestions and insights throughout the software development
            process.
          </p>
          <div className="w-96 h-40 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]">
            <div className="flex h-full w-full items-center justify-center bg-gray-800 back rounded-md">
              hel
            </div>
          </div>
          {/* <Image className="" src={pythonHelp} alt="python image" height={200} /> */}
        </div>
        <div className=" flex items-center justify-center relative w-full h-full ">
          <div className="absolute  w-full  mt-12">
            <Image
              className="m-auto"
              src={pythonBackground}
              alt="python image"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg relative  ">
          <Image
            src={cCode}
            alt="python image"
            className="scale-50 h-400px z-10"
          />
          <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
            <li>Code Generation and Autocompletion</li>
            <li>Code Refactoring</li>
            <li>Bug Detection and Error Handling</li>
            <li>Code Documentation</li>
            <li>Code Review and Collaboration</li>
            <li>Predictive Analysis</li>
            <li>Natural Language Interfaces</li>
            <li>Testing Automation</li>
            <li>Code Translation and Migration</li>
            <li>Personalized Learning</li>
          </ul>
          <Image
            src={pythonSide}
            alt="python image"
            className="scale-50 h-400px absolute top-36 left-full invisible md:visible"
          />
        </div>
      </div>
    </div>
  );
};

export default CCoding;
