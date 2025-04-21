import React from 'react';
import DetailCarousel from '../carousel/DetailCarousel';
import '@/sass/components/carousel/_detail_carousel.scss';

export default function CarouselSection({ itemId }) {
  return (
    <section className='detail-carousel'>
      <DetailCarousel itemId={itemId} />
    </section>
  );
}
