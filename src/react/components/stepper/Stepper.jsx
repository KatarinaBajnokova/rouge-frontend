import { Stepper } from '@mantine/core';
import styles from './Stepper.module.scss';

function FinalStepper({ active }) {
  return (
    <Stepper
      active={active}
      className={styles.customStepper}
      classNames={{
        separator: styles.customStepperSeparator,
        stepIcon: styles.customStepIcon,
        step: styles.customStep,
      }}
    >
      <Stepper.Step />
      <Stepper.Step />
      <Stepper.Step />
    </Stepper>
  );
}

export default FinalStepper;
