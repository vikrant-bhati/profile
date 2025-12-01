import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} Vikrant Bhati</span>
        <span>Built with React and Vite</span>
      </div>
    </footer>
  );
};

export default Footer;
