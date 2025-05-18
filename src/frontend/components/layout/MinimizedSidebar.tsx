// src-frontend-components-layout-MinimizedSidebar.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import { Dashboard, BarChart, Insights, Group } from '@mui/icons-material';
import { Box, Stack, Tooltip } from '@mui/material';

export default function MinimizedSidebar() {
  const params = useParams();
  const router = useRouter();
  const playerId = params.playerId?.toString() || '';

  const navIcons = [
    { icon: <Dashboard fontSize="small" />, path: 'mainPage', tooltip: 'Dashboard' },
    { icon: <BarChart fontSize="small" />, path: 'matchLogPage', tooltip: 'Match Log' },
    { icon: <Insights fontSize="small" />, path: 'insightsPage', tooltip: 'Insights' },
    { icon: <Group fontSize="small" />, path: 'teamPage', tooltip: 'Team' },
  ];

  return (
    <Box sx={{
      width: 64,
      height: '100vh',
      bgcolor: 'var(--color-bg-sidebar)',
      borderRight: '1px solid #27272a',
      p: 1
    }}>
      <Stack spacing={1} mt={2}>
        {navIcons.map((item) => (
          <Tooltip key={item.path} title={item.tooltip} placement="right" arrow>
            <button
              onClick={() => router.push(`/dashboard/${playerId}/${item.path}`)}
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                color: 'rgba(255,255,255,0.8)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {item.icon}
            </button>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
}