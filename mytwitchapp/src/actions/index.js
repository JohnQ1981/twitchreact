import { SIGN_OUT, SIGN_IN } from "../reducers/types";
export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
