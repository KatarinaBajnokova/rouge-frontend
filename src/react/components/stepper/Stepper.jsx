import { Stepper } from "@mantine/core";

function FinalStepper() {
  return (
    <Stepper color="magenta" size="lg" active={1}>
      <Stepper.Step />
      <Stepper.Step />
      <Stepper.Step />
    </Stepper>
  );
}

export default FinalStepper;
