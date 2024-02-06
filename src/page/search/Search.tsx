
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
        <h1 className="text-blue-950 py-3 text-5xl font-bold font-hanken italic leading-[60px] tracking-tight">
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
        <div>
          <h1 className="text-blue-950 font-hanken italic text-[32px] font-bold  leading-10 tracking-tight my-6">
            Search Results
          </h1>
        </div>

        {error ? (
          <p>No Book Available</p>
        ) : searchesLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-fit xl:grid-cols-3  mx-1 my-6">
            {searches &&
              searches?.slice(0, showMore).map((book, i) => (
                <div
                  key={i}
                  className="w-[358px] xl:max-w-[358px] lg:max-w-[330px] md:max-w-[330px] mb-2 mr-2 h-[260px] rounded-lg border-2 border-gray-100 p-2 flex "
                >
                  <Link to={`/book/${book.id}`}>
                    <img
                      src={book.thumbnail}
                      alt="thumail"
                      className="w-40 h-[238px] cursor-pointer bg-red-400 rounded-md "
                    />
                  </Link>
                  <div className="ml-5 ">
                    <h1 className="text-blue-950 py-2 text-[22px] font-semibold font-hanken italic leading-loose tracking-tight">
                      {book.title && book.title.length > 10
                        ? book.title.slice(0, 10) + "..."
                        : book.title}
                    </h1>
                    <span className="text-blue-950 mt-5 py-2 text-base font-normal font-['Open Sans']">
                      {book.categories?.length > 0 &&
                      book.categories?.[0] &&
                      book.categories?.[0].length > 10
                        ? book.categories?.[0].slice(0, 10) + "..."
                        : book.categories?.[0]}
                    </span>
                    <span className="block mt-6 text-blue-700 text-xl font-bold font-['Hanken Grotesk'] leading-normal tracking-tight">
                      N/A
                    </span>

                    <button className="mt-4 text-white text-sm font-semibold font-['Open Sans'] leading-tight bg-blue-950 rounded-3xl px-4 py-3">
                      Buy Now
                    </button>
                    <img
                      src={heartLogo2}
                      alt="heart"
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
            className="w-[362px] h-[72px] font-bold bg-blue-300 text-blue-700 rounded-lg"
          >
            {showMore === 9 ? "More" : "Less"}
          </button>
        )}
      </div>
    </>
  );
}
