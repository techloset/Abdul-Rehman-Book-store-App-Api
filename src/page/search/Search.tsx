import heartLogo2 from "../../assets/images/heart1.png";
import { Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import Loader from "../../components/loader/Loader";

export default function Search() {
  const {
    handleShowMore,
    searchesLoading,
    searches,
    showMore,
    error,
    setSearch,
    search,
  } = useSearch();

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-[#183B56] py-3 text-5xl font-bold font-hanken italic leading-[60px] tracking-tight">
          Search Books
        </h1>
        <div className=" w-[400px] md:w-[641px] h-[72px]  bg-neutral-100 rounded-lg px-6">
          <input
            type="text"
            value={search}
            placeholder="Search query"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-full bg-transparent focus:outline-none text-xl"
          />
        </div>
      </div>

      <div className="md:mx-20">
          {searches && (
        <div>
            <h1 className="text-[#183B56] font-hanken italic text-[32px] font-bold  leading-10 tracking-tight my-6">
              Search Results
            </h1>
        </div>
        
          )}

        {error ? (
          <p>No Book Available</p>
        ) : searchesLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-fit xl:grid-cols-3  mx-1 my-6">
            {searches &&
              searches?.slice(0, showMore).map((book, i) => (
                <div
                    key={book.id}
                    className="w-[270px] h-[312px] md:h-[260px] md:w-[358px]  m-5 md:mt-0   rounded-lg border-2 border-[#ECEEF2] p-2 flex flex-col md:flex-row md:text-start  md:items-start items-center text-center "
                  >
                    <Link to={`/book/${book.id}`}>
                      <img
                        src={book.thumbnail}
                        alt="thumnail"
                        className="w-[160px] h-[238px] cursor-pointer md:h-[238px]  rounded-md relative md:left-0 md:bottom-0 bottom-20 left-2  "
                      />
                    </Link>
                    <div className="ml-5 relative bottom-20 md:bottom-0">
                      <h1 className="text-[#183B56] h-[64px]  md:py-2 cursor-pointer text-[22px] font-semibold font-hanken italic leading-[32px] tracking-tight">
                        {book.title && book.title.length > 10
                          ? book.title.slice(0, 10) + "..."
                          : book.title}
                      </h1>
                      <span className="text-[#183B56] md:mt-5 md:py-2 font-sans  font-normal text-[16px] leading-[21.79px] ">
                        {book.categories
                          ? book.categories?.length > 0 &&
                            book.categories?.[0] &&
                            book.categories?.[0].length > 10
                            ? book.categories?.[0].slice(0, 10) + "..."
                            : book.categories?.[0]
                          : "No Category"}
                      </span>
                      <span className="block md:mt-6 text-[#1565D8] text-[20px] font-bold font-hanken italic leading-[24px] tracking-tight">
                        N/A
                      </span>

                      <button className="md:mt-12 mt-3 text-white   text-[14px] cursor-pointer font-semibold font-sans leading-[20px] bg-[#183B56] rounded-3xl px-4 py-3">
                        Buy Now
                      </button>
                      <img
                        src={heartLogo2}
                        alt="Heart"
                        width={20}
                        className="inline mx-5 cursor-pointer"
                      />
                    </div>
                  </div>
              ))}
          </div>
        )}
        {searches && searches.length > 9 && (
          <button
            onClick={handleShowMore}
            className="w-[362px] h-[72px] font-bold bg-blue-300 text-[#1565D8] rounded-lg"
          >
            {showMore === 9 ? "More" : "Less"}
          </button>
        )}
      </div>
    </>
  );
}
