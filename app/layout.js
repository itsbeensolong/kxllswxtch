import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sebastian",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black">
          <header className="relative mx-auto max-w-screen-xl flex gap-3 items-center justify-end">
            <Navbar />
          </header>
        </div>
        <div className="bg-black">
          <main className="pl-1 lg:px-40">{children}</main>
        </div>
      </body>
    </html>
  );
}
