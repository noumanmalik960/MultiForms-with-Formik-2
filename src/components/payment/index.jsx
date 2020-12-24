import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
// button imports
import Button from "@material-ui/core/Button";

const payment = ({ setStep, setValues, prevValues }) => {
  return (
    <Formik
      initialValues={prevValues}
      validationSchema={yup.object({
        holder: yup
          .string()
          .required("Required")
          .max(15, "Must be smaller than 15 characters")
          .min(5, "Must be greater than 4 characters"),
        card: yup
          .string()
          .required("Required")
          .max(16, "Must be smaller than 15 characters"),
      })}
      onSubmit={(values) => {
        setStep(2);
        setValues({ ...prevValues, ...values });
      }}
    >
      <Form>
        <hr />
        <br />
        <Field
          as={TextField}
          variant="outlined"
          label="Holder"
          name="holder"
          type="text"
        />
        <ErrorMessage
          render={(msg) => {
            return <div style={{ color: "red" }}>{msg}</div>;
          }}
          name="holder"
        />
        <br />
        <br />
        <Field
          as={TextField}
          variant="outlined"
          label="Card"
          name="card"
          type="text"
        />
        <ErrorMessage
          name="card"
          render={(msg) => {
            return <div style={{ color: "red" }}>{msg}</div>;
          }}
        />
        <br />
        <br />
        <Button type="submit" size="small" variant="contained">
          Submit
        </Button>{" "}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setStep(0)}
          color="primary"
          size="small"
        >
          Back
        </Button>
      </Form>
    </Formik>
  );
};

export default payment;
