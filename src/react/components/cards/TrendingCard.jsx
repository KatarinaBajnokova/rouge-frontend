import { Link } from 'react-router-dom';
import FavoriteButton from '@/react/components/buttons/favoritebutton/FavoriteButton';
import styles from './TrendingCard.module.scss';

const TrendingCard = ({ look, showHeart = false }) => {
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
        <FavoriteButton
          itemId={look.id}
          className={styles.heartIcon}
          size={20}
        />
      )}
    </div>
  );
};

export default TrendingCard;
