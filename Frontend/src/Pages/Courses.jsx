import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Product from "../Components/Product";
import cloud from "./../assets/cloud.jpg";
import ai from "./../assets/ai.jpg";
import cyber from "./../assets/cyber.jpg";
import datas from "./../assets/datas.jpg";
import net from "./../assets/net.jpg";
import pg from "./../assets/pg.jpg";
// import "./Components.css";

export default function Courses() {
  const navigate = useNavigate();
  const location = useLocation();
  const course = location.state?.course;

  const [activeTab, setActiveTab] = useState("Resources");
  const prodetails = [
    {
      proimg: cloud,
      name: "Inventory Management System",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quibusdam quia fugit, dolorem accusamus dolor! Rerum similique laudantium minima perspiciatis",
    },
    {
      proimg: ai,
      name: "Chatbot",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quibusdam quia fugit, dolorem accusamus dolor! Rerum similique laudantium minima perspiciatis",
    },
    {
      proimg: cyber,
      name: "Ecommerce web app",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quibusdam quia fugit, dolorem accusamus dolor! Rerum similique laudantium minima perspiciatis",
    },
  ];
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
        return (
          <>
            <div className="createNew">
              <button style={{ textAlign: "center", marginLeft: "45%" }}>
                Create New Project
              </button>
            </div>
            <div className="items">
              {prodetails.map((course, ind) => (
                <div className="product-card">
                  <img src={course.proimg} className="product-image" />
                  <div className="product-content">
                    <h3 className="product-title">{course.name}</h3>
                    <p className="product-detail">{course.detail}</p>
                    <button>Contribute</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="course-page"
      style={{
        backgroundColor: "skyblue",
        width: "100vw",
        height: "100vh",
        position: "fixed",
      }}
    >
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
        <h2
          style={{ fontSize: "30px", position: "static", textAlign: "center" }}
        >
          {activeTab}
        </h2>
        {renderTabContent()}
      </div>
    </div>
  );
}
