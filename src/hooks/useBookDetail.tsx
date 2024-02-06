import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/storeHook";
import {
  fetchBestBooks,
  fetchPopularBooks,
} from "../store/reducer/BookReducer";
import { useParams } from "react-router-dom";
import { fetchSearchBooks } from "../store/reducer/SearchReducer";

export default function useBookDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const popularBooks = useAppSelector((state) => state.book.popularBooks);
  const bestBooks = useAppSelector((state) => state.book.bestBooks);
  const searches = useAppSelector((state) => state.searches.searchBooks) || [];

  useEffect(() => {
    dispatch(fetchPopularBooks());
    dispatch(fetchBestBooks());
    if (id) {
      dispatch(fetchSearchBooks(id));
    }
  }, [dispatch, id]);

  const selectedBook = [...popularBooks, ...bestBooks, ...searches].find(
    (book) => book.id === id
  );

  return {
    popularBooks,
    bestBooks,
    searches,
    selectedBook,
  };
}
