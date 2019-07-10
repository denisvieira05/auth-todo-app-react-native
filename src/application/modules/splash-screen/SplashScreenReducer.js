
export const initial = {
  userIsLogged: null,
}

export default (state = initial, action) => {
  switch (action.type) {
    case "USER_IS_LOGGED":
      return { ...state, userIsLogged: action.payload };
    default:
      return state;
  }
}
