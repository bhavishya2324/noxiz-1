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

<meta name="google-adsense-account" content="ca-pub-8701935772112224">
   <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        ></script>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-8701935772112224",
            enable_page_level_ads: true
          });`}
        </script>
  
</head>
      <body className={font.className}>
        
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
