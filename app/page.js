"use client";

import Hero from "@/components/Hero";
import Approaches from "@/components/Approaches";
import { Navbar } from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutMe";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-gray-custom">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <AboutSection />
        <Projects />
        < Approaches/>
        <Experiences />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

