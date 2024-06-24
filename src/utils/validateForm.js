const validateForm = (signUp, name, email, password, confirmPassword) => {
  const isNameValid = /^[0-9A-Za-z]{6,16}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isConfirmPasswordMatching = isPasswordValid
    ? password === confirmPassword
    : null;
  if (signUp && !isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (signUp && !isConfirmPasswordMatching)
    return "confirm password and password are not the same";

  return null;
};

export default validateForm;
