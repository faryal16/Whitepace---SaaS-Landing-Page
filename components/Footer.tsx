import Image from "next/image";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { RxCaretDown } from "react-icons/rx";

function Footer() {
  return (
    <div className="min-h-[60vh] mx-auto px-4 md:px-4 flex justify-center flex-col text-lg bg-[#043873] text-white">
      <div>
        <ul className="flex flex-col md:flex-row justify-center items-center sm:items-start gap-12 sm:gap-20 lg:gap-36 p-4 md:p-10">
          {/* Logo and Description */}
          <li className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <span>
                <Image
                  src="/images/Logo Icon.png"
                  alt="white logo"
                  className="mt-1 sm:w-[20px] sm:h-[20px] w-8 h-8"
                  width={18}
                  height={18}
                />
              </span>
              <h1 className="font-semibold md:text-xl text-4xl ml-3">whitepace</h1>
            </div>
            <p className="text-base w-[150px] mt-5 text-center sm:text-left">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </li>

          {/* Product Section */}
          <li>
            <ul className="gap-3 flex flex-col mb-7 text-center sm:text-left">
              <li>
                <h1 className="font-semibold text-xl">Product</h1>
              </li>
              <li>
                <p className="text-base text-[#FFE492]">Overview</p>
              </li>
              <li>
                <p className="text-base">Pricing</p>
              </li>
              <li>
                <p className="text-base">Customer stories</p>
              </li>
            </ul>
          </li>

          {/* Resources Section */}
          <li>
            <ul className="gap-3 flex flex-col mb-7 text-center sm:text-left">
              <li>
                <h1 className="font-semibold text-xl">Resources</h1>
              </li>
              <li>
                <p className="text-base">Blog</p>
              </li>
              <li>
                <p className="text-base">Guides & tutorials</p>
              </li>
              <li>
                <p className="text-base">Help center</p>
              </li>
            </ul>
          </li>

          {/* Company Section */}
          <li>
            <ul className="gap-3 flex flex-col mb-7 text-center sm:text-left">
              <li>
                <h1 className="font-semibold text-xl">Company</h1>
              </li>
              <li>
                <p className="text-base">About us</p>
              </li>
              <li>
                <p className="text-base">Careers</p>
              </li>
              <li>
                <p className="text-base">Media Kit</p>
              </li>
            </ul>
          </li>

          {/* Try it Today Section */}
          <li>
            <ul className="gap-2 flex flex-col text-center sm:text-left">
              <li>
                <h1 className="font-bold text-xl">Try it Today</h1>
              </li>
              <li>
                <p className="text-sm w-48">
                  Get started for free. Add your whole team as your needs grow
                </p>
              </li>
              <li>
                <button className="py-3 px-10 mt-4 bg-[#4F9CF9] text-[white] text-center rounded-[8px] w-[150px] flex justify-center md:justify-start">
                  Start Today <GoArrowRight className="my-1 ml-2" />
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <div className="hidden md:block">

        <div className="border-[#2E4E73] w-full border-t-2 "></div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between px-4  md:px-28 py-4">
        <ul className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-x-6 mt-7 text-center md:text-left">
          <li className="flex">
            <span><RxCaretDown className="mt-1" /></span> English
          </li>
          <li>Terms & privacy</li>
          <li>Security</li>
          <li>Status</li>
          <li>&copy; 2021 Whitespace LLC.</li>
        </ul>
        <div className="md:hidden block mt-4">

<div className="border-[#2E4E73] w-full border-t-2 "></div>
</div>
        <div className="flex gap-x-3 items-center justify-center sm:justify-start mt-7">
          <FaFacebookF className="h-[15px] w-[20px]" />
          <FaTwitter className="h-[15px] w-[20px]" />
          <FaLinkedin className="h-[15px] w-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

