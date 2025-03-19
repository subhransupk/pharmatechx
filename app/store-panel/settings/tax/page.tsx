"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  PercentIcon, 
  SaveIcon,
  PlusIcon,
  TrashIcon,
  DollarSignIcon,
  GlobeIcon,
  CalculatorIcon
} from "lucide-react";

// Tax rate type
interface TaxRate {
  id: string;
  name: string;
  rate: number;
  isDefault: boolean;
  applicableItems: "all" | "medicines" | "non-medicines";
}

// Currency settings type
interface CurrencySettings {
  code: string;
  symbol: string;
  position: "before" | "after";
  decimalSeparator: "." | ",";
  thousandsSeparator: "," | "." | " " | "'";
  decimalPlaces: number;
}

// Tax calculation method
type TaxCalculationMethod = "inclusive" | "exclusive";

// Sample tax rates data
const initialTaxRates: TaxRate[] = [
  {
    id: "1",
    name: "GST Standard",
    rate: 18,
    isDefault: true,
    applicableItems: "all"
  },
  {
    id: "2",
    name: "GST Reduced",
    rate: 12,
    isDefault: false,
    applicableItems: "medicines"
  },
  {
    id: "3",
    name: "GST Exempt",
    rate: 0,
    isDefault: false,
    applicableItems: "medicines"
  }
];

// Sample currency settings
const initialCurrencySettings: CurrencySettings = {
  code: "INR",
  symbol: "₹",
  position: "before",
  decimalSeparator: ".",
  thousandsSeparator: ",",
  decimalPlaces: 2
};

