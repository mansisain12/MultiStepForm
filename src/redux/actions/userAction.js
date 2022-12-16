import {USER_DETAILS} from '../constants/userTypes';

export const userDetails = userDetails => ({
  type: USER_DETAILS,
  payload: userDetails,
});
