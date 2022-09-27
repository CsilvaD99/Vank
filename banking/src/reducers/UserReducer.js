const initalState = {
  signininfo: [],
  touser: [],
  moreinfo: [],
};
const userInfoReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        signininfo: action.payload,
      };
    case "TO_USER":
      return {
        ...state,
        touser: action.payload,
      };
    case "MORE_INFO":
      return {
        ...state,
        moreinfo: action.payload,
      };
    case "R_BALANCE":
      const MoreUserinfo = state.moreinfo;
      return {
        ...state,
        moreinfo: [...MoreUserinfo].filter((A) => A !== action?.payload),
      };
    case `REMOVE_USER`:
      const usersignininfo = state.signininfo;
      return {
        ...state,
        signininfo: [...usersignininfo].filter(
          (rem) => rem !== action?.payload
        ),
      };
    default:
      return state;
  }
};
export default userInfoReducer;
