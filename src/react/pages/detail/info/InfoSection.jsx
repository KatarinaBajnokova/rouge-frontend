import { Title, Text, Badge } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import styles from './InfoSection.module.scss';

export default function InfoSection({ item, expanded, setExpanded }) {
  if (!item) return null;

  const fullDesc = item.description || '';
  const shortDesc = fullDesc.slice(0, 100) + (fullDesc.length > 100 ? '…' : '');

  return (
    <section className={styles.detailInfo}>
      <Title order={2}>{item.name}</Title>

      <Badge
        size='lg'
        color={
          item.level === 'Easy'
            ? 'green'
            : item.level === 'Moderate'
              ? 'blue'
              : 'red'
        }
        variant='light'
        mt='xs'
      >
        ✦ {item.level}
      </Badge>

      {item.tags?.length > 0 && (
        <div className={styles.detailTags}>
          {item.tags.map(tag => (
            <Badge
              key={tag}
              size='xs'
              variant='filled'
              radius='sm'
              className={styles.detailTag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <div
        className={`${styles.detailDescription} ${expanded ? styles.expanded : ''}`}
      >
        <Text>{expanded ? fullDesc : shortDesc}</Text>
        {fullDesc.length > 180 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={styles.toggleDescBtn}
          >
            {expanded ? (
              <IconChevronUp size={20} />
            ) : (
              <IconChevronDown size={20} />
            )}
            <span>{expanded ? 'Show less' : 'Show more'}</span>
          </button>
        )}
      </div>
    </section>
  );
}
