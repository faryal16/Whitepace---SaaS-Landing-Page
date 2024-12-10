import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Tasky = () => {
  return (
    <div className="w-full h-[70vh] bg-[#043873] text-white flex justify-center items-center px-4 md:px-8 lg:px-16 py-12">
      
      
      <div className="flex relative flex-col sm:items-center items-start max-w-[1064px]">
       
      <Image 
        src="/images/Group1.png" // Make sure this path matches your image location
        alt="background"
        width={400}
        height={400}
        className=" mr-[750px] mt-[-200px]  absolute z-0 opacity-5"
      />
        <div className="relative mb-8 md:mb-16 ">
          <h1 className="z-10 relative text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight md:leading-tight lg:leading-tight mb-4">
            Your work, everywhere you are
          </h1>
          <Image 
        src="/images/Element1.png" // Make sure this path matches your image location
        alt="background"
        width={250}
        height={300}
        className="object-cover -mt-10 hidden md:block lg:ml-[450px] ml-[350px] absolute z-0 opacity-1"
        />
          
        </div>

        <p className="text-sm md:text-base lg:text-lg sm:text-center text-left mb-8 md:mb-16 lg:mb-24">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>

        <button className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium rounded-lg bg-[#4F9CF9] hover:bg-[#3d7bc7] transition-colors duration-300">
          Try Taskey <FaArrowRight className="text-sm md:text-base" />
        </button>
      </div>
    </div>
  );
};

export default Tasky;

