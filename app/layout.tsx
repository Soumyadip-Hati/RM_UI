import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import MenuList from "./menuList";
import NavBar from "./components/nav-bar/nav-bar";
// import { useEffect } from "react";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ['100', '300', '700'],
  variable: '--font-roboto-slab'
});

export const metadata: Metadata = {
  title: "Release Manager",
  description: "Release Manager for Continental Apps",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  // useEffect(() => {
  //   import("locomotive-scroll").then(locomotiveModule => {
  //     const scroll = new locomotiveModule.default({
  //       el: document.querySelector("#main"),
  //       smooth: true,
  //       smoothMobile: false,
  //     })
  //   })
  // }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.webp" type="image/x-icon" sizes="20x20" />
      </head>
      <body className={`${roboto_slab.className} bg-gray-100`}>
        <div id="main">
          <div className="container px-3 py-3 bg-white">
            <NavBar></NavBar>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
