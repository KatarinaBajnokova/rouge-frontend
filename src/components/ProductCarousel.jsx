// src/components/ProductCarousel.jsx
import React, { useEffect, useState } from 'react';
import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Title,
  Box,
  Loader,
  Center,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export default function ProductCarousel() {
  const [products, setProducts] = useState(null);

  // 1. Fetch products on mount
  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(setProducts)
      .catch(err => {
        console.error(err);
        setProducts([]); // fail gracefully
      });
  }, []);

  // 2. Loading state
  if (products === null) {
    return (
      <Center style={{ padding: 40 }}>
        <Loader />
      </Center>
    );
  }

  // 3. No‑data state
  if (products.length === 0) {
    return (
      <Text align='center' color='dimmed' mt='xl'>
        No products to display.
      </Text>
    );
  }

  // 4. Render the carousel
  return (
    <Carousel
      slideSize='300px'
      height={450}
      align='start'
      slideGap='md'
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 0 }]}
    >
      {products.map(p => (
        <Carousel.Slide key={p.id}>
          <Card shadow='sm' radius='md' style={{ overflow: 'hidden' }}>
            {/* Image + gradient overlay */}
            <Box style={{ position: 'relative' }}>
              <Image src={p.image_url} height={200} alt={p.name} />
              <Box
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%',
                  background:
                    'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                }}
              />
            </Box>

            {/* Name & Price */}
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4} lineClamp={1}>
                {p.name}
              </Title>
              <Text size='lg' weight={700}>
                €{p.price.toFixed(2)}
              </Text>
            </Group>

            {/* Category & Level */}
            <Group position='apart' spacing='xs'>
              <Badge color='pink'>{p.category}</Badge>
              <Text size='sm' color='dimmed'>
                {p.level}
              </Text>
            </Group>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
