import React, { useState } from "react";
import { FaHome, FaHeartbeat, FaMoneyBill } from "react-icons/fa";
import ResourceModal from "../components/resources/ResourceModal";
import { IoTimer } from "react-icons/io5";
import SupportForum from "../components/resources/SupportForum";

// Sample images for demonstration purposes
const resourcesData = [
  {
    id: 1,
    category: "Home Modifications",
    title: "How to Make Your Home Safer",
    type: "article",
    content:
      "Learn the top tips to make your home safer for elderly and disabled individuals.",
    file: "/assets/sample-article.pdf",
    icon: <FaHome size={30} />,
    image: "/assets/home-safer.jpg", // Add image URL here
  },
  {
    id: 2,
    category: "Healthcare Services",
    title: "Understanding Healthcare Options",
    type: "video",
    content:
      "This video explains various healthcare options available for seniors.",
    file: "/assets/sample-video.mp4",
    icon: <FaHeartbeat size={30} />,
    image: "/assets/healthcare-options.jpg", // Add image URL here
  },
  {
    id: 3,
    category: "Financial Planning",
    title: "Financial Planning Basics",
    type: "article",
    content: "Discover key financial planning tips to secure your future.",
    file: "/assets/sample-article.pdf",
    icon: <FaMoneyBill size={30} />,
    image: "/assets/financial-planning.jpg", // Add image URL here
  },
  {
    id: 4,
    category: "Wellness Activities",
    title: "Daily Wellness Routines",
    type: "article",
    content: "Simple routines to keep yourself healthy and happy every day.",
    file: "/assets/sample-article.pdf",
    icon: <IoTimer size={30} />,
    image: "/assets/wellness-routines.jpg", // Add image URL here
  },
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [view, setView] = useState("resources"); // Toggle between "resources" and "forum"

  const filteredResources = resourcesData.filter((resource) => {
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["All", ...new Set(resourcesData.map((r) => r.category))];

  return (
    <div className="p-6 pt-20 bg-background dark:bg-darkBackground dark:text-darkText min-h-screen">
      <div className="flex flex-wrap gap-2 justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-darkText">
          {view === "resources" ? "Resource Library" : "Support Forums"}
        </h1>
        <button
          className="p-2 bg-primary dark:bg-darkPrimary text-background rounded-lg"
          onClick={() => setView(view === "resources" ? "forum" : "resources")}
        >
          {view === "resources" ? "Go to Forums" : "Go to Resources"}
        </button>
      </div>
      {view === "resources" ? (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 sm:mb-0 p-2 border rounded-lg w-full sm:w-1/3"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 text-text border rounded-lg w-full sm:w-1/3"
            >
              {categories.map((category) => (
                <option className="text-text" key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {" "}
            {/* Adjusted the grid */}
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-primary dark:bg-darkPrimary text-background shadow-md shadow-teal-800 dark:shadow-white rounded-lg overflow-hidden hover:shadow-lg transition duration-500 cursor-pointer"
                onClick={() => setSelectedResource(resource)}
              >
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    {resource.icon}
                    <h2 className="text-xl font-semibold">{resource.title}</h2>
                  </div>
                  <p className="text-background">{resource.category}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedResource && (
            <ResourceModal
              resource={selectedResource}
              onClose={() => setSelectedResource(null)}
            />
          )}
        </>
      ) : (
        <SupportForum />
      )}
    </div>
  );
};

export default Resources;
