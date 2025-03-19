"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeftIcon, 
  PlusIcon, 
  CheckIcon, 
  PencilIcon, 
  Trash2Icon, 
  EyeIcon,
  DownloadIcon,
  CopyIcon
} from "lucide-react";

// Sample invoice templates data
const invoiceTemplates = [
  {
    id: 1,
    name: "Standard Invoice",
    description: "A clean, professional invoice template with your store logo and essential details.",
    isDefault: true,
    thumbnail: "/invoice-template-1.png", // This would be a real image in production
    lastModified: "2023-03-10",
  },
  {
    id: 2,
    name: "Detailed Receipt",
    description: "Comprehensive receipt with itemized listing and payment details.",
    isDefault: false,
    thumbnail: "/invoice-template-2.png", // This would be a real image in production
    lastModified: "2023-02-15",
  },
  {
    id: 3,
    name: "Minimal Invoice",
    description: "A simplified invoice design with just the essential information.",
    isDefault: false,
    thumbnail: "/invoice-template-3.png", // This would be a real image in production
    lastModified: "2023-01-20",
  },
  {
    id: 4,
    name: "Pharmacy Branded",
    description: "Pharmacy-specific template with medical symbols and prescription details.",
    isDefault: false,
    thumbnail: "/invoice-template-4.png", // This would be a real image in production
    lastModified: "2022-12-05",
  },
];

