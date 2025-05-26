import { Stepper } from '@mantine/core';
import '@/sass/styles.scss';

function FinalStepper({ active }) {
  return (
    <Stepper
      active={active}
      className='customStepper'
      classNames={{
        separator: 'customStepperSeparator',
        stepIcon: 'customStepIcon',
        step: 'customStep',
      }}
    >
      <Stepper.Step />
      <Stepper.Step />
      <Stepper.Step />
    </Stepper>
  );
}

export default FinalStepper;
