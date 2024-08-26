import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Sawapandeep",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        {children}
      </body>
    </html>
  );
}
