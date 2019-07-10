import {
  LOGOUT,
  UPDATE_USER_SESSION,
  UPDATE_API_REQUEST_ERROR,
  UPDATE_API_REQUEST_LOADING,
} from './LoginTypes';

export const initial = {
  apiRequestError: null,
  isLoading: false,
  currentUserSession: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case UPDATE_API_REQUEST_ERROR:
      return { ...state, apiRequestError: action.payload };
    case UPDATE_API_REQUEST_LOADING:
      return { ...state, isLoading: action.payload };
    case UPDATE_USER_SESSION:
      return { ...state, currentUserSession: action.payload };
    case LOGOUT:
      return initial;
    default:
      return state;
  }
};
