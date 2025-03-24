"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Settings,
  Mail,
  Lock,
  Globe,
  Bell,
  Shield,
  Database,
  Users,
  CreditCard,
  FileText,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              General Settings
            </CardTitle>
            <CardDescription>
              Configure basic system settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>System Name</Label>
              <Input placeholder="Enter system name" defaultValue="PharmaTechX" />
            </div>
            <div className="space-y-2">
              <Label>System Email</Label>
              <Input placeholder="Enter system email" defaultValue="admin@pharmatechx.com" />
            </div>
            <div className="space-y-2">
              <Label>Time Zone</Label>
              <Select defaultValue="utc">
                <SelectTrigger>
                  <SelectValue placeholder="Select time zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">Eastern Time</SelectItem>
                  <SelectItem value="pst">Pacific Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label>Maintenance Mode</Label>
              <Switch
                checked={maintenanceMode}
                onCheckedChange={setMaintenanceMode}
              />
            </div>
          </CardContent>
        </Card>

        {/* Email Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Settings
            </CardTitle>
            <CardDescription>
              Configure email server and notification settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>SMTP Server</Label>
              <Input placeholder="Enter SMTP server" defaultValue="smtp.example.com" />
            </div>
            <div className="space-y-2">
              <Label>SMTP Port</Label>
              <Input placeholder="Enter SMTP port" defaultValue="587" />
            </div>
            <div className="space-y-2">
              <Label>SMTP Username</Label>
              <Input placeholder="Enter SMTP username" />
            </div>
            <div className="space-y-2">
              <Label>SMTP Password</Label>
              <Input type="password" placeholder="Enter SMTP password" />
            </div>
            <div className="flex items-center justify-between">
              <Label>Email Notifications</Label>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Configure security and authentication settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Two-Factor Authentication</Label>
              <Switch
                checked={twoFactorAuth}
                onCheckedChange={setTwoFactorAuth}
              />
            </div>
            <div className="space-y-2">
              <Label>Session Timeout (minutes)</Label>
              <Input type="number" defaultValue="30" />
            </div>
            <div className="space-y-2">
              <Label>Password Expiry (days)</Label>
              <Input type="number" defaultValue="90" />
            </div>
            <div className="space-y-2">
              <Label>Failed Login Attempts</Label>
              <Input type="number" defaultValue="5" />
            </div>
          </CardContent>
        </Card>

        {/* Backup Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Backup Settings
            </CardTitle>
            <CardDescription>
              Configure system backup and data retention settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Automatic Backup</Label>
              <Switch
                checked={autoBackup}
                onCheckedChange={setAutoBackup}
              />
            </div>
            <div className="space-y-2">
              <Label>Backup Frequency</Label>
              <Select defaultValue="daily">
                <SelectTrigger>
                  <SelectValue placeholder="Select backup frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Backup Retention (days)</Label>
              <Input type="number" defaultValue="30" />
            </div>
            <div className="space-y-2">
              <Label>Backup Location</Label>
              <Input placeholder="Enter backup location" defaultValue="/backups" />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Settings
            </CardTitle>
            <CardDescription>
              Configure system notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Push Notifications</Label>
              <Switch
                checked={pushNotifications}
                onCheckedChange={setPushNotifications}
              />
            </div>
            <div className="space-y-2">
              <Label>Notification Types</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>System Alerts</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>User Activity</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Security Alerts</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              API Settings
            </CardTitle>
            <CardDescription>
              Configure API endpoints and authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>API Base URL</Label>
              <Input placeholder="Enter API base URL" defaultValue="https://api.pharmatechx.com" />
            </div>
            <div className="space-y-2">
              <Label>API Version</Label>
              <Input placeholder="Enter API version" defaultValue="v1" />
            </div>
            <div className="space-y-2">
              <Label>API Key</Label>
              <Input type="password" placeholder="Enter API key" />
            </div>
            <div className="flex items-center justify-between">
              <Label>Enable API Rate Limiting</Label>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 