export const emailValidator = (val) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
};

export const checkDigits = (val) => {
    return !isNaN(val)
};

