import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Text, Loader, Stack, Card, Group, Rating } from '@mantine/core';
import { useAuth } from '../../hooks/useAuth';
import { notifications } from '@mantine/notifications';
import {
  BackIconButton,
  LeaveAReviewIconButton,
} from '../../components/buttons/IconButtons';
import ReviewModal from './ReviewModal';

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
      .then(setReviews)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Text color='red'>Error loading reviews: {error}</Text>;

  const count = reviews.length;
  const avg =
    count > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / count : 0;

  return (
    <div className='reviews-page' style={{ padding: '1rem' }}>
      <BackIconButton onClick={() => navigate(-1)} />

      <Card shadow='sm' padding='md' style={{ margin: '1rem 0' }}>
        <Stack align='center' spacing='xs'>
          <Text size='lg' weight={500}>
            {avg.toFixed(1)}
          </Text>
          <Rating value={avg} readOnly fractions={2} color='grape' />
          <Text size='sm' color='dimmed'>
            {count} {count === 1 ? 'rating' : 'ratings'}
          </Text>
        </Stack>

        <Group position='center' style={{ marginTop: '1rem' }}>
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
        </Group>
      </Card>

      <Text size='xl' weight={500} mb='md'>
        Product Reviews
      </Text>

      <Stack spacing='md'>
        {count > 0 ? (
          reviews.map(({ id: reviewId, author, comment, rating }) => (
            <Card key={reviewId} shadow='sm' padding='md'>
              <Stack spacing='xs'>
                <Text weight={500}>{author}</Text>
                <Text size='sm'>{comment}</Text>
                <Text size='sm' color='orange'>
                  {'⭐'.repeat(rating)}
                </Text>
              </Stack>
            </Card>
          ))
        ) : (
          <Text color='dimmed'>No reviews yet.</Text>
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
