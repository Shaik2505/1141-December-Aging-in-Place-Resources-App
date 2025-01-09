// ResourceModal.jsx
import React from "react";
import { FaTimes, FaDownload } from "react-icons/fa";

const ResourceModal = ({ resource, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-primary dark:bg-darkPrimary rounded-lg shadow-lg p-6 w-full max-w-lg text-background">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{resource.title}</h2>
          <button className="hover:text-red-500 transition" onClick={onClose}>
            <FaTimes size={24} />
          </button>
        </div>
        <p className="mb-4">{resource.content}</p>
        {resource.type === "article" && (
          <a
            href={resource.file}
            download
            className="bg-secondary dark:bg-darkSecondary text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <FaDownload />
            <span>Download Article</span>
          </a>
        )}
        {resource.type === "video" && (
          <video controls className="w-full rounded-lg">
            <source src={resource.file} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {!["article", "video"].includes(resource.type) && (
          <p className="text-red-500">
            Unsupported resource type: {resource.type}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResourceModal;
