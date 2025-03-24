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

export default function NewPaymentPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement payment creation logic here
    
    setIsLoading(false);
    router.push("/admin/payments");
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
        <h1 className="text-2xl font-bold">New Payment</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Information
            </CardTitle>
            <CardDescription>
              Enter the details for the new payment.
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

            {/* Payment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Payment Details</h3>
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
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select name="paymentMethod" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit_card">Credit Card</SelectItem>
                      <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Transaction Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="transactionId">Transaction ID</Label>
                  <Input
                    id="transactionId"
                    name="transactionId"
                    placeholder="Enter transaction ID"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select name="status" defaultValue="pending">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Additional Information</h3>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Input
                  id="notes"
                  name="notes"
                  placeholder="Enter any additional notes"
                />
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
                {isLoading ? "Processing..." : "Process Payment"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
} 