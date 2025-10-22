import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="footer-text">© {new Date().getFullYear()} DSAverse. All rights reserved.</p>
        <p className="footer-text">
          Follow us on 
          <a href="https://x.com/_akshitaa11" target="_blank" rel="noopener noreferrer" className="footer-link"> Twitter</a>, 
          <a href="https://www.facebook.com/share/16EN57LuQW/" target="_blank" rel="noopener noreferrer" className="footer-link"> Facebook</a>, and 
          <a href="https://www.linkedin.com/in/akshita-singhal-649956304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="footer-link"> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
