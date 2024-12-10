import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Plan() {
  return (
    <div className=" h-[140vh] flex flex-col  gap-10 items-center bg-white">
      <div className="flex flex-col items-center justify-center gap-3 ">
        <h1 className=" relative z-10 sm:text-5xl text-3xl font-bold text-[#212529]">Choose Your Plan</h1>
        <Image 
        src="/images/Element.png" // Make sure this path matches your image location
        alt="background"
        width={250}
        height={300}
        className="object-cover ml-64 mb-8 hidden sm:block  absolute z-0 opacity-2"
      />
        <p className="text-[#212529] text-base w-[90%] text-center">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="grid grid-cols-3  h-[900px] items-center justify-between gap-x-10 ">
        <div className="bg-white col-span-1 h-[480px] flex-col sm:flex hidden w-[320px] shadow-2xl rounded-md gap-4  border border-[#FFE492] p-10">
          <div className=" flex flex-col gap-4">
            <h1 className="text-xl font-bold">Free</h1>
            <h1 className="text-4xl font-bold">$0</h1>
            <p className="text-xs">Capture ideas and find them quickly</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#212529] items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Sync unlimited devices
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                10 GB monthly uploads
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                200 MB max. note size
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
           <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Customize Home dashboard and access extra <br />
                widgets
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
            <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Connect primary Google Calendar account
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
           <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Add due dates, reminders, and notifications to <br /> your tasks
              </span>
            </p>
          </div>
          <div className="">
            <button className="px-4 py-3 border border-[#FFE492] rounded-lg mt-3 shadow">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-[#043873] col-span-1 h-[560px]  flex-col flex sm:w-[360px] w-[270px] items-center ml-4 shadow-2xl gap-7 text-white  rounded-md p-8">
        <div className=" flex flex-col gap-6">
            <h1 className="text-xl font-bold">Personal</h1>
            <h1 className="sm:text-4xl text-2xl font-bold text-[#FFE492]">$11.99</h1>
            <p className="text-xs">Keep home and family on track</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <p className=" items-center whitespace-nowrap flex ">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Sync unlimited devices
              </span>
            </p>
            <p className=" items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                10 GB monthly uploads
              </span>
            </p>
            <p className=" items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                200 MB max. note size
              </span>
            </p>
            <p className=" items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Customize Home dashboard and access extra <br/>widgets
              </span>
            </p>
            <p className=" items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Connect primary Google Calendar account
              </span>
            </p>
            <p className=" items-center whitespace-nowrap flex">
              <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Add due dates, reminders, and notifications to <br/> your tasks
              </span>
            </p>
          </div>
          <div className="">
            <button className="px-6 py-3  bg-[#4F9CF9] rounded-lg mt-3 shadow">Get Started</button>
          </div>

        </div>
        <div className="bg-white col-span-1 h-[480px] flex-col sm:flex hidden w-[320px] shadow-2xl rounded-md ml-10 gap-4 border border-[#FFE492] p-10 ">
          <div className=" flex flex-col gap-4">
            <h1 className="text-xl font-bold">Organization</h1>
            <h1 className="text-4xl font-bold">$49.99</h1>
            <p className="text-xs">Capture ideas and find them quickly</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#212529] items-center whitespace-nowrap flex">
            <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Sync unlimited devices
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
              <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                10 GB monthly uploads
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
              <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                200 MB max. note size
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
              <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Customize Home dashboard and access extra <br />
                widgets
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Connect primary Google Calendar account
              </span>
            </p>
            <p className="text-[#212529] items-center whitespace-nowrap flex">
             <IoMdCheckmarkCircleOutline size={18} />
              <span className="text-[10px] mt-0 ml-4">
                {" "}
                Add due dates, reminders, and notifications to <br /> your tasks
              </span>
            </p>
          </div>
          <div className="">
            <button className="px-4 py-3 border border-[#FFE492] rounded-lg mt-3 shadow">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;