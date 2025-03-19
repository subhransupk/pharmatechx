import { 
  UploadIcon, 
  DownloadIcon, 
  FileIcon,
  CheckCircleIcon,
  XCircleIcon,
  AlertTriangleIcon
} from "lucide-react";

export default function BulkUploadPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Bulk Medicine Upload</h1>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <DownloadIcon className="h-4 w-4" />
            Download Template
          </button>
        </div>
      </div>

      <div className="card p-6">
        <div className="space-y-6">
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

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-md font-medium text-gray-800 mb-4">Upload Instructions</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Download the template</span> and fill in your medicine details
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Required fields:</span> Medicine Name, Category, Price, Quantity, Expiry Date
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Date format:</span> YYYY-MM-DD (e.g., 2024-12-31)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <AlertTriangleIcon className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Note:</span> Duplicate barcodes will update existing medicines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload History Section */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Uploads</h2>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Records</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                  <FileIcon className="h-4 w-4 text-gray-400" />
                  medicines_batch_1.csv
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2023-03-15</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">120 added, 5 updated</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  View Details
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                  <FileIcon className="h-4 w-4 text-gray-400" />
                  new_stock_march.xlsx
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2023-03-10</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Failed
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">0 added, 0 updated</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  View Errors
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                  <FileIcon className="h-4 w-4 text-gray-400" />
                  inventory_update.csv
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2023-03-05</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Partial
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">45 added, 3 failed</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  View Details
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 