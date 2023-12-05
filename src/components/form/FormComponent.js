// FormComponent.js

import React, { useState } from "react";

function validateEmail(text) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!text?.match(mailFormat);
}

const ErrorTag = ({ message }) => {
  if (message) {
    return (
      <>
        <small style={{ color: "red" }}>&nbsp;&nbsp;(Error: {message})</small>
        <br />
        <br />
      </>
    );
  }
  return <br />;
};

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [ageError, setAgeError] = useState(null);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setSubmittedData(null);
    switch (name) {
      case "firstName":
        setFirstName(value);
        if (value?.length < 3) {
          setFirstNameError("First name must be 3 character long");
        } else {
          setFirstNameError(null);
        }
        break;
      case "lastName":
        setLastName(value);
        if (value?.length < 3) {
          setLastNameError("Last name must be 3 character long");
        } else {
          setLastNameError(null);
        }
        break;
      case "email":
        setEmail(value);
        if (value?.length < 3 || !validateEmail(value)) {
          setEmailError("Enter valid email");
        } else {
          setEmailError(null);
        }
        break;
      case "phone":
        setPhone(value);
        if (value?.length < 8 || value?.length > 15) {
          setPhoneError("Enter valid phone number");
        } else if (isNaN(+value)) {
          setPhoneError("Enter valid phone number");
        } else {
          setPhoneError(null);
        }
        break;
      case "age":
        setAge(value);
        if (value < 18) {
          setAgeError("Age must be greater than 18");
        } else if (isNaN(+value)) {
          setAgeError("Enter valid age");
        } else {
          setAgeError(null);
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName) {
      setFirstNameError("Enter valid first name");
    }
    if (!lastName) {
      setLastNameError("Enter valid last name");
    }
    if (!email) {
      setEmailError("Enter valid first email");
    }
    if (!phone) {
      setPhoneError("Enter valid phone number");
    }
    if (!age) {
      setAgeError("Enter valid age");
    }
    if (!firstName || !lastName || !email || !phone || !age) {
      setSubmittedData(null);
    } else {
      setSubmittedData({ firstName, lastName, email, phone, age });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAge("");
    }
  };
  return (
    <div>
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;HTML Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">&nbsp; First Name: &nbsp;</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleValueChange}
          /><small> &nbsp;( Minimum length: 2 Character)</small>
        </div>
        <ErrorTag message={firstNameError} />
        <div>
          <label htmlFor="lastName">&nbsp; Last Name: &nbsp;</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleValueChange}
          /><small> &nbsp;( Minimum length: 2 Character)</small>
        </div>
        <ErrorTag message={lastNameError} />
        <div>
          <label htmlFor="email">&nbsp; Email: &nbsp;</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleValueChange}
          /><small> &nbsp;( Ex: admin@gmail.com)</small>
        </div>
        <ErrorTag message={emailError} />
        <div>
          <label htmlFor="phone">&nbsp; Phone: &nbsp;</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleValueChange}
          /><small> &nbsp;( Min: 8, Max: 15 Character allowed)</small>
        </div>
        <ErrorTag message={phoneError} />
        <div>
          <label htmlFor="age">&nbsp; Age: &nbsp;</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={handleValueChange}
          /><small> &nbsp;( Age must be greater than 18)</small>
        </div>
        <ErrorTag message={ageError} />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          {submittedData.firstName && (
            <p>First Name: {submittedData.firstName}</p>
          )}
          {submittedData.lastName && <p>Last Name: {submittedData.lastName}</p>}
          {submittedData.email && <p>Email: {submittedData.email}</p>}
          {submittedData.phone && <p>Phone: {submittedData.phone}</p>}
          {submittedData.age && <p>Age: {submittedData.age}</p>}
        </div>
      )}
    </div>
  );
};

export default FormComponent;
