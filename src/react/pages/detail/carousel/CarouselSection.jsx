import DetailCarousel from '@/react/components/carousel/DetailCarousel';
import FavoriteButton from '@/react/components/buttons/FavoriteButton';

export default function CarouselSection({ itemId }) {
  return (
    <section className='detailCarousel'>
      <div className='carouselWrapper'>
        <DetailCarousel itemId={itemId} />
        <div className='carouselHeart'>
          <FavoriteButton itemId={itemId} size={24} />
        </div>
      </div>
    </section>
  );
}
