import { FETCH_PRODUCTS_SUCCESS } from "../types/actionTypes";

const initialState = {
  list: [] // FIX: Matches the expected key in `useSelector`
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.payload, // Ensure it updates correctly
      };
    default:
      return state;
  }
};

export default productReducer;
