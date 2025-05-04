import { Stepper } from '@mantine/core';
import '@/sass/components/stepper/_stepper.scss';

function FinalStepper({ active }) {
  return (
    <Stepper
      active={active}
      className='custom-stepper'
      classNames={{
        separator: 'custom-stepper-separator',
        stepIcon: 'custom-step-icon',
        step: 'custom-step',
      }}
    >
      <Stepper.Step />
      <Stepper.Step />
      <Stepper.Step />
    </Stepper>
  );
}

export default FinalStepper;
