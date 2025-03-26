import { AppBar, Toolbar, Typography, Button } from '@mui/material';
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
    <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          My App
        </Typography>
        {navLinks.map((link) => (
          <Button
            key={link.label}
            color="inherit"
            component={Link}
            href={link.href}
            sx={{ mx: 1, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
          >
            {link.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}