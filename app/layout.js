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

          <footer class="bg-white shadow mt-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a
                  href="https://github.com/sebastian009w"
                  class="hover:underline"
                >
                  Johan Sebastian
                </a>
                . All Rights Reserved.
              </span>
              <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6 ">
                    Made with Next.js
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
