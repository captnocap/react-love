import React, { useState } from 'react';
import { Box, Text } from '../../../../packages/shared/src';
import { Video } from '../../../../packages/shared/src/Video';
import { VideoPlayer } from '../../../../packages/shared/src/VideoPlayer';

function Card({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <Box style={{ gap: 8 }}>
      <Text style={{ color: '#94a3b8', fontSize: 10, fontWeight: 'bold' }}>{label}</Text>
      <Box style={{
        backgroundColor: '#0f1219',
        borderRadius: 8,
        padding: 16,
        borderWidth: 1,
        borderColor: [1, 1, 1, 0.06],
      }}>
        {children}
      </Box>
    </Box>
  );
}

function StatusPill({ label, value }: { label: string; value: string }) {
  return (
    <Box style={{
      flexDirection: 'row',
      gap: 6,
      alignItems: 'center',
      backgroundColor: [1, 1, 1, 0.05],
      borderRadius: 4,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 4,
      paddingBottom: 4,
    }}>
      <Text style={{ color: '#64748b', fontSize: 9 }}>{label}</Text>
      <Text style={{ color: '#e2e8f0', fontSize: 9, fontWeight: 'bold' }}>{value}</Text>
    </Box>
  );
}

export function VideoStory() {
  const [status, setStatus] = useState('Idle');
  const [time, setTime] = useState('0:00');

  return (
    <Box style={{ gap: 20, padding: 20 }}>
      {/* Header */}
      <Box style={{ gap: 4 }}>
        <Text style={{ color: '#e2e8f0', fontSize: 16, fontWeight: 'bold' }}>Video</Text>
        <Text style={{ color: '#64748b', fontSize: 11 }}>
          Any format in, Theora out. FFmpeg handles transcoding behind the scenes.
        </Text>
      </Box>

      {/* Two-column layout */}
      <Box style={{ flexDirection: 'row', gap: 16, width: '100%' }}>
        {/* Left column */}
        <Box style={{ gap: 16, flexGrow: 1, width: 280 }}>
          {/* Bare primitive */}
          <Card label="VIDEO PRIMITIVE">
            <Box style={{ gap: 10 }}>
              <Video
                src="sample.ogv"
                w={248}
                h={140}
                style={{ borderRadius: 6 }}
                loop
                onReady={() => setStatus('Ready')}
                onPlay={() => setStatus('Playing')}
                onPause={() => setStatus('Paused')}
                onEnded={() => setStatus('Ended')}
                onError={() => setStatus('No file')}
                onTimeUpdate={(e) => {
                  const m = Math.floor(e.currentTime / 60);
                  const s = Math.floor(e.currentTime % 60);
                  setTime(`${m}:${s < 10 ? '0' : ''}${s}`);
                }}
              />
              <Box style={{ flexDirection: 'row', gap: 6 }}>
                <StatusPill label="Status" value={status} />
                <StatusPill label="Time" value={time} />
              </Box>
            </Box>
          </Card>

          {/* Compact variants */}
          <Card label="SIZES">
            <Box style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-end' }}>
              <Box style={{ gap: 4, alignItems: 'center' }}>
                <Video src="sample.ogv" w={100} h={56} style={{ borderRadius: 4 }} />
                <Text style={{ color: '#475569', fontSize: 8 }}>100x56</Text>
              </Box>
              <Box style={{ gap: 4, alignItems: 'center' }}>
                <Video src="sample.ogv" w={80} h={80} style={{ borderRadius: 40 }} />
                <Text style={{ color: '#475569', fontSize: 8 }}>Round</Text>
              </Box>
              <Box style={{ gap: 4, alignItems: 'center' }}>
                <Video src="sample.ogv" w={60} h={90} style={{ borderRadius: 4 }} />
                <Text style={{ color: '#475569', fontSize: 8 }}>Portrait</Text>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* Right column */}
        <Box style={{ gap: 16, flexGrow: 1, width: 280 }}>
          {/* VideoPlayer */}
          <Card label="VIDEO PLAYER">
            <Box style={{ gap: 6 }}>
              <VideoPlayer
                src="sample.ogv"
                w={248}
                h={140}
                radius={6}
              />
              <Text style={{ color: '#475569', fontSize: 9 }}>
                Built-in play/pause, seek bar, and time display
              </Text>
            </Box>
          </Card>

          {/* Transcoding demo */}
          <Card label="FFMPEG TRANSCODING">
            <Box style={{ gap: 6 }}>
              <Video
                src="sample.mp4"
                w={248}
                h={100}
                style={{ borderRadius: 6 }}
              />
              <Text style={{ color: '#475569', fontSize: 9 }}>
                Non-.ogv sources trigger async FFmpeg conversion
              </Text>
            </Box>
          </Card>
        </Box>
      </Box>

      {/* Usage block */}
      <Box style={{
        backgroundColor: [1, 1, 1, 0.03],
        borderRadius: 6,
        padding: 12,
        borderWidth: 1,
        borderColor: [1, 1, 1, 0.04],
      }}>
        <Text style={{ color: '#64748b', fontSize: 9 }}>
          Usage: Place video files in your project root. .ogv loads instantly, other formats
          (mp4, mkv, webm) are transcoded via FFmpeg at runtime or pre-converted during builds.
        </Text>
      </Box>
    </Box>
  );
}
