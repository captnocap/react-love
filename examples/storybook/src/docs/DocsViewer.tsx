import React, { useState, useCallback } from 'react';
import { Box } from '../../../../packages/shared/src';
import { DocsSidebar } from './DocsSidebar';
import { DocPage } from './DocPage';

interface ContentData {
  sections: Record<string, Record<string, any>>;
  allFiles: any[];
}

interface DocsViewerProps {
  content: ContentData;
}

export function DocsViewer({ content }: DocsViewerProps) {
  const [activeSectionId, setActiveSectionId] = useState('01-getting-started');
  const [activeFileKey, setActiveFileKey] = useState('index');

  const handleSelect = useCallback((sectionId: string, fileKey: string) => {
    setActiveSectionId(sectionId);
    setActiveFileKey(fileKey);
  }, []);

  const activeContent = content.sections[activeSectionId]?.[activeFileKey];

  return (
    <Box style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
      <DocsSidebar
        sections={content.sections}
        activeSectionId={activeSectionId}
        activeFileKey={activeFileKey}
        onSelect={handleSelect}
      />
      <Box style={{ flexGrow: 1, backgroundColor: '#08080f', overflow: 'scroll' }}>
        {activeContent ? (
          <DocPage content={activeContent} />
        ) : (
          <Box style={{ padding: 20 }}>
            <Box style={{ height: 0 }} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
