import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { BentoGridDemo } from "@/components/global/bento-grid";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPage = () => {
  return (
    <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[150px] flex-col mx-auto px-2">
      <BentoGridDemo />

      <Button className="p-6 mb-4 md:mb-0 text-xl mt-[20px] sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
          <Link href="/services">Our Services</Link>
        </span>
      </Button>
    </div>
  );
};

export default FeaturedPage;
