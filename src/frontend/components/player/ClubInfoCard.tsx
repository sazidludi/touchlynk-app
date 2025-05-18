'use client';

import React from 'react';
import { Card, CardContent, Avatar, Typography, Box } from '@mui/material';

interface ClubInfoCardProps {
  teamName: string;
  appearances: number;
  winRate: string;
}

export default function ClubInfoCard({
  teamName,
  appearances,
  winRate,
}: ClubInfoCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: '#1b1d2a',
        color: '#ffffff',
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Team initials avatar */}
        <Avatar
          sx={{
            width: 56,
            height: 56,
            fontWeight: 'bold',
            fontSize: 20,
            bgcolor: '#374151',
          }}
        >
          {teamName
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase()}
        </Avatar>

        {/* Club details */}
        <Box>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Club
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {teamName}
          </Typography>
          <Typography variant="caption" sx={{ color: 'gray' }}>
            {appearances} appearances • {winRate} win rate
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
