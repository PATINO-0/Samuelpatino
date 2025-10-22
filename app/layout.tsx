import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Portafolio – Samuel Patiño",
  description: "Plantilla de portafolio con Next.js + Tailwind + Framer Motion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.variable + " font-sans"}>
        {children}
      </body>
    </html>
  );
}
