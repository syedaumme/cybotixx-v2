import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { typewriterWords } from "@/constants";
import React from "react";

const HomePage = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center rounded-lg h-screen items-center"
    >
      <div className="h-1/2">
        <TypewriterEffectSmooth
          words={typewriterWords}
          className="text-3xl text-wrap md:text-5xl"
        />
      </div>
    </section>
  );
};

export default HomePage;
