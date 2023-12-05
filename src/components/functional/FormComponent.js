// FormComponent.js

import React, { useState } from "react";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [checkSubmit, setCheckSubmit] = useState(false);

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setCheckSubmit(false);
    setFirstName(value);
  };
  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setCheckSubmit(false);
    setLastName(value);
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setCheckSubmit(false);
    setEmail(value);
  };
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setCheckSubmit(false);
    setPhone(value);
  };
  const handleAgeChange = (e) => {
    const { value } = e.target;
    setCheckSubmit(false);
    setAge(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckSubmit(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {checkSubmit && (
        <div>
          <h2>Submitted Data:</h2>
          {firstName && <p>First Name: {firstName}</p>}
          {lastName && <p>Last Name: {lastName}</p>}
          {email && <p>Email: {email}</p>}
          {phone && <p>Phone: {phone}</p>}
          {age && <p>Age: {age}</p>}
        </div>
      )}
    </div>
  );
};

export default FormComponent;
