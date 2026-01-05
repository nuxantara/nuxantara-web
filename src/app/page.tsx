import Contact from "@/component/sections/Contact";
import Hero from "@/component/sections/Hero";
import Portfolio from "@/component/sections/Portofolio";
import Progress from "@/component/sections/Progress";
import Services from "@/component/sections/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Progress />
      <Contact />
    </>
  );
}
