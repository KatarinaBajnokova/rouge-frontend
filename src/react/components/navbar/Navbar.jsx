import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Image, Text } from '@mantine/core';
import '@/sass/components/_navbar.scss';

import homeIcon from '@/assets/icons/icon_home_inactive.svg';
import allIcon from '@/assets/icons/icon_all_inactive.svg';
import looksIcon from '@/assets/icons/icon_my_looks_inactive.svg';
import profileIcon from '@/assets/icons/icon_profile_inactive.svg';

const navItems = [
  { label: 'Home', icon: homeIcon, path: '/homescreen' },
  { label: 'All', icon: allIcon, path: '/all' },
  { label: 'My looks', icon: looksIcon, path: '/my-looks' },
  { label: 'Profile', icon: profileIcon, path: '/profile' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='navbar'>
      {navItems.map(item => {
        const isActive = location.pathname === item.path;
        return (
          <NavLink
            key={item.label}
            to={item.path}
            className={`nav-item${isActive ? ' active' : ''}`}
          >
            <Image src={item.icon} alt={item.label} className='nav-icon' />
            <Text size='xs' className='nav-label'>
              {item.label}
            </Text>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
