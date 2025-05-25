import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Text } from '@mantine/core';
import styles from './Navbar.module.scss';

import homeIcon from '@/assets/icons/icon_home_inactive.svg';
import homeIconActive from '@/assets/icons/icon_home_active.svg';
import allIcon from '@/assets/icons/icon_all_inactive.svg';
import allIconActive from '@/assets/icons/icon_all_active.svg';
import looksIcon from '@/assets/icons/icon_my_looks_inactive.svg';
import looksIconActive from '@/assets/icons/icon_my_looks_active.svg';
import profileIcon from '@/assets/icons/icon_profile_inactive.svg';
import profileIconActive from '@/assets/icons/icon_profile_active.svg';

const navItems = [
  {
    label: 'Home',
    icon: homeIcon,
    activeIcon: homeIconActive,
    path: '/homescreen',
  },
  {
    label: 'All',
    icon: allIcon,
    activeIcon: allIconActive,
    path: '/all',
  },
  {
    label: 'My looks',
    icon: looksIcon,
    activeIcon: looksIconActive,
    path: '/my-looks',
  },
  {
    label: 'Profile',
    icon: profileIcon,
    activeIcon: profileIconActive,
    path: '/profile',
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      {navItems.map(item => {
        const isActive = location.pathname === item.path;
        return (
          <NavLink
            key={item.label}
            to={item.path}
            className={`${styles.navItem}${isActive ? ' ' + styles.active : ''}`}
          >
            <div className={styles.iconContainer}>
              <img
                src={isActive ? item.activeIcon : item.icon}
                alt={item.label}
                className={styles.icon}
              />
            </div>
            <Text size='xs' className={styles.label}>
              {item.label}
            </Text>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
