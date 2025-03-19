import { 
  DollarSignIcon, 
  ShoppingCartIcon, 
  ClockIcon, 
  AlertTriangleIcon,
  PlusIcon,
  SearchIcon,
  ChevronRightIcon,
  CalendarIcon
} from "lucide-react";
import Link from "next/link";

export default function BillingDashboardPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Billing Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Link href="/store-panel/billing/new-sale" className="btn-primary text-sm py-1.5 flex items-center gap-1">
            <PlusIcon className="h-4 w-4" />
            New Sale
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Today's Sales" 
          value="₹8,450" 
          change="+12.5%" 
          trend="up"
          icon={<DollarSignIcon className="h-5 w-5 text-primary-500" />}
        />
        <StatCard 
          title="Today's Orders" 
          value="24" 
          change="+8.2%" 
          trend="up"
          icon={<ShoppingCartIcon className="h-5 w-5 text-secondary-500" />}
        />
        <StatCard 
          title="Pending Payments" 
          value="₹3,250" 
          change="+15%" 
          trend="down"
          icon={<ClockIcon className="h-5 w-5 text-amber-500" />}
        />
        <StatCard 
          title="Overdue Payments" 
          value="₹1,120" 
          change="-5%" 
          trend="up"
          icon={<AlertTriangleIcon className="h-5 w-5 text-red-500" />}
        />
      </div>

      {/* Recent Transactions */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input 
                type="search" 
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-60 pl-10 p-2"
                placeholder="Search transactions..."
              />
            </div>
            <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
              <ChevronRightIcon className="h-4 w-4" />
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">#INV-2023-045</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">John Doe</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Today, 10:30 AM</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹450</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Cash</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  View
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">#INV-2023-044</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Jane Smith</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Today, 09:15 AM</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹280</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">UPI</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  View
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">#INV-2023-043</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Robert Johnson</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Today, 08:45 AM</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹750</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Credit Card</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  View
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">#INV-2023-042</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Emily Davis</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Yesterday, 05:30 PM</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹320</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Cash</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  View
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">#INV-2023-041</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Michael Wilson</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Yesterday, 03:15 PM</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹1,250</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">UPI</td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Overdue
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                  View
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Cash</span>
                  <span className="text-sm font-medium text-primary-600">45%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">UPI</span>
                  <span className="text-sm font-medium text-primary-600">30%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Credit/Debit Card</span>
                  <span className="text-sm font-medium text-primary-600">15%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Credit (Due)</span>
                  <span className="text-sm font-medium text-primary-600">10%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Due Collection</h2>
            <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
              <ChevronRightIcon className="h-4 w-4" />
              View All
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
              <ClockIcon className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-amber-800">John Smith</h3>
                  <p className="text-sm font-medium text-amber-800">₹1,250</p>
                </div>
                <p className="text-xs text-amber-700 mt-1">Due in 5 days (INV-2023-032)</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <AlertTriangleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-red-800">Michael Wilson</h3>
                  <p className="text-sm font-medium text-red-800">₹1,250</p>
                </div>
                <p className="text-xs text-red-700 mt-1">Overdue by 2 days (INV-2023-041)</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
              <ClockIcon className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-amber-800">Sarah Johnson</h3>
                  <p className="text-sm font-medium text-amber-800">₹750</p>
                </div>
                <p className="text-xs text-amber-700 mt-1">Due in 3 days (INV-2023-038)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

function StatCard({ title, value, change, trend, icon }: StatCardProps) {
  return (
    <div className="card p-6 hover:translate-y-[-2px] transition-all duration-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-primary-50">{icon}</div>
      </div>
      <div className="mt-4 flex items-center">
        {trend === 'up' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 13a1 1 0 110 2H7a1 1 0 01-1-1v-5a1 1 0 112 0v2.586l4.293-4.293a1 1 0 011.414 0L16 9.586V7a1 1 0 112 0v5a1 1 0 01-1 1h-5z" clipRule="evenodd" />
          </svg>
        )}
        <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-1">vs yesterday</span>
      </div>
    </div>
  );
} 