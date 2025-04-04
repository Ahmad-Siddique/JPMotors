import { UPDATE_STATUS } from "../types/actionTypes";
import initialState from "../../components/footer/initialState";

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_STATUS:
        return { ...state, ...action.payload }; // Ensure merging does not re-wrap status
      default:
        return state;
    }
};
  
export default statusReducer;
