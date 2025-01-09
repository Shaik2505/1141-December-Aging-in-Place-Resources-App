import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

const CalendarSync = () => {
  return (
    <div className="p-4 bg-white shadow rounded dark:bg-primary text-primary dark:text-background">
      <h2 className="text-lg font-bold mb-4">Sync with Your Calendar</h2>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 bg-secondary  text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          <FaGoogle />
          <span>Google Calendar</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition">
          <FaApple />
          <span>Apple Calendar</span>
        </button>
      </div>
    </div>
  );
};

export default CalendarSync;
