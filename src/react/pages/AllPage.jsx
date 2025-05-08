import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { BasketButton } from '../components/buttons/BasketButton';
import { FilterIconButton } from '../components/buttons/IconButtons';
import Navbar from '../components/navbar/Navbar';
import AllCategoryItem from '../components/AllCategoryItem';

import '@/sass/pages/_all_page.scss';

import iconEveryday from '@/assets/icons/all_categories/IMG_Everyday.svg';



export default function AllPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="all-page">

<BasketButton />

<TextInput
  placeholder="Search..."
  icon={<IconSearch size="1rem" />}
  radius="md"
  size="md"
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.currentTarget.value)}
/>

<FilterIconButton />

<AllCategoryItem
        icon={iconEveryday}
        label="Everyday"
        //onClick={() => navigate('/category/everyday')}
      />

<AllCategoryItem
        icon={iconEveryday}
        label="Everyday"
        //onClick={() => navigate('/category/everyday')}
      />

      <Navbar />
    </div>
  );  
}
