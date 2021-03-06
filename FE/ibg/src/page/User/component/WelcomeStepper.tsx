import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["íìê°ìð¥³", "ì¤ë¬¸ð", "ìë£ð²"];
//active Step ë§ propsë¡ ì£¼ë©´ ëë..?
type Props = {
  value: string;
};
export default function WelcomeStepper({ value }: Props) {
  const page: number = +value;
  return (
    <Box sx={{ flexGrow: 1, pt: { xs: 5, md: 0 } }}>
      <Stepper activeStep={page} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
