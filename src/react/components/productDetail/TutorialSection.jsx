import { Title, Text } from '@mantine/core';
import styles from './TutorialSection.module.scss';

export default function TutorialSection({ tutorialUrl, poster }) {
  if (!tutorialUrl) return null;

  return (
    <section className={styles.tutorialSection}>
      <Title className={styles.detailTitle} order={3}>
        Tutorial preview
      </Title>
      <video
        src={tutorialUrl}
        controls
        poster={poster}
        className={styles.detailVideo}
        preload='metadata'
        width='100%'
      >
        <Text component='p'>Your browser does not support the video tag.</Text>
      </video>
    </section>
  );
}
