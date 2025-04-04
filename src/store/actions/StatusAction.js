// actions/StatusAction.js
import UPDATE_STATUS from "../types/actionTypes";

export const updateStatus = (statusData) => {
    return {
      type: UPDATE_STATUS,
      payload: statusData,
    };
  };
  