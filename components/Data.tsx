import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Data = () => {
  return (
    <div className="min-h-screen w-full  px-4  bg-white text-black flex flex-col-reverse md:flex-row justify-center md:gap-8  items-center">
      {/* Text Content Section */}
      <div className="w-full max-w-[528px]  flex flex-col justify-center items-center md:items-start md:ml-16 ml-2  mt-8 md:mt-0">
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight text-center md:text-left mb-6 md:mb-16">
          100% your data
        </h1>
        <Image 
        src="/images/Element.png" // Make sure this path matches your image location
        alt="background"
        width={400}
        height={300}
        className="object-cover lg:mb-60 mb-72  lg:ml-60 md:ml-24 hidden md:block  absolute z-0 opacity-2"
      />
        <p className="text-base sm:text-lg leading-relaxed text-center md:text-left ml-0 mb-8 md:mb-16">
          The app is open source and your notes are saved to an open format, so
          you&#39;ll always have access to them. Uses End-To-End Encryption (E2EE)
          to secure your notes and ensure no-one but yourself can access them.
        </p>
        <button className="flex gap-2 px-6 py-3 md:px-[20px] md:py-[20px] text-base sm:text-lg font-medium items-center justify-center w-[200px] md:w-[227px] rounded-lg bg-[#4F9CF9] text-white hover:bg-[#4589e0] transition-colors">
          Read More <FaArrowRight />
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center items-center">
        <Image 
          src='/images/Data.png' 
          alt='app image' 
          width={400} 
          height={400}
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px]  h-auto transition-all duration-300"
          priority
        />
      </div>
    </div>
  );
};

export default Data;
