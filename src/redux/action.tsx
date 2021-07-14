import { ACTIONS } from "./actionType";

export const setData = (data: any) => ({
  type: ACTIONS.SET_DATA,
  data: data,
});
export const getData = () => ({
  type: ACTIONS.GET_DATA,
  data: null,
});
