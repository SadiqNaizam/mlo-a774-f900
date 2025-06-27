import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-2 py-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} CommerceView. All Rights Reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
            Support
          </Link>
          <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
            Documentation
          </Link>
          <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
            API Status
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;