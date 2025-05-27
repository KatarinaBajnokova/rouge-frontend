import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Text, Loader, Stack, Card, Rating, Group } from '@mantine/core';
import { useAuth } from '@/react/hooks/useAuth';
import { notifications } from '@mantine/notifications';
import {
  BackIconButton,
  LeaveAReviewIconButton,
} from '@/react/components/buttons/IconButtons';
import ReviewModal from './ReviewModal';
import styles from './ReviewsPage.module.scss';
import DefaultAvatar from '@/assets/avatar/default.png';

export default function ReviewsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { userId: firebaseUid } = useAuth();

  useEffect(() => {
    fetch(`/api/reviews/${id}`)
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || 'Failed to fetch reviews');
        }
        return res.json();
      })
      .then(data => setReviews(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Text>Error loading reviews: {error}</Text>;

  const count = reviews.length;
  const avg =
    count > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / count : 0;

  return (
    <div className={styles.reviewsPage}>
      <div className={styles.header}>
        <BackIconButton
          onClick={() => navigate(-1)}
          className={styles.backBtn}
        />
        <Text component='h1' className={styles.title} size='xl' weight={500}>
          Reviews
        </Text>
      </div>

      <div className={styles.reviewsSummary}>
        <Text className={styles.average}>{avg.toFixed(1)}</Text>
        <Rating
          className={styles.rating}
          value={avg}
          readOnly
          fractions={2}
          color='grape'
        />
        <Text className={styles.count}>
          {count} {count === 1 ? 'rating' : 'ratings'}
        </Text>
      </div>

      <div className={styles.reviewsAction}>
        <LeaveAReviewIconButton
          onClick={() => {
            if (!firebaseUid) {
              notifications.show({
                title: 'Login Required',
                message: 'Please log in to leave a review.',
                color: 'red',
              });
            } else {
              setModalOpen(true);
            }
          }}
        />
      </div>

      <Stack spacing='md'>
        {count > 0 ? (
          reviews.map(
            ({ id: reviewId, author, comment, rating, avatar_url }) => (
              <Card
                key={reviewId}
                shadow='sm'
                padding='md'
                className={styles.reviewCard}
              >
                <Rating
                  className={styles.rating}
                  value={avg}
                  readOnly
                  fractions={2}
                  color='grape'
                />

                <Group
                  spacing='sm'
                  align='center'
                  className={styles.reviewHeader}
                >
                  <img
                    src={avatar_url || DefaultAvatar}
                    alt={`${author} avatar`}
                    className={styles.avatar}
                  />
                  <Text className={styles.author}>{author}</Text>
                </Group>

                <Text size='sm' className={styles.comment}>
                  {comment}
                </Text>
              </Card>
            )
          )
        ) : (
          <Text>No reviews yet.</Text>
        )}
      </Stack>
      <ReviewModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        itemId={Number(id)}
        onReviewSubmitted={newReview => {
          setReviews([newReview, ...reviews]);
          setModalOpen(false);
        }}
      />
    </div>
  );
}
