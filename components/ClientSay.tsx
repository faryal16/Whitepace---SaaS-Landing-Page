import Image from "next/image";
import React from "react";

function ClientSay() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[100vh]">
      <h1 className=" relative z-10 sm:text-5xl text-4xl block sm:hidden md:block font-bold">What our Client Says

        </h1>
      <Image 
        src="/images/Element.png" // Make sure this path matches your image location
        alt="background"
        width={300}
        height={300}
        className="object-cover lg:mb-[400px] mb-[320px]  ml-96 hidden sm:block absolute z-0 opacity-1"
        />
      <h1 className="text-5xl hidden sm:block md:hidden font-bold">See What our trusted users Say</h1>
      <div className="grid items-center grid-cols-3 px-10 gap-x-12 mt-6">
        <div className="col-span-1 flex flex-col  shadow-md sm:w-[300px] w-[250px] sm:h-[300px] h-[250px] bg-white  sm:px-5 sm:py-4 gap-6">
          <div className="flex flex-col gap-5 px-4 py-2 border-b border-[#212529] h-[150px] sm:w-[270px] w-[170px]">
            <div className="flex items-start ">
              <Image
                src="/images/Vector.png"
                alt="Vector Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/Vector.png"
                alt="Vector Image"
                width={20}
                height={20}
                className="ml-2"
              />
            </div>
            <p className="sm:text-base text-sm">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex items-center  justify-center gap-8 ">
            <Image
              src="/images/Avater2.png"
              alt="Image of people"
              width={95}
              height={95}
              className="rounded-full"
            />
            <div className="flex flex-col items-center justify-center text-[#212529] gap-2">
              <h1 className="text-[16px] font-bold ">Oberon Shaw, MCH</h1>
              <p className="text-base ">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:flex hidden flex-col shadow-md w-[300px] h-[300px] bg-[#4F9CF9] px-5 py-4 gap-6">
        <div className="flex flex-col gap-5 px-4 py-2 border-b border-white h-[150px] w-[270px] text-white">
            <div className="flex items-start ">
              <Image
                src="/images/Vector.png"
                alt="Vector Image"
                width={20}
                height={20}
                className="filter brightness-0 invert "
              />
              <Image
                src="/images/Vector.png"
                alt="Vector Image"
                width={20}
                height={20}
                className="ml-2 filter brightness-0 invert "
              />
            </div>
            <p className="text-base">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 ">
            <Image
              src="/images/Avater1.png"
              alt="Image of people"
              width={95}
              height={95}
              className="rounded-full "
            />
            <div className="flex flex-col items-center justify-center text-[#212529] gap-2">
              <h1 className="text-[16px] font-bold  text-[#043873]">Oberon Shaw, MCH</h1>
              <p className="text-base text-white ">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:flex hidden flex-col shadow-md w-[300px] h-[300px] bg-[#4F9CF9]  px-5 py-4 gap-6">
        <div className="flex flex-col gap-5 px-4 py-2 border-b border-white h-[150px] w-[270px] text-white">
            <div className="flex items-start ">
              <Image
                src="/images/Vector.png"
                alt="Vector Image"
                width={20}
                height={20}
                className="filter brightness-0 invert "
              />
              <Image
                src="/images/Vector.png"
                alt="Vector Image"
                width={20}
                height={20}
                className="ml-2 filter brightness-0 invert "
              />
            </div>
            <p className="text-base">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 ">
            <Image
              src="/images/Avater.png"
              alt="Image of people"
              width={95}
              height={95}
              className="rounded-full "
            />
            <div className="flex flex-col items-center justify-center text-[#212529] gap-2">
              <h1 className="text-[16px] font-bold  text-[#043873]">Oberon Shaw, MCH</h1>
              <p className="text-base text-white ">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-1">
        <span className="w-2 h-2 rounded-full bg-[#4F9CF9]"></span>
        <span className="w-2 h-2 rounded-full bg-[#043873]"></span>
        <span className="w-2 h-2 rounded-full bg-[#4F9CF9]"></span>
      </div>
    </div>
  );
}

export default ClientSay;