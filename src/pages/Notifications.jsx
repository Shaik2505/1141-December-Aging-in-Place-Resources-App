import React, { useState } from 'react';
import { FaBell, FaCheck, FaTimes, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';

const Notifications = () => {
  const [preferences, setPreferences] = useState({
    appointmentReminders: true,
    resourceUpdates: true,
    forumActivities: false,
    healthAlerts: true,
    promotionalOffers: false,
  });

  const [alertHistory, setAlertHistory] = useState([]);

  const togglePreference = (type) => {
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const sendEmergencyAlert = () => {
    const newAlert = {
      id: alertHistory.length + 1,
      timestamp: new Date().toLocaleString(),
      location: '37.7749° N, 122.4194° W', // Example location, replace with real-time data in production
    };
    setAlertHistory((prev) => [newAlert, ...prev]);
    alert('Emergency alert sent to predefined contacts and healthcare providers!');
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Notification Settings</h1>
          <FaBell className="text-3xl text-blue-500" />
        </div>

        {/* Notification Preferences */}
        <div className="mt-6 space-y-4">
          {Object.keys(preferences).map((type) => (
            <div
              key={type}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <div>
                <h2 className="capitalize font-semibold">
                  {type.replace(/([A-Z])/g, ' $1')}
                </h2>
                <p className="text-sm text-gray-500">
                  {preferences[type]
                    ? 'Enabled - You will receive these notifications.'
                    : 'Disabled - You will not receive these notifications.'}
                </p>
              </div>
              <button
                onClick={() => togglePreference(type)}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  preferences[type]
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {preferences[type] ? <FaCheck /> : <FaTimes />}
              </button>
            </div>
          ))}
        </div>

        {/* Emergency Alert Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FaExclamationTriangle className="text-red-500" /> Emergency Alerts
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Quickly send an emergency alert to your predefined contacts and healthcare providers. Your location will be shared automatically.
          </p>
          <button
            onClick={sendEmergencyAlert}
            className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
          >
            Send Emergency Alert
          </button>
        </div>

        {/* Alert History */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Alert History</h2>
          {alertHistory.length === 0 ? (
            <p className="text-sm text-gray-500 mt-2">No alerts have been sent yet.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {alertHistory.map((alert) => (
                <li
                  key={alert.id}
                  className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                >
                  <div>
                    <p className="font-semibold">Alert #{alert.id}</p>
                    <p className="text-sm text-gray-500">Sent at: {alert.timestamp}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-500" /> Location: {alert.location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
