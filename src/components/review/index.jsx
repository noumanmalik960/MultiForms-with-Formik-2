import { Button } from "@material-ui/core";
import React from "react";

const review = ({ setStep, values }) => {
  return (
    <div>
      <hr />
      <br />
      <h3>City: {values.city} </h3>
      <h3>Country: {values.country}</h3>
      <h3>Holder: {values.holder}</h3>
      <h3>Card: {values.card}</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setStep(1)}
        size="small"
      >
        Back
      </Button>
    </div>
  );
};

export default review;
