import React from 'react';
import { Loader, Text } from '@mantine/core';
import { useFavorites } from '@/react/hooks/useFavorites';
import { useItems } from '@/react/hooks/useItems';
import TrendingCard from '@/react/components/cards/TrendingCard';
import styles from "./favorites.module.scss";

export default function Favorites() {
  const { favorites } = useFavorites();
  const { data: looks, isLoading } = useItems();

  if (isLoading) return <Loader />;

  const favLooks = looks.filter(look => favorites.includes(look.id));

  return (
    <div className={styles.favoritesPage}>
      {favLooks.length === 0 ? (
        <Text size='lg'>You have no favorites yet.</Text>
      ) : (
        <div className={styles.favoritesGrid}>
          {favLooks.map(look => (
            <TrendingCard key={look.id} look={look} showHeart variant="compact" />
          ))}
        </div>
      )}
    </div>
  );
}
