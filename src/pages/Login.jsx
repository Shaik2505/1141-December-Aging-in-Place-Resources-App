import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthForm from '../components/AuthForm'; // Adjust the path as necessary

const Login = ({ setIsAuthenticated }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    localStorage.removeItem('formData');
  };

  const handleAuth = async (formData, setErrors) => {
    const url = isSignUp
      ? 'http://localhost:5000/users'
      : `http://localhost:5000/users?email=${formData.email}`;

    try {
      if (isSignUp) {
        await axios.post(url, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      } else {
        const { data } = await axios.get(url);

        if (data.length === 0 || data[0].password !== formData.password) {
          setErrors({ email: 'Username and password incorrect' });
          return;
        }
      }

      setIsAuthenticated(true);
      updateUserData({
        name: formData.name,
        email: formData.email,
        phone: '+20-01274318900', // Placeholder phone number
        address: '285 N Broad St, Elizabeth, NJ 07208, USA', // Placeholder address
      });
      localStorage.removeItem('formData');
      navigate('/body/home');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const updateUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (
    <div className="min-h-screen px-5 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 dark:bg-darkGrey">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        <AuthForm
          isSignUp={isSignUp}
          handleAuth={handleAuth}
          updateUserData={updateUserData} // Pass the function here
        />
        <p className="text-center text-sm text-gray-600 mt-4">
          {isSignUp ? (
            <>
              Already a user?
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              New user?
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;

