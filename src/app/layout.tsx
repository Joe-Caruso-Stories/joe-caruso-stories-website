import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joecarusostories.com"),
  title: {
    default: "Joe Caruso Stories",
    template: "%s | Joe Caruso Stories",
  },
  description:
    "Children's picture books by Joe Caruso that help kids see themselves the way God does.",
  icons: {
    // favicon.ico (small sizes) keeps the bigger, edge-to-edge mark for the
    // browser tab, which is never circularly cropped. These larger PNGs use
    // a version shrunk to fit inside a circle, for Google and anything else
    // that prefers a bigger icon and displays it in a circular badge.
    icon: [
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
