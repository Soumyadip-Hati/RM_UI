import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.webp" type="image/x-icon" sizes="20x20" />
      </head>
      <body className={`${roboto_slab.className} bg-gray-100`}>
        <section className="flex">
          <Image src="/images/logo_1.webp" alt="logo" width={200} height={100} priority />
          <nav className="bg-gray-500 w-full">
            <div className="grid grid-cols-1 h-full">
            <div className="flex flex-col font-bold text-lg text-slate-200 items-center h-full"><span className="align-middle">Release Manager</span></div>
            <div className="flex flex-col w-full h-full">
              <ul className="flex gap-3 font-semibold text-slate-50">
                <li className="border-solid border-2 border-slate-100"><Link href="/home">Home</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>
            </div>
          </nav>
        </section>
        <hr className="bg-slate-100" />
        <section className="py-7 px-5">
          {children}
        </section>
      </body>
    </html>
  );
}
