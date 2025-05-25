import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconHeart from '@tabler/icons-react/dist/esm/icons/iconHeart';
import IconHeartFilled from '@tabler/icons-react/dist/esm/icons/iconHeartFilled';
import { useFavorites } from '@/react/hooks/useFavorites';
import { useAuth } from '@/react/hooks/useAuth';
import styles from './TrendingCard.module.scss';

const TrendingCard = ({ look, showHeart = false }) => {
  const { favorites = [], toggleFavorite } = useFavorites();
  const { userId, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const isFav =
    Boolean(userId) && Array.isArray(favorites) && favorites.includes(look.id);

  const onHeartClick = e => {
    e.preventDefault();
    e.stopPropagation();

    if (authLoading || !userId) {
      return navigate('/login');
    }
    toggleFavorite(look.id);
  };

  const badgeClass = styles[look.level.toLowerCase()] || '';

  return (
    <div className={styles.trendingCard}>
      <Link to={`/item/${look.id}`} className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <img src={look.image_url} alt={look.title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{look.title}</div>
          <div className={styles.category}>{look.category}</div>
          <div className={styles.footer}>
            <div className={`${styles.badge} ${badgeClass}`}>
              ✦ {look.level}
            </div>
            <div className={styles.price}>€{look.price}</div>
          </div>
        </div>
      </Link>

      {showHeart && (
        <button
          type='button'
          className={styles.heartIcon}
          onClick={onHeartClick}
          aria-label={
            !userId
              ? 'Log in to add to favorites'
              : isFav
                ? 'Remove from favorites'
                : 'Add to favorites'
          }
        >
          {isFav ? (
            <IconHeartFilled size={20} color='#C8102E' />
          ) : (
            <IconHeart size={20} />
          )}
        </button>
      )}
    </div>
  );
};

export default TrendingCard;
