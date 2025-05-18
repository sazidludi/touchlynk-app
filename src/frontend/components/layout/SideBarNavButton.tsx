'use client';

import React from 'react';
import { Button } from '@mui/material';

interface SideBarNavButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  active?: boolean;
}

export default function SideBarNavButton({
  label,
  onClick,
  icon,
  active = false,
}: SideBarNavButtonProps) {
  return (
    <Button
      fullWidth
      startIcon={icon}
      onClick={onClick}
      sx={{
        justifyContent: 'flex-start',
        textTransform: 'none',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: active ? '#fff' : 'rgba(255, 255, 255, 0.85)',
        backgroundColor: active ? '#1a1a1a' : 'transparent',
        borderRadius: 2,
        px: 2,
        py: 1.5,
        '&:hover': {
          backgroundColor: '#1a1a1a',
          color: '#fff',
        },
      }}
    >
      {label}
    </Button>
  );
}