export default function TaxSettingsPage() {
  const [taxRates, setTaxRates] = useState<TaxRate[]>(initialTaxRates);
  const [currencySettings, setCurrencySettings] = useState<CurrencySettings>(initialCurrencySettings);
  const [taxCalculationMethod, setTaxCalculationMethod] = useState<TaxCalculationMethod>("exclusive");
  const [newTaxRate, setNewTaxRate] = useState<Omit<TaxRate, "id">>({
    name: "",
    rate: 0,
    isDefault: false,
    applicableItems: "all"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAddTaxForm, setShowAddTaxForm] = useState(false);

  // Handle currency settings change
  const handleCurrencyChange = (field: keyof CurrencySettings, value: any) => {
    setCurrencySettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle new tax rate change
  const handleNewTaxRateChange = (field: keyof Omit<TaxRate, "id">, value: any) => {
    setNewTaxRate(prev => ({
      ...prev,
      [field]: value
    }));

    // If setting as default, update other tax rates
    if (field === "isDefault" && value === true) {
      setNewTaxRate(prev => ({
        ...prev,
        isDefault: true
      }));
    }
  };

  // Add new tax rate
  const addTaxRate = () => {
    if (!newTaxRate.name || newTaxRate.rate < 0) return;

    const newTax: TaxRate = {
      id: Date.now().toString(),
      ...newTaxRate
    };

    // If new tax is default, update other taxes
    if (newTax.isDefault) {
      setTaxRates(prev => 
        prev.map(tax => ({
          ...tax,
          isDefault: false
        }))
      );
    }

    setTaxRates(prev => [...prev, newTax]);
    setNewTaxRate({
      name: "",
      rate: 0,
      isDefault: false,
      applicableItems: "all"
    });
    setShowAddTaxForm(false);
  };

  // Remove tax rate
  const removeTaxRate = (id: string) => {
    const taxToRemove = taxRates.find(tax => tax.id === id);
    
    // If removing default tax, set another one as default
    if (taxToRemove?.isDefault && taxRates.length > 1) {
      const remainingTaxes = taxRates.filter(tax => tax.id !== id);
      remainingTaxes[0].isDefault = true;
      setTaxRates(remainingTaxes);
    } else {
      setTaxRates(taxRates.filter(tax => tax.id !== id));
    }
  };

  // Set tax as default
  const setDefaultTax = (id: string) => {
    setTaxRates(prev => 
      prev.map(tax => ({
        ...tax,
        isDefault: tax.id === id
      }))
    );
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Show success message (in a real app, you'd use a toast notification)
      alert("Tax and currency settings updated successfully!");
    }, 1000);
  };

  // Format currency example
  const formatCurrencyExample = (amount: number): string => {
    const formattedAmount = amount.toFixed(currencySettings.decimalPlaces);
    const [integerPart, decimalPart] = formattedAmount.split('.');
    
    // Format integer part with thousands separator
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, currencySettings.thousandsSeparator);
    
    // Combine with decimal part using the decimal separator
    const formattedNumber = decimalPart 
      ? `${formattedIntegerPart}${currencySettings.decimalSeparator}${decimalPart}`
      : formattedIntegerPart;
    
    // Add currency symbol based on position
    return currencySettings.position === "before" 
      ? `${currencySettings.symbol}${formattedNumber}` 
      : `${formattedNumber} ${currencySettings.symbol}`;
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
          <h1 className="text-2xl font-bold text-gray-900">Currency & Tax Settings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure currency format, tax rates, and calculation methods
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Currency Settings */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <DollarSignIcon className="h-5 w-5 mr-2 text-primary-500" />
            Currency Settings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="currencyCode" className="block text-sm font-medium text-gray-700 mb-1">
                Currency Code
              </label>
              <select
                id="currencyCode"
                value={currencySettings.code}
                onChange={(e) => handleCurrencyChange("code", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="INR">Indian Rupee (INR)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="AUD">Australian Dollar (AUD)</option>
                <option value="CAD">Canadian Dollar (CAD)</option>
              </select>
            </div>
            <div>
              <label htmlFor="currencySymbol" className="block text-sm font-medium text-gray-700 mb-1">
                Currency Symbol
              </label>
              <input
                type="text"
                id="currencySymbol"
                value={currencySettings.symbol}
                onChange={(e) => handleCurrencyChange("symbol", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label htmlFor="symbolPosition" className="block text-sm font-medium text-gray-700 mb-1">
                Symbol Position
              </label>
              <select
                id="symbolPosition"
                value={currencySettings.position}
                onChange={(e) => handleCurrencyChange("position", e.target.value as "before" | "after")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="before">Before amount (₹100)</option>
                <option value="after">After amount (100 ₹)</option>
              </select>
            </div>
            <div>
              <label htmlFor="decimalPlaces" className="block text-sm font-medium text-gray-700 mb-1">
                Decimal Places
              </label>
              <select
                id="decimalPlaces"
                value={currencySettings.decimalPlaces}
                onChange={(e) => handleCurrencyChange("decimalPlaces", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <label htmlFor="decimalSeparator" className="block text-sm font-medium text-gray-700 mb-1">
                Decimal Separator
              </label>
              <select
                id="decimalSeparator"
                value={currencySettings.decimalSeparator}
                onChange={(e) => handleCurrencyChange("decimalSeparator", e.target.value as "." | ",")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value=".">Period (.)</option>
                <option value=",">Comma (,)</option>
              </select>
            </div>
            <div>
              <label htmlFor="thousandsSeparator" className="block text-sm font-medium text-gray-700 mb-1">
                Thousands Separator
              </label>
              <select
                id="thousandsSeparator"
                value={currencySettings.thousandsSeparator}
                onChange={(e) => handleCurrencyChange("thousandsSeparator", e.target.value as "," | "." | " " | "'")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value=",">Comma (,)</option>
                <option value=".">Period (.)</option>
                <option value=" ">Space ( )</option>
                <option value="'">Apostrophe (')</option>
              </select>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Preview</h3>
            <div className="flex items-center space-x-6">
              <div>
                <span className="text-xs text-gray-500">Small Amount:</span>
                <p className="text-lg font-medium text-gray-900">{formatCurrencyExample(42.5)}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Large Amount:</span>
                <p className="text-lg font-medium text-gray-900">{formatCurrencyExample(1234567.89)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Calculation Method */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <CalculatorIcon className="h-5 w-5 mr-2 text-primary-500" />
            Tax Calculation Method
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="taxCalculationMethod"
                  value="exclusive"
                  checked={taxCalculationMethod === "exclusive"}
                  onChange={() => setTaxCalculationMethod("exclusive")}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Exclusive (Tax added to product price)
                </span>
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="taxCalculationMethod"
                  value="inclusive"
                  checked={taxCalculationMethod === "inclusive"}
                  onChange={() => setTaxCalculationMethod("inclusive")}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Inclusive (Tax included in product price)
                </span>
              </label>
            </div>
            
            <div className="mt-2 text-sm text-gray-500">
              <p>
                <strong>Exclusive:</strong> If a product costs {formatCurrencyExample(100)} and tax is 18%, the final price will be {formatCurrencyExample(118)}.
              </p>
              <p className="mt-1">
                <strong>Inclusive:</strong> If a product costs {formatCurrencyExample(118)} and tax is 18%, the base price is {formatCurrencyExample(100)} and tax is {formatCurrencyExample(18)}.
              </p>
            </div>
          </div>
        </div>

        {/* Tax Rates */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <PercentIcon className="h-5 w-5 mr-2 text-primary-500" />
              Tax Rates
            </h2>
            <button
              type="button"
              onClick={() => setShowAddTaxForm(true)}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <PlusIcon className="h-4 w-4 mr-1" />
              Add Tax Rate
            </button>
          </div>
          
          {/* Add Tax Form */}
          {showAddTaxForm && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-md font-medium text-gray-800 mb-3">Add New Tax Rate</h3>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-4">
                  <label htmlFor="taxName" className="block text-sm font-medium text-gray-700 mb-1">
                    Tax Name*
                  </label>
                  <input
                    type="text"
                    id="taxName"
                    value={newTaxRate.name}
                    onChange={(e) => handleNewTaxRateChange("name", e.target.value)}
                    placeholder="e.g. GST Standard"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700 mb-1">
                    Rate (%)*
                  </label>
                  <input
                    type="number"
                    id="taxRate"
                    min="0"
                    max="100"
                    step="0.01"
                    value={newTaxRate.rate}
                    onChange={(e) => handleNewTaxRateChange("rate", parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="applicableItems" className="block text-sm font-medium text-gray-700 mb-1">
                    Applicable To
                  </label>
                  <select
                    id="applicableItems"
                    value={newTaxRate.applicableItems}
                    onChange={(e) => handleNewTaxRateChange("applicableItems", e.target.value as "all" | "medicines" | "non-medicines")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="all">All Items</option>
                    <option value="medicines">Medicines Only</option>
                    <option value="non-medicines">Non-Medicines Only</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newTaxRate.isDefault}
                      onChange={(e) => handleNewTaxRateChange("isDefault", e.target.checked)}
                      className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Set as Default
                    </span>
                  </label>
                </div>
                <div className="md:col-span-1">
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={addTaxRate}
                      disabled={!newTaxRate.name || newTaxRate.rate < 0}
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddTaxForm(false)}
                      className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Tax Rates List */}
          {taxRates.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tax Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rate
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicable To
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {taxRates.map((tax) => (
                    <tr key={tax.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {tax.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {tax.rate}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {tax.applicableItems === "all" ? "All Items" : 
                         tax.applicableItems === "medicines" ? "Medicines Only" : 
                         "Non-Medicines Only"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="defaultTax"
                            checked={tax.isDefault}
                            onChange={() => setDefaultTax(tax.id)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            {tax.isDefault ? "Default" : "Set as default"}
                          </span>
                        </label>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          type="button"
                          onClick={() => removeTaxRate(tax.id)}
                          className="text-red-600 hover:text-red-900"
                          disabled={taxRates.length === 1 && tax.isDefault}
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
              No tax rates added yet. Add your first tax rate above.
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