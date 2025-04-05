"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, Mail, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SupportPage = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubject("");
      setMessage("");
      alert("Your support request has been submitted. We'll get back to you soon!");
    }, 1500);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <MessageSquare className="w-8 h-8 text-green-600 mr-3" />
        <h1 className="text-3xl font-bold">Support Center</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-green-600 mr-2" />
              <CardTitle>Phone Support</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Available Monday to Friday, 9am - 6pm</p>
            <p className="text-xl font-semibold mt-2">+1 (800) 123-4567</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-green-600 mr-2" />
              <CardTitle>Email Support</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">We typically respond within 24 hours</p>
            <p className="text-xl font-semibold mt-2">support@pharmatechx.com</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-green-600 mr-2" />
              <CardTitle>Knowledge Base</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Browse our help articles and guides</p>
            <Button variant="outline" className="mt-2">
              View Articles
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Submit a Support Ticket</CardTitle>
              <CardDescription>
                Fill out the form below and our support team will get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief description of your issue"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please provide details about your issue"
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Ticket"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 text-green-600 mr-2" />
                <CardTitle>Frequently Asked Questions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-600 hover:underline">
                    How do I add a new medicine to inventory?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:underline">
                    How to process a refund?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:underline">
                    How to generate sales reports?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:underline">
                    How to manage staff permissions?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:underline">
                    How to set up payment gateways?
                  </a>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All FAQs
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupportPage; 