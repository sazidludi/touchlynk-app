// app/dashboard/[playerId]/matchLogPage/page.tsx
'use client';

import { Box } from '@mui/material';
import MinimizedSidebar from '@components/layout/MinimizedSidebar';

export default function MatchLogPage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Minimized Sidebar */}
      <MinimizedSidebar />

      {/* Main Content Area */}
      <Box component="main" sx={{ 
        flexGrow: 1, 
        p: 3,
        backgroundColor: 'var(--color-bg-main)'
      }}>
        <h1 style={{ color: 'white', marginBottom: '20px' }}>Match Log</h1>
        <div style={{ 
          backgroundColor: '#1E1E1E', 
          padding: '20px', 
          borderRadius: '8px' 
        }}>
          {/* Your match log content will go here */}
          <p style={{ color: '#A0A0A0' }}>Match log data will be displayed here</p>
        </div>
      </Box>
    </Box>
  );
}