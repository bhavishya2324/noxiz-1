"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function StreamVideo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
       WWE Bad Blood 2024 Full 10/5/24 October 5th 2024 ⚡
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         The latest WWE Premium Live Event Bad Blood.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/stream1.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
       
          <CardItem
            translateZ={20}

            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
          >
             <Link href="https://link.pocolinks.com/WWE-Badblood2024">Watch Now</Link>

          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
