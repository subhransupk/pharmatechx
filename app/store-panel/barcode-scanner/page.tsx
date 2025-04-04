"use client";

import { useState, useRef } from "react";
import { 
  CameraIcon, 
  SearchIcon, 
  RefreshCwIcon,
  SaveIcon,
  XIcon,
  ImageIcon,
  BarcodeIcon
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BarcodeScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedCode, setScannedCode] = useState("");
  const [scannedImage, setScannedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const startScanning = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsScanning(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopScanning = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScannedCode(e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setScannedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving barcode:", scannedCode);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Barcode Scanner</h1>
        <div className="flex gap-4">
          <button
            onClick={isScanning ? stopScanning : startScanning}
            className={`${
              isScanning 
                ? "bg-red-600 hover:bg-red-700" 
                : "bg-primary-600 hover:bg-primary-700"
            } text-white px-4 py-2 rounded-lg flex items-center`}
          >
            {isScanning ? (
              <>
                <XIcon className="h-5 w-5 mr-2" />
                Stop Scanning
              </>
            ) : (
              <>
                <CameraIcon className="h-5 w-5 mr-2" />
                Start Scanning
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scanner/Preview Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Scanner</h2>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {isScanning ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            ) : scannedImage ? (
              <img
                src={scannedImage}
                alt="Scanned"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <CameraIcon className="w-12 h-12 text-gray-400" />
              </div>
            )}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50"
            >
              <ImageIcon className="h-5 w-5 mr-2" />
              Choose Image
            </label>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Results</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scanned Barcode
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BarcodeIcon className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  value={scannedCode}
                  onChange={handleManualInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                  placeholder="Enter or scan barcode..."
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                <SaveIcon className="h-5 w-5 mr-2" />
                Save
              </button>
              <button
                onClick={() => {
                  setScannedCode("");
                  setScannedImage(null);
                }}
                className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-50"
              >
                <RefreshCwIcon className="h-5 w-5 mr-2" />
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 