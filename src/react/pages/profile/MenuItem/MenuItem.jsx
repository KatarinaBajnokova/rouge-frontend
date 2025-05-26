import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import styles from './MenuItem.module.scss';

export default function MenuItem({ label, onClick }) {
  return (
    <li className={styles.item} onClick={onClick}>
      <span className={styles.label}>{label}</span>
      <FiChevronRight className={styles.icon} />
    </li>
  );
}
