import React from 'react';
import { Link } from 'react-router-dom';
import IconHeartFilled from '@tabler/icons-react/dist/esm/icons/iconHeartFilled';
import '@/sass/components/cards/_trending_cards.scss';

const TrendingCard = ({ look, showHeart = false }) => {
  return (
    <Link to={`/item/${look.id}`} className='card-link'>
      <div className='trendingCard'>
        <div className='trendingCard__imageContainer'>
          <img
            src={look.image_url}
            alt={look.title}
            className='trendingCard__image'
          />
          {showHeart && (
            <div className='trendingCard__heartIcon'>
              <IconHeartFilled size={20} color='#C8102E' />
            </div>
          )}
        </div>

        <div className='trendingCard__content'>
          <div className='trendingCard__title'>{look.title}</div>
          <div className='trendingCard__category'>{look.category}</div>
          <div className='trendingCard__footer'>
            <div
              className={`trendingCard__badge badge--${look.level.toLowerCase()}`}
            >
              ✦ {look.level}
            </div>
            <div className='trendingCard__price'>€{look.price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;
