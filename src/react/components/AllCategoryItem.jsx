import React from 'react';
import '@/sass/components/_all_category_item.scss';
import IconChevronRight from '@tabler/icons-react/dist/esm/icons/iconChevronRight';
import { Divider } from '@mantine/core';

const AllCategoryItem = ({ icon, label, onClick }) => {
  return (

<div className="all-category-item" onClick={onClick}>
  <div className="item-content">
    <img src={icon} alt={`${label} icon`} />
    <p>{label}</p>
    <IconChevronRight size={33} stroke={2} />
  </div>
  <Divider />
</div>

  );
};

export default AllCategoryItem;
