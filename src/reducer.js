import { ActionTypes } from "@mui/base";

export const initialState = {
  basket: [],
};
export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.items],
      };
    default:
      return state;
  }
};
export default reducer;
