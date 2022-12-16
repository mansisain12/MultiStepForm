import {USER_DETAILS} from '../constants/userTypes';

const initialState = {
  userInfo: {
    email: '',
    phone: '',
    fName: '',
    lName: '',
    companyName: '',
    jobTitle: '',
  },
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS:
      console.log(action.payload);
      return {...state, userDetails: action.payload};

    default:
      return state;
  }
};

export default userDetailsReducer;
