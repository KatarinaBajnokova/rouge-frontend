import {
  useNavigate,
  useParams,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { useSubcategories } from '@/react/hooks/useSubcategories';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import { BackHeader } from '@/react/components/buttons/IconButtons';
import SubcategoryItem from '@/react/pages//all/subcategoryitem/SubcategoryItem';

import styles from './Subcategories.module.scss';

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

  if (isLoading)
    return <div className={styles.subcategoriesPage}>Loading…</div>;
  if (isError)
    return (
      <div className={styles.subcategoriesPage}>
        Error loading subcategories
      </div>
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
    <div className={styles.subcategoriesPage}>
      <div className={styles.headerWrapper}>
        <BackHeader text={categoryName} />
        <div className={styles.headerControls}>
          <BasketButton />
        </div>
      </div>

      <div className={styles.categoryList}>
        {subs.map(sub => (
          <SubcategoryItem
            key={sub.id}
            label={sub.name}
            color={circleColor}
            onClick={() =>
              nav(`/categories/${categoryId}/subcategories/${sub.id}/items`, {
                state: {
                  categoryId,
                  categoryName,
                  subcategoryId: sub.id,
                  subcategoryName: sub.name,
                },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}
