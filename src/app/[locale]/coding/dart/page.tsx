import React from "react";
import Image from "next/image";
import pythonImage from "../../../../public/coding/python_tool/python_main.png";

import dartIcon from "../../../../public/coding/dart/dart_icon.png";
import pythonHelp from "../../../../public/coding/python_tool/python_help.png";
import dartCode from "../../../../public/coding/dart/dart_code.png";
import pythonSide from "../../../../public/coding/python_tool/python_side.png";
import pythonBackground from "../../../../public/coding/python_tool/python_background.png";
const CssCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center">
        <Image
          src={pythonImage}
          alt="python image"
          className=" w-full h-auto"
        />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers Dart language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={dartIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          Dart is a programming language developed by Google. It is an
          object-oriented, class-based language that is designed for building
          scalable and high-performance applications. Here are some key features
          and aspects of Dart programming:
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate Dart Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can be a powerful assistant for Dart and Flutter developers,
          offering support in coding, analysis, debugging, documentation
          generation, and more, ultimately enhancing productivity and the
          quality of mobile and web application development.
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
          src={dartCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>Code Autocompletion</li>
          <li>Code Analysis</li>
          <li>Code Generation</li>
          <li>Flutter Widget Suggestions</li>
          <li>Debugging Support</li>
          <li>Natural Language Interfaces</li>
          <li>Code Reviews</li>
          <li>Documentation Generation</li>
          <li>Predictive Analysis</li>
          <li>Testing Automation</li>
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

export default CssCoding;
