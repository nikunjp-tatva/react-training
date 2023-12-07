import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
      <p>
        Demo Email: <b>admin@test.com</b>
      </p>
      <p>
        Demo Password: <b>Admin@123</b>
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
        <div>
            <label htmlFor="name"> &nbsp; <b>Name:</b> &nbsp;</label>
            <Field type="text" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="email">
              &nbsp; <b>Email:</b> &nbsp;
            </label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="password">
              &nbsp; <b>Password:</b> &nbsp;
            </label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit"> Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
