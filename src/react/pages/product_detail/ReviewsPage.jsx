// src/react/pages/product_detail/ReviewsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Text, Loader, Stack, Card, Rating, Group } from '@mantine/core';
import { useAuth } from '../../hooks/useAuth';
import { notifications } from '@mantine/notifications';
import {
  BackIconButton,
  LeaveAReviewIconButton,
} from '../../components/buttons/IconButtons';
import ReviewModal from './ReviewModal';

import '@/sass/pages/product-detail/_review_page.scss';

// **Import** the default avatar so your bundler can resolve it
import DefaultAvatar from '@/assets/avatar/default.png';

export default function ReviewsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { userId: firebaseUid } = useAuth();
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
  if (error) return <Text color='red'>Error loading reviews: {error}</Text>;

  const count = reviews.length;
  const avg =
    count > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / count : 0;

  return (
    <div className='reviews-page'>
      {/* Header */}
      <div className='reviews-page__header'>
        <BackIconButton
          onClick={() => navigate(-1)}
          className='reviews-page__back-btn'
        />
        <Text
          component='h1'
          className='reviews-page__title'
          size='xl'
          weight={500}
        >
          Reviews
        </Text>
      </div>

      {/* Summary */}
      <div className='reviews-summary'>
        <Text className='reviews-summary__average'>{avg.toFixed(1)}</Text>
        <Rating
          className='reviews-summary__rating'
          value={avg}
          readOnly
          fractions={2}
          color='grape'
        />
        <Text className='reviews-summary__count'>
          {count} {count === 1 ? 'rating' : 'ratings'}
        </Text>
      </div>

      {/* Leave a review */}
      <div className='reviews-action'>
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

      {/* Reviews List */}
      <Stack spacing='md'>
        {count > 0 ? (
          reviews.map(
            ({
              id: reviewId,
              author,
              comment,
              rating,
              avatar_url, // comes from your API
            }) => (
              <Card
                key={reviewId}
                shadow='sm'
                padding='md'
                className='reviews-page__review-card'
              >
                <Rating
                  className='reviews-page__review-card-rating'
                  value={rating}
                  readOnly
                  fractions={1}
                  color='grape'
                />

                <Group
                  spacing='sm'
                  align='center'
                  className='reviews-page__review-header'
                >
                  <img
                    src={avatar_url || DefaultAvatar}
                    alt={`${author} avatar`}
                    className='reviews-page__avatar'
                  />
                  <Text className='reviews-page__author'>{author}</Text>
                </Group>

                <Text size='sm' className='reviews-page__comment'>
                  {comment}
                </Text>
              </Card>
            )
          )
        ) : (
          <Text color='dimmed'>No reviews yet.</Text>
        )}
      </Stack>

      <ReviewModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        itemId={Number(id)}
        onReviewSubmitted={newReview => {
          // Expect newReview to include avatar_url
          setReviews([newReview, ...reviews]);
          setModalOpen(false);
        }}
      />
    </div>
  );
}
