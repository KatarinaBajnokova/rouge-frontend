import React from 'react';
import DetailCarousel from '../carousel/DetailCarousel';
import FavoriteButton from '@/react/components/buttons/favoritebutton/FavoriteButton';
import '@/sass/components/carousel/_detail_carousel.scss';

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
