import { ACTIONS } from "./actionType";

const initialState = {};

const reducer = (state = initialState, action: { type: string, data: {} }) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      state = action.data;
      return state;
    case ACTIONS.GET_DATA:
      return state || {};
    default:
      return state;
  }
};

export default reducer;