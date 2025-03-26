import { Typography, Container } from '@mui/material';

export default function Products() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Products
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Explore our wide range of products here.
      </Typography>
    </Container>
  );
}