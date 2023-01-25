import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Link to="/about">About</Link>
      <button onClick={() => navigate("/about")}>GO TO About page</button>
    </div>
  );
};

export default Contact;
