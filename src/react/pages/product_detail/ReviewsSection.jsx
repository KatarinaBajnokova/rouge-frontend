import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Stack, Text, Rating } from '@mantine/core';
import PropTypes from 'prop-types';
import { SeeReviewsIconButton } from '../../components/buttons/IconButtons';

import '@/sass/pages/product-detail/_review_section.scss';

export default function ReviewsSection({ reviews }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemId = Number(id);

  const count = reviews?.length || 0;
  const avg =
    count > 0
      ? reviews.reduce((sum, { rating }) => sum + rating, 0) / count
      : 0;

  return (
    <>
      <Card className='reviews-summary' shadow='sm' padding='md'>
        <Stack align='center' spacing='xs'>
          <Text className='reviews-average'>{avg.toFixed(1)}</Text>
          <Rating value={avg} readOnly fractions={2} color='grape' />
          <Text className='reviews-count'>
            {count} {count === 1 ? 'rating' : 'ratings'}
          </Text>
        </Stack>
      </Card>

      <div className='reviews-action'>
        <SeeReviewsIconButton
          onClick={() => navigate(`/item/${itemId}/reviews`)}
        />
      </div>
    </>
  );
}

ReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
