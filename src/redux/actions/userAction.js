import {
  SET_DEVELOPMENT,
  SET_DEPARTMENT,
  SET_COMPANYNAME,
  SET_EMAIL,
  SET_PHONE,
  SET_FNAME,
  SET_LNAME,
  SET_JOBTITLE,
  RESET_MODAL,
  SET_INCREASE_PROGRESS,
  SET_DECREASE_PROGRESS,
} from '../constants/userTypes';

export const userDevelopment = user => ({
  type: SET_DEVELOPMENT,
  payload: user,
});
export const userDepartment = user => ({
  type: SET_DEPARTMENT,
  payload: user,
});
export const userEmail = user => ({
  type: SET_EMAIL,
  payload: user,
});
export const userPhone = user => ({
  type: SET_PHONE,
  payload: user,
});
export const userFirstName = user => ({
  type: SET_FNAME,
  payload: user,
});
export const userLastName = user => ({
  type: SET_LNAME,
  payload: user,
});
export const userCompanyName = user => ({
  type: SET_COMPANYNAME,
  payload: user,
});
export const userJobTitle = user => ({
  type: SET_JOBTITLE,
  payload: user,
});
export const resetModal = user => ({
  type: RESET_MODAL,
  payload: user,
});
export const increaseProgress = () => ({
  type: SET_INCREASE_PROGRESS,
});
export const decreaseProgress = () => ({
  type: SET_DECREASE_PROGRESS,
});
