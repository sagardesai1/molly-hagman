import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Molly Hagman | Private Salsa Lessons in NYC & Online",
  description:
    "Book private salsa and bachata lessons with Molly Hagman — NYC-based professional dancer, Yamulé alum, and Head Instructor at Salsa Salsa Dance Studio.",
  openGraph: {
    title: "Molly Hagman | Private Salsa Lessons",
    description:
      "Personalized private salsa lessons in New York City and online. Learn technique, musicality, and floor confidence with a world-stage instructor.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
