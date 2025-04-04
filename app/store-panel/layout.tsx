"use client";

import { Inter } from "next/font/google";
import Sidebar from "@/components/store-panel/Sidebar";
import Header from "@/components/store-panel/Header";

const inter = Inter({ subsets: ["latin"] });

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 