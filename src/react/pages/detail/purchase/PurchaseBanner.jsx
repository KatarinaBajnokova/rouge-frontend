import { Text, Title } from '@mantine/core';
import { AddToBasketIconButton } from '@/react/components/buttons/IconButtons';
import styles from './PurchaseBanner.module.scss';

export default function PurchaseBanner({ item, handleAddToBasket }) {
  return (
    <div className={styles.purchaseBanner}>
      <div className={styles.purchaseBannerContent}>
        <div className={styles.purchaseBannerPrice}>
          <Text fw={700}>Price:</Text>
          <Title order={2} mt={-6}>
            €{item.price.toFixed(2).replace('.', ',')}
          </Title>
        </div>
        <AddToBasketIconButton onClick={handleAddToBasket} />
      </div>
    </div>
  );
}
