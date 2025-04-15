import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./pages.css";
import bulboff from "../assets/bulboff.jpg";
import bulbon from "../assets/bulbon.jpeg";

const Login = () => {
  const [bgbulb, setBgbulb] = useState(bulboff);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signstate, setSignstate] = useState("Sign In");
  const navigate = useNavigate();
  function handlebg() {
    setBgbulb(bulbon);
  }
  // Load users from localStorage
  const getUsers = () => {
    return JSON.parse(localStorage.getItem("Users")) || [];
  };

  // Save users to localStorage
  const saveUsers = (users) => {
    localStorage.setItem("Users", JSON.stringify(users));
  };

  // Sign-Up Logic
  const signUp = (inpName, inpEmail, inpPass) => {
    const users = getUsers();
    const matchedUser = users.find(
      (user) =>
        user.email.trim().toLowerCase() === inpEmail.trim().toLowerCase()
    );

    if (matchedUser) {
      alert("User already exists");
    } else {
      const newUser = { name: inpName, email: inpEmail, password: inpPass };
      users.push(newUser);
      saveUsers(users);
      alert("Account created successfully");
      setSignstate("Sign In");
      clearFields();
    }
  };

  // Sign-In Logic
  const signIn = (inpEmail, inpPassword) => {
    const users = getUsers();
    const matchedUser = users.find(
      (user) =>
        user.email.trim().toLowerCase() === inpEmail.trim().toLowerCase() &&
        user.password === inpPassword
    );

    if (matchedUser) {
      alert("Login successful");
      navigate("/home");
    } else {
      alert("Credentials incorrect");
    }
  };

  // Handle form submit
  const user_auth = (e) => {
    e.preventDefault();
    if (signstate === "Sign In") {
      signIn(email, password);
    } else {
      signUp(name, email, password);
    }
  };

  // Clear input fields
  const clearFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Login">
      <div
        className="login"
        style={{
          backgroundImage: `url(${isInputFocused ? bulbon : bulboff})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.4s ease-in-out",
        }}
      >
        {/* <img src={logo} alt="logo" className="login-logo" /> */}
        <div className="login-form">
          <p>{signstate}</p>
          <form>
            {signstate === "Sign Up" && (
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              required
            />
            <button className="sign-button" onClick={user_auth} type="submit">
              {signstate}
            </button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
                <p>Need Help?</p>
              </div>
            </div>
          </form>
          <div className="form-switch">
            {signstate === "Sign In" ? (
              <p>
                New to Platform?{" "}
                <span
                  onClick={() => {
                    setSignstate("Sign Up");
                    clearFields();
                  }}
                >
                  Sign up Now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setSignstate("Sign In");
                    clearFields();
                  }}
                >
                  Sign in Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
