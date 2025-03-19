"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  GlobeIcon, 
  SaveIcon,
  CalendarIcon,
  ClockIcon,
  LanguagesIcon,
  MapPinIcon
} from "lucide-react";

// Regional settings type
interface RegionalSettings {
  language: string;
  dateFormat: string;
  timeFormat: string;
  timezone: string;
  firstDayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
  measurementUnit: "metric" | "imperial";
  numberFormat: string;
}

// Sample regional settings
const initialRegionalSettings: RegionalSettings = {
  language: "en-IN",
  dateFormat: "DD/MM/YYYY",
  timeFormat: "hh:mm A",
  timezone: "Asia/Kolkata",
  firstDayOfWeek: 0, // Sunday
  measurementUnit: "metric",
  numberFormat: "en-IN"
};

// Language options
const languageOptions = [
  { value: "en-IN", label: "English (India)" },
  { value: "en-US", label: "English (United States)" },
  { value: "en-GB", label: "English (United Kingdom)" },
  { value: "hi-IN", label: "Hindi" },
  { value: "ta-IN", label: "Tamil" },
  { value: "te-IN", label: "Telugu" },
  { value: "bn-IN", label: "Bengali" },
  { value: "mr-IN", label: "Marathi" },
  { value: "gu-IN", label: "Gujarati" }
];

// Date format options
const dateFormatOptions = [
  { value: "DD/MM/YYYY", label: "DD/MM/YYYY (31/12/2023)", example: "31/12/2023" },
  { value: "MM/DD/YYYY", label: "MM/DD/YYYY (12/31/2023)", example: "12/31/2023" },
  { value: "YYYY-MM-DD", label: "YYYY-MM-DD (2023-12-31)", example: "2023-12-31" },
  { value: "DD-MMM-YYYY", label: "DD-MMM-YYYY (31-Dec-2023)", example: "31-Dec-2023" },
  { value: "DD MMM, YYYY", label: "DD MMM, YYYY (31 Dec, 2023)", example: "31 Dec, 2023" }
];

// Time format options
const timeFormatOptions = [
  { value: "hh:mm A", label: "12-hour (01:30 PM)", example: "01:30 PM" },
  { value: "HH:mm", label: "24-hour (13:30)", example: "13:30" }
];

