import React from 'react';
import {
  useNavigate,
  useParams,
  useLocation,
  Navigate,
} from 'react-router-dom';

import { useSubcategories } from '@/react/hooks/useSubcategories';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import { BackIconButton } from '@/react/components/buttons/IconButtons';
import SubcategoryItem from '@/react/components/all/SubcategoryItem';

import '@/sass/pages/_subcategories.scss';

export default function SubcategoriesPage() {
  const nav = useNavigate();
  const { categoryId } = useParams();
  const { state } = useLocation();
  const categoryName = state?.categoryName || '';

  const colorMap = {
    Formal: '#317AFF',
    Fun: '#FF4D4F',
    Everyday: '#FFC107',
    Seasons: '#4CAF50',
    Holidays: '#9C27B0',
    Spotlight: '#FF5722',
  };
  const circleColor = colorMap[categoryName] || '#888';

  const { data: subs = [], isLoading, isError } = useSubcategories(categoryId);

  if (isLoading) return <div className='subcategories-page'>Loading…</div>;
  if (isError)
    return (
      <div className='subcategories-page'>Error loading subcategories</div>
    );

  if (subs.length === 0) {
    return (
      <Navigate
        to={`/categories/${categoryId}/items`}
        state={{ categoryId, categoryName }}
        replace
      />
    );
  }

  return (
    <div className='subcategories-page'>
      <div className='header-wrapper'>
        <BackIconButton onClick={() => nav(-1)} />
        <h2>{categoryName}</h2>
        <BasketButton />
      </div>
      <div className='category-list'>
        {subs.map(sub => (
          <SubcategoryItem
            key={sub.id}
            label={sub.name}
            color={circleColor}
            onClick={() => {
              nav(`/categories/${categoryId}/subcategories/${sub.id}/items`, {
                state: {
                  categoryId,
                  categoryName,
                  subcategoryId: sub.id,
                  subcategoryName: sub.name,
                },
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}
