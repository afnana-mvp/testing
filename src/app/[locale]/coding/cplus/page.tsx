import React from "react";
import Image from "next/image";
import javaImage from "~/coding/java_tool/java_main.png";

import cplusIcon from "~/coding/cplus_tool/c++_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import cplusCode from "~/coding/cplus_tool/c++_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
const CPlusCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50 ">
      <div className="flex items-center justify-center">
        <Image src={javaImage} alt="python image" className=" w-full h-auto" />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers C++ language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={cplusIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          C++ is a high-level programming language that is widely used for
          developing a variety of applications. It is an extension of the C
          programming language and supports object-oriented programming. C++ is
          known for its efficiency, performance, and flexibility, making it
          suitable for a wide range of applications, including system software,
          game development, and embedded systems.
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate C++ Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can greatly improve your C++ programming by providing code
          support, conducting analysis, and optimizing. These AI-powered tools
          and methods are focused on enhancing code quality, boosting developer
          efficiency, and enhancing the overall performance and security of C++
          applications.
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
          src={cplusCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>Code Autocompletion</li>
          <li>Error Detection and Correction</li>
          <li>Code Generation</li>
          <li>Code Refactoring</li>
          <li>Code Reviews</li>
          <li>Natural Language Procesing(NLP)</li>
          <li>Bug Prediction</li>
          <li>Documentation Generation</li>
          <li>Automated Testing</li>
          <li>Performance Optimization</li>
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

export default CPlusCoding;
