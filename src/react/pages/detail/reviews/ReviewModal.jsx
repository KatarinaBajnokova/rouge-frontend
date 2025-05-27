import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '@/react/hooks/useAuth';

import { Modal, Group, Button, Textarea, Rating, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import styles from './ReviewModal.module.scss';

export default function ReviewModal({
  opened,
  onClose,
  itemId,
  onReviewSubmitted,
}) {
  const { userId: firebaseUid } = useAuth();
  const [userName, setUserName] = useState('');
  const [backendUserId, setBackendUserId] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchNameAndId() {
      if (!firebaseUid) return;
      try {
        const res = await fetch(
          `/api/users/by-firebase-uid?uid=${firebaseUid}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserName(`${data.first_name} ${data.last_name}`);
          setBackendUserId(data.id);
        } else {
          throw new Error(data.error || 'Failed to fetch user');
        }
      } catch (err) {
        console.error('⚠️ Failed to fetch user info:', err.message);
      }
    }
    fetchNameAndId();
  }, [firebaseUid]);

  const handleSubmit = async () => {
    if (!userName || rating < 1 || !comment.trim()) {
      notifications.show({
        title: 'Missing fields',
        message: 'Please enter a rating and a comment.',
        color: 'red',
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_id: itemId,
          author: userName,
          rating,
          comment,
          user_id: backendUserId,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit review');

      const newReview = {
        id: data.review_id,
        author: userName,
        rating,
        comment,
        created_at: new Date().toISOString(),
      };

      notifications.show({
        title: 'Thank you!',
        message: 'Your review has been submitted.',
        color: 'grape',
      });

      onReviewSubmitted(newReview);
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
      title={<span className={styles.modalTitle}>Leave a Review</span>}
      centered
      overlay={{ opacity: 0.5, blur: 3 }}
      size='sm'
      withCloseButton={false}
    >
      <Stack className={styles.modalStack}>
        <Group spacing='xs' className={styles.reviewHeader}>
          <div className={styles.reviewLabel}>Your Rating:</div>
          <Rating
            value={rating}
            onChange={setRating}
            fractions={1}
            color='grape'
            className={styles.reviewRating}
          />
        </Group>

        <Textarea
          label='Your Comment'
          placeholder='Tell us what you think...'
          minRows={4}
          value={comment}
          onChange={e => setComment(e.currentTarget.value)}
          required
          className={styles.reviewComment}
        />

        <Group position='right' mt='md' className={styles.buttonGroup}>
          <Button
            variant='default'
            onClick={onClose}
            disabled={submitting}
            className={styles.btnCancel}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            loading={submitting}
            className={styles.btnSubmit}
            color='grape'
            radius='xl'
          >
            Submit
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
