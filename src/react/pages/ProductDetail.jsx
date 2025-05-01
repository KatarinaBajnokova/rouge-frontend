import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { BasketButton } from '../components/buttons/BasketButton';
import { BackIconButton } from '../components/buttons/IconButtons';

import CarouselSection from '../components/productDetail/CarouselSection';
import InfoSection from '../components/productDetail/InfoSection';
import BoxProductsSection from '../components/productDetail/BoxProductsSection';
import TutorialSection from '../components/productDetail/TutorialSection';
import InstructionsSection from '../components/productDetail/InstructionsSection';
import ReviewsSection from '../components/productDetail/ReviewsSection';
import PurchaseBanner from '../components/productDetail/PurchaseBanner';

import '@/sass/pages/_product_detail.scss';

export default function ProductDetail() {
  const { id } = useParams();
  const itemId = Number(id);
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const [basketRefresh, setBasketRefresh] = useState(0);

  useEffect(() => {
    fetch(`/api/item_detail?id=${itemId}`)
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Item not found: ${text}`);
        }
        const contentType = res.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await res.text();
          throw new Error(`Unexpected response: ${text}`);
        }
        return res.json();
      })
      .then(data => setItem(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [itemId]);

  const handleAddToBasket = async () => {
    if (!item) return;
    try {
      const res = await fetch('/api/basket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: item.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to add to basket');

      notifications.show({
        title: 'Item added to basket',
        message: `${item.name} has been added.`,
        color: 'grape',
        autoClose: 2000,
        withCloseButton: false,
      });

      setBasketRefresh(x => x + 1);
    } catch (err) {
      notifications.show({
        title: 'Error',
        message: 'Could not add item to basket.',
        color: 'red',
        autoClose: 3000,
      });
    }
  };

  if (loading) return <Text>Loading…</Text>;
  if (error) return <Text color='red'>Error: {error}</Text>;

  return (
    <div className='product-detail'>
      {/* Header Buttons */}
      <div className='detail-header-buttons'>
        <BackIconButton
          onClick={() => navigate(-1)}
          style={{ position: 'fixed' }}
        />

        <BasketButton refresh={basketRefresh} />
      </div>

      {/* Product Sections */}
      <CarouselSection itemId={itemId} />
      <InfoSection item={item} expanded={expanded} setExpanded={setExpanded} />
      <BoxProductsSection boxProducts={item.boxProducts} />
      <TutorialSection
        tutorialUrl={item.tutorialUrl}
        poster={item.images?.[0]}
      />
      <InstructionsSection instructions={item.instructions} />
      <ReviewsSection
        reviews={item.reviews}
        showReviews={showReviews}
        setShowReviews={setShowReviews}
      />

      {/* Fixed bottom "Add to basket" bar */}
      <PurchaseBanner item={item} handleAddToBasket={handleAddToBasket} />
    </div>
  );
}
