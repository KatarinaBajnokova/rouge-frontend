import React from 'react';
import '@/sass/components/_all_category_item.scss';
import { IconChevronRight } from '@tabler/icons-react';
import { Divider } from '@mantine/core';

export default function AllCategoryItem({ iconUrl, label, onClick }) {
  const handleImgError = e => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = defaultIcon;
  };

  return (
    <div className='all-category-item' onClick={onClick}>
      <div className='item-content'>
        <img
          src={iconUrl}
          alt={`${label} icon`}
          onError={handleImgError}
          loading='lazy'
        />
        <p>{label}</p>
        <IconChevronRight size={24} stroke={2} />
      </div>
      <Divider />
    </div>
  );
}
