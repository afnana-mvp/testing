/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import cSharpImage from "../../../../public/coding/csharp_tool/csharp_main.png";

import cSharpIcon from "../../../../public/coding/csharp_tool/csharp_icon.png";
import pythonHelp from "../../../../public/coding/python_tool/python_help.png";
import cSharpCode from "../../../../public/coding/csharp_tool/csharp_code.png";
import pythonSide from "../../../../public/coding/python_tool/python_side.png";
import pythonBackground from "../../../../public/coding/python_tool/python_background.png";
const CSharpCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50 ">
      <div className="flex items-center justify-center">
        <Image
          src={cSharpImage}
          alt="python image"
          className=" w-full h-auto"
        />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers C# language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={cSharpIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          C# (pronounced "C sharp") is a modern, general-purpose programming
          language developed by Microsoft. It was first introduced in 2000 as
          part of the .NET framework and has since become one of the most widely
          used programming languages.
        </p>
      </div>

      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate C++ Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can be a valuable tool for C# programmers by enhancing
          productivity, code quality, and collaboration while providing
          assistance throughout the development lifecycle. These AI-powered
          capabilities can help developers write cleaner, more efficient, and
          more secure C# code.
        </p>
        <Image className="" src={pythonHelp} alt="python image" height={200} />
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
          src={cSharpCode}
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
  );
};

export default CSharpCoding;
