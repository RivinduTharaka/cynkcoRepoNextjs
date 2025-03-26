'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function HeroSection() {
  return (
    <div
      className="position-relative w-100 min-vh-100 d-flex align-items-center justify-content-center text-white"
      style={{
        backgroundImage:
          'url("https://vibe.us/blog/advantages-of-interactive-whiteboard/cover_huffa80fae682c771c1add650d0333d320_3937042_1680x0_resize_q90_h2_lanczos_3.9c0e9bee5c0988b98912b635dc7f1e25bb7049e1a13ea701993a695b94a4fb22.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            'linear-gradient(to right, rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.4))',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="container position-relative text-center" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-4 fw-bold mb-4">
            <span
              style={{
                background: 'linear-gradient(to right, #60a5fa, #1e40af)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Revolutionizing
            </span>
            <br className="d-none d-md-block" />
            the Way You Connect
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="lead text-white-50 mb-4 mx-auto" style={{ maxWidth: '720px' }}>
            CYNKCO Smart Solutions – Transforming collaboration through innovative technology and seamless integration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 shadow-lg"
            style={{ backgroundColor: '#0f172a', borderColor: '#60a5fa' }}
          >
            Contact Us
            <svg
              className="bi bi-arrow-right"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.146 3.646a.5.5 0 0 1 .708 0L15 7.793l-4.146 4.147a.5.5 0 0 1-.708-.708L13.293 8H1.5a.5.5 0 0 1 0-1h11.793l-3.147-3.146a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
