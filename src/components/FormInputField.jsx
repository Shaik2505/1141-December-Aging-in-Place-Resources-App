import React from 'react';
import Input from './Input'; // Adjust the path as necessary

const FormInputField = ({ label, id, type, value, onChange, placeholder, error }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasError={!!error}
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default FormInputField;
