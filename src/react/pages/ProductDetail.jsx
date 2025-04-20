// src/react/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Badge,
  Group,
  Text,
  Title,
  Divider,
  Paper,
  Rating,
  Button,
} from '@mantine/core';
import DetailCarousel from '../components/carousel/DetailCarousel';
import { BasketButton } from '../components/buttons/BasketButton';
import '@/sass/pages/_product_detail.scss';

export default function ProductDetail() {
  const { id } = useParams();
  const itemId = Number(id);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    fetch(`/api/items/${itemId}`)
      .then(res => {
        if (!res.ok) throw new Error('Item not found');
        return res.json();
      })
      .then(data => {
        // normalize snake_case → camelCase
        setItem({
          ...data,
          tutorialUrl: data.tutorial_url,
        });
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <Text>Loading…</Text>;
  if (error) return <Text color='red'>Error: {error}</Text>;

  const fullDesc = item.description || '';
  const shortDesc = fullDesc.slice(0, 180) + (fullDesc.length > 180 ? '…' : '');

  /* ───────────────────────── Reviews helpers ───────────────────────── */
  const reviews = item.reviews || [];
  const reviewCount = reviews.length;
  const avgRating =
    reviewCount === 0
      ? 0
      : reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount;
  const avgRatingLabel = avgRating.toFixed(1).replace('.', ','); // e.g. 4,2

  return (
    <div className='product-detail'>
      {/* Back + Basket */}
      <Group position='apart' mb='md'>
        <Link to='/' className='back-link'>
          ← Back
        </Link>
        <BasketButton />
      </Group>

      {/* 1) Carousel */}
      <section className='detail-carousel'>
        <DetailCarousel itemId={itemId} />
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

        {item.tags?.length > 0 && (
          <Group spacing='xs' mt='sm' mb='sm'>
            {item.tags.map(tag => (
              <Badge
                key={tag}
                size='xs'
                variant='filled'
                radius='sm'
                className='detail-tag'
              >
                {tag}
              </Badge>
            ))}
          </Group>
        )}

        <div className={`detail-description ${expanded ? 'expanded' : ''}`}>
          <Text>{expanded ? fullDesc : shortDesc}</Text>
          {fullDesc.length > 180 && (
            <Text
              component='button'
              variant='subtle'
              size='xs'
              onClick={() => setExpanded(!expanded)}
              className='toggle-desc-btn'
            >
              {expanded ? 'Show less' : 'Show more'}
            </Text>
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
                  <Text fw={500}>{step.title}</Text>
                  <Text size='sm' color='dimmed'>
                    {step.text}
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

          {/* Summary card (shown when list is collapsed) */}
          {!showReviews && (
            <Paper
              withBorder
              shadow='sm'
              p='lg'
              radius='lg'
              className='reviews-summary'
              mt='sm'
            >
              <Group position='center' direction='column' spacing={4}>
                <Title order={2}>{avgRatingLabel}</Title>
                <Rating
                  value={avgRating}
                  readOnly
                  fractions={10}
                  size='lg'
                  color='grape'
                />
                <Text fw={500} mt='xs'>
                  {reviewCount} {reviewCount === 1 ? 'rating' : 'ratings'}
                </Text>
                {reviewCount > 0 && (
                  <Button
                    size='sm'
                    radius='xl'
                    mt='sm'
                    color='grape'
                    onClick={() => setShowReviews(true)}
                  >
                    See reviews ›
                  </Button>
                )}
              </Group>
            </Paper>
          )}

          {/* Detailed list (shown after clicking) */}
          {showReviews && (
            <>
              {reviews.length > 0 ? (
                reviews.map(r => (
                  <div key={r.id} className='review-card'>
                    <Group position='apart'>
                      <Text fw={700}>{r.author}</Text>
                      <Text color='dimmed'>{r.rating} / 5</Text>
                    </Group>
                    <Text mt='xs'>{r.comment}</Text>
                    <Divider my='sm' />
                  </div>
                ))
              ) : (
                <Text>No reviews yet.</Text>
              )}

              <Button
                variant='subtle'
                radius='xl'
                size='xs'
                onClick={() => setShowReviews(false)}
              >
                ‹ Back to summary
              </Button>
            </>
          )}
        </section>
      )}
    </div>
  );
}
