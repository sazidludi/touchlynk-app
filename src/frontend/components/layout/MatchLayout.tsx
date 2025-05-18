'use client';

import React from 'react';
import { Box } from '@mui/material';
import MinimizedSidebar from '@components/layout/MinimizedSidebar';

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <MinimizedSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}