"use client";

import Hero from "@/components/Hero";
import Approaches from "@/components/Approaches";
import { Navbar } from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import { About } from "@/components/About";
import { MyWorks } from "@/components/MyWorks";
import Testimonials from "@/components/Testimonials";



const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <About />
        <MyWorks />
        < Approaches/>
        <Experiences />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

