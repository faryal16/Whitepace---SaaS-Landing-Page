import ClientSay from "@/components/ClientSay";
import Customer from "@/components/Customer";
import Data from "@/components/Data";
import Extension from "@/components/Extension";
import Favorite from "@/components/Favorite";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Plan from "@/components/Plan";
import Project from "@/components/Project";
import Sponsers from "@/components/Sponsers";
import Tasky from "@/components/Tasky";
import Try from "@/components/Try";
import Work from "@/components/Work";

export default function Home() {
  return (

    <div className="">
      <Header/>
      <HeroSection/>
      <Project />
      <Work />
      <Extension/>
      <Customer/>
      <Plan />
      <Tasky />
      <Data />
      <Sponsers/>
      <Favorite/>
      <ClientSay/>
      <Try/>
      <Footer/>
    </div>
  );
}

