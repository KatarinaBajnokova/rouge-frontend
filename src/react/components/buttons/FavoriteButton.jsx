import { useNavigate } from 'react-router-dom';
import IconHeart from '@tabler/icons-react/dist/esm/icons/iconHeart';
import IconHeartFilled from '@tabler/icons-react/dist/esm/icons/iconHeartFilled';
import { useFavorites } from '@/react/hooks/useFavorites';
import '@/sass/styles.scss';

const FavoriteButton = ({ itemId, size = 20, className = '' }) => {
  const { favorites = [], toggleFavorite, isLoggedIn } = useFavorites();
  const navigate = useNavigate();

  const isFav = Array.isArray(favorites) && favorites.includes(itemId);

  const onClick = e => {
    e.preventDefault();
    e.stopPropagation();

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    toggleFavorite(itemId);
  };

  return (
    <button
      type='button'
      onClick={onClick}
      className={`favoriteButton ${className}`.trim()}
      aria-label={
        !isLoggedIn
          ? 'Log in to add to favorites'
          : isFav
            ? 'Remove from favorites'
            : 'Add to favorites'
      }
    >
      {isFav ? (
        <IconHeartFilled size={size} color='#C8102E' />
      ) : (
        <IconHeart size={size} />
      )}
    </button>
  );
};

export default FavoriteButton;
