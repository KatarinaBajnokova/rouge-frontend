import { Modal, Text, Button } from '@mantine/core';
import styles from './EditProfileModal.module.scss';

export function EditProfileModal({ opened, onClose }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      title='Under Maintenance'
      classNames={{
        header: styles.modalHeader,
        content: styles.modalContent,
        title: styles.modalTitle,
        body: styles.body,
      }}
    >
      <Text>
        We were going to let you edit your profile, but our cookies and backend
        are napping 💤. Come back soon for fresh updates!
      </Text>
      <Button className={styles.confirmButton} onClick={onClose}>
        Got it!
      </Button>
    </Modal>
  );
}

export default EditProfileModal;
