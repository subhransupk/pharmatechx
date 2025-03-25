import { Metadata } from "next";
import Sidebar from "@/components/store-panel/Sidebar";
import Header from "@/components/store-panel/Header";

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
    <div className="flex h-screen bg-white font-sans text-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
} 