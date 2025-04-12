import { combineReducers } from "redux";
import headerCardReducer from "./headerCardReducer";
import productReducer from "./productReducer";
import statusReducer from "./statusReducer";
import employeeReducer from "./employeeReducer";
import bomReducer from "./bomReducer";
import askproductpriceReducer from "./askproductpriceReducer";

const rootReducer = combineReducers({
  headerCard: headerCardReducer,
  products: productReducer,
  status: statusReducer,
  employees: employeeReducer,
  bom: bomReducer,
  askproductprice: askproductpriceReducer
});

export default rootReducer;
