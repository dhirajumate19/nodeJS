export const validateData = (data) => {
  if (typeof data !== "string" || !data.trim()) {
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
