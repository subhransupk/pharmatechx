"use client";

import Link from "next/link";
import { 
  ArrowLeftIcon, 
  LinkIcon,
  ConstructionIcon,
  GithubIcon,
  SlackIcon,
  MailIcon,
  SmartphoneIcon,
  CloudIcon,
  DatabaseIcon
} from "lucide-react";

export default function ApiIntegrationsPage() {
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
          <h1 className="text-2xl font-bold text-gray-900">API Integrations</h1>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">
        Connect your pharmacy with third-party services and APIs to extend functionality.
      </p>

      {/* Coming Soon Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary-50 rounded-full">
            <LinkIcon className="h-12 w-12 text-primary-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">API Integrations Coming Soon</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We're working hard to bring you powerful integration capabilities. Soon you'll be able to connect your pharmacy with various third-party services and APIs.
        </p>
        
        {/* Future Integrations Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <GithubIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Payment Gateways</h3>
            <p className="text-sm text-gray-500">Connect with popular payment processors for seamless transactions.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <SlackIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Communication APIs</h3>
            <p className="text-sm text-gray-500">Integrate with SMS, email, and messaging platforms for customer notifications.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-center mb-4">
              <CloudIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Cloud Services</h3>
            <p className="text-sm text-gray-500">Connect with cloud storage and computing services for enhanced capabilities.</p>
          </div>
        </div>
        
        {/* Notification Sign-up */}
        <div className="bg-primary-50 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-medium text-primary-800 mb-3">Get Notified When Integrations Launch</h3>
          <p className="text-sm text-primary-700 mb-4">
            Leave your email address and we'll notify you as soon as API integrations are available.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 