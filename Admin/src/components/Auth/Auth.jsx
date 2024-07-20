const validateSignUp = (
  fullName,
  userName,
  password,
  confirmPassword,
  acceptPAndT
) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(
    password
  );

  if (!fullName) {
    return "Full name is required";
  }

  if (!userName) {
    return "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(userName)) {
    return "Invalid email address";
  }

  if (!password) {
    return "Password is required";
  }

  if (!hasUppercase) {
    return "Password must include at least one uppercase letter";
  }

  if (!hasLowercase) {
    return "Password must include at least one lowercase letter";
  }

  if (!hasDigit) {
    return "Password must include at least one digit";
  }

  if (!hasSpecialChar) {
    return "Password must include at least one special character";
  }

  if (password.length < minLength) {
    return "Password must be at least " + minLength + " characters long";
  }

  if (!confirmPassword) {
    return "Confirm password is required";
  } else if (password !== confirmPassword) {
    return "Confirm password should match the password";
  }

  if (!acceptPAndT) {
    return "Please accept our privacy policy, and terms and condition";
  }

  return true;
};

export default validateSignUp;

export const validateLogin = (userName, password) => {
  if (!userName) {
    return "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(userName)) {
    return "Invalid email address";
  }

  if (!password) {
    return "Password is required";
  }

  return true;
};

export const changePassword = (oldPassword, newPassword, cNPassword) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasLowercase = /[a-z]/.test(newPassword);
  const hasDigit = /\d/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(
    newPassword
  );

  if (!oldPassword) {
    return "Old password is required";
  }

  if (!newPassword) {
    return "New password is required";
  }

  if (!hasUppercase) {
    return "New password must include at least one uppercase letter";
  }

  if (!hasLowercase) {
    return "New password must include at least one lowercase letter";
  }

  if (!hasDigit) {
    return "New password must include at least one digit";
  }

  if (!hasSpecialChar) {
    return "New password must include at least one special character";
  }

  if (newPassword.length < minLength) {
    return "New password must be at least " + minLength + " characters long";
  }

  if (oldPassword === newPassword) {
    return "New password cannot be same as your old password";
  }

  if (!cNPassword) {
    return "Confirm new password is required";
  } else if (newPassword !== cNPassword) {
    return "Confirm new password should match the new password";
  }

  return true;
};

export const newPassword = (newPassword, confirmPassword) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasLowercase = /[a-z]/.test(newPassword);
  const hasDigit = /\d/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(
    newPassword
  );

  if (!newPassword) {
    return "New password is required";
  }

  if (!hasUppercase) {
    return "New password must include at least one uppercase letter";
  }

  if (!hasLowercase) {
    return "New password must include at least one lowercase letter";
  }

  if (!hasDigit) {
    return "New password must include at least one digit";
  }

  if (!hasSpecialChar) {
    return "New password must include at least one special character";
  }

  if (newPassword.length < minLength) {
    return "New password must be at least " + minLength + " characters long";
  }

  if (!confirmPassword) {
    return "Confirm new password is required";
  } else if (newPassword !== confirmPassword) {
    return "Confirm new password should match the new password";
  }
  return true;
};
