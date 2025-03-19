"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  SaveIcon, 
  EyeIcon, 
  UploadIcon,
  PlusIcon,
  Trash2Icon,
  MoveIcon,
  TypeIcon,
  ImageIcon,
  TextIcon,
  TableIcon,
  LayoutIcon,
  PaletteIcon
} from "lucide-react";

// Sample template data for editing
const templateData = {
  id: 1,
  name: "Standard Invoice",
  description: "A clean, professional invoice template with your store logo and essential details.",
  sections: [
    { id: "header", name: "Header", enabled: true },
    { id: "storeInfo", name: "Store Information", enabled: true },
    { id: "customerInfo", name: "Customer Information", enabled: true },
    { id: "invoiceDetails", name: "Invoice Details", enabled: true },
    { id: "itemsTable", name: "Items Table", enabled: true },
    { id: "subtotal", name: "Subtotal & Taxes", enabled: true },
    { id: "paymentInfo", name: "Payment Information", enabled: true },
    { id: "footer", name: "Footer", enabled: true },
  ],
  fonts: [
    { id: "primary", name: "Primary Font", value: "Inter" },
    { id: "secondary", name: "Secondary Font", value: "Inter" },
  ],
  colors: [
    { id: "primary", name: "Primary Color", value: "#4F46E5" },
    { id: "secondary", name: "Secondary Color", value: "#E5E7EB" },
    { id: "text", name: "Text Color", value: "#111827" },
    { id: "background", name: "Background Color", value: "#FFFFFF" },
  ],
  logo: "/store-logo.png",
  showLogo: true,
  showSignature: true,
  showWatermark: false,
  footerText: "Thank you for your business! Payment is due within 30 days.",
};

