import React from 'react';
import { Box, Text } from '../../../../packages/shared/src';
import { MetadataBadges } from './MetadataBadges';
import { CodeBlock } from './CodeBlock';
import { ExampleCard } from './ExampleCard';

interface ParsedContentLike {
  metadata: {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    platforms: string[];
  };
  sections: {
    overview: string;
    api: string;
    examples: { title: string; code: string; platforms: string[] }[];
    platformNotes: Record<string, string>;
    commonPatterns: string;
    performance: string;
    criticalRules: string[];
    seeAlso: string[];
    code: string;
    explanation: string;
  };
}

function SectionHeader({ title }: { title: string }) {
  return (
    <Box style={{ marginTop: 16, marginBottom: 6 }}>
      <Box style={{ height: 1, backgroundColor: '#1e293b', marginBottom: 8 }} />
      <Text style={{ color: '#475569', fontSize: 9, fontWeight: 'bold', letterSpacing: 1 }}>
        {title}
      </Text>
    </Box>
  );
}

function ContentText({ text }: { text: string }) {
  return (
    <Text style={{ color: '#94a3b8', fontSize: 11, lineHeight: 1.6 }}>
      {text}
    </Text>
  );
}

export function DocPage({ content }: { content: ParsedContentLike }) {
  const { metadata, sections } = content;

  return (
    <Box style={{ padding: 16, paddingBottom: 40 }}>
      {/* Title */}
      <Text style={{ color: '#e2e8f0', fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>
        {metadata.title}
      </Text>

      {/* Description */}
      {metadata.description ? (
        <Text style={{ color: '#64748b', fontSize: 11, marginBottom: 8 }}>
          {metadata.description}
        </Text>
      ) : null}

      {/* Badges */}
      <MetadataBadges
        category={metadata.category}
        difficulty={metadata.difficulty}
        platforms={metadata.platforms}
      />

      {/* Overview */}
      {sections.overview ? (
        <Box>
          <SectionHeader title="OVERVIEW" />
          <ContentText text={sections.overview} />
        </Box>
      ) : null}

      {/* API / Syntax */}
      {sections.api ? (
        <Box>
          <SectionHeader title="API / SYNTAX" />
          <CodeBlock code={sections.api} />
        </Box>
      ) : null}

      {/* Examples */}
      {sections.examples.length > 0 ? (
        <Box>
          <SectionHeader title="EXAMPLES" />
          {sections.examples.map((ex, i) => (
            <ExampleCard key={i} title={ex.title} code={ex.code} platforms={ex.platforms} />
          ))}
        </Box>
      ) : null}

      {/* Code section (for standalone examples) */}
      {sections.code ? (
        <Box>
          <SectionHeader title="CODE" />
          <CodeBlock code={sections.code} />
        </Box>
      ) : null}

      {/* Platform Notes */}
      {Object.keys(sections.platformNotes).length > 0 ? (
        <Box>
          <SectionHeader title="PLATFORM NOTES" />
          {Object.entries(sections.platformNotes).map(([platform, notes]) => (
            <Box key={platform} style={{ marginBottom: 8 }}>
              <Text style={{ color: '#cbd5e1', fontSize: 10, fontWeight: 'bold', marginBottom: 2 }}>
                {platform}
              </Text>
              <ContentText text={notes} />
            </Box>
          ))}
        </Box>
      ) : null}

      {/* Common Patterns */}
      {sections.commonPatterns ? (
        <Box>
          <SectionHeader title="COMMON PATTERNS" />
          <ContentText text={sections.commonPatterns} />
        </Box>
      ) : null}

      {/* Performance */}
      {sections.performance ? (
        <Box>
          <SectionHeader title="PERFORMANCE" />
          <ContentText text={sections.performance} />
        </Box>
      ) : null}

      {/* Critical Rules */}
      {sections.criticalRules.length > 0 ? (
        <Box>
          <SectionHeader title="CRITICAL RULES" />
          {sections.criticalRules.map((rule, i) => (
            <Box key={i} style={{ flexDirection: 'row', marginBottom: 4 }}>
              <Text style={{ color: '#f59e0b', fontSize: 10 }}>{`\u2022 `}</Text>
              <Box style={{ flexShrink: 1 }}>
                <Text style={{ color: '#94a3b8', fontSize: 10, lineHeight: 1.5 }}>{rule}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      ) : null}

      {/* Explanation (for examples) */}
      {sections.explanation ? (
        <Box>
          <SectionHeader title="EXPLANATION" />
          <ContentText text={sections.explanation} />
        </Box>
      ) : null}

      {/* See Also */}
      {sections.seeAlso.length > 0 ? (
        <Box>
          <SectionHeader title="SEE ALSO" />
          {sections.seeAlso.map((ref, i) => (
            <Text key={i} style={{ color: '#3b82f6', fontSize: 10, marginBottom: 2 }}>
              {`\u2192 ${ref}`}
            </Text>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}
