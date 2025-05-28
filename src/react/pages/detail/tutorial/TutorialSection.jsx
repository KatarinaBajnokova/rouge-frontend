import { Title } from '@mantine/core';
import styles from './TutorialSection.module.scss';

export default function TutorialSection({ thumbnailUrl }) {
  if (!thumbnailUrl) return null;
  return (
    <section className={styles.tutorialSection}>
      <Title className={styles.detailTitle} order={3}>
        Tutorial preview
      </Title>{' '}
      <img
        src={thumbnailUrl}
        alt='Tutorial thumbnail'
        className={styles.detailThumbnail}
        style={{ width: '100%', borderRadius: '12px' }}
      />    
      </section>
  );
}