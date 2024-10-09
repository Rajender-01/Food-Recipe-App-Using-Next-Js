import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Delicious Recipes - Your Ultimate Food Recipe App",
  description: "Discover a variety of mouth-watering recipes, cooking tips, and meal ideas to satisfy your cravings. Join our community of food lovers today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
