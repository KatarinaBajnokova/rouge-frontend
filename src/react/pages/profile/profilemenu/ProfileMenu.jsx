import styles from './ProfileMenu.module.scss';
import MenuItem from '../MenuItem/MenuItem';

export default function ProfileMenu({ title, items }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <MenuItem key={i} label={item.label} onClick={item.onClick} />
        ))}
      </ul>
    </section>
  );
}
