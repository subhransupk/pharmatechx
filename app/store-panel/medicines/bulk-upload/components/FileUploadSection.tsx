'use client';

import { UploadIcon } from "lucide-react";

export default function FileUploadSection() {
  return (
    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="p-3 bg-primary-50 rounded-full">
          <UploadIcon className="h-8 w-8 text-primary-500" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">Upload CSV or Excel File</h3>
          <p className="text-sm text-gray-500 mt-1">
            Drag and drop your file here, or click to browse
          </p>
        </div>
        <input 
          type="file" 
          id="file-upload" 
          className="hidden" 
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
        />
        <button 
          onClick={() => document.getElementById('file-upload')?.click()}
          className="btn-primary"
        >
          Browse Files
        </button>
        <p className="text-xs text-gray-500">
          Supported formats: CSV, XLSX (max 5MB)
        </p>
      </div>
    </div>
  );
} 