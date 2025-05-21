import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Group,
  Button,
  TextInput,
  Textarea,
  Rating,
  Stack,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';

export default function ReviewModal({
  opened,
  onClose,
  itemId,
  onReviewSubmitted,
}) {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!author.trim() || rating < 1 || !comment.trim()) {
      notifications.show({
        title: 'Missing fields',
        message: 'Please enter your name, a rating, and a comment.',
        color: 'red',
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: itemId, author, rating, comment }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit review');

      const newReview = { id: data.review_id, author, rating, comment };
      notifications.show({
        title: 'Thank you!',
        message: 'Your review has been submitted.',
        color: 'grape',
      });
      onReviewSubmitted(newReview);
      setAuthor('');
      setRating(0);
      setComment('');
    } catch (err) {
      notifications.show({
        title: 'Error',
        message: err.message,
        color: 'red',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title='Leave a Review'
      centered
      overlayOpacity={0.5}
      overlayBlur={3}
    >
      <Stack spacing='md'>
        <TextInput
          label='Your Name'
          placeholder='e.g. Jane Doe'
          value={author}
          onChange={e => setAuthor(e.currentTarget.value)}
          required
        />

        <Group spacing='xs'>
          <div>Your Rating:</div>
          <Rating value={rating} onChange={setRating} fractions={1} />
        </Group>

        <Textarea
          label='Your Comment'
          placeholder='Tell us what you think...'
          minRows={4}
          value={comment}
          onChange={e => setComment(e.currentTarget.value)}
          required
        />

        <Group position='right' mt='md'>
          <Button variant='default' onClick={onClose} disabled={submitting}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} loading={submitting}>
            Submit Review
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

ReviewModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
  onReviewSubmitted: PropTypes.func.isRequired,
};
