import { Typography, Container } from '@mui/material';

export default function Support() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Support
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Need help? Contact our support team.
      </Typography>
    </Container>
  );
}