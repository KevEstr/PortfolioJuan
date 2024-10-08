import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Particles from "@/components/Particles";
import { Raleway } from "next/font/google";
// import { GeistSans } from "geist/font";
import "./globals.css";
import { GlobalWrapper } from "@/components/GlobalWrapper";
import dynamic from "next/dynamic";
import { CSPostHogProvider } from "./providers";

const font = Raleway({ display: "swap", subsets: ["latin"] });

const Particles = dynamic(() => import("@/components/Particles"), {
  ssr: false,
});

export const metadata = {
  title: "Juan Andrés Rivera",
  description:
    "Juan Andrés is a software engineer student at University of Antioquia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CSPostHogProvider>
      <html lang="en">
        <body
          className={
            font.className +
            " mih-h-screen max-w-screen overflow-x-hidden flex flex-col font-light"
          }
        >
          <div className="z-20 flex-none">
            <Header />
          </div>
          <GlobalWrapper>{children}</GlobalWrapper>
          <Footer />
          <Analytics />
          <Particles />
        </body>
      </html>
    </CSPostHogProvider>
  );
}
