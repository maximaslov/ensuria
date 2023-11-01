import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { StyledComponentsRegistry } from "@/lib";
import Providers from "@/store/providers";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
 title: "Ensuria",
 description: "Generated by create next app",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body className={roboto.className}>
    <StyledComponentsRegistry>
     <Providers>{children}</Providers>
    </StyledComponentsRegistry>
   </body>
  </html>
 );
}
