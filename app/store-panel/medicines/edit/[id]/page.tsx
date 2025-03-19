import { 
  SaveIcon, 
  BarcodeIcon, 
  TrashIcon,
  CameraIcon
} from "lucide-react";

export default function EditMedicinePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the medicine data based on the ID
  const medicineId = params.id;
  
  // Mock data for demonstration
  const medicine = {
    id: medicineId,
    name: "Paracetamol 500mg",
    generic: "Acetaminophen",
    category: "tablets",
    manufacturer: "ABC Pharmaceuticals",
    barcode: "8901234567890",
    price: 45.50,
    cost: 30.00,
    quantity: 120,
    reorderLevel: 20,
    expiryDate: "2024-12-31",
    batchNumber: "PCM2023-45",
    description: "Paracetamol is a medication used to treat fever and mild to moderate pain."
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Edit Medicine</h1>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary text-sm py-1.5 flex items-center gap-1 text-red-600 hover:bg-red-50 border-red-200">
            <TrashIcon className="h-4 w-4" />
            Delete
          </button>
          <button className="btn-primary text-sm py-1.5 flex items-center gap-1">
            <SaveIcon className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Medicine Name*</label>
              <input 
                type="text" 
                id="name" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                defaultValue={medicine.name}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="generic" className="text-sm font-medium text-gray-700">Generic Name</label>
              <input 
                type="text" 
                id="generic" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                defaultValue={medicine.generic}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="category" className="text-sm font-medium text-gray-700">Category*</label>
              <select 
                id="category" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                defaultValue={medicine.category}
              >
                <option value="">Select category</option>
                <option value="tablets">Tablets</option>
                <option value="capsules">Capsules</option>
                <option value="syrups">Syrups</option>
                <option value="injections">Injections</option>
                <option value="drops">Drops</option>
                <option value="inhalers">Inhalers</option>
                <option value="topical">Topical</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="manufacturer" className="text-sm font-medium text-gray-700">Manufacturer</label>
              <input 
                type="text" 
                id="manufacturer" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                defaultValue={medicine.manufacturer}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="barcode" className="text-sm font-medium text-gray-700">Barcode</label>
              <div className="flex">
                <input 
                  type="text" 
                  id="barcode" 
                  className="border border-gray-200 rounded-l-lg p-2.5 focus:ring-primary-500 focus:border-primary-500 flex-1"
                  defaultValue={medicine.barcode}
                />
                <button className="bg-primary-100 text-primary-600 p-2.5 rounded-r-lg border border-l-0 border-gray-200 hover:bg-primary-200 transition-colors">
                  <BarcodeIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="price" className="text-sm font-medium text-gray-700">Price (₹)*</label>
                <input 
                  type="number" 
                  id="price" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={medicine.price}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="cost" className="text-sm font-medium text-gray-700">Cost Price (₹)</label>
                <input 
                  type="number" 
                  id="cost" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={medicine.cost}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Current Quantity*</label>
                <input 
                  type="number" 
                  id="quantity" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={medicine.quantity}
                  readOnly
                />
                <p className="text-xs text-gray-500">Use inventory management to adjust stock</p>
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="reorder" className="text-sm font-medium text-gray-700">Reorder Level</label>
                <input 
                  type="number" 
                  id="reorder" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={medicine.reorderLevel}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="expiry" className="text-sm font-medium text-gray-700">Expiry Date*</label>
                <input 
                  type="date" 
                  id="expiry" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={medicine.expiryDate}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="batch" className="text-sm font-medium text-gray-700">Batch Number</label>
                <input 
                  type="text" 
                  id="batch" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={medicine.batchNumber}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
            <textarea 
              id="description" 
              rows={3}
              className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
              defaultValue={medicine.description}
            ></textarea>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-md font-medium text-gray-800">Medicine History</h3>
              <p className="text-sm text-gray-500">Last updated: 2 days ago</p>
            </div>
            <button className="btn-secondary text-sm py-1.5">View Full History</button>
          </div>
        </div>
      </div>
    </div>
  );
} 