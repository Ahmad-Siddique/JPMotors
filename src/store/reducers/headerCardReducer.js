import { SET_HEADER_CARD } from "../types/actionTypes";

const initialState = {
  title: "",
  description: "",
  breadcrumb: [],
};

const headerCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_CARD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default headerCardReducer;
