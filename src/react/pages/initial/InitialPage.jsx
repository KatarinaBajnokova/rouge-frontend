import React, { useCallback } from 'react';
import { Button, Group, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import styles from './InitialPage.module.scss';

export default function InitialPage() {
  const navigate = useNavigate();

  const handleGoToDesign = useCallback(() => {
    navigate('/design-system');
  }, [navigate]);

  const handleGoToPrototype = useCallback(() => {
    navigate('/animation');
  }, [navigate]);

  return (
    <main className={styles.initialPage} role='main'>
      <Title order={1} className={styles.title}>
        Rouge
      </Title>

      <Group
        className={styles.buttonGroup}
        position='center'
        spacing='xl'
        aria-label='Choose navigation'
      >
        <Button
          type='button'
          variant='filled'
          className={styles.designSystemBtn}
          onClick={handleGoToDesign}
          aria-label='Go to design system page'
        >
          Design System
        </Button>

        <Button
          type='button'
          variant='filled'
          className={styles.prototypeBtn}
          onClick={handleGoToPrototype}
          aria-label='Go to prototype animation page'
        >
          Prototype
        </Button>
      </Group>
    </main>
  );
}
