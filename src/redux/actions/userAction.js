import {
  USER_DEVELOPMENT,
  USER_DEPARTMENT,
  USER_COMPANYNAME,
  USER_EMAIL,
  USER_PHONE,
  USER_FNAME,
  USER_LNAME,
  USER_JOBTITLE,
  RESET_MODAL,
} from '../constants/userTypes';

export const userDevelopment = user => ({
  type: USER_DEVELOPMENT,
  payload: user,
});
export const userDepartment = user => ({
  type: USER_DEPARTMENT,
  payload: user,
});
export const userEmail = user => ({
  type: USER_EMAIL,
  payload: user,
});
export const userPhone = user => ({
  type: USER_PHONE,
  payload: user,
});
export const userFirstName = user => ({
  type: USER_FNAME,
  payload: user,
});
export const userLastName = user => ({
  type: USER_LNAME,
  payload: user,
});
export const userCompanyName = user => ({
  type: USER_COMPANYNAME,
  payload: user,
});
export const userJobTitle = user => ({
  type: USER_JOBTITLE,
  payload: user,
});
export const resetModal = user => ({
  type: RESET_MODAL,
  payload: user,
});
