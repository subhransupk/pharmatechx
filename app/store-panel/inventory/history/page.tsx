import { 
  SearchIcon, 
  FilterIcon, 
  DownloadIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronRightIcon
} from "lucide-react";

export default function StockMovementHistoryPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Stock Movement History</h1>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <DownloadIcon className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-4 h-4 text-gray-400" />
            </div>
            <input 
              type="search" 
              className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
              placeholder="Search by medicine name, batch, or reference..."
            />
          </div>
          <div className="flex-shrink-0 flex gap-2">
            <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5">
              <option value="">All Types</option>
              <option value="restock">Restock</option>
              <option value="sale">Sale</option>
              <option value="adjustment">Adjustment</option>
              <option value="return">Return</option>
              <option value="expired">Expired</option>
            </select>
            <div className="relative">
              <input 
                type="date" 
                className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5"
              />
            </div>
            <button className="bg-primary-50 text-primary-600 p-2.5 rounded-lg border border-gray-200 hover:bg-primary-100 transition-colors">
              <FilterIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch No.</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2023-03-15 14:30</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">Paracetamol 500mg</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">PCM2023-45</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Restock
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-green-600 flex items-center">
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                  +50
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">INV-2023-001</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">John Doe</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  <ChevronRightIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2023-03-14 10:15</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">Amoxicillin 250mg</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">AMX2023-78</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Sale
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-red-600 flex items-center">
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                  -15
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">BILL-2023-045</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Jane Smith</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  <ChevronRightIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2023-03-12 16:45</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">Cetirizine 10mg</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">CET2023-12</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                    Adjustment
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-red-600 flex items-center">
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                  -8
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">ADJ-2023-012</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Robert Johnson</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  <ChevronRightIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2023-03-10 09:20</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">Omeprazole 20mg</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">OMP2022-56</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Expired
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-red-600 flex items-center">
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                  -25
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">EXP-2023-005</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Emily Davis</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  <ChevronRightIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2023-03-08 11:30</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">Aspirin 75mg</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">ASP2023-34</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Return
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-green-600 flex items-center">
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                  +10
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">RET-2023-008</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Michael Wilson</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  <ChevronRightIcon className="h-5 w-5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">42</span> entries
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-3 py-1 bg-primary-50 border border-primary-200 rounded-md text-sm text-primary-600 font-medium">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 