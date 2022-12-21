import {
  SET_DEVELOPMENT,
  SET_DEPARTMENT,
  SET_EMAIL,
  SET_PHONE,
  SET_FNAME,
  SET_LNAME,
  SET_COMPANYNAME,
  SET_JOBTITLE,
  RESET_MODAL,
  SET_INCREASE_PROGRESS,
  SET_DECREASE_PROGRESS,
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
  progress: 0,
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVELOPMENT:
      return {...state, development: action.payload};

    case SET_DEPARTMENT:
      return {...state, department: action.payload};

    case SET_EMAIL:
      return {...state, email: action.payload};

    case SET_PHONE:
      return {...state, phone: action.payload};

    case SET_FNAME:
      return {...state, fName: action.payload};

    case SET_LNAME:
      return {...state, lName: action.payload};

    case SET_COMPANYNAME:
      return {...state, companyName: action.payload};

    case SET_JOBTITLE:
      return {...state, jobTitle: action.payload};

    case RESET_MODAL:
      console.log('initial state---->', initialState);
      return initialState;

    case SET_INCREASE_PROGRESS:
      return {...state, progress: state.progress + 0.2};

    case SET_DECREASE_PROGRESS:
      return {...state, progress: state.progress - 0.2};

    default:
      return state;
  }
};

export default userDetailsReducer;