// Timezone options (common Indian timezones)
const timezoneOptions = [
  { value: "Asia/Kolkata", label: "Indian Standard Time (IST)" },
  { value: "Asia/Dubai", label: "Gulf Standard Time (GST)" },
  { value: "Asia/Singapore", label: "Singapore Time (SGT)" },
  { value: "Europe/London", label: "Greenwich Mean Time (GMT)" },
  { value: "America/New_York", label: "Eastern Time (ET)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
  { value: "Australia/Sydney", label: "Australian Eastern Time (AET)" }
];

// First day of week options
const weekdayOptions = [
  { value: 0, label: "Sunday" },
  { value: 1, label: "Monday" },
  { value: 2, label: "Tuesday" },
  { value: 3, label: "Wednesday" },
  { value: 4, label: "Thursday" },
  { value: 5, label: "Friday" },
  { value: 6, label: "Saturday" }
];

// Number format options
const numberFormatOptions = [
  { value: "en-IN", label: "Indian (1,23,456.78)", example: "1,23,456.78" },
  { value: "en-US", label: "US/International (123,456.78)", example: "123,456.78" }
];

export default function RegionalSettingsPage() {
  const [settings, setSettings] = useState<RegionalSettings>(initialRegionalSettings);
  const [isLoading, setIsLoading] = useState(false);

  // Handle settings change
  const handleSettingChange = (field: keyof RegionalSettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Show success message (in a real app, you'd use a toast notification)
      alert("Regional settings updated successfully!");
    }, 1000);
  };

  // Format current date based on selected format
  const formatCurrentDate = (): string => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    switch (settings.dateFormat) {
      case "DD/MM/YYYY":
        return `${day}/${month}/${year}`;
      case "MM/DD/YYYY":
        return `${month}/${day}/${year}`;
      case "YYYY-MM-DD":
        return `${year}-${month}-${day}`;
      case "DD-MMM-YYYY":
        return `${day}-${monthNames[now.getMonth()]}-${year}`;
      case "DD MMM, YYYY":
        return `${day} ${monthNames[now.getMonth()]}, ${year}`;
      default:
        return `${day}/${month}/${year}`;
    }
  };

  // Format current time based on selected format
  const formatCurrentTime = (): string => {
    const now = new Date();
    const hours24 = now.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    
    switch (settings.timeFormat) {
      case "hh:mm A":
        return `${hours12.toString().padStart(2, '0')}:${minutes} ${ampm}`;
      case "HH:mm":
        return `${hours24.toString().padStart(2, '0')}:${minutes}`;
      default:
        return `${hours12.toString().padStart(2, '0')}:${minutes} ${ampm}`;
    }
  };

  // Format number based on selected format
  const formatNumber = (num: number): string => {
    try {
      return new Intl.NumberFormat(settings.numberFormat).format(num);
    } catch (error) {
      return num.toString();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Link 
          href="/store-panel/settings" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Settings
        </Link>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Regional Settings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure language, date format, and other localization preferences
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Language Settings */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <LanguagesIcon className="h-5 w-5 mr-2 text-primary-500" />
            Language Settings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                Display Language
              </label>
              <select
                id="language"
                value={settings.language}
                onChange={(e) => handleSettingChange("language", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                {languageOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                This will change the language for the entire application interface.
              </p>
            </div>
            <div>
              <label htmlFor="numberFormat" className="block text-sm font-medium text-gray-700 mb-1">
                Number Format
              </label>
              <select
                id="numberFormat"
                value={settings.numberFormat}
                onChange={(e) => handleSettingChange("numberFormat", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                {numberFormatOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Example: {formatNumber(123456.78)}
              </p>
            </div>
          </div>
        </div>

        {/* Date & Time Settings */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2 text-primary-500" />
            Date & Time Settings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 mb-1">
                Date Format
              </label>
              <select
                id="dateFormat"
                value={settings.dateFormat}
                onChange={(e) => handleSettingChange("dateFormat", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                {dateFormatOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Today: {formatCurrentDate()}
              </p>
            </div>
            <div>
              <label htmlFor="timeFormat" className="block text-sm font-medium text-gray-700 mb-1">
                Time Format
              </label>
              <select
                id="timeFormat"
                value={settings.timeFormat}
                onChange={(e) => handleSettingChange("timeFormat", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                {timeFormatOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Current time: {formatCurrentTime()}
              </p>
            </div>
            <div>
              <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                Timezone
              </label>
              <select
                id="timezone"
                value={settings.timezone}
                onChange={(e) => handleSettingChange("timezone", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                {timezoneOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                This affects all date and time calculations.
              </p>
            </div>
            <div>
              <label htmlFor="firstDayOfWeek" className="block text-sm font-medium text-gray-700 mb-1">
                First Day of Week
              </label>
              <select
                id="firstDayOfWeek"
                value={settings.firstDayOfWeek}
                onChange={(e) => handleSettingChange("firstDayOfWeek", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                {weekdayOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                This affects calendars and weekly reports.
              </p>
            </div>
          </div>
        </div>

        {/* Measurement Settings */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <MapPinIcon className="h-5 w-5 mr-2 text-primary-500" />
            Measurement Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Measurement Unit
              </label>
              <div className="flex items-center space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="measurementUnit"
                    value="metric"
                    checked={settings.measurementUnit === "metric"}
                    onChange={() => handleSettingChange("measurementUnit", "metric")}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Metric (kg, cm, ml)
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="measurementUnit"
                    value="imperial"
                    checked={settings.measurementUnit === "imperial"}
                    onChange={() => handleSettingChange("measurementUnit", "imperial")}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Imperial (lb, in, fl oz)
                  </span>
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                This affects how weights and measures are displayed throughout the application.
              </p>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <GlobeIcon className="h-5 w-5 mr-2 text-primary-500" />
            Preview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Date & Time</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-xs text-gray-500">Date:</span>
                  <p className="text-sm font-medium text-gray-900">{formatCurrentDate()}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Time:</span>
                  <p className="text-sm font-medium text-gray-900">{formatCurrentTime()}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Numbers & Measurements</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-xs text-gray-500">Large Number:</span>
                  <p className="text-sm font-medium text-gray-900">{formatNumber(1234567.89)}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Weight Example:</span>
                  <p className="text-sm font-medium text-gray-900">
                    {settings.measurementUnit === "metric" ? "500 g" : "1.1 lb"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3">
          <Link
            href="/store-panel/settings"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
} 