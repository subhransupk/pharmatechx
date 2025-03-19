import { 
  SearchIcon, 
  FilterIcon, 
  DownloadIcon, 
  EyeIcon, 
  PrinterIcon,
  ChevronRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  AlertTriangleIcon
} from "lucide-react";
import Link from "next/link";

export default function InvoiceHistoryPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Invoice History</h1>
        <div className="flex items-center space-x-2">
          <Link href="/store-panel/billing/new-sale" className="btn-primary text-sm py-1.5 flex items-center gap-1">
            New Sale
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input 
                type="search" 
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                placeholder="Search by invoice #, customer..."
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FilterIcon className="w-4 h-4 text-gray-400" />
              </div>
              <select className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5">
                <option value="">All Payment Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CalendarIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input 
                type="date" 
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CalendarIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input 
                type="date" 
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
              />
            </div>
            <button className="btn-secondary text-sm py-2 flex items-center gap-1">
              <DownloadIcon className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="card p-6">
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <InvoiceRow 
                id="INV-2023-045"
                date="Today, 10:30 AM"
                customer="John Doe"
                customerPhone="9876543210"
                items={3}
                amount="₹450.00"
                paymentMethod="Cash"
                status="paid"
              />
              <InvoiceRow 
                id="INV-2023-044"
                date="Today, 09:15 AM"
                customer="Jane Smith"
                customerPhone="8765432109"
                items={2}
                amount="₹280.00"
                paymentMethod="UPI"
                status="paid"
              />
              <InvoiceRow 
                id="INV-2023-043"
                date="Today, 08:45 AM"
                customer="Robert Johnson"
                customerPhone="7654321098"
                items={5}
                amount="₹750.00"
                paymentMethod="Credit Card"
                status="pending"
              />
              <InvoiceRow 
                id="INV-2023-042"
                date="Yesterday, 05:30 PM"
                customer="Emily Davis"
                customerPhone="6543210987"
                items={1}
                amount="₹320.00"
                paymentMethod="Cash"
                status="paid"
              />
              <InvoiceRow 
                id="INV-2023-041"
                date="Yesterday, 03:15 PM"
                customer="Michael Wilson"
                customerPhone="5432109876"
                items={4}
                amount="₹1,250.00"
                paymentMethod="Credit"
                status="overdue"
              />
              <InvoiceRow 
                id="INV-2023-040"
                date="Yesterday, 01:45 PM"
                customer="Sarah Johnson"
                customerPhone="4321098765"
                items={2}
                amount="₹180.00"
                paymentMethod="UPI"
                status="cancelled"
              />
              <InvoiceRow 
                id="INV-2023-039"
                date="2 days ago, 11:30 AM"
                customer="David Brown"
                customerPhone="3210987654"
                items={3}
                amount="₹520.00"
                paymentMethod="Debit Card"
                status="paid"
              />
              <InvoiceRow 
                id="INV-2023-038"
                date="2 days ago, 10:15 AM"
                customer="Lisa Miller"
                customerPhone="2109876543"
                items={6}
                amount="₹890.00"
                paymentMethod="Cash"
                status="paid"
              />
              <InvoiceRow 
                id="INV-2023-037"
                date="3 days ago, 04:30 PM"
                customer="James Wilson"
                customerPhone="1098765432"
                items={2}
                amount="₹420.00"
                paymentMethod="Credit"
                status="pending"
              />
              <InvoiceRow 
                id="INV-2023-036"
                date="3 days ago, 02:45 PM"
                customer="Jennifer Taylor"
                customerPhone="0987654321"
                items={4}
                amount="₹650.00"
                paymentMethod="UPI"
                status="paid"
              />
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">45</span> results
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-primary-500 bg-primary-50 rounded-md text-sm font-medium text-primary-600">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InvoiceRowProps {
  id: string;
  date: string;
  customer: string;
  customerPhone: string;
  items: number;
  amount: string;
  paymentMethod: string;
  status: 'paid' | 'pending' | 'overdue' | 'cancelled';
}

function InvoiceRow({ id, date, customer, customerPhone, items, amount, paymentMethod, status }: InvoiceRowProps) {
  const getStatusBadge = () => {
    switch (status) {
      case 'paid':
        return (
          <span className="px-2.5 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            <CheckCircleIcon className="h-3.5 w-3.5 mr-1" />
            Paid
          </span>
        );
      case 'pending':
        return (
          <span className="px-2.5 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            <ClockIcon className="h-3.5 w-3.5 mr-1" />
            Pending
          </span>
        );
      case 'overdue':
        return (
          <span className="px-2.5 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            <AlertTriangleIcon className="h-3.5 w-3.5 mr-1" />
            Overdue
          </span>
        );
      case 'cancelled':
        return (
          <span className="px-2.5 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            <XCircleIcon className="h-3.5 w-3.5 mr-1" />
            Cancelled
          </span>
        );
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-primary-600 hover:text-primary-800 cursor-pointer">
        {id}
      </td>
      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">{date}</td>
      <td className="px-4 py-3.5 whitespace-nowrap">
        <div>
          <div className="text-sm font-medium text-gray-900">{customer}</div>
          <div className="text-xs text-gray-500">{customerPhone}</div>
        </div>
      </td>
      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">{items} items</td>
      <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">{amount}</td>
      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">{paymentMethod}</td>
      <td className="px-4 py-3.5 whitespace-nowrap">
        {getStatusBadge()}
      </td>
      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
            <EyeIcon className="h-4 w-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
            <PrinterIcon className="h-4 w-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
            <DownloadIcon className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
} 