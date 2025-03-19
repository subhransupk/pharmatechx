import FileUploadSection from "./components/FileUploadSection";

export default function BulkUploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Bulk Upload Medicines</h1>
        <p className="mt-1 text-sm text-gray-500">
          Upload multiple medicines at once using a CSV or Excel file
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Upload Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Download the template file</li>
            <li>Fill in the medicine details</li>
            <li>Upload the completed file</li>
            <li>Review and confirm the import</li>
          </ol>
        </div>

        <FileUploadSection />
      </div>
    </div>
  );
} 