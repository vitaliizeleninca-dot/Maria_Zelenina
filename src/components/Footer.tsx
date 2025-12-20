import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lavender text-white/60 py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="font-serif">
          &copy; {new Date().getFullYear()} Maria Magdalena Zelenina. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
