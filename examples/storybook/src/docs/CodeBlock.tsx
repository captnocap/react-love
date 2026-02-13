import React from 'react';
import { Box, Text } from '../../../../packages/shared/src';

export function CodeBlock({ code }: { code: string }) {
  return (
    <Box style={{
      backgroundColor: '#0d1117',
      borderWidth: 1,
      borderColor: '#1e293b',
      borderRadius: 4,
      padding: 10,
      overflow: 'scroll',
    }}>
      <Text style={{
        color: '#c9d1d9',
        fontSize: 10,
        fontFamily: 'monospace',
        lineHeight: 16,
      }}>
        {code}
      </Text>
    </Box>
  );
}
