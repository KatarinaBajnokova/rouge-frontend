// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Badge,
  Button,
  Chip,
  Group,
  Text,
  Title,
  Divider,
} from '@mantine/core';
import SimpleCarousel from '../components/carousel/Carousel';
import '@/sass/pages/_product_detail.scss';

export default function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Item not found');
        return res.json();
      })
      .then(data => setItem(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Text>Loading…</Text>;
  if (error) return <Text color='red'>Error: {error}</Text>;

  // description toggle logic
  const fullDesc = item.description || '';
  const shortDesc = fullDesc.slice(0, 180) + (fullDesc.length > 180 ? '…' : '');

  return (
    <div className='product-detail'>
      {/* Back + Basket */}
      <Group position='apart' mb='md'>
        <Link to='/' className='back-link'>
          ← Back
        </Link>
        <Button className='basket-button' radius='xl'>
          Basket
        </Button>
      </Group>

      {/* 1) Carousel */}
      <section className='detail-carousel'>
        <SimpleCarousel slides={item.images || [item.image_url]} />
      </section>

      {/* 2) Title / Level / Tags / Description */}
      <section className='detail-info'>
        <Title order={2}>{item.name}</Title>
        <Badge
          size='lg'
          color={
            item.level === 'Easy'
              ? 'green'
              : item.level === 'Moderate'
                ? 'blue'
                : 'red'
          }
          variant='light'
          mt='xs'
        >
          {item.level}
        </Badge>

        {item.tags && (
          <Group spacing='xs' mt='sm' mb='sm'>
            {item.tags.map(tag => (
              <Chip key={tag} variant='filled' size='xs' className='detail-tag'>
                {tag}
              </Chip>
            ))}
          </Group>
        )}

        <div className={`detail-description ${expanded ? 'expanded' : ''}`}>
          <Text>{expanded ? fullDesc : shortDesc}</Text>
          {fullDesc.length > 180 && (
            <Button
              variant='subtle'
              size='xs'
              onClick={() => setExpanded(!expanded)}
              className='toggle-desc-btn'
            >
              {expanded ? 'Show less' : 'Show more'}
            </Button>
          )}
        </div>
      </section>

      {/* 3) Box products */}
      {item.boxProducts?.length > 0 && (
        <section className='detail-box-products'>
          <Title order={3}>Box products</Title>
          <div className='box-products-list'>
            {item.boxProducts.map(box => (
              <div key={box.id} className='box-product-card'>
                <img
                  src={box.image_url}
                  alt={box.description}
                  className='box-product-card__img'
                />
                <div className='box-product-card__body'>
                  <Text fw={700}>{box.title}</Text>
                  <Text size='sm' color='dimmed' mt='xs'>
                    {box.description}
                  </Text>
                  <Button size='xs' mt='sm'>
                    More info
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4) Tutorial preview */}
      {item.tutorialUrl && (
        <section className='detail-tutorial'>
          <Title order={3}>Tutorial preview</Title>
          <video
            src={item.tutorialUrl}
            controls
            poster={item.images?.[0]}
            className='detail-video'
          />
        </section>
      )}

      {/* 5) Instructions preview */}
      {item.instructions?.length > 0 && (
        <section className='detail-instructions'>
          <Title order={3}>Instructions preview</Title>
          <div className='instructions-list'>
            {item.instructions.map((step, idx) => (
              <div key={idx} className='instruction-step'>
                <span className='instruction-step__number'>{idx + 1}.</span>
                <div className='instruction-step__body'>
                  <Text fw={500}>{step.title || `Step ${idx + 1}`}</Text>
                  <Text size='sm' color='dimmed'>
                    {step.text || step}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6) Reviews */}
      {item.reviews && (
        <section className='detail-reviews'>
          <Title order={3}>Reviews</Title>
          {item.reviews.length > 0 ? (
            item.reviews.map(r => (
              <div key={r.id} className='review-card'>
                <Group position='apart'>
                  <Text fw={700}>{r.author}</Text>
                  <Text color='dimmed'>{r.rating} / 5</Text>
                </Group>
                <Text mt='xs'>{r.comment}</Text>
                <Divider my='sm' />
              </div>
            ))
          ) : (
            <Text>No reviews yet.</Text>
          )}
        </section>
      )}
    </div>
  );
}
