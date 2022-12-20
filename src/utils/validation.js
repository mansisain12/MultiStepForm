export const validateEmail = email => {
  var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
};

export const validatePhNumber = mobileNumber => {
  var re = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
  return re.test(mobileNumber);
};
export const validateName = name => {
  var re = /^[a-zA-Z ]+$/;
  return re.test(name);
};
