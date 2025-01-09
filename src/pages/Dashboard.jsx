import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample data for charts
  const healthMetricsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Health Metrics Trend",
        data: [75, 80, 78, 82, 79, 83],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  const resourceUsageData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Resource Usage",
        data: [50, 55, 60, 58],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  const upcomingAppointmentsData = {
    labels: ["Upcoming Appointments"],
    datasets: [
      {
        label: "Appointments Scheduled",
        data: [3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const engagementData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Overall Engagement",
        data: [85, 90, 88, 92],
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
      },
    ],
  };

  const activityCards = [
    { title: "Upcoming Appointments", count: 3, icon: "📅" },
    { title: "Health Metrics", count: 78, icon: "❤️" },
    { title: "Resource Usage", count: 58, icon: "📊" },
    { title: "Engagement Rate", count: 92, icon: "📈" },
  ];

  const insights = [
    "Your health metrics are improving steadily over the last few months.",
    "You have a high engagement rate with upcoming appointments.",
    "Consider optimizing resource usage to save costs in the next quarter.",
  ];

  return (
    <div className="min-h-screen mt-16 bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Performance Analytics Dashboard
      </h1>

      {/* Activity Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {activityCards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {card.title}
              </p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                {card.count}
              </p>
            </div>
            <span className="text-3xl text-gray-600 dark:text-gray-300">
              {card.icon}
            </span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Health Metrics Trend
          </h2>
          <Line data={healthMetricsData} options={{ responsive: true }} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Resource Usage
          </h2>
          <Line data={resourceUsageData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Upcoming Appointments
          </h2>
          <Bar data={upcomingAppointmentsData} options={{ responsive: true }} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Overall Engagement
          </h2>
          <Line data={engagementData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Insights & Recommendations
        </h2>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">💡</span>
              <span className="text-gray-800 dark:text-gray-300">
                {insight}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
