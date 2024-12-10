import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative  bg-[#043873] text-white">
      <Image 
        src="/images/vector1.png" // Make sure this path matches your image location
        alt="background"
        fill
        className="object-cover  absolute z-0 opacity-5"
      />
      
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16 py-10 gap-8 lg:gap-16">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 md:gap-8 lg:gap-16">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold leading-tight text-center lg:text-left max-w-[562px]">
            Get More Done with whitepace
          </h1>
          
          <p className="text-base md:text-lg lg:text-[18px] leading-relaxed text-center lg:text-left max-w-[562px]">
            Project management software that enables your teams to collaborate, 
            plan, analyze and manage everyday tasks
          </p>
          
          <button className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 
            text-base md:text-lg bg-[#4F9CF9] rounded-lg hover:bg-[#3d7bc7] transition-colors
            ">
            Try Whitepace free <FaArrowRight className="text-sm md:text-base" />
          </button>
        </div>

        {/* Image Section */}
<div className="w-[70%] md:w-[526px] h-[250px] md:h-[350.45px] lg:h-[400px] 
     bg-[#C4DEFD] rounded-lg shadow-lg overflow-hidden">
  
</div>

      </div>
    </div>
  );
};

export default HeroSection;
