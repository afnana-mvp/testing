import React from "react";
import Image from "next/image";
import cssImage from "../../../../public/coding/css/css_main.png";

import cssIcon from "../../../../public/coding/css/css_icon.png";
import pythonHelp from "../../../../public/coding/python_tool/python_help.png";
import cssCode from "../../../../public/coding/css/css_code.png";
import pythonSide from "../../../../public/coding/python_tool/python_side.png";
import pythonBackground from "../../../../public/coding/python_tool/python_background.png";
const CssCoding = () => {
  return (
    <div className="bg-background_color w-full -z-50  ">
      <div className="flex items-center justify-center">
        <Image src={cssImage} alt="python image" className=" w-full h-auto" />
        <h1 className="text-white absolute text-center text-xl md:text-3xl ">
          Powerful for developers CSS language by{" "}
          <span className="text-blue">ArabyAi</span>{" "}
        </h1>
      </div>
      <div className="flex items-center container m-auto justify-center max-w-screen-lg mt-20">
        <Image
          src={cssIcon}
          alt="python image"
          className="w-20 h-30 sm:w-100 sm:h-200"
        />
        <p className="text-xs md:text-base">
          CSS stands for Cascading Style Sheets. It is a programming language
          used for styling web pages and defining the layout, colors, fonts, and
          other visual aspects of a website. CSS allows web developers to
          separate the design and presentation of a website from its structure
          and content. It is widely used in conjunction with HTML and JavaScript
          to create visually appealing and responsive web pages.
        </p>
      </div>
      <div>
        <h1 className="flex items-center  justify-center text-xl md:text-3xl text-center my-20">
          How to Generate Css Code by Araby AI
        </h1>
      </div>
      <div className="flex container m-auto flex-col md:flex-row items-center justify-center max-w-screen-lg gap-y-10  ">
        <p className="mx-8 text-xs md:text-base ">
          Araby.AI can enhance CSS development by offering assistance in
          autocompletion, optimization, responsive design, compatibility
          testing, accessibility, and more, helping web developers create
          visually appealing and user-friendly websites efficiently.
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
          src={cssCode}
          alt="python image"
          className="scale-50 h-400px z-10"
        />
        <ul className="list-disc marker:text-white mx-8 text-xs md:text-base ">
          <li>Code Autocompletion</li>
          <li>Responsive Design</li>
          <li>Code Optimization</li>
          <li>Browser Compatibility</li>
          <li>Color Scheme Generation</li>
          <li>Animation and Transition Recommendations</li>
          <li>Code Refactoring</li>
          <li>Accessibility Checks</li>
          <li>Cross-Device Testing</li>
          <li>Real-time Previews</li>
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
