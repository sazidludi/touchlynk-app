'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Dashboard,
  BarChart,
  Insights,
  Group,
  Upload as UploadIcon,
} from '@mui/icons-material'; 

import { Box, Stack, Button } from '@mui/material';
import PlayerShieldCard from '@components/player/PlayerShieldCard';
import SideBarNavButton from '@components/layout/SideBarNavButton';

const navItems = [ //icons on left side for nav. managed by SideBarNavButton
  { label: 'Dashboard', path: 'mainPage', icon: <Dashboard fontSize="small" /> },
  { label: 'Match Log', path: 'matchLogPage', icon: <BarChart fontSize="small" /> },
  { label: 'Insights', path: 'insightsPage', icon: <Insights fontSize="small" /> },
  { label: 'Team', path: 'teamPage', icon: <Group fontSize="small" /> },
];

export default function Sidebar() { // Sidebar component
  const [image, setImage] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();
  const playerId = params.playerId?.toString() ?? '';

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return ( 
    <Box
      sx={{
        height: '100%',
        width: 260,
        bgcolor: 'var(--color-bg-sidebar)', //side bar bg color
        borderRight: '1px solid #27272a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
      }}
    >
      {/* Top: Shield + Upload */}
      <Stack spacing={2} alignItems="center">
        <PlayerShieldCard
          name=""
          role=""
          position=""
          imageUrl={image ?? "/placeholder.png"}
        />

        <Button
          component="label"
          variant="outlined"
          startIcon={<UploadIcon />}
          sx={{
            color: 'white',
            borderColor: 'gray',
            fontSize: '0.8rem',
            px: 2,
            py: 1,
            textTransform: 'none',
            '&:hover': { borderColor: 'white', bgcolor: '#1a1a1a' },
          }}
        >
          Upload Image
          <input type="file" hidden accept="image/*" onChange={handleImageChange} />
        </Button>
      </Stack>

      {/* Navigation */}
      <Stack spacing={1} mt={4}>
        {navItems.map(({ label, path, icon }) => (
          <SideBarNavButton
            key={path}
            label={label}
            icon={icon}
            onClick={() => router.push(`/dashboard/${playerId}/${path}`)}
          />
        ))}
      </Stack>
    </Box>
  );
}
