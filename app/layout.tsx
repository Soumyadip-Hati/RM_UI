import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
      <body className={roboto_slab.className}>
        <nav className="flex items-center">
          <Image src="/images/logo_1.webp" alt="logo" width={200} height={100} priority />
          <div className="w-full align-middle">
            <ul className="flex gap-10 m-auto">
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
