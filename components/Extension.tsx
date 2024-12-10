import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Extension = () => {
    return (
        <div className="h-[90vh] w-full bg-[#043873] text-white px-4 py-16  items-center">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2 text-center md:text-left">
              <h1 className=" relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Use as Extension
              </h1>
              <Image 
        src="/images/Element.png" // Make sure this path matches your image location
        alt="background"
        width={300}
        height={300}
        className="object-cover hidden md:block mt-6 ml-48  absolute z-0 opacity-2"
      />
              <p className="text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-[562px] mx-auto md:mx-0">
                Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
              </p>
              <button className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium rounded-lg bg-[#4F9CF9] w-[200px] md:w-[227px] mx-auto md:mx-0 hover:bg-[#437fd8] transition-colors">
                Let&#39;s Go <FaArrowRight />
              </button>
            </div>

            {/* Image Container */}
            <div className="w-[90%] md:w-[426px] h-[180px] sm:h-[200px] md:h-[250px] bg-[#C4DEFD] border-blue-400 mt-8 md:mt-0 mx-auto md:mx-0">
            </div>
          </div>
        </div>
    );
};

export default Extension;

