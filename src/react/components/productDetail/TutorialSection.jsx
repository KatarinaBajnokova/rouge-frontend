import React from 'react';
import { Title, Text } from '@mantine/core';

export default function TutorialSection({ tutorialUrl, poster }) {
  if (!tutorialUrl) return null;

  return (
    <section className='detail-tutorial'>
      <Title order={3}>Tutorial preview</Title>
      <video
        src={tutorialUrl}
        controls
        poster={poster}
        className='detail-video'
        preload='metadata'
        width='100%'
      >
        <Text component='p'>Your browser does not support the video tag.</Text>
      </video>
    </section>
  );
}
