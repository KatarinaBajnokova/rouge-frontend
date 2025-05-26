import { Title, Text, Divider, ThemeIcon, Anchor } from '@mantine/core';
import {
  IconMail,
  IconPhone,
  IconClock,
  IconBuildingStore,
  IconUser,
} from '@tabler/icons-react';
import styles from './ContactSupport.module.scss';

export const ContactSupport = () => (
  <div className={styles.wrapper}>
    <Title order={4} className={styles.header}>
      Contact Support
    </Title>

    <Text className={styles.intro}>
      Welcome to Rouge Support! We're here to help you with anything related to
      your make-up box subscription, from choosing the perfect palette to
      getting personalized advice.
    </Text>

    <Divider className={styles.divider} />

    <div className={styles.group}>
      <ThemeIcon variant='transparent' size='lg' className={styles.groupIcon}>
        <IconMail size={20} />
      </ThemeIcon>
      <div className={styles.groupContent}>
        <Text className={styles.groupTitle}>Customer Care</Text>
        <Text className={styles.groupText}>
          General inquiries, order questions, cancellations
        </Text>
        <Anchor href='mailto:care@rouge.com'>care@rouge.com</Anchor>
        <Text className={styles.groupText}>
          Phone: <Anchor href='tel:+3221234567'>+32 2 123 45 67</Anchor>
        </Text>
      </div>
    </div>

    <div className={styles.group}>
      <ThemeIcon variant='transparent' size='lg' className={styles.groupIcon}>
        <IconBuildingStore size={20} />
      </ThemeIcon>
      <div className={styles.groupContent}>
        <Text className={styles.groupTitle}>Technical Support</Text>
        <Text className={styles.groupText}>
          App issues, website bugs, login and payment problems
        </Text>
        <Anchor href='mailto:tech@rouge.com'>tech@rouge.com</Anchor>
        <Text className={styles.groupText}>
          Phone: <Anchor href='tel:+32478123456'>+32 478 12 34 56</Anchor>
        </Text>
      </div>
    </div>

    <div className={styles.group}>
      <ThemeIcon variant='transparent' size='lg' className={styles.groupIcon}>
        <IconUser size={20} />
      </ThemeIcon>
      <div className={styles.groupContent}>
        <Text className={styles.groupTitle}>Beauty Consultant</Text>
        <Text className={styles.groupText}>
          Andrea Komazec — personalized product recommendations and style tips
        </Text>
        <Anchor href='mailto:andrea.komazec@rouge.com'>
          andrea.komazec@rouge.com
        </Anchor>
        <Text className={styles.groupText}>
          Phone: <Anchor href='tel:+32475123698'>+32 475 12 36 98</Anchor>
        </Text>
      </div>
    </div>

    <div className={styles.group}>
      <ThemeIcon variant='transparent' size='lg' className={styles.groupIcon}>
        <IconPhone size={20} />
      </ThemeIcon>
      <div className={styles.groupContent}>
        <Text className={styles.groupTitle}>Account Manager</Text>
        <Text className={styles.groupText}>
          Katarina Bajnokova — for account customization, order preferences, and
          loyalty rewards
        </Text>
        <Anchor href='mailto:katarina.bajnokova@rouge.com'>
          katarina.bajnokova@rouge.com
        </Anchor>
        <Text className={styles.groupText}>
          Phone: <Anchor href='tel:+32456123456'>+32 456 12 34 56</Anchor>
        </Text>
      </div>
    </div>

    <div className={styles.group}>
      <ThemeIcon variant='transparent' size='lg' className={styles.groupIcon}>
        <IconClock size={20} />
      </ThemeIcon>
      <div className={styles.groupContent}>
        <Text className={styles.groupTitle}>Business Hours</Text>
        <Text className={styles.groupText}>
          Monday - Friday: 9 AM - 6 PM (CET)
          <br />
          Saturday: 10 AM - 4 PM (CET)
          <br />
          Closed on Sundays and public holidays.
        </Text>
      </div>
    </div>

    <Divider className={styles.divider} />

    <Text className={styles.footer}>
      You can also visit our{' '}
      <Anchor href='https://www.rouge.com/faq' target='_blank'>
        FAQ
      </Anchor>{' '}
      for quick answers, or start a live chat from the bottom-right corner of
      any page.
    </Text>
  </div>
);

export default ContactSupport;
