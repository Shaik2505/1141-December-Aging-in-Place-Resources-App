import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const appointments = [
  { id: 1, title: "Doctor Visit", date: "2024-12-30", time: "10:00 AM" },
  { id: 2, title: "Therapy Session", date: "2024-12-31", time: "03:00 PM" },
];

const AppointmentList = () => {
  return (
    <div className="p-4 bg-white dark:bg-primary text-primary dark:text-background shadow rounded">
      <h2 className="text-lg font-bold mb-4 ">Upcoming Appointments</h2>
      <ul className="space-y-4">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="flex justify-between items-center border p-4 rounded">
            <div>
              <h3 className="font-medium ">{appointment.title}</h3>
              <p className="text-sm">{appointment.date} at {appointment.time}</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-secondary hover:text-secondary/70">
                <FaEdit />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
