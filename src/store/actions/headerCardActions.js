import { SET_HEADER_CARD } from "../types/actionTypes";

export const setHeaderCard = (title, description, breadcrumb) => ({
  type: SET_HEADER_CARD,
  payload: { title, description, breadcrumb },
});
