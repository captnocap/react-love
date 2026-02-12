import React from 'react';
import { Box, Text, Pressable } from '../../../../packages/shared/src';

/** Human-readable section titles */
const SECTION_TITLES: Record<string, string> = {
  '01-getting-started': 'Getting Started',
  '02-architecture': 'Architecture',
  '03-cli-reference': 'CLI Reference',
  '04-layout-system': 'Layout System',
  '05-components': 'Components',
  '06-hooks': 'Hooks',
  '07-animation': 'Animation',
  '08-routing': 'Routing',
  '09-targets': 'Targets',
  '10-advanced': 'Advanced',
  '11-troubleshooting': 'Troubleshooting',
  '12-api-reference': 'API Reference',
  'examples': 'Examples',
};

interface DocsSidebarProps {
  sections: Record<string, Record<string, { metadata: { title: string } }>>;
  activeSectionId: string;
  activeFileKey: string;
  onSelect: (sectionId: string, fileKey: string) => void;
}

export function DocsSidebar({ sections, activeSectionId, activeFileKey, onSelect }: DocsSidebarProps) {
  const sectionIds = Object.keys(sections).sort();

  return (
    <Box style={{
      width: 200,
      backgroundColor: '#0c0c14',
      borderWidth: 1,
      borderColor: '#1e293b',
      overflow: 'scroll',
    }}>
      {/* Header */}
      <Box style={{ paddingTop: 14, paddingLeft: 12, paddingRight: 12, paddingBottom: 5 }}>
        <Text style={{ color: '#475569', fontSize: 10, fontWeight: 'bold' }}>DOCUMENTATION</Text>
      </Box>
      <Box style={{ height: 1, backgroundColor: '#1e293b' }} />

      {/* Section list */}
      {sectionIds.map(sectionId => {
        const files = sections[sectionId];
        const fileKeys = Object.keys(files).sort();
        // Put index first, then the rest
        const ordered = fileKeys.filter(k => k === 'index').concat(fileKeys.filter(k => k !== 'index'));
        const sectionTitle = SECTION_TITLES[sectionId] || sectionId;

        return (
          <Box key={sectionId}>
            {/* Section header */}
            <Box style={{ paddingLeft: 12, paddingTop: 8, paddingBottom: 2 }}>
              <Text style={{ color: '#334155', fontSize: 9 }}>{sectionTitle.toUpperCase()}</Text>
            </Box>

            {/* File links */}
            {ordered.map(fileKey => {
              const file = files[fileKey];
              const isActive = sectionId === activeSectionId && fileKey === activeFileKey;
              const label = fileKey === 'index' ? 'Overview' : file.metadata.title;

              return (
                <Pressable
                  key={fileKey}
                  onPress={() => onSelect(sectionId, fileKey)}
                  style={{
                    paddingLeft: 16,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    backgroundColor: isActive ? '#1e293b' : 'transparent',
                  }}
                >
                  <Text style={{
                    color: isActive ? '#e2e8f0' : '#64748b',
                    fontSize: 11,
                  }}>
                    {label}
                  </Text>
                </Pressable>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
