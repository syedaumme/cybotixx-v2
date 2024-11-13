import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { typewriterWords } from "@/constants";
import React from "react";

const HomePage = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center rounded-lg py-20 items-center md:h-[calc(100vh-64px)] "
    >
      <TypewriterEffectSmooth
        words={typewriterWords}
        className="lg:text-3xl xl:text-5xl md:text-2xl text-lg"
      />
    </section>
  );
};

export default HomePage;
