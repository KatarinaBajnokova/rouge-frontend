import { useReorderLooks } from '@/react/hooks/useReorderLooks';
import TrendingCard from '@/react/components/cards/TrendingCard.jsx';
import styles from './ReorderSection.module.scss';

const ReorderSection = () => {
  const { looks, loading, error } = useReorderLooks();

  const renderContent = () => {
    if (loading) return <p>Loading your past looks…</p>;
    if (
      typeof error === 'string' &&
      (error.toLowerCase().includes('not authenticated') ||
        error.includes('401'))
    ) {
      return (
        <p className={styles.reorderEmptyMsg}>
          You need to log in to see your past purchases!
        </p>
      );
    }

    if (looks.length === 0) {
      return (
        <p className={styles.reorderEmptyMsg}>
          You haven’t purchased any looks yet.
        </p>
      );
    }

    return (
      <div className='cardScrollWrapper'>
        {looks.map(look => (
          <TrendingCard key={look.id} look={look} showHeart={true} />
        ))}
      </div>
    );
  };

  return (
    <section className={`homeSection ${styles.sectionReorder}`}>
      <div className={styles.sectionHeader}>
        <h1>Reorder</h1>
        <p className='sectionDesc'>Rediscover your past looks</p>
      </div>
      {renderContent()}
    </section>
  );
};

// THIS IS ESSENTIAL
export default ReorderSection;
