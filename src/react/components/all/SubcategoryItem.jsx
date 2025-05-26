import { Divider } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import styles from './SubcategoryItem.module.scss';

export default function SubcategoryItem({ label, onClick, color = '#317AFF' }) {
  return (
    <div className={styles.subcategoryItem} onClick={onClick}>
      <div className={styles.itemContent}>
        <span
          className={styles.circleIndicator}
          style={{ backgroundColor: color }}
        />
        <p>{label}</p>
        <IconChevronRight size={30} stroke={2} />
      </div>
      <Divider className={styles.categoryDivider} />
    </div>
  );
}
