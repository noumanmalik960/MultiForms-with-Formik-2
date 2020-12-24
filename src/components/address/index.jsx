import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
// button imports
import Button from "@material-ui/core/Button";

const index = ({ setStep, setValues, prevValues }) => {
  return (
    <Formik
      initialValues={prevValues}
      validationSchema={yup.object({
        city: yup
          .string()
          .required("Required")
          .max(15, "Must be smaller than 15 characters")
          .min(4, "Must be greater than 4 characters"),
        country: yup
          .string()
          .required("Required")
          .max(15, "Must be smaller than 15 characters")
          .min(4, "Must be greater than 4 characters"),
      })}
      onSubmit={(values) => {
        setStep(1);
        setValues({ ...values });
      }}
    >
      <Form>
        <hr />
        <br />
        <Field
          as={TextField}
          variant="outlined"
          label="City"
          name="city"
          type="text"
        />
        <ErrorMessage
          render={(msg) => {
            return <div style={{ color: "red" }}>{msg}</div>;
          }}
          name="city"
        />
        <br />
        <br />
        <Field
          as={TextField}
          variant="outlined"
          label="Country"
          name="country"
          type="text"
        />
        <ErrorMessage
          name="country"
          render={(msg) => {
            return <div style={{ color: "red" }}>{msg}</div>;
          }}
        />
        <br />
        <br />
        <Button size="small" type="submit" variant="contained">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default index;
