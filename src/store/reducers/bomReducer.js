import { FETCH_BOM_SUCCESS } from "../types/actionTypes";

const initialState = {
  list: [], // Ensure the initial state is an empty array
};

const bomReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOM_SUCCESS:
      return {
        ...state,
        list: action.payload, // Update the BOM list from action payload
      };
    default:
      return state;
  }
};

export default bomReducer;
