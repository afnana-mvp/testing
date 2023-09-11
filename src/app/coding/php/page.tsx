import React from "react";
import Image from "next/image";
import cssImage from "../../../../public/coding/css/css_main.png";

import phpIcon from "../../../../public/coding/php/php_icon.png";
import pythonHelp from "../../../../public/coding/python_tool/python_help.png";
import phpCode from "../../../../public/coding/php/php_code.png";
import pythonSide from "../../../../public/coding/python_tool/python_side.png";
import pythonBackground from "../../../../public/coding/python_tool/python_background.png";
const CssCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center">
        <Image src={cssImage} alt="python image" className=" w-full h-auto" />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers Php language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={phpIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          PHP (Hypertext Preprocessor) is a popular server-side scripting
          language used for web development. It is primarily used for creating
          dynamic web pages and web applications. Here are some key points about
          PHP
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate Php Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can serve as a valuable aid for PHP developers, offering
          support in coding, code analysis, debugging, documentation generation,
          and more, ultimately enhancing the efficiency and quality of PHP
          development projects.
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
          src={phpCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>Code Autocompletion</li>
          <li>Code Analysis</li>
          <li>Code Generation</li>
          <li>Refactoring Suggestions</li>
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
