import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Customer = () => {
  return (
    <div className="container min-h-screen w-full px-4 md:px-10 py-8 md:py-12 bg-white text-black flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-12 lg:gap-24 justify-center items-center">
      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8">
        <h1 className=" relative z-10 text-3xl md:text-4xl lg:text-6xl font-bold leading-tight md:leading-snug  text-center md:text-left">
          Customise it to <br/> your needs
        </h1>
        <Image 
        src="/images/Element.png" // Make sure this path matches your image location
        alt="background"
        width={350}
        height={300}
        className="object-cover hidden md:block mt-20  absolute z-0 opacity-2"
      />
        <p className="text-base md:text-lg font-[400] leading-relaxed text-center md:text-left">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <button className="flex gap-2 px-6 py-3 md:px-8 md:py-4 font-[500] text-base md:text-lg items-center justify-center w-[200px] md:w-[227px] rounded-lg bg-[#4F9CF9] text-white mx-auto md:mx-0 mt-6 md:mt-8">
          Let&#39;s Go <FaArrowRight />
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[45%] lg:w-[526px] aspect-video md:h-[350.45px] bg-[#C4DEfD] border-blue-400 mb-8 md:mb-0">
      </div>
    </div>
  );
};

export default Customer;

