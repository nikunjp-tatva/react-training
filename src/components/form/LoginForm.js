import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const LoginForm = (props) => {
  const onSubmit = (values, action) => {
    const { email, password } = values;
    if (email !== "admin@test.com" || password !== "Admin@123") {
      alert("Invalid email or password");
    } else {
      props.loginHandler(values);
      action.resetForm();
    }
  };
  return (
    <>
    <h1><center>Login Form</center></h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-login">
          <div>
            <label htmlFor="name" className="form-label">
              <b>Name:</b>
            </label>
            <Field
              className="form-input"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className="form-error" />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              <b>Email: </b> (admin@test.com)
            </label>
            <Field
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter above email"
              />
            <ErrorMessage name="email" component="div" className="form-error" />
          </div>

          <div>
            <label htmlFor="password" className="form-label">
              <b>Password: </b> (Admin@123)
            </label>
            <Field
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter above password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="form-error"
            />
          </div>

          <button className="form-button" type="submit"> Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
