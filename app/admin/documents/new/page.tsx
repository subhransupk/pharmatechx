"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, FileText, Upload } from "lucide-react";

export default function NewDocumentPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement document creation logic here
    
    setIsLoading(false);
    router.push("/admin/documents");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">New Document</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Document Information
            </CardTitle>
            <CardDescription>
              Upload and configure your new document.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Document Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Document Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Document Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter document name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="version">Version</Label>
                  <Input
                    id="version"
                    name="version"
                    placeholder="e.g., 1.0"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Document Type and Category */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Classification</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Document Type</Label>
                  <Select name="type" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guide">Guide</SelectItem>
                      <SelectItem value="policy">Policy</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user_documentation">User Documentation</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="internal">Internal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">File Upload</h3>
              <div className="space-y-2">
                <Label htmlFor="file">Document File</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                    required
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Upload
                  </Button>
                </div>
                {file && (
                  <p className="text-sm text-gray-500">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
            </div>

            {/* Status and Visibility */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Status and Visibility</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select name="status" defaultValue="draft">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="review">In Review</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visibility">Visibility</Label>
                  <Select name="visibility" defaultValue="private">
                    <SelectTrigger>
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="internal">Internal</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-green-500 hover:bg-green-600 text-black font-medium"
              >
                {isLoading ? "Uploading..." : "Upload Document"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
} 