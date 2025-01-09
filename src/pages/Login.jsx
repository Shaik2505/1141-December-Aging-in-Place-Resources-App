import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "../components/AuthForm";
import ForgotPasswordModal from "../components/ForgotPasswordModal";
import { Toaster } from "react-hot-toast";
import { FaTimes } from "react-icons/fa"; // Import the close icon from react-icons
import Landing from "../components/landing.jsx/Landing";

const Login = ({ setIsAuthenticated }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    localStorage.removeItem("formData");
  };

  const handleAuth = async (formData, setErrors) => {
    const url = isSignUp
      ? "http://localhost:5000/users"
      : `http://localhost:5000/users?email=${encodeURIComponent(
          formData.email
        )}`;

    try {
      if (isSignUp) {
        await axios.post(url, formData);
      } else {
        const { data } = await axios.get(url);

        if (!data.length || data[0].password !== formData.password) {
          setErrors({ email: "Username and password incorrect" });
          return;
        }
      }

      setIsAuthenticated(true);
      localStorage.removeItem("formData");
      navigate("/body/home");
    } catch (error) {
      console.error("Error during authentication:", error);
      setErrors({
        general: "An error occurred during authentication. Please try again.",
      });
    }
  };

  const handleForgotPassword = async (email) => {
    // Simulate sending an email
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const onCloseAuthForm = () => {
    setShowAuthForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Toaster />
      <nav className="fixed top-0 bg-white p-4 z-50 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div
            className="text-teal-900 text-lg font-bold cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            MyApp
          </div>
          <button
            onClick={() => setShowAuthForm(true)}
            className="bg-teal-900 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </nav>
      <Landing />
      {showAuthForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-2xl bg-opacity-75">
          <button
            type="button"
            onClick={onCloseAuthForm}
            className="absolute top-4 right-4 text-gray-100 hover:text-gray-300"
          >
            <FaTimes className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            <AuthForm
              isSignUp={isSignUp}
              handleAuth={handleAuth}
              onForgotPassword={() => setShowForgotPassword(true)}
              onClose={onCloseAuthForm}
            />
            <p className="text-center text-sm text-gray-600 mt-4">
              {isSignUp ? (
                <>
                  Already a user?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  New user?{" "}
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
      )}
      {showForgotPassword && (
        <ForgotPasswordModal
          onClose={() => setShowForgotPassword(false)}
          onSubmit={handleForgotPassword}
        />
      )}
    </div>
  );
};

export default Login;
