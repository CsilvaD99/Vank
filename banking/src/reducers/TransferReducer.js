const initialState = {
  transaction: [],
};
const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POS_TRANSA":
      return {
        ...state,
        transaction: action.payload,
      };

    default:
      return state;
  }
};
export default TransactionReducer;
