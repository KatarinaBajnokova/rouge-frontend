import { Drawer } from '@mantine/core';
import { BackHeader } from '@/react/components/buttons/IconButtons';

import PersonalInfo from './PersonalInfo/PersonalInfo';
import Favorites from './Favorites/Favorites';
import ContactSupport from './ContactSupport/ContactSupport';
import TermsOfService from './TermsOfService/TermsOfService';
import FAQ from './FAQ/FAQ';

import styles from './ProfileDrawer.module.scss';

export default function ProfileDrawer({
  opened,
  onClose,
  activeSection,
  user,
  addresses,
}) {
  const titles = {
    personalInfo: 'Personal info',
    favorites: 'Favorites',
    contactSupport: 'Contact support',
    terms: 'Terms of service',
    faq: 'FAQ',
  };

  const headerNode = (
    <div className={styles.headerContent}>
      <BackHeader text={titles[activeSection]} onBack={onClose} />
    </div>
  );

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      title={headerNode}
      classNames={{
        header: styles.header,
        title: styles.titleWrapper,
        overlay: styles.overlay,
        body: styles.body,
        content: styles.drawer,
      }}
      size='100%'
      position='bottom'
    >
      {activeSection === 'personalInfo' && (
        <PersonalInfo user={user} addresses={addresses} />
      )}
      {activeSection === 'favorites' && <Favorites />}
      {activeSection === 'contactSupport' && <ContactSupport />}
      {activeSection === 'terms' && <TermsOfService />}
      {activeSection === 'faq' && <FAQ />}
    </Drawer>
  );
}
