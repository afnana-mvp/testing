/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import cSharpImage from "~/coding/csharp_tool/csharp_main.png";

import htmlIcon from "~/coding/html/html_icon.png";
import pythonHelp from "~/coding/python_tool/python_help.png";
import htmlCode from "~/coding/html/html_code.png";
import pythonSide from "~/coding/python_tool/python_side.png";
import pythonBackground from "~/coding/python_tool/python_background.png";
const htmlCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50 ">
      <div className="flex items-center justify-center">
        <Image
          src={cSharpImage}
          alt="python image"
          className=" w-full h-auto"
        />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers Html language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={htmlIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          HTML stands for Hypertext Markup Language. It is the standard markup
          language used for creating web pages and applications on the internet.
          HTML uses tags to structure the content and define the elements on a
          webpage, such as headings, paragraphs, images, links, and more. It is
          the backbone of every web page and is essential for creating and
          displaying content on the internet.
        </p>
      </div>

      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate Html Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can be a valuable ally for HTML developers, offering
          assistance in coding, error detection, accessibility, SEO, and even
          content generation, thereby enhancing productivity and code quality in
          web development projects.
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
          src={htmlCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>Code Autocompletion</li>
          <li>Error Detection</li>
          <li>Code Formatting</li>
          <li>Accessibility Checks</li>
          <li>HTML Generation</li>
          <li>Responsive Design</li>
          <li>Content Recommendations</li>
          <li>SEO Optimization</li>
          <li>HTML Templates</li>
          <li>Natural Language Interfaces</li>
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

export default htmlCoding;
