import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  quote: "",
  author: "",
  isLoading: false,
  error: null,
};

export const fetchRandomQuote = createAsyncThunk(
  "quotes/fetchRandomQuote",
  async () => {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    return data;
  }
);

const fetchRandomQuotePending = (state) => {
  state.isLoading = true;
};

const fetchRandomQuoteFulfilled = (state, action) => {
  state.isLoading = false;
  state.quote = action.payload.quote;
  state.author = action.payload.author;
  state.id = action.payload.id;
};

const fetchRandomQuoteRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomQuote.pending, fetchRandomQuotePending);
    builder.addCase(fetchRandomQuote.fulfilled, fetchRandomQuoteFulfilled);
    builder.addCase(fetchRandomQuote.rejected, fetchRandomQuoteRejected);
  },
});
export default quoteSlice.reducer;
