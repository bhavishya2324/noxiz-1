import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import head from "next/head";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noxiz",
  description: "Are you a business owner and looking for a website? With Noxiz get an amazing website for your business also we help you to get right clients and customer by running Ads on internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <head>

 <script type='text/javascript' src='//pl26221763.effectiveratecpm.com/37/07/0c/37070c259cca6ecc02a1a613a9c08895.js'></script>
  
</head>
      <body className={font.className}>
        <script async="async" data-cfasync="false" src="//pl26221830.effectiveratecpm.com/ca5c1f996f48e8e7396e1a0d5cad3a1a/invoke.js"></script>
<div id="container-ca5c1f996f48e8e7396e1a0d5cad3a1a"></div>
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      
         </body>
    </html>
  );
}
