import React, { useState } from "react";
import { FaCalendarAlt, FaSyncAlt } from "react-icons/fa";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    recurring: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Scheduled: ", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-background dark:bg-primary text-primary dark:text-background shadow rounded"
    >
      <div>
        <label className="block text-sm font-medium ">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Appointment Title"
          value={formData.title}
          onChange={handleChange}
          className=" dark:bg-secondary placeholder-gray-700 dark:text-text w-full mt-1 p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="dark:bg-secondary placeholder-gray-700 dark:text-text w-full mt-1 p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="dark:bg-secondary placeholder-gray-700 dark:text-text w-full mt-1 p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="recurring"
          checked={formData.recurring}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label className="ml-2 text-sm font-medium flex items-center">
          <FaSyncAlt className="mr-1" /> Recurring Appointment
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-secondary text-white py-2 px-4 rounded hover:bg-secondary/70 duration-500 transition"
      >
        <FaCalendarAlt className="inline mr-2" /> Schedule Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
