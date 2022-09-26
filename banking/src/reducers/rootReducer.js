import { combineReducers } from "redux";
import userInfoReducer from "./UserReducer";
import TransactionReducer from "./TransferReducer";

export default combineReducers({
  userInfoReducer,
  TransactionReducer,
});
