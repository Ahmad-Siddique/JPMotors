import { combineReducers } from "redux";
import headerCardReducer from "./headerCardReducer";
import productReducer from "./productReducer";
import statusReducer from "./statusReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  headerCard: headerCardReducer,
  products: productReducer,
  status: statusReducer,
  employees: employeeReducer,
});

export default rootReducer;
