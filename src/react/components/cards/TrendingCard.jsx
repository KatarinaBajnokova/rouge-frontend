import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconHeart from '@tabler/icons-react/dist/esm/icons/iconHeart';
import IconHeartFilled from '@tabler/icons-react/dist/esm/icons/iconHeartFilled';
import { useFavorites } from '@/react/hooks/useFavorites';
import '@/sass/components/cards/_trending_cards.scss';

const TrendingCard = ({ look, showHeart = false }) => {
  const { favorites = [], toggleFavorite, isLoggedIn } = useFavorites();
  const navigate = useNavigate();

  const isFav = Array.isArray(favorites) && favorites.includes(look.id);

  const onHeartClick = e => {
    e.preventDefault();
    e.stopPropagation();

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    toggleFavorite(look.id);
  };

  return (
    <div className='trendingCard'>
      <Link to={`/item/${look.id}`} className='card-link'>
        <div className='trendingCard__imageContainer'>
          <img
            src={look.image_url}
            alt={look.title}
            className='trendingCard__image'
          />
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
      </Link>

      {showHeart && (
        <button
          type='button'
          className='trendingCard__heartIcon'
          onClick={onHeartClick}
          aria-label={
            !isLoggedIn
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
