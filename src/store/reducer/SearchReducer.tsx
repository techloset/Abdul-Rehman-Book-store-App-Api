import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../utilites/Instance";

interface BookState {
  searchBooks: {
    id: string;
    title: string;
    categories: string[];
    thumbnail: string;
    authors: string[];
    description: string;
  }[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  searchBooks: [],
  loading: false,
  error: null,
};

interface ApiResponse {
  items: {
    id: string;
    volumeInfo: {
      title: string;
      categories: string[];
      imageLinks: {
        thumbnail: string;
      };
      authors: string[];
      description: string;
    };
  }[];
}

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchSearchBooks = createAsyncThunk<ApiResponse, string>(
  "SearchBooksOption/fetchSearchBooksOption",
  async (search) => {
    if (search) {
      try {
        const response = await instance(
          `volumes?q=${search}&key=${apiKey}&maxResults=40`
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  }
);
export const SearchReducer = createSlice({
  name: "SearchBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchBooks.fulfilled, (state, action) => {
        if (state.searchBooks) {
          state.searchBooks = action.payload?.items?.map((item) => ({
            id: item.id || "",
            title: item.volumeInfo.title || "",
            categories: item.volumeInfo.categories || "",
            description: item.volumeInfo.description || "",
            thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
            authors: item.volumeInfo.authors || "",
          }));
        } else {
          state.searchBooks = [];
        }
        state.loading = false;
      })
      .addCase(fetchSearchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching books. Please try again later.";
        console.error("Error fetching books:", action.error);
      });
  },
});

export default SearchReducer.reducer;
