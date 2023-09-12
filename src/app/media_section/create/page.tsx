import React from "react";
import rectangle from "../../../../public/media_section/create/Rectangle 30780.png";
import design from "../../../../public/media_section/create/Frame.png";
import group from "../../../../public/media_section/create/Group 48095545.png";
import Image from "next/image";
import image1 from "../../../../public/media_section/create/Rectangle 30781.png";
import image2 from "../../../../public/media_section/create/Rectangle 30782.png";
import image3 from "../../../../public/media_section/create/Rectangle 30783.png";
import image4 from "../../../../public/media_section/create/Group 1000001520 (1).png";
const Create = () => {
  return (
    <div className="bg-background_color w-full -z-50 font-poppins">
      <div className="flex items-center justify-center relative">
        <Image
          src={rectangle}
          alt="python image"
          className=" w-full h-auto z-0"
        />
        <Image
          src={design}
          alt="python image"
          className=" w-full h-auto z-10 absolute"
        />
        <Image
          src={group}
          alt="python image"
          className=" w-8/12 h-auto absolute z-10 mt-36"
        />
        <div className="flex items-center justify-center absolute z-10 flex-col mx-10 top-10 md:top-16 max-w-screen-lg gap-2 md:gap-10 ">
          <h1 className="text-white text-center text-sm  md:text-3xl lg:text-5xl font-bold">
            Bring your Imagination to the Screen <br /> with
            <span className="text-blue"> AI Art Generator</span>
          </h1>
          <h1 className=" text-white text-center text-[8px] md:text-base lg:text-2xl mx-10">
            Transformative technology gives your low-quality visuals a stunning
            HD upgrade. Restore old photos to incredible detail and elevate your
            content to a professional level.
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center container   max-w-screen-lg mx-auto ">
        <h1 className="text-white text-center text-sm md:text-3xl my-10 md:my-28">
          Discover the Endless Possibilities of AI-generated Art
        </h1>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col md:flex-row gap-5">
        <Image
          src={image1}
          alt="python image"
          className="flex-1 h-[200px] w-[200px] md:h-[500px]"
        />
        <div className="flex items-center justify-center max-w-screen-lg mx-10 my-100 flex-col flex-1">
          <h1 className="text-white text-sm md:text-4xl font-bold">
            Experience the Boundless Creativity of AI
          </h1>
          <div className="text-[8px] md:text-2xl font-light">
            Embark on a captivating journey into a compilation of mesmerizing
            AI-generated paintings that push the boundaries of traditional art
            forms. Witness the limitless creative potential of machines,
            challenging our notions of art and igniting a dialogue about
            technology and artistic expression. Prepare to be captivated by the
            intricate details, bold experimentation, and unexpected beauty that
            unfold before your eyes, showcasing the profound impact of AI on the
            artistic landscape.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col md:flex-row gap-5 my-14">
        <div className="flex items-center justify-center max-w-screen-lg mx-10  flex-col flex-1">
          <h1 className="text-white text-sm md:text-4xl font-bold">
            Create Any Kind of Art in Seconds
          </h1>
          <div className="text-[8px] md:text-2xl font-light">
            Unleash your creativity and create captivating art in an instant.
            With just seconds, you can bring masterpieces to life through brush
            strokes, melodies, and color combinations. Express yourself, share
            your vision, and leave a lasting impression with your extraordinary
            art. Seize the opportunity to create something remarkable in a
            blink.
          </div>
        </div>
        <Image
          src={image2}
          alt="python image"
          className="flex-1 h-[200px] w-[200px] md:h-[500px]"
        />
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col md:flex-row gap-5">
        <Image
          src={image3}
          alt="python image"
          className="flex-1 h-[200px] w-[200px] md:h-[500px]"
        />
        <div className="flex items-center justify-center max-w-screen-lg mx-10 my-100 flex-col flex-1">
          <h1 className="text-white text-sm md:text-4xl font-bold">
            Unveiling the Power of AI-Generated Masterpieces
          </h1>
          <div className="text-[8px] md:text-2xl font-light">
            Immerse yourself in a world where artificial intelligence breathes
            vitality into digital canvases, effortlessly merging various
            artistic styles. Uncover a groundbreaking era of creativity, where
            masterpieces generated by AI mesmerize and captivate the
            imagination.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  container  max-w-screen-lg mx-auto my-100 flex-col  gap-10 my-10 md:my-28">
        <h1 className="text-white text-sm md:text-4xl font-bold">
          Images You Can Created
        </h1>
        <Image src={image4} alt="python image" className="  " />
      </div>
    </div>
  );
};

export default Create;
