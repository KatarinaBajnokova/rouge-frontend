import React, { memo, useState } from 'react';
import styles from './ProfileHeader.module.scss';
import { FiEdit2 } from 'react-icons/fi';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import { EditProfileModal } from '@/react/pages/profile/modal/EditProfileModal';
import headerShape from '@/assets/header-shape.png';
import defaultAvatar from '@/assets/avatar/default.png';

const ProfileHeader = ({ name, avatarUrl, onBasket, showBasket = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${headerShape})` }}
      >
        <button className={styles.btn} onClick={() => setIsModalOpen(true)}>
          <FiEdit2 /> Edit profile
        </button>

        {showBasket && (
          <div className={styles.basket}>
            <BasketButton refresh onClick={onBasket} />
          </div>
        )}

        <h1 className={styles.title}>{name}</h1>

        <div className={styles.avatarWrapper}>
          <img
            src={avatarUrl || defaultAvatar}
            alt={name}
            className={styles.avatar}
          />
        </div>
      </header>

      <EditProfileModal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default memo(ProfileHeader);
