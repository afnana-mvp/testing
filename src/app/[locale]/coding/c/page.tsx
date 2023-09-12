import React from "react";
import Image from "next/image";
import cImage from "~/coding/c/c_main.png";
<<<<<<< HEAD
import cIcon from "~/coding/c/c_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import cCode from "~/coding/c/c_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";

=======

import cIcon from "~/coding/c/c_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import cCode from "~/coding/c/c_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
>>>>>>> d2b3dafd83dca949ceef8c08ad58eacb0e3b79ac
const CCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50 ">
      <div className="flex items-center justify-center">
        <Image src={cImage} alt="python image" className=" w-full h-auto" />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers C language by <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image src={cIcon} alt="python image" className="w-20 h-30 sm:w-100 sm:h-200" />
        <p className="text-xs md:text-base">
          Certainly! Here is some information about the C programming language: C is a general-purpose programming language that was developed in the early 1970s by Dennis Ritchie at Bell Labs. It is
          a low-level language that provides a high degree of control over hardware and memory, making it suitable for system programming and developing efficient applications.
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">How to Generate C Code by Araby AI</h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can be a valuable assistant for C programmers by automating repetitive tasks, enhancing code quality, and providing intelligent suggestions and insights throughout the software
          development process.
        </p>
        <Image className="" src={pythonHelp} alt="python image" height={200} />
      </div>
      <div className=" flex items-center justify-center relative w-full h-full ">
        <div className="absolute  w-full  mt-12">
          <Image className="m-auto" src={pythonBackground} alt="python image" width={500} height={500} />
        </div>
      </div>

      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg relative  ">
        <Image src={cCode} alt="python image" className="scale-50 h-400px z-10" />
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
        <Image src={pythonSide} alt="python image" className="scale-50 h-400px absolute top-36 left-full invisible md:visible" />
      </div>
    </div>
  );
};

export default CCoding;
