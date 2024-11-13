"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import { Separator } from "./ui/separator";

type HeaderSectionType = {
  heading: string;
  url: string;
  subHeading: string;
};

const PageHeader = () => {
  const pathname = usePathname();

  const headerSection: HeaderSectionType[] = [
    {
      heading: "Events",
      url: "/events",
      subHeading: "Explore Our Events",
    },
    {
      heading: "Gallery",
      url: "/gallery",
      subHeading: "Snapshots Of Inspirations",
    },
    {
      heading: "Members",
      url: "/members",
      subHeading: "Our Team",
    },
  ];

  return (
    <div className="p-2 text-center">
      {headerSection.map((item) => {
        const isActive = pathname.includes(item.url);

        return (
          <div
            key={item.url}
            className={cn("hidden flex-col gap-1", isActive && "flex")}
          >
            <h1 className="md:text-4xl font-semibold md:font-bold text-3xl">
              {item.heading}
            </h1>
            <p className="text-gray-300 text-xs md:text-sm">
              {item.subHeading}
            </p>
          </div>
        );
      })}
      <Separator className="mt-5 w-full" />
    </div>
  );
};

export default PageHeader;
