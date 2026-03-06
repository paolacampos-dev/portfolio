import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});


const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-signature",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://paolacampos.dev"),

  title: "Paola Campos - Portfolio",
  description: "Web Designer & Developer",

  icons:  {
    icon: "/favicon.png", 
  }, 
  
  openGraph:  {
    title: "Paola Campos - Web Dev Portfolio", 
    description: "Web Designer & Developer", 
    url: "https://paolacampos.dev", 
    siteName: "Paola Campos Portfolio",
    images:   [
      {
        url: "/favicon.png", 
        width: 512, 
        height: 512,
        alt: "Paola Campos Logo",
      },
    ],
    type: "website",
  },
  }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable} 
          ${playfair.variable} 
          ${dancing.variable}
          antialiased
          bg-stone-950 text-amber-100
          `}
      >
      <Header /> 
        {children}
      </body>
    </html>
  );
}
