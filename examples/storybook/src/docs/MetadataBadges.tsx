import React from 'react';
import { Box, Text } from '../../../../packages/shared/src';

const PLATFORM_COLORS: Record<string, string> = {
  love2d: '#e74c3c',
  web: '#3498db',
  terminal: '#2ecc71',
  cc: '#f39c12',
  nvim: '#57a64a',
  hs: '#9b59b6',
  awesome: '#1abc9c',
  all: '#64748b',
};

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: '#22c55e',
  intermediate: '#f59e0b',
  advanced: '#ef4444',
};

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <Box style={{
      backgroundColor: color + '22',
      borderWidth: 1,
      borderColor: color + '44',
      borderRadius: 3,
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 2,
      paddingBottom: 2,
    }}>
      <Text style={{ color, fontSize: 8 }}>{label}</Text>
    </Box>
  );
}

interface MetadataBadgesProps {
  category: string;
  difficulty: string;
  platforms: string[];
}

export function MetadataBadges({ category, difficulty, platforms }: MetadataBadgesProps) {
  return (
    <Box style={{ flexDirection: 'row', gap: 4, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge label={category} color="#94a3b8" />
      <Badge label={difficulty} color={DIFFICULTY_COLORS[difficulty] || '#94a3b8'} />
      {platforms.map(p => (
        <Badge key={p} label={p} color={PLATFORM_COLORS[p] || '#64748b'} />
      ))}
    </Box>
  );
}
