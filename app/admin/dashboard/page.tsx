import { 
  StoreIcon, 
  UsersIcon, 
  CreditCardIcon, 
  AlertTriangleIcon,
  TrendingUpIcon,
  DollarSignIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronRightIcon,
  PackageIcon,
  ActivityIcon,
  ClockIcon
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center space-x-2">
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 shadow-sm">
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Total Stores" 
          value="156" 
          change="+8.2%" 
          trend="up"
          icon={<StoreIcon className="h-5 w-5 text-primary-500" />}
        />
        <StatCard 
          title="Active Subscriptions" 
          value="142" 
          change="+5.3%" 
          trend="up"
          icon={<PackageIcon className="h-5 w-5 text-secondary-500" />}
        />
        <StatCard 
          title="Total Revenue" 
          value="₹2.45L" 
          change="+12.5%" 
          trend="up"
          icon={<DollarSignIcon className="h-5 w-5 text-green-500" />}
        />
        <StatCard 
          title="Pending Approvals" 
          value="8" 
          change="-2" 
          trend="down"
          icon={<AlertTriangleIcon className="h-5 w-5 text-amber-500" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Monthly Revenue</h2>
            <button className="btn-secondary text-sm py-1.5">View Report</button>
          </div>
          <div className="h-64 flex items-end space-x-2">
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary-100 rounded-t-lg h-20 hover:bg-primary-200 transition-colors"></div>
              <span className="text-xs text-center mt-2 text-gray-600">Jan</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary-200 rounded-t-lg h-32 hover:bg-primary-300 transition-colors"></div>
              <span className="text-xs text-center mt-2 text-gray-600">Feb</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary-300 rounded-t-lg h-56 hover:bg-primary-400 transition-colors"></div>
              <span className="text-xs text-center mt-2 text-gray-600">Mar</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary-400 rounded-t-lg h-40 hover:bg-primary-500 transition-colors"></div>
              <span className="text-xs text-center mt-2 text-gray-600">Apr</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary-500 rounded-t-lg h-48 hover:bg-primary-600 transition-colors"></div>
              <span className="text-xs text-center mt-2 text-gray-600">May</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary-400 rounded-t-lg h-36 hover:bg-primary-500 transition-colors"></div>
              <span className="text-xs text-center mt-2 text-gray-600">Jun</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Subscription Plans</h2>
            <button className="btn-secondary text-sm py-1.5">View All</button>
          </div>
          <div className="space-y-5">
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Premium Plan</span>
                  <span className="text-sm font-medium text-primary-600">65%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Basic Plan</span>
                  <span className="text-sm font-medium text-primary-600">48%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "48%" }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Trial Users</span>
                  <span className="text-sm font-medium text-primary-600">42%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Store Registrations</h2>
            <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
              View All
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">MediCare Plus</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Mumbai, MH</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Premium</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">HealthCare Hub</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Delhi, DL</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Basic</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">PharmaCare</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Bangalore, KA</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Premium</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">MediStore</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Chennai, TN</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Basic</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Suspended</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">System Alerts</h2>
            <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
              View All
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <AlertTriangleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-red-800">High Server Load</h3>
                <p className="text-xs text-red-700 mt-1">Server CPU usage at 85%</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
              <ClockIcon className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-amber-800">Database Backup Required</h3>
                <p className="text-xs text-amber-700 mt-1">Last backup was 24 hours ago</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <ActivityIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-blue-800">API Rate Limit Warning</h3>
                <p className="text-xs text-blue-700 mt-1">Approaching 80% of daily limit</p>
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
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-full">
          {icon}
        </div>
      </div>
      <div className="flex items-center mt-4">
        {trend === 'up' ? (
          <ArrowUpIcon className="h-4 w-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="h-4 w-4 text-red-500" />
        )}
        <span className={`text-sm font-medium ml-1 ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
} 