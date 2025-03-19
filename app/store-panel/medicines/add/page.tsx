"use client";

import { 
  PlusIcon, 
  UploadIcon, 
  BarcodeIcon, 
  CameraIcon,
  SaveIcon,
  XIcon,
  ImageIcon
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddMedicinePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    generic: "",
    brandName: "",
    medicineType: "",
    category: "",
    composition: "",
    dosage: "",
    prescriptionRequired: false,
    manufacturer: "",
    barcode: "",
    price: "",
    cost: "",
    quantity: "",
    reorderLevel: "",
    expiryDate: "",
    batchNumber: "",
    description: ""
  });
  
  const [medicineImage, setMedicineImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [id]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    }
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMedicineImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = () => {
    setMedicineImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your API
    console.log("Submitting medicine data:", formData);
    console.log("Medicine image:", medicineImage);
    
    // Show success message and redirect
    alert("Medicine added successfully!");
    router.push("/store-panel/medicines");
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Add New Medicine</h1>
        <div className="flex items-center space-x-2">
          <Link href="/store-panel/medicines/bulk-upload" className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <UploadIcon className="h-4 w-4" />
            Bulk Upload
          </Link>
          <button 
            type="submit" 
            form="medicine-form"
            className="btn-primary text-sm py-1.5 flex items-center gap-1"
          >
            <SaveIcon className="h-4 w-4" />
            Save Medicine
          </button>
        </div>
      </div>

      <form id="medicine-form" onSubmit={handleSubmit} className="card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Medicine Name*</label>
              <input 
                type="text" 
                id="name" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter medicine name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="generic" className="text-sm font-medium text-gray-700">Generic Name</label>
              <input 
                type="text" 
                id="generic" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter generic name"
                value={formData.generic}
                onChange={handleChange}
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="brandName" className="text-sm font-medium text-gray-700">Brand Name*</label>
              <input 
                type="text" 
                id="brandName" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter brand name"
                value={formData.brandName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="medicineType" className="text-sm font-medium text-gray-700">Medicine Type*</label>
              <select 
                id="medicineType" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                value={formData.medicineType}
                onChange={handleChange}
                required
              >
                <option value="">Select medicine type</option>
                <option value="tablet">Tablet</option>
                <option value="capsule">Capsule</option>
                <option value="syrup">Syrup</option>
                <option value="injection">Injection</option>
                <option value="drops">Drops</option>
                <option value="inhaler">Inhaler</option>
                <option value="cream">Cream</option>
                <option value="ointment">Ointment</option>
                <option value="powder">Powder</option>
                <option value="spray">Spray</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="category" className="text-sm font-medium text-gray-700">Category*</label>
              <select 
                id="category" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="painkillers">Painkillers</option>
                <option value="antibiotics">Antibiotics</option>
                <option value="antiviral">Antiviral</option>
                <option value="antihistamines">Antihistamines</option>
                <option value="antacids">Antacids</option>
                <option value="antidiabetic">Antidiabetic</option>
                <option value="antihypertensive">Antihypertensive</option>
                <option value="antiinflammatory">Anti-inflammatory</option>
                <option value="vitamins">Vitamins & Supplements</option>
                <option value="cardiovascular">Cardiovascular</option>
                <option value="respiratory">Respiratory</option>
                <option value="gastrointestinal">Gastrointestinal</option>
                <option value="dermatological">Dermatological</option>
                <option value="ophthalmic">Ophthalmic</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="composition" className="text-sm font-medium text-gray-700">Composition / Ingredients*</label>
              <textarea 
                id="composition" 
                rows={2}
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter active ingredients and composition"
                value={formData.composition}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="manufacturer" className="text-sm font-medium text-gray-700">Manufacturer</label>
              <input 
                type="text" 
                id="manufacturer" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter manufacturer name"
                value={formData.manufacturer}
                onChange={handleChange}
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
                  placeholder="Enter or scan barcode"
                  value={formData.barcode}
                  onChange={handleChange}
                />
                <button 
                  type="button"
                  className="bg-primary-100 text-primary-600 p-2.5 rounded-r-lg border border-l-0 border-gray-200 hover:bg-primary-200 transition-colors"
                >
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
                  placeholder="0.00"
                  value={formData.price}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="cost" className="text-sm font-medium text-gray-700">Cost Price (₹)</label>
                <input 
                  type="number" 
                  id="cost" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="0.00"
                  value={formData.cost}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Stock Quantity*</label>
                <input 
                  type="number" 
                  id="quantity" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="0"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="reorderLevel" className="text-sm font-medium text-gray-700">Minimum Stock Alert Level</label>
                <input 
                  type="number" 
                  id="reorderLevel" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="0"
                  value={formData.reorderLevel}
                  onChange={handleChange}
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">Expiry Date*</label>
                <input 
                  type="date" 
                  id="expiryDate" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="batchNumber" className="text-sm font-medium text-gray-700">Batch Number</label>
                <input 
                  type="text" 
                  id="batchNumber" 
                  className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter batch number"
                  value={formData.batchNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="dosage" className="text-sm font-medium text-gray-700">Dosage & Instructions*</label>
              <textarea 
                id="dosage" 
                rows={2}
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter dosage information and usage instructions"
                value={formData.dosage}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="flex items-center space-x-2 mt-4">
              <input 
                type="checkbox" 
                id="prescriptionRequired" 
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                checked={formData.prescriptionRequired}
                onChange={handleChange}
              />
              <label htmlFor="prescriptionRequired" className="text-sm font-medium text-gray-700">
                Prescription Required
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-6">
          <div className="flex flex-col space-y-2 mb-6">
            <label className="text-sm font-medium text-gray-700">Upload Medicine Image</label>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {imagePreview ? (
                  <div className="relative w-32 h-32 border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={imagePreview} 
                      alt="Medicine preview" 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
                    >
                      <XIcon className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                ) : (
                  <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                    <ImageIcon className="h-10 w-10 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <label className="btn-secondary inline-flex items-center gap-2 cursor-pointer">
                  <UploadIcon className="h-4 w-4" />
                  <span>Upload Image</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Upload a clear image of the medicine. Supported formats: JPG, PNG, GIF (max 5MB)
                </p>
              </div>
            </div>
          </div>
        
          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
            <textarea 
              id="description" 
              rows={3}
              className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter medicine description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-6">
          <h3 className="text-md font-medium text-gray-800 mb-4">AI-Powered Medicine Detection</h3>
          <div className="flex items-center gap-4">
            <button 
              type="button"
              className="btn-secondary flex items-center gap-2"
            >
              <CameraIcon className="h-4 w-4" />
              Scan Medicine
            </button>
            <p className="text-sm text-gray-500">
              Use AI to automatically detect medicine details from an image or package
            </p>
          </div>
        </div>
      </form>
    </div>
  );
} 