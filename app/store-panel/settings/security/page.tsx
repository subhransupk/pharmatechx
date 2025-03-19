"use client";

import Link from "next/link";
import { 
  ArrowLeftIcon, 
  ShieldIcon,
  LockIcon,
  KeyIcon,
  UserIcon,
  EyeIcon,
  AlertTriangleIcon,
  FingerprintIcon
} from "lucide-react";

export default function SecuritySettingsPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link 
            href="/store-panel/settings" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Security Settings</h1>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">
        Configure password policies, two-factor authentication, and access controls to keep your pharmacy data secure.
      </p>

      {/* Coming Soon Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary-50 rounded-full">
            <ShieldIcon className="h-12 w-12 text-primary-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Security Settings Coming Soon</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We're working hard to bring you advanced security features to protect your pharmacy data. Soon you'll be able to configure comprehensive security settings.
        </p>
        
        {/* Future Security Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <LockIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Password Policies</h3>
            <p className="text-sm text-gray-500">Set strong password requirements and expiration policies for all users.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <FingerprintIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-500">Add an extra layer of security with SMS or authenticator app verification.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <UserIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Access Controls</h3>
            <p className="text-sm text-gray-500">Define IP restrictions, session timeouts, and device management.</p>
          </div>
        </div>
        
        {/* Security Tips */}
        <div className="bg-amber-50 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-medium text-amber-800 mb-3">Security Best Practices</h3>
          <div className="text-left">
            <ul className="text-sm text-amber-700 space-y-2 list-disc pl-5">
              <li>Use strong, unique passwords for all accounts</li>
              <li>Never share your login credentials with others</li>
              <li>Be cautious of phishing attempts and suspicious emails</li>
              <li>Keep your devices and software up to date</li>
              <li>Regularly review user access and remove unused accounts</li>
            </ul>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <AlertTriangleIcon className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-sm text-amber-700">
              If you suspect any security issues, please contact support immediately.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 