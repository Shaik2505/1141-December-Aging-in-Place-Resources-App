import React, { useState } from "react";
import { FaWeight, FaHeartbeat, FaRunning } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MdOutlineBloodtype } from "react-icons/md";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const HealthMonitoring = () => {
  const [metrics, setMetrics] = useState({
    bloodPressure: "",
    glucoseLevel: "",
    weight: "",
    activityLevel: "",
  });

  const [errors, setErrors] = useState({});

  // Static data for the Pie chart
  const chartData = {
    labels: ["Blood Pressure", "Glucose Level", "Weight", "Activity Level"],
    datasets: [
      {
        label: "Health Metrics Distribution",
        data: [120, 90, 70, 10000], // Replace with your metrics data
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", // Light Red
          "rgba(54, 162, 235, 0.5)", // Light Blue
          "rgba(255, 206, 86, 0.5)", // Light Yellow
          "rgba(75, 192, 192, 0.5)", // Light Green
        ],
        borderColor: [
          "rgb(255, 99, 132)", // Red
          "rgb(54, 162, 235)", // Blue
          "rgb(255, 206, 86)", // Yellow
          "rgb(75, 192, 192)", // Green
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetrics({ ...metrics, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!metrics.bloodPressure || !/^\d+\/\d+$/.test(metrics.bloodPressure)) {
      newErrors.bloodPressure = "Enter valid blood pressure (e.g., 120/80).";
    }
    if (!metrics.glucoseLevel || isNaN(metrics.glucoseLevel)) {
      newErrors.glucoseLevel = "Enter a numeric glucose level.";
    }
    if (!metrics.weight || isNaN(metrics.weight)) {
      newErrors.weight = "Enter a numeric weight.";
    }
    if (!metrics.activityLevel || isNaN(metrics.activityLevel)) {
      newErrors.activityLevel = "Enter a numeric activity level.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted Data:", metrics);
      // Add your data submission logic here
      alert("Data submitted successfully!");
    }
  };

  return (
    <div className="max-w-full mx-auto mt-10 p-6 bg-background dark:bg-teal-900 text-primary dark:text-darkText shadow-lg rounded-lg pt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Health Monitoring
      </h2>

      {/* Form for Data Input */}
      <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Blood Pressure */}
        <div className="flex items-center">
          <FaHeartbeat className="text-red-500 mr-2" />
          <input
            type="text"
            name="bloodPressure"
            value={metrics.bloodPressure}
            onChange={handleChange}
            placeholder="Blood Pressure (e.g., 120/80)"
            className={`dark:bg-secondary placeholder-gray-700 dark:text-text w-full p-2 border  ${
              errors.bloodPressure ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring focus:ring-blue-300`}
          />
          {errors.bloodPressure && (
            <p className="text-red-500 text-sm">{errors.bloodPressure}</p>
          )}
        </div>

        {/* Glucose Level */}
        <div className="flex items-center">
          <MdOutlineBloodtype className="text-green-500 mr-2" />
          <input
            type="text"
            name="glucoseLevel"
            value={metrics.glucoseLevel}
            onChange={handleChange}
            placeholder="Glucose Level (e.g., 90 mg/dL)"
            className={`dark:bg-secondary placeholder-gray-700 w-full p-2 border ${
              errors.glucoseLevel ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring focus:ring-blue-300`}
          />
          {errors.glucoseLevel && (
            <p className="text-red-500 text-sm">{errors.glucoseLevel}</p>
          )}
        </div>

        {/* Weight */}
        <div className="flex items-center">
          <FaWeight className="text-purple-500 mr-2" />
          <input
            type="text"
            name="weight"
            value={metrics.weight}
            onChange={handleChange}
            placeholder="Weight (e.g., 70 kg)"
            className={`dark:bg-secondary placeholder-gray-700 w-full p-2 border ${
              errors.weight ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring focus:ring-blue-300`}
          />
          {errors.weight && (
            <p className="text-red-500 text-sm">{errors.weight}</p>
          )}
        </div>

        {/* Activity Level */}
        <div className="flex items-center">
          <FaRunning className="text-orange-500 mr-2" />
          <input
            type="text"
            name="activityLevel"
            value={metrics.activityLevel}
            onChange={handleChange}
            placeholder="Activity Level (e.g., 10,000 steps)"
            className={`dark:bg-secondary placeholder-gray-700 w-full p-2 border ${
              errors.activityLevel ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring focus:ring-blue-300`}
          />
          {errors.activityLevel && (
            <p className="text-red-500 text-sm">{errors.activityLevel}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-full">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Submit Data
          </button>
        </div>
      </form>

      {/* Pie Chart Visualization */}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 w-3/4">
          <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
            Health Metrics Distribution
          </h3>
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default HealthMonitoring;
