import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valleumbria.com"),

  title: {
    default: "Valle Umbría | Café de Especialidad Colombiano",
    template: "%s | Valle Umbría",
  },

  description:
    "Café de especialidad colombiano cultivado en Granada y Andes, Antioquia. Procesos Lavado, Honey y Natural con envío a toda Colombia.",

  keywords: [
    "café de especialidad",
    "café colombiano",
    "Valle Umbría",
    "café Antioquia",
    "café Granada Antioquia",
    "café Honey",
    "café Natural",
    "café Lavado",
    "comprar café",
    "café premium",
  ],

  authors: [
    {
      name: "Valle Umbría",
    },
  ],

  creator: "Valle Umbría",

  openGraph: {
    title: "Valle Umbría | Café de Especialidad Colombiano",
    description:
      "Descubre nuestros cafés Lavado, Honey y Natural cultivados en las montañas de Antioquia.",
    url: "https://valleumbria.com",
    siteName: "Valle Umbría",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 1200,
        alt: "Valle Umbría",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Valle Umbría | Café de Especialidad Colombiano",
    description:
      "Café de especialidad colombiano cultivado en Antioquia.",
    images: ["/logo.jpeg"],
  },

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  verification: {
    google: "Yt3RYIBuyVKIFKHbA-O9JW5MytjMxO2eGCOUrCumHac",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
} 