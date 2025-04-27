import React from 'react';
import { Center, Loader } from '@mantine/core';

export default function LoadingSpinner() {
  return (
    <Center style={{ height: '100vh' }}>
      <Loader size='xl' />
    </Center>
  );
}
