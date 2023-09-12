import React from "react";
import Image from "next/image";
import javaImage from "~/coding/java_tool/java_main.png";

import javaIcon from "~/coding/java_tool/java_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import javaCode from "~/coding/java_tool/java_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
const JavaCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center">
        <Image src={javaImage} alt="python image" className=" w-full h-auto" />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers Java language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={javaIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          Java is a popular programming language used for developing a wide
          range of applications, including desktop, web, and mobile
          applications. It is known for its platform independence, meaning that
          Java code can run on different operating systems without the need for
          recompilation. Java is also widely used in the development of
          enterprise-level applications and is known for its robustness and
          security features.
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate Java Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can play a significant role in enhancing Java programming by
          offering code assistance, analysis, and optimization. These AI-driven
          tools and techniques aim to improve code quality, developer
          productivity, and the overall performance of Java applications.
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
          src={javaCode}
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

export default JavaCoding;
