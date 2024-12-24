import React, { useState, useEffect } from "react";
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import EditProfileModal from "../components/EditProfileModal"; // Adjust the path as necessary

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

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
    <div className="h-screen flex justify-center py-20 px-10">
      <div>
        <div className="flex flex-col items-center px-20 py-12 bg-gray-400 shadow-md rounded-lg max-w-md mx-auto md:max-w-lg lg:max-w-xl">
          <div className="relative w-24 h-24 mb-4 cursor-pointer" onClick={handleImageClick}>
            <img
              src={userData.image || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="rounded-full object-cover w-full h-full"
            />
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
              <FaCamera className="w-6 h-6 text-gray-500" />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">{userData.name}</h2>
            <p className="text-gray-600 mb-2">{userData.email}</p>
            <p className="text-gray-600 mb-2">{userData.phone || "+20-01274318900"}</p>
            <p className="text-gray-600 mb-4">{userData.address || "285 N Broad St, Elizabeth, NJ 07208, USA"}</p>
            <button
              onClick={handleEditProfile}
              className="px-6 py-2 bg-blue-500 text-white rounded mb-4"
            >
              Edit Profile
            </button>
            <Link to="/body/help">
              <button className="px-6 py-2 bg-green-500 text-white rounded">
                Help
              </button>
            </Link>
          </div>
          <EditProfileModal
            userData={userData}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveProfile}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
