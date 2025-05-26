import { IconChevronRight } from '@tabler/icons-react';
import { Divider } from '@mantine/core';
import styles from './AllCategoryItem.module.scss';

export default function AllCategoryItem({
  iconUrl,
  label,
  onClick,
  isLastItem = false,
}) {
  const handleImgError = e => {
    e.currentTarget.onerror = null;
  };

  return (
    <div className={styles.allCategoryItem} onClick={onClick}>
      <div className={styles.itemContent}>
        <img
          src={iconUrl}
          alt={`${label} icon`}
          onError={handleImgError}
          loading='lazy'
          className={styles.icon}
        />
        <p className={styles.label}>{label}</p>
        <IconChevronRight size={30} stroke={2} className={styles.chevron} />
      </div>
      <Divider className={styles.divider} />
    </div>
  );
}
