"use client";

import { useState, useRef } from "react";
import { 
  UploadIcon, 
  DownloadIcon, 
  FileIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  AlertCircleIcon,
  RefreshCwIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  Trash2Icon
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample data for validation results
const sampleValidationResults = [
  { id: 1, name: "Paracetamol", status: "success", message: "Valid entry" },
  { id: 2, name: "Amoxicillin", status: "error", message: "Missing strength" },
  { id: 3, name: "Cetirizine", status: "warning", message: "Low stock alert" },
  { id: 4, name: "Omeprazole", status: "success", message: "Valid entry" },
  { id: 5, name: "Aspirin", status: "error", message: "Invalid expiry date" },
];

export default function BulkUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [validationResults, setValidationResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setShowResults(false);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setValidationResults(sampleValidationResults);
          setShowResults(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleDownloadTemplate = () => {
    // In a real app, this would download a CSV template
    alert("Downloading template file...");
  };

  const handleClear = () => {
    setFile(null);
    setValidationResults([]);
    setShowResults(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case "error":
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      case "warning":
        return <AlertCircleIcon className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Bulk Upload</h1>
        <div className="flex gap-4">
          <button
            onClick={handleDownloadTemplate}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50"
          >
            <DownloadIcon className="h-5 w-5 mr-2" />
            Download Template
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Upload File</h2>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              {file ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    {file.type.includes("csv") ? (
                      <FileSpreadsheetIcon className="w-12 h-12 text-green-500" />
                    ) : (
                      <FileTextIcon className="w-12 h-12 text-blue-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{file.name}</p>
                  <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                  <button
                    onClick={handleClear}
                    className="text-red-500 text-sm flex items-center justify-center mx-auto"
                  >
                    <Trash2Icon className="w-4 h-4 mr-1" />
                    Remove
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <UploadIcon className="w-12 h-12 text-gray-400 mx-auto" />
                  <p className="text-sm text-gray-600">
                    Drag and drop your file here, or click to browse
                  </p>
                  <p className="text-xs text-gray-500">
                    Supported formats: CSV, Excel (.xlsx, .xls)
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".csv,.xlsx,.xls"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg inline-flex items-center cursor-pointer"
                  >
                    Choose File
                  </label>
                </div>
              )}
            </div>

            {isUploading && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={handleUpload}
                disabled={!file || isUploading}
                className={`flex-1 ${
                  !file || isUploading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-primary-700"
                } text-white px-4 py-2 rounded-lg flex items-center justify-center`}
              >
                <UploadIcon className="h-5 w-5 mr-2" />
                Upload
              </button>
              <button
                onClick={handleClear}
                disabled={!file || isUploading}
                className={`flex-1 ${
                  !file || isUploading
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                } px-4 py-2 rounded-lg flex items-center justify-center`}
              >
                <RefreshCwIcon className="h-5 w-5 mr-2" />
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Validation Results</h2>
          {showResults ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700">Total Records:</span>
                  <span className="ml-2 text-sm font-bold">{validationResults.length}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-gray-700">
                      {validationResults.filter((item) => item.status === "success").length}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircleIcon className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-700">
                      {validationResults.filter((item) => item.status === "warning").length}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <XCircleIcon className="w-4 h-4 text-red-500 mr-1" />
                    <span className="text-sm text-gray-700">
                      {validationResults.filter((item) => item.status === "error").length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Message
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {validationResults.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                          {item.name}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          {getStatusIcon(item.status)}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                          {item.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => router.push("/store-panel/medicines")}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg"
                >
                  View All Medicines
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <FileIcon className="w-12 h-12 mb-2" />
              <p>Upload a file to see validation results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 