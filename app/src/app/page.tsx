import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Welcome to My App
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        This is the homepage of our application. Explore our products and services!
      </Typography>
    </Container>
  );
}