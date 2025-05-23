import { IconChevronRight } from '@tabler/icons-react';
import { Divider } from '@mantine/core';
import '@/sass/components/all/_all_category_item.scss';

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
    <div className='all-category-item' onClick={onClick}>
      <div className='item-content'>
        <img
          src={iconUrl}
          alt={`${label} icon`}
          onError={handleImgError}
          loading='lazy'
        />
        <p>{label}</p>
        <IconChevronRight size={30} stroke={2} />
      </div>

      <Divider className='category-divider' />
    </div>
  );
}
