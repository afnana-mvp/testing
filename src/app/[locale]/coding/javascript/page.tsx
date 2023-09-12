import React from "react";
import Image from "next/image";
import jsImage from "../../../../public/coding/javascript_tool/js_main.png";
import jsIcon from "../../../../public/coding/javascript_tool/js_icon.png";
import pythonHelp from "../../../../public/coding/python_tool/python_help.png";
import jsCode from "../../../../public/coding/javascript_tool/js_code.png";
import pythonSide from "../../../../public/coding/python_tool/python_side.png";
import pythonBackground from "../../../../public/coding/python_tool/python_background.png";
const JSCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center">
        <Image src={jsImage} alt="python image" className=" w-full h-auto" />
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={jsIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          JavaScript is a programming language commonly used for creating
          interactive and dynamic web content. It is primarily used for
          client-side scripting, allowing developers to add functionality to
          websites and web applications. JavaScript can also be used for
          server-side development with the help of frameworks like Node.js. It
          is a versatile language that is widely supported by web browsers and
          has a large ecosystem of libraries and frameworks.
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate JavaScript Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can play a significant role in enhancing JavaScript
          programming by offering code assistance, analysis, and optimization.
          These AI-driven tools and techniques aim to improve code quality,
          developer productivity, and the overall performance of JavaScript
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
          src={jsCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>Code Autocompletion</li>
          <li> Code Analysis and Error Detection</li>
          <li>Code Refactoring</li>
          <li>Natural Language Interfaces</li>
          <li>Automated Testing</li>
          <li>Code Generation</li>
          <li>Performance Optimization</li>
          <li>Predictive Analysis</li>
          <li>Code Documentation</li>
          <li>Accessibility Tools</li>
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

export default JSCoding;
