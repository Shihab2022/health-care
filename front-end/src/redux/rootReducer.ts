import { baseApi } from "./api/baseApi";
import userReducer from "./store/user/user";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer,
};
