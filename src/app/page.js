import Image from "next/image";
import Testimonial from "@/app/components/Testimonial";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";
import BackToTopBtn from "@/app/components/BackToTopBtn";
import Cars from "@/app/components/Cars";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Why from "@/app/components/Why";
// 16 57
export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
      <div className="h-[4000px]"></div>
    </main>
  );
}
