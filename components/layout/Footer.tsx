import React from 'react';

// Social media icons (you can replace with actual icons)
const socialMediaLinks = [
  { name: "Facebook", href: "https://www.facebook.com", icon: "🔵" },
  { name: "Twitter", href: "https://www.twitter.com", icon: "🐦" },
  { name: "Instagram", href: "https://www.instagram.com", icon: "📸" },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: "🔗" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialMediaLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        <p>&copy; {new Date().getFullYear()} Property Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
