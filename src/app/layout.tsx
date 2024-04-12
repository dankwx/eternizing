import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eternizing",
  description: "Eternize you discovers so others can see",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="className={`flex flex-col ${inter.className} h-screen m-0`}">
            <div className="flex flex-grow">
              <Navbar />
            </div>
            <div className="flex flex-grow">{children}</div>
          </main>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
