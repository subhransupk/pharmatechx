import { Metadata } from "next";
import Sidebar from "@/app/components/admin/Sidebar";
import Header from "@/app/components/admin/Header";

export const metadata: Metadata = {
  title: "Admin Dashboard | PharmaTechX",
  description: "Manage your pharmacy management platform with PharmaTechX Admin Dashboard",
};

export default function AdminLayout({
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