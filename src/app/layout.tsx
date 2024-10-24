import "./globals.css";

// Import from next/font/google
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Create the font variable
export const poppins = Poppins({
  weight: ["400", "700"], // Define the font weights you want to load
  subsets: ["latin"], // Define the character subsets
  display: "swap", // Optional: control font display
});

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
