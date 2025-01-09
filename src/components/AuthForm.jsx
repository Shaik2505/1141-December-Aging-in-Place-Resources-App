import React, { useState, useEffect } from 'react';
import FormInputField from './FormInputField'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ isSignUp, handleAuth }) => {
  const initialFormData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.id]: e.target.value };
    setFormData(newFormData);
    localStorage.setItem('formData', JSON.stringify(newFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth(formData, setErrors);
    navigate("/body/home");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {isSignUp && (
        <FormInputField
          label="Name"
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          error={errors.name}
        />
      )}
      <FormInputField
        label="Email"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        error={errors.email}
      />
      <FormInputField
        label="Password"
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="••••••••"
        error={errors.password}
      />
      {isSignUp && (
        <FormInputField
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          error={errors.confirmPassword}
        />
      )}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
      >
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
  );
};

export default AuthForm;
