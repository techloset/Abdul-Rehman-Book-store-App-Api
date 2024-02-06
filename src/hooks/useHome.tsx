import { useAppDispatch, useAppSelector } from "../store/storeHook";
import { useEffect, useState } from "react";
import {
  fetchBestBooks,
  fetchPopularBooks,
} from "../store/reducer/BookReducer";
export default function useHome() {
  const dispatch = useAppDispatch();
  const [showMore, setShowMore] = useState<number>(6);
  const popularBooks = useAppSelector((state) => state.book.popularBooks);
  const bestBooks = useAppSelector((state) => state.book.bestBooks);
  const recommendedBooksLoading = useAppSelector((state) => state.book.loading);
  const bestBooksLoading = useAppSelector((state) => state.book.loading);

  useEffect(() => {
    dispatch(fetchPopularBooks());
    dispatch(fetchBestBooks());
  }, [dispatch]);

  useEffect(() => {
    setShowMore(6);
  }, []);
  const handleShowMore = () => {
    if (showMore === 6) {
      setShowMore(showMore + 6);
    } else {
      setShowMore(6);
    }
  };
  return {
    handleShowMore,
    bestBooksLoading,
    recommendedBooksLoading,
    bestBooks,
    popularBooks,
    setShowMore,
    showMore,
  };
}
