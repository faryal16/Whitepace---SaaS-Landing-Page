import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Work = () => {
  return (
    <div className="container min-h-screen bg-white text-black px-4 py-8 md:py-0">
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8 md:gap-12 lg:gap-24">
        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8 text-center md:text-left">
          <h1 className=" relative z-10 text-3xl md:text-6xl  font-bold leading-tight">
            Work together
          </h1>
          <Image 
        src="/images/Element.png" // Make sure this path matches your image location
        alt="background"
        width={280}
        height={200}
        className="object-cover hidden md:block mt-8 ml-40  absolute z-0 opacity-2"
      />
          <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-[562px]">
            With whitepace, share your notes with your colleagues and collaborate
            on them. You can also publish a note to the internet and share the URL
            with others.
          </p>
          <button className="flex gap-2 items-center justify-center mx-auto md:mx-0 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium rounded-lg text-white bg-[#4F9CF9] hover:bg-[#4589e0] transition-colors duration-300">
            Try it now
            <FaArrowRight className="text-sm md:text-base" />
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image 
            src='/images/WorkTo.png' 
            alt='app image' 
            width={400} 
            height={400}
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto transition-all duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
