import React from 'react';
import { Card, Text, Badge, Group, Box, ActionIcon } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';

const TrendingCard = ({ look, showHeart = false }) => {
  const getBadgeColor = level => {
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

  return (
    <Card
      shadow='lg'
      radius='md'
      padding='none'
      sx={{
        width: '100%',
        maxWidth: 240,
        backgroundColor: '#fff',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box pos='relative'>
        <img
          src={look.image_url}
          alt={look.title}
          style={{
            width: '100%',
            height: '240px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {showHeart && (
          <ActionIcon
            variant='white'
            radius='xl'
            size='lg'
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
          >
            <IconHeartFilled size={20} color='#C8102E' />
          </ActionIcon>
        )}
      </Box>

      <Box
        p='md'
        pt='sm'
        sx={{
          background:
            'linear-gradient(to top, white 80%, rgba(255,255,255,0.6))',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      >
        <Text fw={700} size='lg' mb={2} color='black'>
          {look.title}
        </Text>
        <Text size='sm' color='dimmed' mb='xs'>
          {look.category}
        </Text>
        <Group position='apart' mt='sm'>
          <Badge
            color={getBadgeColor(look.level)}
            variant='light'
            radius='sm'
            size='md'
          >
            ✦ {look.level}
          </Badge>
          <Text fw={600} size='lg' color='black'>
            €{look.price}
          </Text>
        </Group>
      </Box>
    </Card>
  );
};

export default TrendingCard;
