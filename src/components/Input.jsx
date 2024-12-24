import React, { useState } from "react";
import PropTypes from "prop-types";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

const Input = ({ type, id, value, onChange, placeholder, hasError }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword && type === "password" ? "text" : type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-2 w-full text-black border-2 ${
          hasError ? "border-red-500" : "border-gray-300"
        } rounded`}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-2 text-gray-600 m-1"
        >
          {showPassword ? <BiSolidHide size={20} /> : <BiSolidShow size={20} />}
        </button>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
};

export default Input;