export default function EditInvoiceTemplatePage() {
  const [template, setTemplate] = useState(templateData);
  const [activeTab, setActiveTab] = useState("layout");
  const [showPreview, setShowPreview] = useState(false);

  const handleSectionToggle = (sectionId: string) => {
    setTemplate({
      ...template,
      sections: template.sections.map(section => 
        section.id === sectionId 
          ? { ...section, enabled: !section.enabled } 
          : section
      )
    });
  };

  const handleColorChange = (colorId: string, value: string) => {
    setTemplate({
      ...template,
      colors: template.colors.map(color => 
        color.id === colorId 
          ? { ...color, value } 
          : color
      )
    });
  };

  const handleFontChange = (fontId: string, value: string) => {
    setTemplate({
      ...template,
      fonts: template.fonts.map(font => 
        font.id === fontId 
          ? { ...font, value } 
          : font
      )
    });
  };

  const handleToggleOption = (option: keyof typeof template) => {
    if (typeof template[option] === 'boolean') {
      setTemplate({
        ...template,
        [option]: !template[option]
      });
    }
  };

  const handleFooterTextChange = (text: string) => {
    setTemplate({
      ...template,
      footerText: text
    });
  };

  const handleNameChange = (name: string) => {
    setTemplate({
      ...template,
      name
    });
  };

  const handleDescriptionChange = (description: string) => {
    setTemplate({
      ...template,
      description
    });
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link 
            href="/store-panel/settings/invoice-templates" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Edit Invoice Template</h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowPreview(true)}
            className="btn-secondary flex items-center gap-2"
          >
            <EyeIcon className="h-4 w-4" />
            <span>Preview</span>
          </button>
          <button className="btn-primary flex items-center gap-2">
            <SaveIcon className="h-4 w-4" />
            <span>Save Template</span>
          </button>
        </div>
      </div>

      {/* Template Name and Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="templateName" className="block text-sm font-medium text-gray-700 mb-1">
              Template Name
            </label>
            <input
              id="templateName"
              type="text"
              value={template.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="templateDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              id="templateDescription"
              type="text"
              value={template.description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Editor Tabs and Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              <button
                onClick={() => setActiveTab("layout")}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 ${
                  activeTab === "layout" ? "bg-primary-50 text-primary-700" : "hover:bg-gray-50"
                }`}
              >
                <LayoutIcon className="h-5 w-5" />
                <span className="font-medium">Layout</span>
              </button>
              <button
                onClick={() => setActiveTab("colors")}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 ${
                  activeTab === "colors" ? "bg-primary-50 text-primary-700" : "hover:bg-gray-50"
                }`}
              >
                <PaletteIcon className="h-5 w-5" />
                <span className="font-medium">Colors</span>
              </button>
              <button
                onClick={() => setActiveTab("typography")}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 ${
                  activeTab === "typography" ? "bg-primary-50 text-primary-700" : "hover:bg-gray-50"
                }`}
              >
                <TypeIcon className="h-5 w-5" />
                <span className="font-medium">Typography</span>
              </button>
              <button
                onClick={() => setActiveTab("content")}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 ${
                  activeTab === "content" ? "bg-primary-50 text-primary-700" : "hover:bg-gray-50"
                }`}
              >
                <TextIcon className="h-5 w-5" />
                <span className="font-medium">Content</span>
              </button>
              <button
                onClick={() => setActiveTab("logo")}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 ${
                  activeTab === "logo" ? "bg-primary-50 text-primary-700" : "hover:bg-gray-50"
                }`}
              >
                <ImageIcon className="h-5 w-5" />
                <span className="font-medium">Logo & Branding</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Editor */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Layout Tab */}
            {activeTab === "layout" && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Layout Settings</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Enable or disable sections and arrange them in your preferred order.
                </p>

                <div className="space-y-4">
                  {template.sections.map((section) => (
                    <div 
                      key={section.id}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <MoveIcon className="h-5 w-5 text-gray-400 cursor-move" />
                        <span className="font-medium text-gray-800">{section.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={section.enabled}
                            onChange={() => handleSectionToggle(section.id)}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Colors Tab */}
            {activeTab === "colors" && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Color Settings</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Customize the colors used in your invoice template.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {template.colors.map((color) => (
                    <div key={color.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {color.name}
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={color.value}
                          onChange={(e) => handleColorChange(color.id, e.target.value)}
                          className="h-10 w-10 rounded border border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={color.value}
                          onChange={(e) => handleColorChange(color.id, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Typography Tab */}
            {activeTab === "typography" && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Typography Settings</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Choose fonts and text styles for your invoice.
                </p>

                <div className="space-y-6">
                  {template.fonts.map((font) => (
                    <div key={font.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {font.name}
                      </label>
                      <select
                        value={font.value}
                        onChange={(e) => handleFontChange(font.id, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="Inter">Inter</option>
                        <option value="Roboto">Roboto</option>
                        <option value="Open Sans">Open Sans</option>
                        <option value="Lato">Lato</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Poppins">Poppins</option>
                      </select>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-800 mb-3">Text Size Presets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 text-center">
                        <span className="block text-sm font-medium mb-1">Small</span>
                        <span className="text-xs text-gray-500">Compact view</span>
                      </button>
                      <button className="border border-primary-200 bg-primary-50 rounded-md p-3 text-center ring-2 ring-primary-100">
                        <span className="block text-sm font-medium mb-1 text-primary-700">Medium</span>
                        <span className="text-xs text-primary-600">Standard view</span>
                      </button>
                      <button className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 text-center">
                        <span className="block text-sm font-medium mb-1">Large</span>
                        <span className="text-xs text-gray-500">Expanded view</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content Tab */}
            {activeTab === "content" && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Content Settings</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Customize the text content that appears on your invoices.
                </p>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="footerText" className="block text-sm font-medium text-gray-700 mb-1">
                      Footer Text
                    </label>
                    <textarea
                      id="footerText"
                      rows={3}
                      value={template.footerText}
                      onChange={(e) => handleFooterTextChange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-800 mb-3">Additional Elements</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Show Signature Line</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={template.showSignature}
                            onChange={() => handleToggleOption('showSignature')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Show Watermark</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={template.showWatermark}
                            onChange={() => handleToggleOption('showWatermark')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Logo & Branding Tab */}
            {activeTab === "logo" && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Logo & Branding</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Upload your store logo and customize branding elements.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Store Logo
                    </label>
                    
                    <div className="flex items-center gap-6">
                      <div className="w-32 h-32 border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
                        {/* This would show the actual logo in production */}
                        <div className="text-gray-400 flex flex-col items-center">
                          <ImageIcon className="h-8 w-8 mb-2" />
                          <span className="text-xs">Logo Preview</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <button className="btn-secondary flex items-center gap-2 w-full justify-center">
                          <UploadIcon className="h-4 w-4" />
                          <span>Upload Logo</span>
                        </button>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Show Logo on Invoice</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={template.showLogo}
                              onChange={() => handleToggleOption('showLogo')}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-medium text-lg">
                Preview: {template.name}
              </h3>
              <button 
                onClick={() => setShowPreview(false)}
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
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