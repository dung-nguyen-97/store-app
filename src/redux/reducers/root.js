import { combineReducers } from "redux";
import ProductReducer from "./product";

const RootReducer = combineReducers({
  product: ProductReducer,
});

export default RootReducer;
