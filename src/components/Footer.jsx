import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer fixed-bottom bg-dark text-light">
      <div className="container-fluid text-center">
        <p>Created by Sunny &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
