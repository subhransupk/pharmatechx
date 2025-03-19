import { Metadata } from "next";
import Sidebar from "@/app/components/store-panel/Sidebar";
import Header from "@/app/components/store-panel/Header";

export const metadata: Metadata = {
  title: "Medicine Store Management Panel | PharmaTechX",
  description: "Manage your medicine store efficiently with PharmaTechX",
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-dashboard font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
} 