export default function InvoiceTemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [previewTemplate, setPreviewTemplate] = useState<number | null>(null);

  const handleSetDefault = (id: number) => {
    setSelectedTemplate(id);
    // In a real app, this would make an API call to update the default template
  };

  const handlePreview = (id: number) => {
    setPreviewTemplate(id);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewTemplate(null);
  };

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
          <h1 className="text-2xl font-bold text-gray-900">Invoice Templates</h1>
        </div>
        <Link href="/store-panel/settings/invoice-templates/edit" className="btn-primary flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          <span>Create New Template</span>
        </Link>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">
        Customize how your invoices look to customers. Select a template as your default or create a new one.
      </p>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {invoiceTemplates.map((template) => (
          <div 
            key={template.id} 
            className={`border rounded-lg overflow-hidden transition-all ${
              selectedTemplate === template.id 
                ? "border-primary-500 ring-2 ring-primary-100" 
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {/* Template Preview */}
            <div className="relative h-48 bg-gray-50 border-b border-gray-200">
              {/* In a real app, this would be an actual image of the template */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="w-5/6 h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-5/6 h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-5/6 h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-3/4 h-3 bg-gray-200 rounded mb-3"></div>
                  <div className="w-1/3 h-5 bg-gray-300 rounded"></div>
                </div>
              </div>
              
              {/* Default Badge */}
              {template.isDefault && (
                <div className="absolute top-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                  Default
                </div>
              )}
            </div>
            
            {/* Template Info */}
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mt-3">
                Last modified: {template.lastModified}
              </div>
              
              {/* Actions */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handlePreview(template.id)}
                    className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    title="Preview"
                  >
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <Link 
                    href={`/store-panel/settings/invoice-templates/edit?id=${template.id}`}
                    className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    title="Edit"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Link>
                  <button 
                    className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    title="Duplicate"
                  >
                    <CopyIcon className="h-4 w-4" />
                  </button>
                  {template.id !== 1 && (
                    <button 
                      className="p-1.5 rounded-full text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Delete"
                    >
                      <Trash2Icon className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                {selectedTemplate !== template.id ? (
                  <button 
                    onClick={() => handleSetDefault(template.id)}
                    className="text-xs bg-white border border-gray-200 text-gray-700 px-2.5 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Set as Default
                  </button>
                ) : (
                  <span className="text-xs flex items-center gap-1 text-primary-600">
                    <CheckIcon className="h-3 w-3" />
                    Default
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Template Customization Tips */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
        <h3 className="font-medium text-blue-800 mb-2">Tips for Invoice Templates</h3>
        <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
          <li>Include your store logo and contact information for brand recognition</li>
          <li>Make sure your tax identification numbers are clearly visible</li>
          <li>Add payment instructions and terms at the bottom of the invoice</li>
          <li>Consider adding a thank you message to improve customer relations</li>
          <li>Ensure the font is readable and the layout is clean and professional</li>
        </ul>
      </div>

      {/* Preview Modal */}
      {showPreview && previewTemplate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-medium text-lg">
                Preview: {invoiceTemplates.find(t => t.id === previewTemplate)?.name}
              </h3>
              <div className="flex items-center gap-2">
                <button 
                  className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  title="Download"
                >
                  <DownloadIcon className="h-5 w-5" />
                </button>
                <button 
                  onClick={closePreview}
                  className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto p-6">
              {/* This would be a real invoice preview in production */}
              <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="h-12 w-36 bg-gray-200 rounded mb-2"></div>
                    <div className="space-y-1">
                      <div className="h-3 w-48 bg-gray-200 rounded"></div>
                      <div className="h-3 w-40 bg-gray-200 rounded"></div>
                      <div className="h-3 w-44 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="h-6 w-32 bg-gray-300 rounded mb-2 ml-auto"></div>
                    <div className="space-y-1">
                      <div className="h-3 w-24 bg-gray-200 rounded ml-auto"></div>
                      <div className="h-3 w-28 bg-gray-200 rounded ml-auto"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mb-8">
                  <div>
                    <div className="h-4 w-20 bg-gray-300 rounded mb-3"></div>
                    <div className="space-y-1">
                      <div className="h-3 w-32 bg-gray-200 rounded"></div>
                      <div className="h-3 w-36 bg-gray-200 rounded"></div>
                      <div className="h-3 w-28 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4 w-24 bg-gray-300 rounded mb-3"></div>
                    <div className="space-y-1">
                      <div className="h-3 w-32 bg-gray-200 rounded"></div>
                      <div className="h-3 w-28 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="h-4 w-24 bg-gray-300 rounded mb-3"></div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 text-left"><div className="h-3 w-32 bg-gray-300 rounded"></div></th>
                        <th className="py-2 text-right"><div className="h-3 w-16 bg-gray-300 rounded ml-auto"></div></th>
                        <th className="py-2 text-right"><div className="h-3 w-16 bg-gray-300 rounded ml-auto"></div></th>
                        <th className="py-2 text-right"><div className="h-3 w-20 bg-gray-300 rounded ml-auto"></div></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((item) => (
                        <tr key={item} className="border-b border-gray-100">
                          <td className="py-3"><div className="h-3 w-40 bg-gray-200 rounded"></div></td>
                          <td className="py-3 text-right"><div className="h-3 w-10 bg-gray-200 rounded ml-auto"></div></td>
                          <td className="py-3 text-right"><div className="h-3 w-14 bg-gray-200 rounded ml-auto"></div></td>
                          <td className="py-3 text-right"><div className="h-3 w-16 bg-gray-200 rounded ml-auto"></div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between mb-8">
                  <div className="w-1/2">
                    <div className="h-4 w-32 bg-gray-300 rounded mb-3"></div>
                    <div className="space-y-1">
                      <div className="h-3 w-48 bg-gray-200 rounded"></div>
                      <div className="h-3 w-56 bg-gray-200 rounded"></div>
                      <div className="h-3 w-40 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="py-1"><div className="h-3 w-20 bg-gray-200 rounded"></div></td>
                          <td className="py-1 text-right"><div className="h-3 w-16 bg-gray-200 rounded ml-auto"></div></td>
                        </tr>
                        <tr>
                          <td className="py-1"><div className="h-3 w-16 bg-gray-200 rounded"></div></td>
                          <td className="py-1 text-right"><div className="h-3 w-12 bg-gray-200 rounded ml-auto"></div></td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-2"><div className="h-4 w-20 bg-gray-300 rounded"></div></td>
                          <td className="py-2 text-right"><div className="h-4 w-20 bg-gray-300 rounded ml-auto"></div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="h-4 w-36 bg-gray-300 rounded mb-3 mx-auto"></div>
                  <div className="h-3 w-64 bg-gray-200 rounded mx-auto mb-1"></div>
                  <div className="h-3 w-48 bg-gray-200 rounded mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 