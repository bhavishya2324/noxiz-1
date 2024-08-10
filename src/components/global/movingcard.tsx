"use client"

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

 
export function AppleCardsCarouselDemo() {
  const cards = data3.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

return (
  <>
  <div className="w-full h-full pt-[-20px] pb-12">
<h2 className="max-w-7xl text-center pl-2 mx-auto text-m md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 ">
Start, grow, and scale any business with a top-rated digital marketing agency ⚡
</h2>
<Carousel items={cards} />
</div>



  </>
)


}








export const DummyContent = () => {
  return (
    <>
     
          <div
           
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Increase brand awareness with social media marketing.
              </span>{" "}
              We help businesses find the right customers!
            </p>
            <Image
              src="/social-mediamarketing.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
      
    </>
  );
};





export const DummyContent1 = () => {
  return (
    <>
     
          <div
           
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Meta: Connecting with a Broad Audience
              </span>{" "}
             Meta (Facebook and Instagram) Ads offer a powerful way to engage your audience through visually appealing and interactive content. 
            </p>
            <Image
              src="/ads1.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
      
    </>
  );
};



export const DummyContent2 = () => {
  return (
    <>
     
          <div
           
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Generate leads and drive revenue with paid advertising.
              </span>{" "}
        Paid advertisements, especially on platforms like Google and Meta, provide instant visibility for your brand.
            </p>
            <Image
              src="/brand-grow.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
      
    </>
  );
};



export const DummyContent3 = () => {
  return (
    <>
     
          <div
           
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Get a amazing website and verified your business on Internet
              </span>{" "}
              We'll help you to make an huge impact to the clients by providing you an  amazing website that get clients attention.
            </p>
            <Image
              src="/website1.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
      
    </>
  );
};





export const DummyContent4 = () => {
  return (
    <>
     
          <div
           
            className="bg-[#F5F5F7]  dark:bg-neutral-800 p-4 md:p-14 rounded-3xl mb-2"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Grow and Boost your with a Website
              </span>{" "}
         Website that Helps you create an efficient sales funnel for your business!
            </p>
            <Image
              src="/website2.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
      
    </>
  );
};





export const data3 = [
  {
    category: "Social Media",
    title: "Social media marketing.",
    src:  "/test1.png",
    content: <DummyContent />,
  },
  {
    category: "Grow more with Ads",
    title: "Targeted Audience Engagement.",
    src:  "/test2.png",
    content: <DummyContent1 />,
  },
  {
    category: "Enhanced Brand Visibility",
    title: "Enhances your brand’s visibility.",
    src:  "/test3.png",
    content: <DummyContent2 />,
  },
 
  {
    category: "Web Development",
    title: "Identify Your Brand on Internet With Website.",
    src: "/test4.png",
    content: <DummyContent3 />,
  },
  {
    category: "Showcase your business on Google",
    title: "Get a Ultimate Website for your business .",
    src:  "/test5.png",
    content: <DummyContent4 />,
  },
  {
    category: "Enhanced Brand Visibility",
    title: "Enhances your brand’s visibility.",
    src:  "/test3.png",
    content: <DummyContent2 />,
  },
];