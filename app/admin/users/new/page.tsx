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
import { ArrowLeft, User } from "lucide-react";

export default function NewUserPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement user creation logic here
    
    setIsLoading(false);
    router.push("/admin/users");
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
        <h1 className="text-2xl font-bold">New User</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              User Information
            </CardTitle>
            <CardDescription>
              Enter the details for the new user.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Role and Department */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Role and Department</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select name="role" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="store_manager">Store Manager</SelectItem>
                      <SelectItem value="pharmacist">Pharmacist</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select name="department" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Store Assignment */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Store Assignment</h3>
              <div className="space-y-2">
                <Label htmlFor="store">Assigned Store</Label>
                <Select name="store" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select store" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="store1">HealthCare Pharmacy</SelectItem>
                    <SelectItem value="store2">MediPlus</SelectItem>
                    <SelectItem value="store3">PharmaCare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Account Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Account Settings</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
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
                {isLoading ? "Creating..." : "Create User"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
} 