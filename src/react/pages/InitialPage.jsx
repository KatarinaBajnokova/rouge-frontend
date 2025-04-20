import React from 'react';
import { Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import '@/sass/pages/_initial_page.scss';

const InitialPage = () => {
  const navigate = useNavigate();

  return (
    <main className='initial-page'>
      <h1>Rouge</h1>
      <Group position='center' spacing='xl' className='button-group'>
        <Button
          type='button'
          variant='filled'
          className='design-system-btn'
          onClick={() => navigate('/design-system')}
          aria-label='Go to design system page'
        >
          Design System
        </Button>
        <Button
          type='button'
          variant='filled'
          className='prototype-btn'
          onClick={() => navigate('/animation')}
          aria-label='Go to prototype animation page'
        >
          Prototype
        </Button>
      </Group>
    </main>
  );
};

export default InitialPage;
