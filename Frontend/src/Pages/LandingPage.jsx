import React from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import ai from "../assets/ai_icon.jpg";
import net from "../assets/cyber_icon.jpg";
import web from "../assets/data science icon.jpg";
import cyber from "../assets/net_icon.jpg";
import cloud from "../assets/pgicon.jpg";
import logo from "../assets/logo.jpg";
import bg from "../assets/background image.png";
const courses = [
  {
    title: "Web Development",
    desc: "Learn HTML, CSS, JavaScript, React",
  },
  {
    title: "Data Science",
    desc: "Explore data analysis and visualization",
  },
  { title: "AI & ML", desc: "Dive into artificial intelligence" },
  { title: "Cybersecurity", desc: "Protect digital systems and networks" },
  { title: "Cloud Computing", desc: "Master AWS, Azure, GCP" },
];

function Landing() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  function handleSignup() {
    navigate("/login");
  }
  return (
    <div
      className="landing-container"
      style={{
        boxSizing: "border-box",
        // backgroundImage: `url(${bg})`,
        backgroundColor: "skyblue",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        Height: "100vh",
        Width: "100vw",
      }}
    >
      {/* <img src={bg} alt="" /> */}
      <header className="landing-header">
        <div className="landing-logo">
          <img src={logo} alt="" />
        </div>

        <div className="Loginbuttons">
          <button className="landing-signin" onClick={handleLogin}>
            Sign In
          </button>
          <button className="landing-signin" id="signup" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </header>

      <div className="landing-hero">
        <h1>Welcome to MyCourses</h1>
        <p>Your gateway to the world of knowledge</p>
      </div>

      <div className="courses-scroll">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
