import { Title, Text } from '@mantine/core';
import styles from './InstructionsSection.module.scss';

export default function InstructionsSection({ instructions }) {
  if (!instructions?.length) return null;

  return (
    <section className={styles.detailInstructions}>
      <Title className={styles.detailTitle} order={3}>
        Instructions preview
      </Title>
      <div className={styles.instructionsList}>
        {instructions.map((step, idx) => (
          <div key={idx} className={styles.instructionStep}>
            <span className={styles.instructionStep__number}>{idx + 1}.</span>
            <div className={styles.instructionStep__body}>
              <Text fw={500}>{step.title}</Text>
              <Text className={styles.instructionStepText} size='sm' mt={2}>
                {step.text}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
