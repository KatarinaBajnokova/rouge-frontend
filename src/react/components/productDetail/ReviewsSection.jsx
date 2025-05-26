import React from 'react';
import { Title, Text, Paper, Rating, Button, Divider } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

export default function ReviewsSection({
  reviews = [],
  showReviews,
  setShowReviews,
}) {
  const reviewCount = reviews.length;
  const avgRating =
    reviewCount === 0
      ? 0
      : reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount;
  const avgRatingLabel = avgRating.toFixed(1).replace('.', ',');

  return (
    <section className='detail-reviews'>
      <Title className='detail-title' order={3}>
        Reviews
      </Title>

      {!showReviews && (
        <Paper
          withBorder
          shadow='sm'
          p='lg'
          radius='lg'
          className='reviews-summary'
          mt='sm'
        >
          <div className='reviews-summary-content'>
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
  radius="xl"
  color="grape"
  className="see-reviews-icon-button"
  onClick={() => setShowReviews(true)}
  rightSection={<IconChevronRight size={16} />}
>
  See reviews
</Button>


            )}
          </div>
        </Paper>
      )}

      {showReviews && (
        <>
          {reviews.length > 0 ? (
            reviews.map(r => (
              <div key={r.id} className='review-card'>
                <div className='review-header'>
                  <Text fw={700}>{r.author}</Text>
                  <Rating
                    value={r.rating}
                    readOnly
                    size='sm'
                    fractions={10}
                    color='grape'
                  />
                </div>
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
  );
}
