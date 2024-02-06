import heartLogo2 from "../../assets/images/heart1.png";
import tvLogo from "../../assets/images/tv.png";
import diamondLogo from "../../assets/images/diamond.png";
import quireLogo from "../../assets/images/quire.png";
import bookLogo from "../../assets/images/book.png";
import emailLogo from "../../assets/images/envelope.png";
import rightArrow from "../../assets/images/arrowRight.png";
import { Link } from "react-router-dom";
import useHome from "../../hooks/useHome";
import Loader from "../../components/loader/Loader";

export default function Home() {
  const {
    handleShowMore,
    bestBooksLoading,
    recommendedBooksLoading,
    bestBooks,
    popularBooks,
    showMore,
  } = useHome();

  return (
    <>
      <div className="grid md:grid-rows-2 md:grid-flow-col lg:grid-rows-1 lg:grid-flow-col xl:grid-rows-1 xl:grid-flow-col   xl:mx-24">
        <div className="w-fit">
          <div>
            <h1 className="text-blue-950 py-4  text-[32px] font-bold font-hanken italic leading-10 tracking-tight">
              Recommended Books
            </h1>
          </div>
          {recommendedBooksLoading ? (
            <Loader />
          ) : (
            <div className="grid grid-rows-1 w-[400px] md:w-[790px] overflow-auto grid-flow-col md:grid-rows-3 lg:grid-cols-2 lg:w-fit xl:grid-rows-3 lg:grid-flow-row mx-1">
              {popularBooks?.[0] &&
                popularBooks?.slice(0, showMore).map((book) => (
                  <div
                    key={book.id}
                    className="w-[400px] h-[300px] xl:max-w-[358px] lg:max-w-[358px] md:max-w-[358px] mt-20 md:mt-0 mb-2 mr-2 md:h-[260px] rounded-lg border-2 border-gray-100 p-2 flex flex-col md:flex-row md:text-start  md:items-start items-center text-center "
                  >
                    <Link to={`/book/${book.id}`}>
                      <img
                        src={book.thumbnail}
                        alt="thumnail"
                        className="w-40 h-[200px] cursor-pointer md:h-[238px] bg-red-400 rounded-md relative md:left-0 md:bottom-0 bottom-20 left-2  "
                      />
                    </Link>
                    <div className="ml-5 relative bottom-20 md:bottom-0">
                      <h1 className="text-blue-950  md:py-2cursor-pointer text-[22px] font-semibold font-hanken italic leading-loose tracking-tight">
                        {book.title && book.title.length > 10
                          ? book.title.slice(0, 10) + "..."
                          : book.title}
                      </h1>
                      <span className="text-blue-950 md:mt-5 md:py-2 font-sans text-base font-normal font-['Open Sans']">
                        {book.categories?.length > 0 &&
                        book.categories?.[0] &&
                        book.categories?.[0].length > 10
                          ? book.categories?.[0].slice(0, 10) + "..."
                          : book.categories?.[0]}
                      </span>
                      <span className="block md:mt-6 text-blue-700 text-xl font-bold font-['Hanken Grotesk'] leading-normal tracking-tight">
                        N/A
                      </span>

                      <button className="md:mt-12 mt-3 text-white  cursor-pointer text-sm cursor-pointer font-semibold font-['Open Sans'] leading-tight bg-blue-950 rounded-3xl px-4 py-3">
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

          <button
            onClick={handleShowMore}
            className=" w-[330px] md:w-full h-[72px] cursor-pointer  bg-blue-200 rounded-lg text-blue-700  text-base font-bold leading-tight tracking-tight "
          >
            {showMore === 6 ? "MORE RECOMMENDATIONS" : "LESS RECOMMENDATIONS"}
          </button>
        </div>
        <div className="text-blue-950  text-[32px] font-bold font-['Hanken Grotesk'] ">
          <h1 className="py-4 leading-10 tracking-tight font-hanken italic">
            Best this Month
          </h1>
          <div className=" rounded-md w-fit bg-gray-50 ">
            {bestBooksLoading ? (
              <Loader />
            ) : (
              <div className="grid  grid-cols-1 w-[400px] md:w-fit   grid-flow-rows md:grid-rows-3 lg:grid-rows-3 lg:w-fit xl:grid-rows-3 lg:grid-flow-col mx-1">
                {bestBooks?.[0] &&
                  bestBooks.map((book) => (
                    <div
                      key={book.title}
                      className="w-[358px] xl:w-[358px] lg:w-[350px] md:w-[350px] mb-2 mr-2 h-[260px] rounded-lg border-2 border-gray-100 p-2 flex "
                    >
                      <Link to={`/book/${book.id}`}>
                        <img
                          src={book.thumbnail}
                          alt="thumnail"
                          className="w-40 h-[238px] cursor-pointer bg-red-400 rounded-md "
                        />
                      </Link>
                      <div className="ml-5 ">
                        <h1 className="text-blue-950 py-2 font-hanken italic  text-[22px] font-semibold font-['Hanken Grotesk'] leading-loose tracking-tight">
                          {book.title && book.title.length > 10
                            ? book.title.slice(0, 10) + "..."
                            : book.title}
                        </h1>
                        <span className="text-blue-950 mt-5 font-sans py-2 text-base font-normal font-['Open Sans']">
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
                          className="inline mx-5"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            )}

            <button className="w-full h-[72px]   border-t-2 cursor-pointer  text-blue-700  text-base font-bold leading-tight tracking-tight">
              SEE BEST BOOKS
            </button>
          </div>
        </div>
      </div>
      <hr className="mx-5 my-10" />

      <div className="flex  justify-center my-8">
        <div className="lg:flex">
          <div className="w-[200px] p-4 mr-4 h-56 rounded-lg border border-gray-100 flex flex-col justify-center items-center ">
            <div className="bg-sky-100 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full p-1 ">
              <img src={tvLogo} alt="Tv" width={50} />
            </div>
            <div className="text-center">
              <span className="text-blue-950 text-[18px] font-semibold leading-loose font-hanken italic  tracking-tight">
                Business & Finance
              </span>
              <br />
              <span className="text-slate-500 text-base font-sans font-normal">
                Books about Business World
              </span>
            </div>
          </div>
          <div className="w-[200px]  p-4 h-56 mr-4 rounded-lg border border-gray-100 flex flex-col justify-center items-center ">
            <div className="bg-sky-100 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full p-1 ">
              <img src={diamondLogo} alt="diamond" width={50} />
            </div>
            <div className="text-center">
              <span className="text-blue-950 text-[18px] font-hanken italic font-semibold leading-loose  tracking-tight">
                Self Improvement
              </span>
              <br />
              <span className="text-slate-500 font-sans text-base font-normal">
                Books for Motivate Yourself
              </span>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="w-[200px] p-4 h-56 mr-4 rounded-lg border border-gray-100 flex flex-col justify-center items-center ">
            <div className="bg-sky-100 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full p-1 ">
              <img src={bookLogo} alt="book" width={50} />
            </div>
            <div className="text-center">
              <span className="text-blue-950 text-[18px] font-hanken italic font-semibold leading-loose  tracking-tight">
                Novel Telenovela
              </span>
              <br />
              <span className="text-slate-500 text-base font-sans font-normal">
                Books about Great Story
              </span>
            </div>
          </div>
          <div className="w-[200px]   p-4 h-56 mr-4 rounded-lg border border-gray-100 flex flex-col justify-center items-center ">
            <div className="bg-sky-100 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full p-1 ">
              <img src={quireLogo} alt="Qurie" width={50} />
            </div>
            <div className="text-center">
              <span className="text-blue-950 text-[18px] font-hanken italic font-semibold leading-loose  tracking-tight">
                Skill in Future
              </span>
              <br />
              <span className="text-slate-500 text-base font-sans font-normal">
                Books for Self Preparation
              </span>
            </div>
          </div>
        </div>
        <span className="shadow-lg w-4 cursor-pointer  rounded-full h-fit relative right-10 top-24 ">
          <img src={rightArrow} alt="Right Arrow" />
        </span>
      </div>
      <div className="flex justify-center my-12">
        <div className="flex flex-col lg:flex-row  justify-center items-center lg:justify-between w-[900px] h-[250px]  md:h-[200px]  bg-blue-700 rounded-xl p-8">
          <span className="text-white text-3xl font-bold font-hanken italic leading-[48px] tracking-tight">
            Be the First to know
            <br />
            Our Promo before others!
          </span>
          <div className="w-[250px]  md:w-[405px]  md:h-10 border-2 border-white rounded-lg mt-4 md:mt-10 mr-10   bg-white">
            <img
              src={emailLogo}
              alt="Email"
              className="absolute mt-[6px] lg:mt-[12px] ml-2"
              width={20}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-none w-[150px] md:w-[240px] ml-8 focus:outline-none"
            />
            <button className="m-2 w-[230px] cursor-pointer md:w-[127px] md:m-0   text-center rounded-md text-white ml-2 py-3 md:py-1.5 text-base font-bold font-['Open Sans'] bg-amber-500">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
