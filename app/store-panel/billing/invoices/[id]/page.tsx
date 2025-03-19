import { 
  ArrowLeftIcon, 
  PrinterIcon, 
  DownloadIcon, 
  MailIcon, 
  ShareIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function InvoiceDetailPage({ params, searchParams }: PageProps) {
  const invoiceId = params.id;
  
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/store-panel/billing/invoices" className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Invoices
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <MailIcon className="h-4 w-4" />
            Email
          </button>
          <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <ShareIcon className="h-4 w-4" />
            Share
          </button>
          <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <DownloadIcon className="h-4 w-4" />
            Download
          </button>
          <button className="btn-primary text-sm py-1.5 flex items-center gap-1">
            <PrinterIcon className="h-4 w-4" />
            Print
          </button>
        </div>
      </div>

      {/* Invoice Card */}
      <div className="card p-8 border border-gray-200">
        {/* Invoice Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-gray-900">Invoice #{invoiceId}</h1>
              <span className="px-2.5 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                <CheckCircleIcon className="h-3.5 w-3.5 mr-1" />
                Paid
              </span>
            </div>
            <p className="text-sm text-gray-600">Date: May 15, 2023 | 10:30 AM</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-col items-end">
              <h2 className="text-xl font-bold text-primary-600">PharmaTechX</h2>
              <p className="text-sm text-gray-600">123 Medical Plaza, Sector 5</p>
              <p className="text-sm text-gray-600">New Delhi, 110001</p>
              <p className="text-sm text-gray-600">GST: 07AABCS1429B1Z1</p>
            </div>
          </div>
        </div>

        {/* Customer & Payment Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-200">
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">Customer Information</h3>
            <h4 className="text-base font-semibold text-gray-900 mb-1">John Doe</h4>
            <div className="space-y-1">
              <div className="flex items-center text-sm text-gray-600">
                <PhoneIcon className="h-4 w-4 mr-2 text-gray-400" />
                +91 9876543210
              </div>
              <div className="flex items-start text-sm text-gray-600">
                <MapPinIcon className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                <span>42 Green Avenue, Vasant Kunj<br />New Delhi, 110070</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">Payment Information</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Payment Method:</span>
                <span className="text-sm font-medium text-gray-900">Cash</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Payment Date:</span>
                <span className="text-sm font-medium text-gray-900">May 15, 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Transaction ID:</span>
                <span className="text-sm font-medium text-gray-900">TXN123456789</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Prescription:</span>
                <span className="text-sm font-medium text-gray-900">Dr. Sharma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Items */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 uppercase mb-4">Invoice Items</h3>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">MRP</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Paracetamol 500mg</div>
                      <div className="text-xs text-gray-500">Tablet | Calpol</div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">BT2023045</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Dec 2024</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">₹25.00</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">2</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">0%</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 text-right">₹50.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Azithromycin 500mg</div>
                      <div className="text-xs text-gray-500">Tablet | Zithromax</div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">BT2023032</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Nov 2024</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">₹85.00</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">1</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">5%</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 text-right">₹80.75</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Cetirizine 10mg</div>
                      <div className="text-xs text-gray-500">Tablet | Zyrtec</div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">BT2023028</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">Oct 2024</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">₹45.00</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">1</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600 text-right">0%</td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 text-right">₹45.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Invoice Summary */}
        <div className="flex flex-col items-end">
          <div className="w-full md:w-64 space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Subtotal:</span>
              <span className="text-sm font-medium text-gray-900">₹175.75</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Discount:</span>
              <span className="text-sm font-medium text-gray-900">₹4.25</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Tax (GST 12%):</span>
              <span className="text-sm font-medium text-gray-900">₹20.58</span>
            </div>
            <div className="flex justify-between py-2 font-medium">
              <span className="text-base text-gray-800">Total:</span>
              <span className="text-base text-primary-600">₹192.08</span>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Notes</h3>
            <p>Thank you for your purchase. Please keep this invoice for your records.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Terms & Conditions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Medicines once sold cannot be returned or exchanged.</li>
              <li>Please verify the medicines and amount before leaving the counter.</li>
              <li>Store medicines as per the instructions on the package.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 