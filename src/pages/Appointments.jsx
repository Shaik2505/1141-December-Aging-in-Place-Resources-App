import React from "react";
import AppointmentForm from "../components/Appointments/AppointmentForm";
import AppointmentList from "../components/Appointments/AppointmentList";
import CalendarSync from "../components/Appointments/CalendarSync";

const Appointments = () => {
  return (
    <div className="p-4 pt-20 mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center text-primary dark:text-background">Manage Appointments</h1>
      <AppointmentForm />
      <AppointmentList />
      <CalendarSync />
    </div>
  );
};

export default Appointments;
