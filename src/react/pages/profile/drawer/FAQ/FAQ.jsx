import { Title, Accordion, Text } from '@mantine/core';
import styles from './FAQ.module.scss';

export const FAQ = () => (
  <div className={styles.wrapper}>
    <Title order={4} className={styles.header}>
      Frequently Asked Questions
    </Title>

    <Accordion
      variant='separated'
      className={styles.accordion}
      defaultValue='shipping'
    >
      <Accordion.Item value='shipping'>
        <Accordion.Control className={styles.control}>
          What are your shipping options?
        </Accordion.Control>
        <Accordion.Panel className={styles.panel}>
          <Text className={styles.panelText}>
            We offer standard and express shipping within Belgium and across the
            EU. Standard takes 3-5 business days; Express takes 1-2 business
            days. Shipping is free on orders over €50.
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value='returns'>
        <Accordion.Control className={styles.control}>
          What is your return policy?
        </Accordion.Control>
        <Accordion.Panel className={styles.panel}>
          <Text className={styles.panelText}>
            You can return unopened items within 14 days for a full refund. To
            initiate a return, visit our returns portal or contact Customer
            Care.
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value='payments'>
        <Accordion.Control className={styles.control}>
          Which payment methods do you accept?
        </Accordion.Control>
        <Accordion.Panel className={styles.panel}>
          <Text className={styles.panelText}>
            We accept Visa, MasterCard, American Express, Bancontact, and
            PayPal. All payments are processed securely via encrypted
            connections.
          </Text>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value='customlooks'>
        <Accordion.Control className={styles.control}>
          Can I change my selected look later?
        </Accordion.Control>
        <Accordion.Panel className={styles.panel}>
          <Text className={styles.panelText}>
            Yes—log in to your profile, go to “Personal Info,” and select
            “Change Look.” You can update your look up to once every 30 days.
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </div>
);

export default FAQ;
