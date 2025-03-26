'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Support', href: '/support' },
    { label: 'Partner Portal', href: '/partner-portal' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="navbar border-0 py-3 position-relative shadow-sm" style={{ background: '#ffffff' }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link href="/" className="navbar-brand gap-2">
          <img
            src="/images/imagelogo.jpg"
            alt="Logo"
            width={150}
            className="d-inline-block align-text-top"
          />
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          className="navbar-toggler d-md-none border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Navigation */}
        <div className="d-none d-md-block">
          <ul className="navbar-nav d-flex flex-row gap-4">
            {navLinks.map((link) => (
              <li className="nav-item position-relative" key={link.label}>
                <Link
                  href={link.href}
                  className={`nav-link fw-semibold px-2 text-uppercase ${
                    pathname === link.href ? 'active-link' : ''
                  }`}
                  style={{
                    fontSize: '0.95rem',
                    letterSpacing: '0.05em',
                    color: '#000000',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="position-absolute end-0 start-0 px-4 z-3"
          style={{
            top: '100%',
            background: '#ffffff',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            animation: 'slideDown 0.3s ease-out',
          }}
        >
          <ul className="navbar-nav d-flex flex-column text-start py-4">
            {navLinks.map((link) => (
              <li className="nav-item my-2" key={link.label}>
                <Link
                  href={link.href}
                  className={`nav-link fw-semibold fs-6 ${pathname === link.href ? 'active-link' : ''}`}
                  style={{ color: '#000000' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #0ea5e9, #3b82f6);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .active-link::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
