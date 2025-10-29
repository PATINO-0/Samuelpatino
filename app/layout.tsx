import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Samuel Patiño – Ingeniero de Software",
  description: "Portafolio profesional de Samuel Patiño, ingeniero de software especializado en desarrollo full-stack con React, Next.js y diseño de experiencias excepcionales.",
  keywords: "ingeniero de software, desarrollador full-stack, React, Next.js, portafolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
