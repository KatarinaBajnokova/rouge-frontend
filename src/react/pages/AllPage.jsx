import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextInput } from '@mantine/core';

import { BasketButton } from '../components/buttons/BasketButton';
import { FilterIconButton } from '../components/buttons/IconButtons';
import Navbar from '../components/navbar/Navbar';
import AllCategoryItem from '../components/AllCategoryItem';

import '@/sass/pages/_all_page.scss';

import iconEveryday from '@/assets/icons/all_categories/IMG_Everyday.svg';
import { IconSearch } from '@tabler/icons-react';

export default function AllPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='all-page'>
      <div className='search-wrapper'>
        <TextInput
          className='search-bar'
          placeholder='Search...'
          leftSection={searchTerm ? null : <IconSearch size={18} />}
          radius='md'
          size='md'
          value={searchTerm}
          onChange={e => setSearchTerm(e.currentTarget.value)}
        />

        <BasketButton />
      </div>

      <FilterIconButton />

      <div className='category-section'>
        <h2>Spotlight</h2>

        <div className='category-list'>
          <AllCategoryItem
            icon={iconEveryday}
            label='Everyday'
            //onClick={() => navigate('/category/everyday')}
          />

          <AllCategoryItem
            icon={iconEveryday}
            label='Everyday'
            //onClick={() => navigate('/category/everyday')}
          />
        </div>
      </div>

      <div className='category-section'>
        <h2>Spotlight</h2>

        <div className='category-list'>
          <AllCategoryItem
            icon={iconEveryday}
            label='Everyday'
            //onClick={() => navigate('/category/everyday')}
          />

          <AllCategoryItem
            icon={iconEveryday}
            label='Everyday'
            //onClick={() => navigate('/category/everyday')}
          />
        </div>
      </div>

      <Navbar />
    </div>
  );
}
