import React, { useCallback } from 'react';
import { Button, Group, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import '@/sass/pages/_initial_page.scss';

export default function InitialPage() {
  const navigate = useNavigate();

  const handleGoToDesign = useCallback(() => {
    navigate('/design-system');
  }, [navigate]);

  const handleGoToPrototype = useCallback(() => {
    navigate('/animation');
  }, [navigate]);

  return (
    <main className='initial-page' role='main'>
      <Title order={1}>Rouge</Title>

      <Group
        className='button-group'
        position='center'
        spacing='xl'
        aria-label='Choose navigation'
      >
        <Button
          type='button'
          variant='filled'
          className='design-system-btn'
          onClick={handleGoToDesign}
          aria-label='Go to design system page'
        >
          Design System
        </Button>

        <Button
          type='button'
          variant='filled'
          className='prototype-btn'
          onClick={handleGoToPrototype}
          aria-label='Go to prototype animation page'
        >
          Prototype
        </Button>
      </Group>
    </main>
  );
}
