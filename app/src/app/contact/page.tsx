import { Typography, Container } from '@mui/material';

export default function Contact() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Get in touch with us for inquiries or support.
      </Typography>
    </Container>
  );
}