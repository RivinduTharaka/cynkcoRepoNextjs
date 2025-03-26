import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ py: 2, textAlign: 'center', bgcolor: '#212121', color: 'white' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </Box>
  );
}