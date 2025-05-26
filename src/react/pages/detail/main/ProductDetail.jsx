import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { safeJsonFetch } from '@/react/utils/fetchUtils';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import { BackIconButton } from '@/react/components/buttons/IconButtons';
import CarouselSection from '@/react/pages/detail/carousel/CarouselSection';
import InfoSection from '@/react/pages/detail/info/InfoSection';
import BoxProductsSection from '@/react/pages/detail/box/BoxProductsSection';
import TutorialSection from '@/react/pages/detail/tutorial//TutorialSection';
import InstructionsSection from '@/react/pages/detail/instruction/InstructionsSection';
import ReviewsSection from '@/react/pages/detail/reviews//ReviewsSection';
import PurchaseBanner from '@/react/pages/detail/purchase/PurchaseBanner';

import './ProductDetail.module.scss';
import './ProductDetailHeader.module.scss';

export default function ProductDetail() {
  const { id } = useParams();
  const itemId = Number(id);

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [basketRefresh, setBasketRefresh] = useState(0);

  useEffect(() => {
    const fetchItemDetail = async () => {
      try {
        const data = await safeJsonFetch(`/api/item_detail?id=${itemId}`);
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetail();
  }, [itemId]);

  const handleAddToBasket = async () => {
    if (!item) return;

    try {
      await safeJsonFetch('/api/basket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: item.id }),
      });

      notifications.show({
        title: 'Item added to basket',
        message: `${item.name} has been added.`,
        color: 'grape',
        autoClose: 2000,
        withCloseButton: false,
      });

      setBasketRefresh(x => x + 1);
    } catch {
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
    <div className='productDetail'>
      <div className='detailHeaderButtons'>
        <BackIconButton />
        <BasketButton refresh={basketRefresh} />
      </div>

      <CarouselSection itemId={itemId} />
      <InfoSection item={item} expanded={expanded} setExpanded={setExpanded} />
      <BoxProductsSection boxProducts={item.boxProducts} />
      <TutorialSection
        tutorialUrl={item.tutorialUrl}
        poster={item.images?.[0]}
      />
      <InstructionsSection instructions={item.instructions} />
      <ReviewsSection reviews={item.reviews} />
      <PurchaseBanner item={item} handleAddToBasket={handleAddToBasket} />
    </div>
  );
}
