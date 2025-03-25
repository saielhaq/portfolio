import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saad Sai El Haq | Full-Stack Developer Portfolio",
  keywords: [
    "saad sai el haq",
    "saad",
    "saad sai",
    "sai el haq",
    "saielhaq",
    "saad saielhaq",
    "Saad Sai El Haq",
    "Saad Sai",
    "Saad",
    "Sai El Haq",
    "Saielhaq",
    "full stack developer",
    "angular developer",
    "spring boot developer",
    "web developer",
    "software engineer",
    "portfolio",
    "developer portfolio",
  ],
  description:
    "Saad Sai El Haq is a full-stack developer with 3 years of experience specializing in Angular and Spring Boot development. View my projects, skills, and experience.",
  openGraph: {
    title: "Saad Sai El Haq | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer with 3 years of experience specializing in Angular and Spring Boot",
    type: "website",
    url: "https://saielhaqs.vercel.app",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Saad Sai El Haq - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Sai El Haq | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer with 3 years of experience specializing in Angular and Spring Boot",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <Analytics />
        <SpeedInsights />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
