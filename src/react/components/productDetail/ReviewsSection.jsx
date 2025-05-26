import { Title, Text, Paper, Rating, Button, Divider } from '@mantine/core';
import styles from './ReviewsSectionComponent.module.scss';

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
    <section className={styles.reviewsSection}>
      <Title className='detail-title' order={3}>
        Reviews
      </Title>

      {!showReviews && (
        <Paper
          withBorder
          shadow='sm'
          p='lg'
          radius='lg'
          className={styles.reviewsSummary}
          mt='sm'
        >
          <div className={styles.reviewsSummaryContent}>
            <Title order={2} className={styles.reviewsAverage}>
              {avgRatingLabel}
            </Title>
            <Rating
              value={avgRating}
              readOnly
              fractions={10}
              size='lg'
              color='grape'
            />
            <Text fw={500} mt='xs' className={styles.reviewsCount}>
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
                See reviews ›
              </Button>
            )}
          </div>
        </Paper>
      )}

      {showReviews && (
        <>
          {reviews.length > 0 ? (
            reviews.map(r => (
              <div key={r.id} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
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
          <div className={styles.reviewsAction}>
            <Button
              variant='subtle'
              radius='xl'
              size='xs'
              onClick={() => setShowReviews(false)}
            >
              ‹ Back to summary
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
