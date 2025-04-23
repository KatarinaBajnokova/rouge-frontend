import { Stepper } from '@mantine/core';

function FinalStepper({ active }) {
  return (
    <Stepper color='magenta' size='lg' active={active}>
      <Stepper.Step />
      <Stepper.Step />
      <Stepper.Step />
    </Stepper>
  );
}

export default FinalStepper;
