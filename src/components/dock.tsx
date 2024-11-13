"use client";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import React, { useEffect, useState } from "react";

const Dock = () => {
  const [visible, setVisible] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (mobile)
    setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < scrollY) {
        setVisible(true); // Show dock when scrolling up
      } else {
        setVisible(false); // Hide dock when scrolling down
      }
      setScrollY(currentScrollY);
    };

    // Only add the scroll event listener if the device is mobile
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollY, isMobile]);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="fixed bottom-0 md:p-3 left-0 w-full h-14 md:h-20 flex justify-center items-center "
    >
      <div
        className={cn(
          "border flex justify-start space-x-2 items-center rounded-lg relative bg-white/5 backdrop-blur-md h-full w-full transition-transform duration-300 ease-in-out transform md:w-1/3",
          visible ? "translate-y-0" : "translate-y-full md:translate-y-full"
        )}
      >
        <div className="aspect-square cursor-pointer flex justify-center items-center relative h-full">
          <div className="p-2 rounded-md hover:bg-white/5 bg-white/10">
            <Calendar />
          </div>
          <div className="absolute bottom-0 left-50 bg-green-500 h-0.5 w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Dock;
