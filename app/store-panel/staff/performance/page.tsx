"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon,
  StarIcon,
  TrendingUpIcon,
  UserIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  BarChart3Icon,
  SearchIcon,
  FilterIcon,
  ChevronDownIcon,
  PlusIcon,
  EditIcon
} from "lucide-react";

// Sample performance data
const performanceData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Pharmacist",
    image: "/placeholder-user.jpg",
    metrics: {
      salesTarget: 85,
      attendance: 95,
      taskCompletion: 92,
      customerRating: 4.8
    },
    reviews: [
      {
        id: 1,
        date: "2024-03-10",
        rating: 5,
        reviewer: "Dr. Manager",
        comment: "Excellent work ethic and customer service skills. Always maintains accurate prescription records.",
        metrics: {
          professionalism: 5,
          teamwork: 4,
          communication: 5,
          reliability: 5
        }
      },
      {
        id: 2,
        date: "2024-02-10",
        rating: 4,
        reviewer: "Dr. Manager",
        comment: "Good performance overall. Could improve on inventory management.",
        metrics: {
          professionalism: 4,
          teamwork: 4,
          communication: 4,
          reliability: 4
        }
      }
    ],
    goals: [
      {
        id: 1,
        title: "Complete Advanced Pharmacy Certification",
        progress: 75,
        dueDate: "2024-06-30"
      },
      {
        id: 2,
        title: "Improve Customer Satisfaction Rating",
        progress: 90,
        dueDate: "2024-04-30"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Cashier",
    image: "/placeholder-user.jpg",
    metrics: {
      salesTarget: 92,
      attendance: 98,
      taskCompletion: 95,
      customerRating: 4.9
    },
    reviews: [
      {
        id: 1,
        date: "2024-03-12",
        rating: 5,
        reviewer: "Dr. Manager",
        comment: "Outstanding performance in handling customer transactions and maintaining cash accuracy.",
        metrics: {
          professionalism: 5,
          teamwork: 5,
          communication: 5,
          reliability: 5
        }
      }
    ],
    goals: [
      {
        id: 1,
        title: "Learn Inventory Management System",
        progress: 60,
        dueDate: "2024-05-30"
      }
    ]
  }
];

export default function PerformancePage() {
  const [selectedStaff, setSelectedStaff] = useState(performanceData[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);

  // Filter staff based on search and role
  const filteredStaff = performanceData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? staff.role === filterRole : true;
    return matchesSearch && matchesRole;
  });

  // Calculate average rating
  const calculateAverageRating = (reviews: any[]) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link 
            href="/store-panel/staff" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Staff
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Staff Performance</h1>
          <p className="text-sm text-gray-500 mt-1">
            Monitor and manage staff performance metrics and reviews
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search staff..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="block w-full sm:w-48 pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Roles</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="Cashier">Cashier</option>
            <option value="Manager">Manager</option>
            <option value="Delivery Boy">Delivery Boy</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Staff List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Staff Members</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {filteredStaff.map((staff) => (
                <button
                  key={staff.id}
                  onClick={() => setSelectedStaff(staff)}
                  className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                    selectedStaff.id === staff.id ? "bg-primary-50" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      {staff.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                      <div className="text-sm text-gray-500">{staff.role}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Performance Metrics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Performance Metrics</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="text-sm text-gray-500">Sales Target</div>
                  <div className="mt-1 text-2xl font-semibold text-primary-600">
                    {selectedStaff.metrics.salesTarget}%
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-500">Attendance</div>
                  <div className="mt-1 text-2xl font-semibold text-green-600">
                    {selectedStaff.metrics.attendance}%
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm text-gray-500">Task Completion</div>
                  <div className="mt-1 text-2xl font-semibold text-blue-600">
                    {selectedStaff.metrics.taskCompletion}%
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="text-sm text-gray-500">Customer Rating</div>
                  <div className="mt-1 text-2xl font-semibold text-yellow-600">
                    {selectedStaff.metrics.customerRating}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Goals */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Performance Goals</h2>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                <PlusIcon className="h-4 w-4 inline-block mr-1" />
                Add Goal
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {selectedStaff.goals.map((goal) => (
                  <div key={goal.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{goal.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">Due: {new Date(goal.dueDate).toLocaleDateString()}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-500">
                        <EditIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Reviews */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Performance Reviews</h2>
              <button 
                onClick={() => setShowAddReviewModal(true)}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                <PlusIcon className="h-4 w-4 inline-block mr-1" />
                Add Review
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-6">
                {selectedStaff.reviews.map((review) => (
                  <div key={review.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <div className="flex">{renderStars(review.rating)}</div>
                          <span className="ml-2 text-sm text-gray-500">
                            by {review.reviewer}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Professionalism</div>
                        <div className="flex mt-1">{renderStars(review.metrics.professionalism)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Teamwork</div>
                        <div className="flex mt-1">{renderStars(review.metrics.teamwork)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Communication</div>
                        <div className="flex mt-1">{renderStars(review.metrics.communication)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Reliability</div>
                        <div className="flex mt-1">{renderStars(review.metrics.reliability)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 