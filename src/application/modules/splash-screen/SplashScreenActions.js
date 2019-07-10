/* eslint-disable import/prefer-default-export */
import SessionService from '../../../services/session/SessionService';

const userIsLogged = userIsLogged => ({
  type: 'USER_IS_LOGGED',
  payload: userIsLogged,
});

export const getCurrentUser = () => (dispatch) => {
  new SessionService().getCurrentUserIdSession().then((userId) => {
    if (userId !== null) dispatch(userIsLogged(true));
    else dispatch(userIsLogged(false));
  });
};
