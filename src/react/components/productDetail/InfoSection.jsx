import React from 'react';
import { Title, Text, Badge } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

export default function InfoSection({ item, expanded, setExpanded }) {
  if (!item) return null;

  const fullDesc = item.description || '';
  const shortDesc = fullDesc.slice(0, 180) + (fullDesc.length > 180 ? '…' : '');

  return (
    <section className='detail-info'>
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
        {item.level}
      </Badge>

      {item.tags?.length > 0 && (
        <div className='detail-tags'>
          {item.tags.map(tag => (
            <Badge
              key={tag}
              size='xs'
              variant='filled'
              radius='sm'
              className='detail-tag'
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <div className={`detail-description ${expanded ? 'expanded' : ''}`}>
        <Text>{expanded ? fullDesc : shortDesc}</Text>
        {fullDesc.length > 180 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className='toggle-desc-btn'
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
