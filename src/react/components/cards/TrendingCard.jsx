import { Link } from 'react-router-dom';
import FavoriteButton from '@/react/components/buttons/FavoriteButton';
import '@/sass/styles.scss';

const TrendingCard = ({ look, showHeart = false, variant = 'default' }) => {
  const badgeClass = look.level ? look.level.toLowerCase() : '';
  const isCompact = variant === 'compact';

  return (
    <div className={`trendingCard${isCompact ? ' compactCard' : ''}`}>
      <Link to={`/item/${look.id}`} className='cardLink'>
        <div
          className={`imageContainer${isCompact ? ' compactImageContainer' : ''}`}
        >
          <img src={look.image_url} alt={look.title} className='image' />
        </div>
        <div className={`content${isCompact ? ' compactContent' : ''}`}>
          <div className={`title${isCompact ? ' compactTitle' : ''}`}>
            {look.title}
          </div>
          <div className={`category${isCompact ? ' compactCategory' : ''}`}>
            {look.category}
          </div>
          <div className={`footer${isCompact ? ' compactFooter' : ''}`}>
            <div
              className={`badge ${badgeClass}${isCompact ? ' compactBadge' : ''}`}
            >
              ✦ {look.level}
            </div>
            <div className={`price${isCompact ? ' compactPrice' : ''}`}>
              €{look.price}
            </div>
          </div>
        </div>
      </Link>
      {showHeart && (
        <div className='heartWrapper'>
          <FavoriteButton itemId={look.id} className='heartIcon' size={20} />
        </div>
      )}
    </div>
  );
};

export default TrendingCard;
