import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export { orbitron };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush-portfolio-com.vercel.app"),

  title: "Ayush Kumar | Full Stack Developer Portfolio",

  description:
    "Ayush Kumar - Full Stack Developer based in Bengaluru, India. Explore my projects, skills, and experience in web development.",

  keywords: [
    "Ayush Kumar",
    "Ayush Kumar portfolio",
    "full stack developer",
    "web developer Bengaluru",
    "React developer",
    "Node.js developer",
  ],

  authors: [{ name: "Ayush Kumar" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://ayush-portfolio-com.vercel.app/",
    title: "Ayush Kumar | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer based in Bengaluru, India. Explore my projects, skills, and experience in web development.",
    images: ["/profile.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer based in Bengaluru, India. Explore my projects, skills, and experience in web development.",
    images: ["/profile.jpg"],
  },

  verification: {
    google: "DyTp4xolklreoYTv4HAaKDsHrVlhLOrjgSd0HpzwDdw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush Kumar",
    url: "https://ayush-portfolio-com.vercel.app/",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://www.linkedin.com/in/ayushkumar0808",
      "https://github.com/ayushkumar0808",
      "https://leetcode.com/u/confused_ayush",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
