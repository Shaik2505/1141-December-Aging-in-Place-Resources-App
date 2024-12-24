// validation.js

export const validateName = (name) => {
    const re = /^([a-zA-Z0-9_\s]+)$/;
    return re.test(name);
  };
  
  export const validateEmail = (email) => {
    const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return re.test(email);
  };
  
  export const validatePassword = (password) => {
    const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/;
    return re.test(password);
  };
  
  export const validateSignUp = (name, email, password, confirmPassword) => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    else if (!validateName(name)) errors.name = "Invalid name format";
    if (!email) errors.email = "Email is required";
    else if (!validateEmail(email)) errors.email = "Invalid email format";
    if (!password) errors.password = "Password is required";
    else if (!validatePassword(password)) errors.password = "Invalid password format";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
    return errors;
  };
  
  export const validateSignIn = (email, password) => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    else if (!validateEmail(email)) errors.email = "Invalid email format";
    if (!password) errors.password = "Password is required";
    return errors;
  };
  