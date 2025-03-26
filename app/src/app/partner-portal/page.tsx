import { Typography, Container } from '@mui/material';

export default function PartnerPortal() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Partner Portal
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Access resources and tools for our partners.
      </Typography>
    </Container>
  );
}