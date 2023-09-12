import React from "react";
import Image from "next/image";
import pythonImage from "../../../../public/coding/python_tool/python_main.png";
import pythonIcon from "../../../../public/coding/python_tool/python_icon.png";
import pythonHelp from "../../../../public/coding/python_tool/python_help.png";
import pythonCode from "../../../../public/coding/python_tool/python_code.png";
import pythonSide from "../../../../public/coding/python_tool/python_side.png";
import pythonBackground from "../../../../public/coding/python_tool/python_background.png";
const PythonCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center">
        <Image
          src={pythonImage}
          alt="python image"
          className=" w-full h-auto"
        />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers Python language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={pythonIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          Python has a vast ecosystem of third-party libraries and frameworks,
          such as Django, NumPy, Pandas, TensorFlow, and Flask, which extend its
          capabilities and make development faster.
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate Python Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can streamline various aspects of Python programming, from
          code generation and autocompletion to bug detection and code
          optimization. These AI-driven tools and techniques aim to make the
          development process more efficient, reduce errors, and enhance the
          overall quality of Python code.
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
          src={pythonCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>Code Autocompletion</li>
          <li>Code Refactoring</li>
          <li>Bug Detection</li>
          <li>Code Translation</li>
          <li>Code Documentation</li>
          <li>Code Generation</li>
          <li>Automated Testing</li>
          <li>Predictive Analysis</li>
          <li>Natural Language Interfaces</li>
          <li>Code Review Assistance</li>
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

export default PythonCoding;
