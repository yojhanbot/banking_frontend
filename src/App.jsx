import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const App = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1> Welcome to My Bank</h1>
        <p> Your reliable partner in managing finances with ease and security </p>
          <a href ="/get-started" className="cta-button"> Get Started </a>
        </div>
      </section>
      </div>
);
};
      
      

export default App;