import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import a cross icon from react-icons

const EditProfileModal = ({ userData, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState(userData);
  const [imagePreview, setImagePreview] = useState(userData.image);

  const avatars = [
    {
      id: 1,
      src: "https://img.freepik.com/free-photo/fantasy-scene-with-surreal-elements-mystical-atmosphere_23-2151254526.jpg?t=st=1733897207~exp=1733900807~hmac=315681807bb22804016c30316ab06f4a115a13936081e8ca1959a8ee32e4e7a0&w=826",
      alt: "Avatar 1",
    },
    {
      id: 2,
      src: "https://img.freepik.com/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419473.jpg?t=st=1733897179~exp=1733900779~hmac=3985aa30a4f33d4b3d599cbc3128f949f213c697e2bc1d0567332c579d8bfe95&w=826",
      alt: "Avatar 2",
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-photo/portrait-young-woman-with-universe-projection-texture_23-2149581283.jpg?t=st=1733897232~exp=1733900832~hmac=e57103f9d3b920a9d58bb4a5049d1f6cc6d5afbfc69fd261e1f4d3e4626b2d69&w=740",
      alt: "Avatar 3",
    },
    { id: 4, src: "", alt: "None" }, // "None" option
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleAvatarSelect = (avatarSrc) => {
    if (avatarSrc === "") {
      setImagePreview(null);
      setFormData({ ...formData, image: null });
    } else {
      setImagePreview(avatarSrc);
      setFormData({ ...formData, image: avatarSrc });
    }
  };

  const handleSave = () => {
    onSave(formData);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "modalBackground") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modalBackground"
      onClick={handleClickOutside}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4"
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative"
        style={{
          marginTop: "90px",
          marginBottom: "50px",
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
          Edit Profile
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notification Settings */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Notification Settings
          </label>
          <div className="flex items-center space-x-4">
            <div>
              <input
                id="emailNotifications"
                type="checkbox"
                checked={formData.emailNotifications || false}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emailNotifications: e.target.checked,
                  })
                }
                className="mr-2"
              />
              <label
                htmlFor="emailNotifications"
                className="text-sm text-gray-700 dark:text-gray-200"
              >
                Email Notifications
              </label>
            </div>
            <div>
              <input
                id="pushNotifications"
                type="checkbox"
                checked={formData.pushNotifications || false}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pushNotifications: e.target.checked,
                  })
                }
                className="mr-2"
              />
              <label
                htmlFor="pushNotifications"
                className="text-sm text-gray-700 dark:text-gray-200"
              >
                Push Notifications
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 dark:bg-gray-600 text-white rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
