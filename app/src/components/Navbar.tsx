'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    
    { label: 'Products', href: '/products' },
    { label: 'Support', href: '/support' },
    { label: 'Partner Portal', href: '/partner-portal' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="navbar bg-white border-bottom py-3 position-relative">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link href="/" className="navbar-brand  gap-2">
          <img
            src="/images/imagelogo.jpg"
            alt="Logo"
            width={150}
            className="d-inline-block align-text-top"
          />
        </Link>

        {/* Toggle Button (Top Right) */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Menu */}
        <div className="d-none d-md-block">
          <ul className="navbar-nav d-flex flex-row gap-4">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                <Link href={link.href} className="nav-link text-dark fw-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu Overlay */}
      {isOpen && (
        <div
          className="position-absolute top-100 end-0 mt-2 bg-white shadow rounded p-3 z-3"
          style={{ width: '200px' }}
        >
          <ul className="navbar-nav d-flex flex-column text-end">
            {navLinks.map((link) => (
              <li className="nav-item my-1" key={link.label}>
                <Link
                  href={link.href}
                  className="nav-link text-dark fw-medium"
                  onClick={() => setIsOpen(false)} // close on click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
