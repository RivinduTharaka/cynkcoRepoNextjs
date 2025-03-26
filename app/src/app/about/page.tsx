import { Typography, Container } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Learn more about our company and mission.
      </Typography>
    </Container>
  );
}