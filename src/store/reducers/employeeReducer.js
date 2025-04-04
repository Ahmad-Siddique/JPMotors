import { FETCH_EMPLOYEES_SUCCESS } from "../types/actionTypes";

const initialState = {
  list: [], // Ensure the initial state is an empty array
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        list: action.payload, // Update the employee list from action payload
      };
    default:
      return state;
  }
};

export default employeeReducer;
