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
import { ArrowLeft, CreditCard } from "lucide-react";

export default function NewSubscriptionPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement subscription creation logic here
    
    setIsLoading(false);
    router.push("/admin/subscriptions");
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
        <h1 className="text-2xl font-bold">Add New Subscription</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Subscription Information
            </CardTitle>
            <CardDescription>
              Enter the details for the new subscription.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Store Selection */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="store">Select Store</Label>
                <Select name="store" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a store" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="store1">HealthCare Pharmacy</SelectItem>
                    <SelectItem value="store2">MediPlus</SelectItem>
                    <SelectItem value="store3">PharmaCare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Plan Selection */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="plan">Subscription Plan</Label>
                <Select name="plan" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Plan - $49.99/month</SelectItem>
                    <SelectItem value="professional">Professional Plan - $99.99/month</SelectItem>
                    <SelectItem value="enterprise">Enterprise Plan - $199.99/month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Subscription Period */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Subscription Period</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Payment Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentStatus">Payment Status</Label>
                  <Select name="paymentStatus" defaultValue="pending">
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Additional Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Additional Options</h3>
              <div className="space-y-2">
                <Label htmlFor="autoRenew">Auto-Renewal</Label>
                <Select name="autoRenew" defaultValue="enabled">
                  <SelectTrigger>
                    <SelectValue placeholder="Select auto-renewal option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enabled">Enabled</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>
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
                {isLoading ? "Creating..." : "Create Subscription"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
} 