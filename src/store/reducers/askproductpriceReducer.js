import { FETCH_ASK_ABOUT_PRICE_SUCCESS } from "../types/actionTypes";

const initialState = {
  list: [], // Ensure the initial state is an empty array
};

const askproductpriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASK_ABOUT_PRICE_SUCCESS:
      return {
        ...state,
        list: action.payload, // Update the BOM list from action payload
      };
    default:
      return state;
  }
};

export default askproductpriceReducer;
