import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <Head>

<meta name="google-adsense-account" content="ca-pub-8701935772112224">

</Head>
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
