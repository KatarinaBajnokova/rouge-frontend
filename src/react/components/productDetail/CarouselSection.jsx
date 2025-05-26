import DetailCarousel from '@/react/components/carousel/detailcarousel/DetailCarousel';
import FavoriteButton from '@/react/components/buttons/favoritebutton/FavoriteButton';

export default function CarouselSection({ itemId }) {
  return (
    <section className='detail-carousel'>
      <div className='carousel-wrapper'>
        <DetailCarousel itemId={itemId} />
        <div className='carousel-heart'>
          <FavoriteButton itemId={itemId} size={24} />
        </div>
      </div>
    </section>
  );
}
