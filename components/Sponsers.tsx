import Image from "next/image";
import React from "react";


function Sponsers() {
  return (
    <div className="sm:h-[50vh] h-[80vh] mb-16 sm:mb-0 flex flex-col gap-16 justify-center items-center  bg-white">
      <h1 className=" relative z-10 font-bold text-5xl">Our Sponsers</h1>
      <Image 
        src="/images/Element.png" // Make sure this path matches your image location
        alt="background"
        width={300}
        height={100}
        className="object-cover w-96  mb-32 ml-60 hidden sm:block absolute z-0 opacity-2"
      />
      <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-24 gap-12">
        
      <div className="ml-12">
          <Image
            src="/images/Apple1.png"
            alt="miscrosft image"
            height={30}
            width={70}
          />
        </div>
        <div>
          <Image
            src="/images/Microsoft.png"
            alt="miscrosft image"
            height={100}
            width={170}
          />
        </div>
        <div className="">
          <Image
            src="/images/Slack.png"
            alt="miscrosft image"
            height={100}
            width={170}
          />
        </div>
        <div className="">
          <Image
            src="/images/Google.png"
            alt="miscrosft image"
            height={90}
            width={130}
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsers;