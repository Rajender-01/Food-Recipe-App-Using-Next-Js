import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// export const inter = Inter({
//   subsets: ['latin'],
//   variable: "--font-inter",
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: "Delicious Recipes - Your Ultimate Food Recipe App",
  description:
    "Discover a variety of mouth-watering recipes, cooking tips, and meal ideas to satisfy your cravings. Join our community of food lovers today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
