import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-3xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 10 || i === -1 ? "md:col-span-4" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
 
  <div className="flex flex-1 min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
   <img src="/website.png"  alt="" />
  </div>

  
);

const Skeleton1 = () => (
 
  <div className="flex flex-1 min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
   <img src="/ai-image.png"  alt="" />
  </div>

  
);

const Skeleton2 = () => (
 
  <div className="flex flex-1 min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
   <img src="/nazlix1.jpg"  alt="" />
  </div>

  
);

const Skeleton3 = () => (
 
  <div className="flex flex-1 min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
   <img src="/community-image.jpg"  alt="" />
  </div>

  
);

const Skeleton4 = () => (
 
  <div className="flex flex-1 min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
   <img src="/socialmedia.png"  alt="" />
  </div>

  
);

const Skeleton5 = () => (
 
  <div className="flex flex-1 min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
   <img src="/ads-meta.png"  alt="" />
  </div>

  
);










const items = [
  {
    title: "Need a Website?",
    description: "Embark on a voyage of innovation and creativity! ",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: "Grow with Ai",
    description: "Embrace the mastery of AI and unlock a world of infinite possibilities!",
    header: <Skeleton1 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: "Meet Nazlix",
    description: "Noxiz Ai Digital at Noxiz Ai. Instagram @nazlix_ai",
    header: <Skeleton2 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " Community",
    description: "We know where the target audience is, how to reel them in, and what makes them stick around.",
    header: <Skeleton3 />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Media",
    description: "Boost your business with the power of social media.",
    header: <Skeleton4 />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Digital Marketing",
    description: "Ads helps you to get more clients and leads from everywhere.",
    header: <Skeleton5 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];




// <h2 className="text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-16 to-neutral-600 font-sans font-bold">
//                     Explore more with Noxiz
//                 </h2>


// <div className="flex flex-wrap items-center justify-center flex-col  md:flex-row gap-4 ">

// <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//        Transform Your Business with AI
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//        🔥 Embrace the mastery of AI and unlock a world of infinite possibilities! Imagine a future where every aspect of your business is optimized for peak performance
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="/ai-image.png"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
     
//       </CardBody>
//     </CardContainer>



//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//      Meet Nazlix our Ai influencer
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
        
//         Her Instagram @nazlix_ai 
//         📍Noxiz Ai Digital at Noxiz Ai 
//         🤖 Powered by AI
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="/nazlix1.jpg"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="nazlix"
//           />
//         </CardItem>
     
//       </CardBody>
//     </CardContainer>






//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//       Community Distribution
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
        
//         We know where the target audience is, how to reel them in, and what makes them stick around. This is why we can drive organic, viral conversations on Whatsapp, Telegram & Discord
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="/community-image.jpg"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="Community Distribution"
//           />
//         </CardItem>
     
//       </CardBody>
//     </CardContainer>



//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//        Partner with Facebook Ads
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//       Ready to propel your business to new heights? Dive into the world of Facebook Ads and watch your brand soar! 
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="/facebook.png"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
     
//       </CardBody>
//     </CardContainer>




//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//       Discover the Artistry of Web Development
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//      Embark on a voyage of innovation and creativity! Our web development expertise will sculpt your digital footprint and propel your success! 
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="/webdevelopment.jpg"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
     
//       </CardBody>
//     </CardContainer>






//     <CardContainer className="inter-var mb-6">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//        Social Media Marketing
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//     Extend the reach of your brand through laser-focused social ads that amplify awareness and propel sales
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4 ">
//           <Image
//             src="/paid-marketing.jpeg"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
     
//       </CardBody>
//     </CardContainer>



//     </div>