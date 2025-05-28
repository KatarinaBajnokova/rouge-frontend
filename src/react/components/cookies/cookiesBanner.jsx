import React, { useState, useEffect } from 'react';
import { Paper, Button, Text, Group } from '@mantine/core';
import '@/sass/styles.scss';

function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (choice) => {
    localStorage.setItem('cookieConsent', choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <Paper className="cookies-banner" shadow="md" radius="md" p="md">
        <Text mb="md">
          We use cookies to enhance your browsing experience and to analyze our traffic. You can choose to accept all cookies, only essential cookies, or reject all cookies.
        </Text>
        <Group grow>
          <Button color="gray" variant="outline" onClick={() => handleConsent('none')}>
            Reject all
          </Button>
          <Button color="grape" variant="light" onClick={() => handleConsent('essentials')}>
            Essentials only
          </Button>
          <Button color="grape" onClick={() => handleConsent('all')}>
            Accept all
          </Button>
        </Group>
      </Paper>
    </>
  );
}

export default CookiesBanner;
