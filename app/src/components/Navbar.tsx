import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Support', href: '/support' },
    { label: 'Partner Portal', href: '/partner-portal' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom shadow-sm py-3">
      <div className="container">
        {/* Left - Logo */}
        <Link href="/" className="navbar-brand fw-bold fst-italic d-flex align-items-center">
          <span className="text-danger">CYNK</span>
          <span className="text-secondary">CO</span>
          <sup className="ms-1 small">®</sup>
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center - Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarMain">
          <ul className="navbar-nav mb-2 mb-md-0">
            {navLinks.map((link) => (
              <li className="nav-item mx-2" key={link.label}>
                <Link href={link.href} className="nav-link text-dark fw-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Icons */}
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center border-end pe-3">
            <span className="me-1">🌐</span>
            <span className="me-1">Global</span>
            <span className="small">EN</span>
          </div>
          <button className="btn p-0">👤</button>
          <button className="btn p-0">🔍</button>
        </div>
      </div>
    </nav>
  );
}
