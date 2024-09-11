import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);  // To handle and display error messages
  const navigate = useNavigate();  // For programmatic navigation

  const changeInputHandler = (e) => {
    setUserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the login request
      const response = await axios.post('http://localhost:5001/api/auth/login', userData);
      
      // Save the received token to localStorage
      localStorage.setItem('token', response.data.token);  

      // Redirect to the blog home page after successful login
      navigate('/');  
    } catch (error) {
      // Set error message if login fails
      setError(error.response?.data?.message || 'Login failed, please try again.');  
    }
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form" onSubmit={handleSubmit}>
          {/* Display error message */}
          {error && <p className="form__error-message">{error}</p>}  
          
          {/* Input fields */}
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            value={userData.email} 
            onChange={changeInputHandler} 
            autoFocus 
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
          
          {/* Submit button */}
          <button type="submit" className="btn primary">Login</button>
        </form>

        {/* Link to register page */}
        <small>Don't have an account? <Link to='/register'>Sign Up</Link></small>
      </div>
    </section>
  );
};

export default Login;
