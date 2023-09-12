import React from "react";
import Image from "next/image";
import rubyImage from "../../../../public/coding/ruby/ruby_main.png";
import rubyIcon from "../../../../public/coding/ruby/ruby_icon.png";
import pythonHelp from "../../../../public/coding/python_tool/python_help.png";
import rubyCode from "../../../../public/coding/ruby/ruby_code.png";
import pythonSide from "../../../../public/coding/python_tool/python_side.png";
import pythonBackground from "../../../../public/coding/python_tool/python_background.png";
const PythonCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center">
        <Image src={rubyImage} alt="python image" className=" w-full h-auto" />
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={rubyIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          Ruby is a dynamic, object-oriented programming language known for its
          simplicity and productivity. It was created in the mid-1990s by
          Yukihiro Matsumoto, also known as Matz. Here are some key points about
          Ruby:
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate Ruby Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.Ai can be a valuable assistant for Ruby programmers, offering
          support in coding, code analysis, debugging, documentation generation,
          and more, ultimately enhancing the efficiency and quality of Ruby
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
          src={rubyCode}
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

export default PythonCoding;
