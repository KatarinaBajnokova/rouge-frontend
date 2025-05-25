import { Link } from 'react-router-dom';
import FavoriteButton from '@/react/components/buttons/favoritebutton/FavoriteButton';
import styles from './TrendingCard.module.scss';

const TrendingCard = ({ look, showHeart = false, variant = 'default' }) => {
  const badgeClass = styles[look.level.toLowerCase()] || '';
  const isCompact = variant === 'compact';

  return (
    <div
      className={`${styles.trendingCard} ${
        isCompact ? styles.compactCard : ''
      }`}
    >
      <Link to={`/item/${look.id}`} className={styles.cardLink}>
        <div
          className={`${styles.imageContainer} ${
            isCompact ? styles.compactImageContainer : ''
          }`}
        >
          <img
            src={look.image_url}
            alt={look.title}
            className={styles.image}
          />
        </div>

        <div
          className={`${styles.content} ${
            isCompact ? styles.compactContent : ''
          }`}
        >
          <div
            className={`${styles.title} ${
              isCompact ? styles.compactTitle : ''
            }`}
          >
            {look.title}
          </div>

          <div
            className={`${styles.category} ${
              isCompact ? styles.compactCategory : ''
            }`}
          >
            {look.category}
          </div>

          <div
            className={`${styles.footer} ${
              isCompact ? styles.compactFooter : ''
            }`}
          >
            <div
              className={`${styles.badge} ${badgeClass} ${
                isCompact ? styles.compactBadge : ''
              }`}
            >
              ✦ {look.level}
            </div>

            <div
              className={`${styles.price} ${
                isCompact ? styles.compactPrice : ''
              }`}
            >
              €{look.price}
            </div>
          </div>
        </div>
      </Link>

      {showHeart && (
        <div className={styles.heartWrapper}>
          <FavoriteButton
            itemId={look.id}
            className={styles.heartIcon}
            size={20}
          />
        </div>
      )}
    </div>
  );
};

export default TrendingCard;
