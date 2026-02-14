import React, { useState } from 'react';
import { Box, Text } from '../../../../packages/shared/src';
import { Video } from '../../../../packages/shared/src/Video';
import { VideoPlayer } from '../../../../packages/shared/src/VideoPlayer';

export function VideoStory() {
  const [status, setStatus] = useState('Waiting...');
  const [time, setTime] = useState('0:00');

  return (
    <Box style={{ gap: 16, padding: 16 }}>
      <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>
        Video Component
      </Text>
      <Text style={{ color: '#94a3b8', fontSize: 11 }}>
        Drop an .ogv file in the project root to test direct playback, or any
        video format (mp4, mkv, webm) to test FFmpeg transcoding.
      </Text>

      {/* Bare Video primitive */}
      <Box style={{ gap: 4 }}>
        <Text style={{ color: '#888', fontSize: 10 }}>{'<Video>'} — bare primitive (sample.ogv)</Text>
        <Video
          src="sample.ogv"
          w={320}
          h={180}
          style={{ borderRadius: 6, backgroundColor: '#1e293b' }}
          loop
          onReady={() => setStatus('Ready')}
          onPlay={() => setStatus('Playing')}
          onPause={() => setStatus('Paused')}
          onEnded={() => setStatus('Ended')}
          onError={(e) => setStatus(`Error: ${e.message}`)}
          onTimeUpdate={(e) => {
            const m = Math.floor(e.currentTime / 60);
            const s = Math.floor(e.currentTime % 60);
            setTime(`${m}:${s < 10 ? '0' : ''}${s}`);
          }}
        />
        <Box style={{ flexDirection: 'row', gap: 12 }}>
          <Text style={{ color: '#64748b', fontSize: 10 }}>
            Status: {status}
          </Text>
          <Text style={{ color: '#64748b', fontSize: 10 }}>
            Time: {time}
          </Text>
        </Box>
      </Box>

      {/* VideoPlayer with controls */}
      <Box style={{ gap: 4 }}>
        <Text style={{ color: '#888', fontSize: 10 }}>{'<VideoPlayer>'} — with built-in controls</Text>
        <VideoPlayer
          src="sample.ogv"
          w={320}
          h={180}
          radius={6}
        />
      </Box>

      {/* VideoPlayer with non-ogv src (triggers transcoding) */}
      <Box style={{ gap: 4 }}>
        <Text style={{ color: '#888', fontSize: 10 }}>FFmpeg transcoding (sample.mp4)</Text>
        <Text style={{ color: '#64748b', fontSize: 9 }}>
          Non-.ogv files show a loading indicator while FFmpeg converts to Theora
        </Text>
        <Video
          src="sample.mp4"
          w={320}
          h={180}
          style={{ borderRadius: 6 }}
        />
      </Box>

      {/* Muted + loop example */}
      <Box style={{ gap: 4 }}>
        <Text style={{ color: '#888', fontSize: 10 }}>Muted + Loop</Text>
        <Video
          src="sample.ogv"
          w={200}
          h={112}
          style={{ borderRadius: 4 }}
          muted
          loop
        />
      </Box>
    </Box>
  );
}
