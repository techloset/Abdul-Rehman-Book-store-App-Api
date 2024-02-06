import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../utilites/Instance";

interface BookState {
  popularBooks: {
    id: string;
    title: string;
    categories: string[];
    thumbnail: string;
    authors: string[];
    description: string;
  }[];
  bestBooks: {
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
  popularBooks: [],
  bestBooks: [],
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

export const fetchPopularBooks = createAsyncThunk(
  "bookPopularOption/fetchBooksPopularOption",
  async () => {
    try {
      const response = await instance(
        `volumes?q=horror&key=${apiKey}&maxResults=12`
      );
      return response.data as ApiResponse;
    } catch (error) {
      console.error("Error fetching thriller books:", error);
      throw error;
    }
  }
);

export const fetchBestBooks = createAsyncThunk<ApiResponse>(
  "bookBestOption/fetchBestBooksOption",
  async () => {
    try {
      const response = await instance(
        `volumes?q=thriller&key=${apiKey}&maxResults=3`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching adventure books:", error);
      throw error;
    }
  }
);

export const BookReducer = createSlice({
  name: "bookStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularBooks.fulfilled, (state, action) => {
        state.loading = false;
        if (state.bestBooks) {
          state.popularBooks = action.payload?.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            categories: item.volumeInfo.categories,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
          }));
        } else {
          state.popularBooks = [];
        }
      })
      .addCase(fetchPopularBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching thriller books. Please try again later.";
        console.error("Error fetching thriller books:", action.error);
      })
      .addCase(fetchBestBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBestBooks.fulfilled, (state, action) => {
        state.loading = false;
        if (state.bestBooks) {
          state.bestBooks = action.payload?.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            categories: item.volumeInfo.categories,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
          }));
        } else {
          state.bestBooks = [];
        }
      })
      .addCase(fetchBestBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching adventure books. Please try again later.";
        console.error("Error fetching adventure books:", action.error);
      });
  },
});

export default BookReducer.reducer;
