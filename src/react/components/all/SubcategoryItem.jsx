// src/react/components/SubcategoryItem.jsx

import React from 'react';
import { Divider } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

import '@/sass/components/_subcategory_item.scss';

export default function SubcategoryItem({ label, onClick, color = '#317AFF' }) {
  return (
    <div className='subcategory-item' onClick={onClick}>
      <div className='item-content'>
        <span className='circle-indicator' style={{ backgroundColor: color }} />
        <p>{label}</p>
        <IconChevronRight size={24} stroke={2} />
      </div>
      <Divider />
    </div>
  );
}
