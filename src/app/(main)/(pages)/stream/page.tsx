import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { BentoGridDemo } from "@/components/global/bento-grid";
import { StreamVideo } from "@/components/global/Stream-vid";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const StreamPage = () => {
  return (
    <div className="max-w-3xl flex text-xl text-sm font-sans items-center  mt-[150px] flex-col mx-auto px-2">
     <StreamVideo />
    
    </div>
  );
};

export default StreamPage;
