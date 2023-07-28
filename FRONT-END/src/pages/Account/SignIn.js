import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side form validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
        gmail: email,
        password: password,
      });
      console.log(response.data);

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate("/");
    } catch (error) {
      console.error('Error: ', error);
      setError('User not found. Please check your credentials.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
    <div style={{ width: '350px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}>
      <center>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'blackß', fontSize: '28px' }}>LOGIN FORM</h1>
      </center>
      <form style={{ width: '100%' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Email:</label>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
          />
        </div>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Password:</label>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
          />
        </div>
        {error && <p style={{ color: '#f44336', marginTop: '5px', fontSize: '14px' }}>{error}</p>}
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          style={{ width: '100%', padding: '12px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
        >
          LOGIN
        </button>
        <h4 style={{ marginTop: '15px', fontSize: '14px', color: '#777' }}>
          Need an account? <a href="/signup" style={{ color: '#2196f3', textDecoration: 'none', fontWeight: 'bold' }}>Signup now</a>
        </h4>
      </form>
    </div>
  </div>
  );
};

export default LoginPage;
