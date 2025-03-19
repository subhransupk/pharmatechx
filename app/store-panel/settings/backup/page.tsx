"use client";

import Link from "next/link";
import { 
  ArrowLeftIcon, 
  DatabaseIcon,
  CloudIcon,
  DownloadIcon,
  CalendarIcon,
  ClockIcon,
  HardDriveIcon,
  ServerIcon,
  FileIcon
} from "lucide-react";

export default function BackupRecoveryPage() {
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
          <h1 className="text-2xl font-bold text-gray-900">Backup & Recovery</h1>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">
        Set up automated backups and data recovery options to protect your pharmacy data from loss.
      </p>

      {/* Coming Soon Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary-50 rounded-full">
            <DatabaseIcon className="h-12 w-12 text-primary-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Backup & Recovery Coming Soon</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We're working hard to bring you comprehensive backup and recovery features. Soon you'll be able to configure automated backups and restore options.
        </p>
        
        {/* Future Backup Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <CalendarIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Scheduled Backups</h3>
            <p className="text-sm text-gray-500">Set up daily, weekly, or monthly automated backups of your data.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <CloudIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Cloud Storage</h3>
            <p className="text-sm text-gray-500">Store your backups securely in the cloud with encryption and redundancy.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <DownloadIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">One-Click Recovery</h3>
            <p className="text-sm text-gray-500">Restore your data quickly and easily with our simplified recovery process.</p>
          </div>
        </div>
        
        {/* Manual Backup Option */}
        <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-medium text-blue-800 mb-3">Need to Back Up Your Data Now?</h3>
          <p className="text-sm text-blue-700 mb-4">
            While we're working on our automated backup system, you can manually export your data for safekeeping.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-blue-200 rounded-md text-blue-700 hover:bg-blue-100 transition-colors">
              <FileIcon className="h-5 w-5" />
              <span>Export Inventory Data</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-blue-200 rounded-md text-blue-700 hover:bg-blue-100 transition-colors">
              <FileIcon className="h-5 w-5" />
              <span>Export Sales History</span>
            </button>
          </div>
          <p className="text-xs text-blue-600 mt-3">
            These exports will download as CSV files that you can store securely on your device.
          </p>
        </div>
      </div>
    </div>
  );
} 