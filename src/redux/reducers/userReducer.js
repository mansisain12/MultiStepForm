import {
  USER_DEVELOPMENT,
  USER_DEPARTMENT,
  USER_EMAIL,
  USER_PHONE,
  USER_FNAME,
  USER_LNAME,
  USER_COMPANYNAME,
  USER_JOBTITLE,
  RESET_MODAL,
} from '../constants/userTypes';

const initialState = {
  development: '',
  department: '',
  email: '',
  phone: '',
  fName: '',
  lName: '',
  companyName: '',
  jobTitle: '',
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DEVELOPMENT:
      return {...state, development: action.payload};

    case USER_DEPARTMENT:
      return {...state, department: action.payload};

    case USER_EMAIL:
      return {...state, email: action.payload};

    case USER_PHONE:
      return {...state, phone: action.payload};

    case USER_FNAME:
      return {...state, fName: action.payload};

    case USER_LNAME:
      return {...state, lName: action.payload};

    case USER_COMPANYNAME:
      return {...state, companyName: action.payload};

    case USER_JOBTITLE:
      return {...state, jobTitle: action.payload};

    case RESET_MODAL:
      console.log('initial state---->', initialState);
      return initialState;

    default:
      return state;
  }
};

export default userDetailsReducer;
