import HoverEffect from "@/components/global/services-hover";
import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { servicesItems } from "@/lib/constants";
import Link from "next/link";

import React from "react";

const ServicesPage = () => {
  return (
    <div className="max-w-6xl flex text-xl text-sm font-sans items-center p-4 mt-[150px] flex-col mx-auto px-8">
      <HoverEffect items={servicesItems} />
      <Button className="p-6 mb-8 md:mb-0 text-xl  sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
          <Link href="/">Back to Home</Link>
        </span>
      </Button>
    </div>
  );
};

export default ServicesPage;
