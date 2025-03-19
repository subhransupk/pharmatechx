"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  ClockIcon, 
  PlusIcon,
  TrashIcon,
  SaveIcon,
  CalendarIcon
} from "lucide-react";

// Day of week type
type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

// Business hours type
interface BusinessHour {
  day: DayOfWeek;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
}

// Holiday type
interface Holiday {
  id: string;
  name: string;
  date: string;
  isFullDay: boolean;
  openTime?: string;
  closeTime?: string;
}

// Sample business hours data
const initialBusinessHours: BusinessHour[] = [
  { day: "monday", isOpen: true, openTime: "09:00", closeTime: "21:00" },
  { day: "tuesday", isOpen: true, openTime: "09:00", closeTime: "21:00" },
  { day: "wednesday", isOpen: true, openTime: "09:00", closeTime: "21:00" },
  { day: "thursday", isOpen: true, openTime: "09:00", closeTime: "21:00" },
  { day: "friday", isOpen: true, openTime: "09:00", closeTime: "21:00" },
  { day: "saturday", isOpen: true, openTime: "10:00", closeTime: "18:00" },
  { day: "sunday", isOpen: false, openTime: "10:00", closeTime: "18:00" },
];

// Sample holidays data
const initialHolidays: Holiday[] = [
  { id: "1", name: "New Year's Day", date: "2025-01-01", isFullDay: true },
  { id: "2", name: "Republic Day", date: "2025-01-26", isFullDay: true },
  { id: "3", name: "Independence Day", date: "2025-08-15", isFullDay: true },
  { id: "4", name: "Diwali", date: "2025-11-12", isFullDay: true },
  { id: "5", name: "Christmas", date: "2025-12-25", isFullDay: true },
];

export default function BusinessHoursPage() {
  const [businessHours, setBusinessHours] = useState<BusinessHour[]>(initialBusinessHours);
  const [holidays, setHolidays] = useState<Holiday[]>(initialHolidays);
  const [newHoliday, setNewHoliday] = useState<Omit<Holiday, "id">>({
    name: "",
    date: "",
    isFullDay: true,
    openTime: "10:00",
    closeTime: "18:00",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle business hours change
  const handleBusinessHourChange = (index: number, field: keyof BusinessHour, value: any) => {
    const updatedHours = [...businessHours];
    updatedHours[index] = { ...updatedHours[index], [field]: value };
    setBusinessHours(updatedHours);
  };

  // Handle new holiday change
  const handleNewHolidayChange = (field: keyof Omit<Holiday, "id">, value: any) => {
    setNewHoliday({ ...newHoliday, [field]: value });
  };

  // Add new holiday
  const addHoliday = () => {
    if (!newHoliday.name || !newHoliday.date) return;

    const holiday: Holiday = {
      id: Date.now().toString(),
      ...newHoliday,
    };

    setHolidays([...holidays, holiday]);
    setNewHoliday({
      name: "",
      date: "",
      isFullDay: true,
      openTime: "10:00",
      closeTime: "18:00",
    });
  };

  // Remove holiday
  const removeHoliday = (id: string) => {
    setHolidays(holidays.filter(holiday => holiday.id !== id));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Show success message (in a real app, you'd use a toast notification)
      alert("Business hours updated successfully!");
    }, 1000);
  };

  // Format day name
  const formatDayName = (day: DayOfWeek): string => {
    return day.charAt(0).toUpperCase() + day.slice(1);
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
          <h1 className="text-2xl font-bold text-gray-900">Business Hours</h1>
          <p className="text-sm text-gray-500 mt-1">
            Set your store's operating hours and holidays
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Regular Business Hours */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <ClockIcon className="h-5 w-5 mr-2 text-primary-500" />
            Regular Business Hours
          </h2>
          
          <div className="space-y-4">
            {businessHours.map((hour, index) => (
              <div key={hour.day} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3">
                  <span className="font-medium text-gray-700">{formatDayName(hour.day)}</span>
                </div>
                <div className="col-span-3">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={hour.isOpen}
                      onChange={(e) => handleBusinessHourChange(index, "isOpen", e.target.checked)}
                      className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {hour.isOpen ? "Open" : "Closed"}
                    </span>
                  </label>
                </div>
                <div className="col-span-3">
                  <input
                    type="time"
                    value={hour.openTime}
                    onChange={(e) => handleBusinessHourChange(index, "openTime", e.target.value)}
                    disabled={!hour.isOpen}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
                <div className="col-span-3">
                  <input
                    type="time"
                    value={hour.closeTime}
                    onChange={(e) => handleBusinessHourChange(index, "closeTime", e.target.value)}
                    disabled={!hour.isOpen}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Holidays */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2 text-primary-500" />
            Holidays
          </h2>
          
          {/* Add New Holiday */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-md font-medium text-gray-800 mb-3">Add New Holiday</h3>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-4">
                <label htmlFor="holidayName" className="block text-sm font-medium text-gray-700 mb-1">
                  Holiday Name*
                </label>
                <input
                  type="text"
                  id="holidayName"
                  value={newHoliday.name}
                  onChange={(e) => handleNewHolidayChange("name", e.target.value)}
                  placeholder="e.g. New Year's Day"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="md:col-span-3">
                <label htmlFor="holidayDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date*
                </label>
                <input
                  type="date"
                  id="holidayDate"
                  value={newHoliday.date}
                  onChange={(e) => handleNewHolidayChange("date", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={newHoliday.isFullDay ? "full" : "partial"}
                  onChange={(e) => handleNewHolidayChange("isFullDay", e.target.value === "full")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="full">Closed</option>
                  <option value="partial">Partial Hours</option>
                </select>
              </div>
              {!newHoliday.isFullDay && (
                <>
                  <div className="md:col-span-1">
                    <input
                      type="time"
                      value={newHoliday.openTime}
                      onChange={(e) => handleNewHolidayChange("openTime", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <input
                      type="time"
                      value={newHoliday.closeTime}
                      onChange={(e) => handleNewHolidayChange("closeTime", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </>
              )}
              <div className="md:col-span-1">
                <button
                  type="button"
                  onClick={addHoliday}
                  disabled={!newHoliday.name || !newHoliday.date}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add
                </button>
              </div>
            </div>
          </div>
          
          {/* Holiday List */}
          {holidays.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Holiday Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hours (if partial)
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {holidays.map((holiday) => (
                    <tr key={holiday.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {holiday.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(holiday.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {holiday.isFullDay ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Closed
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Partial Hours
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {!holiday.isFullDay && holiday.openTime && holiday.closeTime ? (
                          `${holiday.openTime} - ${holiday.closeTime}`
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          type="button"
                          onClick={() => removeHoliday(holiday.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No holidays added yet. Add your first holiday above.
            </div>
          )}
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