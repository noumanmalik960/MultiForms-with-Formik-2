import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// components import
import Address from "../components/address/index";
import Payment from "../components/payment/index";
import Review from "../components/review/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Address", "Payment", "Review"];
}

function getStepContent(stepIndex, setStep, values, setValues) {
  switch (stepIndex) {
    case 0:
      return (
        <Address setStep={setStep} prevValues={values} setValues={setValues} />
      );
    case 1:
      return (
        <Payment setStep={setStep} prevValues={values} setValues={setValues} />
      );
    case 2:
      return <Review setStep={setStep} values={values} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  const [values, setValues] = React.useState({});

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep, setActiveStep, values, setValues)}
    </div>
  );
}
