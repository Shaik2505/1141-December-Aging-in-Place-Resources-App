import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import EditProfileModal from "../components/EditProfileModal"; // Adjust the path as necessary

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+20-01274318900",
    address: "285 N Broad St, Elizabeth, NJ 07208, USA",
    image: "",
    gamingInterests: "FPS, RPG",
    favoriteGames: "Valorant, PUBG, Skyrim",
    pastInteractions: "Participated in 10 discussions",
    emailNotifications: true,
    pushNotifications: false,
    badges: [
      { name: "Game Master", icon: "🏆" },
      { name: "Community Leader", icon: "👑" },
      { name: "Top Contributor", icon: "💬" },
    ],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Log badges to debug if they are available
    console.log("Badges Array:", userData.badges);
  }, [userData]);

  const handleEditProfile = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProfile = (updatedData) => {
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setIsModalOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUserData = { ...userData, image: reader.result };
        setUserData(updatedUserData);
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <div className="min-h-screen flex justify-center py-4 sm:py-20 px-4 sm:px-10 dark:bg-gray-800">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <div className="flex flex-col items-center px-6 sm:px-10 py-12 bg-gray-200 dark:bg-gray-600 shadow-md rounded-lg">
          {/* Profile Image */}
          <div
            className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 cursor-pointer  "
            onClick={handleImageClick}
          >
            <img
              src={userData.image || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="rounded-full object-cover w-full h-full "
            />
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              className="hidden border"
              onChange={handleImageChange}
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
              <FaCamera className="w-6 h-6 text-gray-500" />
            </div>
          </div>

          {/* Profile Details */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 dark:text-gray-200">
              {userData.name}
            </h2>
            <p className="text-gray-600 mb-2 dark:text-gray-200">
              {userData.email}
            </p>
            <p className="text-gray-600 mb-2 dark:text-gray-200">
              {userData.phone || "+20-01274318900"}
            </p>
            <p className="text-gray-600 mb-4 dark:text-gray-200">
              {userData.address || "285 N Broad St, Elizabeth, NJ 07208, USA"}
            </p>

            {/* Display Notification Settings */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Notification Settings
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    Email Notifications:
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      userData.emailNotifications
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {userData.emailNotifications ? "Enabled" : "Disabled"}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    Push Notifications:
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      userData.pushNotifications
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {userData.pushNotifications ? "Enabled" : "Disabled"}
                  </span>
                </div>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button
              onClick={handleEditProfile}
              className="px-6 py-2 bg-blue-500 w-44 text-white rounded mb-4"
            >
              Edit Profile
            </button>

            {/* Help Link */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 ">
              <Link to="/body/help">
                <button className="px-6 py-2 w-44 bg-green-500 text-white rounded ml-2">
                  Help
                </button>
              </Link>
              <Link to="/body/dashboard">
                <button className="px-6 py-2 w-44 bg-green-500 text-white rounded ml-2">
                  Dashboard
                </button>
              </Link>
              <Link to="/body/notifications">
                <button className="px-6 py-2 w-44 bg-green-500 text-white rounded ml-2">
                  Notifications
                </button>
              </Link>
            </div>
          </div>
        </div>
        <EditProfileModal
          userData={userData}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveProfile}
        />
      </div>
    </div>
  );
};

export default UserProfile;
