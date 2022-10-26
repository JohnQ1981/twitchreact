const INITIAL_STATE = {
  isSignedIn: null,
};

const authReducer = (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true };
    case "SIGN-OUT":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
export default authReducer;
