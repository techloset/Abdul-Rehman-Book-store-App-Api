import { Route, Routes } from "react-router-dom";
import Home from "../page/frontend/home/Home";
import BookDetail from "../page/frontend/bookDetail/BookDetail";
import Search from "../page/frontend/search/Search";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DetailFooter from "../components/footer/DetailFooter";
export default function Navigation() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookDetail/:id" element={<BookDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <DetailFooter />
      <Footer />
    </>
  );
}
