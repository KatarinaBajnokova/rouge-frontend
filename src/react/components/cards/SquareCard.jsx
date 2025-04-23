// src/react/components/cards/SquareCard.jsx

import React from 'react';
import {
  Card,
  CardSection,
  Text,
  Badge,
  Group,
  ActionIcon,
} from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

const getBadgeColor = (level) => {
  switch (level) {
    case 'Easy':
      return 'green';
    case 'Moderate':
      return 'blue';
    case 'Beginner':
      return 'violet';
    case 'Expert':
      return 'red';
    default:
      return 'gray';
  }
};

export default function SquareCard({ look, showHeart = true }) {
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      sx={{
        width: 240,
        height: 240,
        overflow: 'hidden',
      }}
    >
      {/* ─── IMAGE (60%) ─── */}
      <CardSection sx={{ height: '60%', position: 'relative' }}>
        <img
          src={look.image}
          alt={look.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {showHeart && (
          <ActionIcon
            variant="white"
            radius="xl"
            size="lg"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            }}
          >
            <IconHeart size={20} color="black" />
          </ActionIcon>
        )}
      </CardSection>

      {/* ─── INFO PANEL (40%) ─── */}
      <CardSection
        sx={{
          height: '40%',
          backgroundColor: 'white',
          padding: '0.75rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Text fw={700} size="md" lineClamp={1}>
            {look.title}
          </Text>
          <Text size="sm" color="dimmed" lineClamp={1}>
            {look.category}
          </Text>
        </div>
        <Group position="apart" noWrap>
          <Badge
            color={getBadgeColor(look.level)}
            variant="light"
            radius="sm"
            size="sm"
          >
            ✦ {look.level}
          </Badge>
          <Text fw={600} size="md">
             €{look.price}
          </Text>
        </Group>
      </CardSection>
    </Card>
  );
}
