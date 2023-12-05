import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .min(18, "Must be at least 18")
    .max(100, "Must be at most 100"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Select gender")
    .required("Gender is required"),
});

const initialValues = {
  name: "",
  age: "",
  email: "",
  gender: "",
  phoneNumber: "",
};

const onSubmit = (values, action) => {
  console.log(values);
  action.resetForm();
};
const FormikForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <Field type="number" name="age" />
              <ErrorMessage
                name="age"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field type="text" name="phoneNumber" />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <Field type="radio" name="gender" value="other" />
                Other
              </label>
              <ErrorMessage
                name="gender"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikForm;
