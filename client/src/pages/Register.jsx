import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for HTTP requests

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [error, setError] = useState(null); // To handle and display error messages
  const [success, setSuccess] = useState(false); // To show success message if needed
  const navigate = useNavigate(); // For programmatic navigation

  // Handler for input change
  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/register', userData);
      localStorage.setItem('token', response.data.token);  // Save the token
      navigate('/');  // Redirect to the home page or another page
    } catch (error) {
      console.error('API Error:', error);  // Log the error object for more detail
      setError(error.response?.data?.message || 'Registration failed, please try again.');  // Set error message
    }
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        {success ? (
          <p className="form__success-message">Registration successful! Redirecting...</p>
        ) : (
          <form className="form register__form" onSubmit={handleSubmit}>
            {/* Display error message */}
            {error && <p className="form__error-message">{error}</p>}
            
            {/* Input fields */}
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={userData.name}
              onChange={changeInputHandler}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={changeInputHandler}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="password2"
              value={userData.password2}
              onChange={changeInputHandler}
              required
            />

            {/* Submit button */}
            <button type="submit" className="btn primary">Register</button>
          </form>
        )}

        {/* Link to login if the user already has an account */}
        <small>Already have an account? <Link to="/login">Sign In</Link></small>
      </div>
    </section>
  );
};

export default Register;
