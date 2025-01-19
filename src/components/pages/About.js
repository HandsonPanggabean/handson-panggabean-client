import React from "react";

// React router dom
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>About page</div>{" "}
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
};

export default About;
