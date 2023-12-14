import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const chivo = Poppins({
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
    url: "https://portfolio-julian-plum.vercel.app",
    siteName: "Julian Fontana",
    title: "Julian Fontana - Desarrollador Front End",
    description:
      "Desarrollador Front End con experiencia en React y React Native. Actualmente trabajando en proyectos personales y colaborando en proyectos Open Source.",
    images: [
      {
        url: "https://portfolio-julian-plum.vercel.app/images/main-page.png",
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
      <body className={chivo.className}>{children}</body>
    </html>
  );
}
