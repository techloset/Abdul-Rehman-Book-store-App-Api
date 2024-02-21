import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../reducer/BookReducer";
import SearchReducer from "../reducer/SearchReducer";

const store = configureStore({
  reducer: {
    book: BookReducer,
    searches: SearchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
