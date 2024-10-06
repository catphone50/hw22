import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./quot/quoteSlice";

const store = configureStore({
  reducer: {
    quote: quoteSlice,
  },
});

export default store;
