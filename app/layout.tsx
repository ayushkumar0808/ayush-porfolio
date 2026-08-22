import type { Metadata } from "next";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export { orbitron };
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
  metadataBase: new URL("https://ayush-portfolio-com.vercel.app"),
  title: "Ayush | Full Stack Developer Portfolio",
  description:
    "Ayush - Full Stack Developer based in Noida, India. Explore my projects, skills, and experience in web development.",
  keywords: [
    "Ayush",
    "Ayush portfolio",
    "full stack developer",
    "web developer Noida",
    "React developer",
    "Next.js developer",
  ],
  authors: [{ name: "Ayush" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://ayush-portfolio-com.vercel.app/",
    title: "Ayush | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer based in Noida, India. Explore my projects, skills, and experience in web development.",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer based in Noida, India. Explore my projects, skills, and experience in web development.",
    images: ["/profile.jpg"],
  },
  verification: {
    // Google Search Console se milne wala code yahan paste karo
    // google: "YOUR_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
