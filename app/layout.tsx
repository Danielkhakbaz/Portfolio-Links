import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "layout/footer/footer";
import { NunitoFont } from "theme/font";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "DK | Danial Khakbaz",
  description: "You can access to all the socials of Danial Khakbaz from here.",
  icons: {
    icon: "/dk-logo-black.jpeg",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "DK | Danial Khakbaz",
    "twitter:description":
      "You can access to all the socials of Danial Khakbaz from here.",
    "twitter:url": "https://danial-links.vercel.app/",
    "twitter:domain": "danial-links.vercel.app",
    "twitter:image": "https://danial-links.vercel.app/dk-logo-gray.jpeg",
    "twitter:card": "summary_large_image",
    "og:title": "DK | Danial Khakbaz",
    "og:description":
      "You can access to all the socials of Danial Khakbaz from here.",
    "og:url": "https://danial-links.vercel.app/",
    "og:image": "https://danial-links.vercel.app/dk-logo-gray.jpeg",
    "og:type": "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html className="bg-neutral-800 lg:bg-black" lang="en">
      <body
        className={`${NunitoFont.className} w-screen min-h-screen flex flex-col justify-center items-center`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
