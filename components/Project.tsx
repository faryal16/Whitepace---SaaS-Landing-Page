import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const Project = () => {
  return (
    <div className="relative min-h-screen w-full  text-black px-4 md:px-8 lg:px-16 py-10 md:py-16">
      {/* Background decoration - top left */}
      <div className="absolute top-0 left-0  mt-12 w-[150px] h-[150px] md:w-[400px] md:h-[400px] opacity-10 -z-10">
        <Image
          src="/images/Group.png" // Make sure to add your background image to public/images/
          alt="background pattern"
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 max-w-[528px] flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className=" relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 lg:mb-16">
            Project<br/>  Management
          </h1>
          <Image 
        src="/images/Element.png" // Make sure this path matches your image location
        alt="background"
        width={500}
        height={300}
        className="object-cover hidden md:block mt-16  absolute z-0 opacity-2"
      />
          
          <p className="text-base md:text-lg leading-relaxed mb-8 lg:mb-16">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          
          <button className="flex gap-2 px-6 py-3 md:px-8 md:py-4 font-[500] text-base md:text-lg items-center justify-center w-[200px] md:w-[227px] rounded-lg bg-[#4F9CF9] text-white mx-auto md:mx-0 mt-6 md:mt-8">
          
            Get Started <FaArrowRight className="text-sm md:text-base" />
        </button>
        </div>

        {/* Image/Design Element */}
        <div className="w-full lg:w-1/2 max-w-[560px] mt-8 lg:mt-0">
          <div className="relative w-full aspect-[1.6/1] bg-[#C4DEFD] rounded-lg 
            shadow-lg transform hover:scale-105 transition-transform duration-300">
            {/* You can add an image here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
