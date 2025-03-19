"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  SettingsIcon, 
  ClockIcon, 
  UsersIcon, 
  CreditCardIcon, 
  LinkIcon,
  ChevronRightIcon,
  BuildingIcon,
  GlobeIcon,
  PercentIcon,
  BellIcon,
  ShieldIcon,
  DatabaseIcon,
  KeyIcon
} from "lucide-react";

// Tab interface
interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

// Settings section interface
interface SettingsSection {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

export default function SettingsPage() {
  // Define tabs
  const tabs: Tab[] = [
    { id: "store", label: "Store Settings", icon: BuildingIcon },
    { id: "users", label: "Users & Permissions", icon: UsersIcon },
    { id: "billing", label: "Billing & Notifications", icon: CreditCardIcon },
    { id: "integrations", label: "Integrations & Security", icon: LinkIcon },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  // Define settings sections for each tab
  const settingsSections: Record<string, SettingsSection[]> = {
    store: [
      {
        title: "Store Profile",
        description: "Update your store name, address, contact information, and logo",
        icon: BuildingIcon,
        href: "/store-panel/settings/store-profile",
      },
      {
        title: "Business Hours",
        description: "Set your store's operating hours and holidays",
        icon: ClockIcon,
        href: "/store-panel/settings/business-hours",
      },
      {
        title: "Currency & Tax",
        description: "Configure currency format, tax rates, and calculation methods",
        icon: PercentIcon,
        href: "/store-panel/settings/tax",
      },
      {
        title: "Regional Settings",
        description: "Set language, date format, and other localization preferences",
        icon: GlobeIcon,
        href: "/store-panel/settings/regional",
      },
    ],
    users: [
      {
        title: "Staff Accounts",
        description: "Manage staff accounts and access permissions",
        icon: UsersIcon,
        href: "/store-panel/settings/users",
      },
      {
        title: "Roles & Permissions",
        description: "Create and manage role-based permissions",
        icon: KeyIcon,
        href: "/store-panel/settings/roles",
      },
    ],
    billing: [
      {
        title: "Invoice Templates",
        description: "Customize invoice layout, logo, and information",
        icon: CreditCardIcon,
        href: "/store-panel/settings/invoice-templates",
      },
      {
        title: "Payment Methods",
        description: "Configure accepted payment methods and gateways",
        icon: CreditCardIcon,
        href: "/store-panel/settings/payment-methods",
      },
      {
        title: "Notifications",
        description: "Set up email, SMS, and in-app notifications",
        icon: BellIcon,
        href: "/store-panel/settings/notifications",
      },
    ],
    integrations: [
      {
        title: "API Integrations",
        description: "Connect with third-party services and APIs",
        icon: LinkIcon,
        href: "/store-panel/settings/api-integrations",
      },
      {
        title: "Security Settings",
        description: "Configure password policies, 2FA, and access controls",
        icon: ShieldIcon,
        href: "/store-panel/settings/security",
      },
      {
        title: "Backup & Recovery",
        description: "Set up automated backups and data recovery options",
        icon: DatabaseIcon,
        href: "/store-panel/settings/backup",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8" aria-label="Settings tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                  ${
                    activeTab === tab.id
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                <Icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Settings sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections[activeTab].map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.title}
              href={section.href}
              className="group p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 