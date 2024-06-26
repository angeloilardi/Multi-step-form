import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Multi-step Form",
  description: "Multi-step Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-magnolia ${ubuntu.className} bg-[url('/images/bg-sidebar-mobile.svg')] lg:bg-none lg:bg-magnolia bg-contain bg-no-repeat bg-top min-h-dvh flex flex-col lg:justify-center`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
