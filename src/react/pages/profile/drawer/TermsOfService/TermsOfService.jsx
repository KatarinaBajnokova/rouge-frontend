import { Title, Text, Anchor, Divider, List } from '@mantine/core';
import styles from './TermsOfService.module.scss';

export const TermsOfService = () => (
  <div className={styles.wrapper}>
    <Title order={4} className={styles.header}>
      Terms of Service
    </Title>

    <Text className={styles.updated}>Last updated: September 1, 2025</Text>

    <section className={styles.section}>
      <Title order={5} className={styles.sectionTitle}>
        1. Acceptance of Terms
      </Title>
      <Text className={styles.paragraph}>
        By accessing or using Rouge (“the Service”), you agree to be bound by
        these Terms of Service and our Privacy Policy. If you do not agree,
        please do not use the Service.
      </Text>
    </section>

    <section className={styles.section}>
      <Title order={5} className={styles.sectionTitle}>
        2. Changes to Terms
      </Title>
      <Text className={styles.paragraph}>
        We may modify these Terms at any time. When changes are made, we will
        update the “Last updated” date above and notify you via email or in-app
        notification. Continued use after notification constitutes acceptance of
        the revised Terms.
      </Text>
    </section>

    <section className={styles.section}>
      <Title order={5} className={styles.sectionTitle}>
        3. Account Responsibilities
      </Title>
      <Text className={styles.paragraph}>You are responsible for:</Text>
      <List className={styles.list} withPadding spacing='xs' size='sm'>
        <List.Item>
          Maintaining the confidentiality of your login credentials
        </List.Item>
        <List.Item>
          Ensuring that all information you provide is accurate and up to date
        </List.Item>
        <List.Item>All activity that occurs under your account</List.Item>
      </List>
    </section>

    <section className={styles.section}>
      <Title order={5} className={styles.sectionTitle}>
        4. Use of the Service
      </Title>
      <Text className={styles.paragraph}>
        Rouge is intended for personal, non-commercial use. You agree not to:
      </Text>
      <List className={styles.list} withPadding spacing='xs' size='sm'>
        <List.Item>
          Reverse engineer, decompile, or otherwise attempt to extract source
          code
        </List.Item>
        <List.Item>
          Use the Service to send unwanted commercial communications
        </List.Item>
        <List.Item>
          Interfere with the security or performance of the Service
        </List.Item>
      </List>
    </section>

    <section className={styles.section}>
      <Title order={5} className={styles.sectionTitle}>
        5. Intellectual Property
      </Title>
      <Text className={styles.paragraph}>
        All content, trademarks, and data on Rouge are the property of Rouge or
        its licensors.&nbsp; You may not use any Rouge intellectual property
        without prior written permission.
      </Text>
    </section>

    <section className={styles.section}>
      <Title order={5} className={styles.sectionTitle}>
        6. Disclaimers & Limitation of Liability
      </Title>
      <Text className={styles.paragraph}>
        THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF
        ANY KIND.&nbsp; ROUGE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        OR CONSEQUENTIAL DAMAGES&nbsp; ARISING OUT OF YOUR USE OF THE SERVICE.
      </Text>
    </section>

    <section className={styles.section}>
      <Title order={5} className={styles.sectionTitle}>
        7. Governing Law
      </Title>
      <Text className={styles.paragraph}>
        These Terms are governed by the laws of Belgium without regard to
        conflict of law provisions.
      </Text>
    </section>

    <Divider className={styles.divider} />

    <Text className={styles.footer}>
      If you have any questions about these Terms, please contact us at{' '}
      <Anchor href='mailto:support@rouge.com' className={styles.link}>
        support@rouge.com
      </Anchor>
      .
    </Text>
  </div>
);

export default TermsOfService;
