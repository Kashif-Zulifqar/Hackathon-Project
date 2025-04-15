import "./Pages.css";
import Product from "../Components/Product";
import Courses from "./Courses";
import { useState } from "react";

import cloud from "./../assets/cloud.jpg";
import ai from "./../assets/ai.jpg";
import cyber from "./../assets/cyber.jpg";
import datas from "./../assets/datas.jpg";
import net from "./../assets/net.jpg";
import pg from "./../assets/pg.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [profileHovered, setProfileHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // fake login state for now

  const navigate = useNavigate();
  const [courseview, setCourseview] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const prodetails = [
    {
      proimg: cloud,
      name: "Cloud Computing",
      price: "Free",
      detail: "Master AWS, Azure & cloud platforms.",
    },
    {
      proimg: ai,
      name: "Artificial Intelligence",
      price: "Free",
      detail: "Learn AI fundamentals, tools, and models.",
    },
    {
      proimg: cyber,
      name: "Cybersecurity",
      price: "Free",
      detail: "Understand ethical hacking & network defense.",
    },
    {
      proimg: datas,
      name: "Data Science",
      price: "Free",
      detail: "Explore data wrangling, analysis & visualization.",
    },
    {
      proimg: net,
      name: "Networking",
      price: "Free",
      detail: "Learn computer networks & protocols.",
    },
    {
      proimg: pg,
      name: "PostgreSQL",
      price: "Free",
      detail: "Learn relational databases with hands-on queries.",
    },
  ];

  const users = [
    { name: "Alice", lectures: 10, projects: 3, volunteer: 5 },
    { name: "Bob", lectures: 8, projects: 4, volunteer: 6 },
    { name: "Charlie", lectures: 12, projects: 2, volunteer: 4 },
  ];

  const handleCourseClick = (course) => {
    navigate("/courses", { state: { course } });
  };

  const goBackToMenu = () => {
    setCourseview(false);
    setSelectedCourse(null);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div
      className="homepage-container"
      style={{
        backgroundColor: "skyblue",
        width: "100vw",
        position: "relative",
      }}
    >
      {/* Left Sidebar */}
      <div
        className="profile-bar"
        onMouseEnter={() => setProfileHovered(true)}
        onMouseLeave={() => setProfileHovered(false)}
      >
        <div className="profile-icon">👤</div>
        {profileHovered && (
          <div className="dropdown-menu">
            {!isLoggedIn ? (
              ""
            ) : (
              <>
                <button onClick={() => alert("Summary Clicked!")}>
                  Summary
                </button>
                <button onClick={() => setIsLoggedIn(true)}>Logout</button>
              </>
            )}
          </div>
        )}
      </div>

      <aside className="sidebar">
        <h3>Top Contributors</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index} onClick={() => handleUserClick(user)}>
              #{index + 1} {user.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {!courseview ? (
          <>
            <div className="menutext">
              <p className="menutitle">OUR COURSES</p>
              <p className="menudescryption">
                Explore a wide range of free online courses to boost your skills
                in tech and IT. Whether you're into AI, cloud, or data science —
                we've got you covered.
              </p>
            </div>
            <div className="items">
              {prodetails.map((course, ind) => (
                <div key={ind} onClick={() => handleCourseClick(course)}>
                  <Product prodetails={course} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <Courses course={selectedCourse} />
        )}
      </main>

      {/* Right Panel - User Graph */}
      {selectedUser && (
        <div className="user-stats">
          <h4>{selectedUser.name}'s Stats</h4>
        </div>
      )}
    </div>
  );
}
