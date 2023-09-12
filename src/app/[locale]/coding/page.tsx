import React from "react";
import Image from "next/image";
<<<<<<<< HEAD:src/app/coding/python/page.tsx
import pythonImage from "../../../../public/coding/python_tool/python_main.png";
import pythonIcon from "../../../../public/coding/python_tool/python_icon.png";
import pythonHelp from "../../../../public/coding/python_tool/python_help.png";
import pythonCode from "../../../../public/coding/python_tool/python_code.png";
import pythonSide from "../../../../public/coding/python_tool/python_side.png";
import pythonBackground from "../../../../public/coding/python_tool/python_background.png";
const PythonCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center container">
        <Image
          src={pythonImage}
          alt="python image"
          className=" w-full h-auto"
        />
        <h1 className="text-white absolute text-center text-xl md:text-5xl ">
          Powerful for developers Python language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20 gap-10">
        <Image
          src={pythonIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200 flex-1"
        />
========
import pythonImage from "../../../../public/python_tool/python_main.png";
import pythonIcon from "../../../../public/python_tool/python_icon.png";
import pythonHelp from "../../../../public/python_tool/python_help.png";
import pythonCode from "../../../../public/python_tool/python_code.png";
import { useTranslations } from "next-intl";

const Coding = () => {
  const t = useTranslations("Index");
  return (
    <div className="bg-background_color w-full  ">
      <div className="flex items-center justify-center">
        <Image src={pythonImage} alt="python image" className="relative w-full h-auto" />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          {t("Hello")} Powerful for developers Python language by <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image src={pythonIcon} alt="python image" className="w-20 h-30 sm:w-100 sm:h-200" />
>>>>>>>> e8f58eabb9a5e0923d4498271bedecbb5b714f5b:src/app/[locale]/coding/page.tsx
        <p className="text-xs md:text-base">
          Python has a vast ecosystem of third-party libraries and frameworks, such as Django, NumPy, Pandas, TensorFlow, and Flask, which extend its capabilities and make development faster.
        </p>
      </div>
      <div>
<<<<<<<< HEAD:src/app/coding/python/page.tsx
        <h1 className="flex items-center container justify-center text-xl md:text-5xl text-center my-20">
          How to Generate Python Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-2xl ">
          Araby.AI can streamline various aspects of Python programming, from
          code generation and autocompletion to bug detection and code
          optimization. These AI-driven tools and techniques aim to make the
          development process more efficient, reduce errors, and enhance the
          overall quality of Python code.
========
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">How to Generate Python Code by Araby AI</h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can streamline various aspects of Python programming, from code generation and autocompletion to bug detection and code optimization. These AI-driven tools and techniques aim to
          make the development process more efficient, reduce errors, and enhance the overall quality of Python code.
>>>>>>>> e8f58eabb9a5e0923d4498271bedecbb5b714f5b:src/app/[locale]/coding/page.tsx
        </p>
        <Image className="h-[400px]" src={pythonHelp} alt="python image" />
      </div>
<<<<<<<< HEAD:src/app/coding/python/page.tsx
      <div className=" flex items-center justify-center relative w-full h-full container">
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
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-2xl ">
========
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg  ">
        <Image src={pythonCode} alt="python image" className="scale-50 h-400px" />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base">
>>>>>>>> e8f58eabb9a5e0923d4498271bedecbb5b714f5b:src/app/[locale]/coding/page.tsx
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
