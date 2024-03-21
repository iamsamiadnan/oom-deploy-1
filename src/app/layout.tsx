import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Provider from "./Provider";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
          <Provider>
            {/* <AppBar /> */}
            <AntdRegistry>
              <div className="max-w-[393px] mx-auto relative">
                <header className="flex justify-between h-[57px] items-center bg-white px-4 absolute top-0 w-full z-10">
                  <Image
                    src="/Icons/FunnelSimple.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                  <Image src="/oom-logo.png" width="132" height="32" alt="" />
                  <Image
                    src="/Icons/ShoppingBag.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </header>

                <div className="absolute inset-0">
                  <main className="bg-white h-[100svh]">
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                  </main>
                </div>
              </div>
            </AntdRegistry>
          </Provider>
        </div>
      </body>
    </html>
  );
}
