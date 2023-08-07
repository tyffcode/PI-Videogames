import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome</h1>
      <Link to="/home">
        <button className="btn-primary">Enter</button>
      </Link>
    </div>
  );
}

export default LandingPage;
