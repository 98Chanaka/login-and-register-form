import React, { useState } from 'react';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};
    if (!values.name.trim()) {
      validationErrors.name = 'Name is required.';
    }

    if (!values.email.trim()) {
      validationErrors.email = 'Email is required.';
    } else if (!isValidEmail(values.email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    if (!values.password.trim()) {
      validationErrors.password = 'Password is required.';
    } else if (values.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle successful signup
      // Add your signup logic here (e.g., make API calls)
      console.log('Signup successful!');
    }
  };

  const isValidEmail = (email) => {
    // You can implement your email validation logic here (same as in the login example)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;