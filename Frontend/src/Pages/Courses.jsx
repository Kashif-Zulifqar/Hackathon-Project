import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();
  const location = useLocation();
  const course = location.state?.course;

  const [activeTab, setActiveTab] = useState("Resources");

  // Handle case where course is not provided (e.g. refresh or direct URL access)
  if (!course) {
    return (
      <div className="course-page">
        <h2>Course Not Found</h2>
        <button onClick={() => navigate("/home")}>⬅ Back to Home</button>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Resources":
        return <p> List of PDF / links</p>;
      case "Videos":
        return <p> Video lectures go here</p>;
      case "Animations":
        return <p> Interactive animations</p>;
      case "GroupChat":
        return <p> Group chat coming soon</p>;
      case "Project":
        return <p> Final Project details</p>;
      default:
        return null;
    }
  };

  return (
    <div className="course-page">
      <nav className="course-navbar">
        <button onClick={() => navigate("/home")}>⬅ Back</button>
        {["Resources", "Videos", "Animations", "GroupChat", "Project"].map(
          (tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </nav>
      <div className="course-content">
        <h2>{course.name}</h2>
        {renderTabContent()}
      </div>
    </div>
  );
}
