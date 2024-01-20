import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Julian Fontana - Desarrollador Front End",
  description:
    "Desarrollador Front End con experiencia en React y React Native. Actualmente trabajando en proyectos personales y colaborando en proyectos Open Source.",
  keywords:
    "Next.js, TypeScript, Tailwind CSS, ESLint, Prettier, Developer, Front End, React, React Nativem, Github, Open Source, Julian Fontana",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://julianfontana.com.ar",
    siteName: "Julian Fontana",
    title: "Julian Fontana - Desarrollador Front End",
    description:
      "Desarrollador Front End con experiencia en React y React Native. Actualmente trabajando en proyectos personales y colaborando en proyectos Open Source.",
    images: [
      {
        url: "https://raw.githubusercontent.com/Julian03-lab/portfolio-julian/master/public/main-page.png",
        width: 1200,
        height: 630,
        alt: "Julian Fontana - Desarrollador Front End",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
