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

      <div className="grid md:grid-rows-1 xl:grid-flow-col md:grid-flow-col lg:grid-rows-1 lg:grid-flow-col xl:grid-rows-1 xl:mx-24  mx-auto">
        <div className="w-fit">
          <div>
            <h1 className="text-[#183B56] py-4  text-[32px] font-bold font-hanken italic leading-[40px] tracking-tight">
              Recommended Books
            </h1>
          </div>
          {popularBooks ? (
            <>
              {recommendedBooksLoading ? (
                <Loader />
              ) : (
                <div className="grid grid-rows-1 w-[400px] overflow-auto  grid-flow-col md:grid-rows-6 lg:grid-cols-2 lg:w-fit xl:grid-rows-3  mx-1">
                  {popularBooks?.[0] &&
                    popularBooks?.slice(0, showMore).map((book) => (
                      <div
                        key={book.id}
                        className="w-[270px] h-[312px] md:h-[260px] md:w-[358px]  m-5 md:mt-0   rounded-lg border-2 border-[#ECEEF2] p-2 flex flex-col md:flex-row md:text-start  md:items-start items-center text-center "
                      >
                        <Link to={`/book/${book.id}`}>
                          <img
                            src={book.thumbnail}
                            alt="thumbnail"
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

              <button
                onClick={handleShowMore}
                className="w-[330px] md:w-full h-[72px] cursor-pointer  bg-[#1565D8] rounded-lg text-[#1565D8] bg-opacity-10  text-base font-bold leading-tight tracking-tight "
              >
                {showMore === 6
                  ? "MORE RECOMMENDATIONS"
                  : "LESS RECOMMENDATIONS"}
              </button>
            </>
          ) : (
            "Data did not Received"
          )}
        </div>
        <div>
          <h1 className="py-4 leading-[40px] text-[#183B56] text-[32px] font-bold  tracking-tight font-hanken italic">
            Best this Month
          </h1>
          <div className=" rounded-md w-[360px]  bg-opacity-10 bg-[#B3BAC5] ">
            {bestBooks?
            <>
            {bestBooksLoading ? (
              <Loader />
            ) : (
              <div className="grid  grid-cols-1 w-[287px]     grid-flow-rows md:grid-rows-4 lg:grid-rows-4  xl:grid-rows-4 lg:grid-flow-col mx-1">
                {bestBooks?.[0] &&
                  bestBooks.map((book) => (
                    <div
                      key={book.title}
                      className="w-[287px]  m-4 h-[177.5px] rounded-lg border-2 border-[#ECEEF2] p-2 flex "
                    >
                      <Link to={`/book/${book.id}`}>
                        <img
                          src={book.thumbnail}
                          alt="thumnail"
                          className="w-[119.33px] h-[177.5px] cursor-pointer  rounded-md "
                        />
                      </Link>
                      <div className="ml-5 ">
                        <h1 className="text-[#183B56] py-2 font-hanken italic  text-[22px] font-semibold  leading-[32px] tracking-tight">
                          {book.title && book.title.length > 10
                            ? book.title.slice(0, 10) + "..."
                            : book.title}
                        </h1>

                        <span className="block mt-6 text-[#1565D8] text-xl font-bold font-hanken leading-normal tracking-tight">
                          N/A
                        </span>

                        <button className="mt-4 text-white text-sm font-semibold font-['Open Sans'] leading-tight bg-[#183B56] rounded-3xl px-4 py-3">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            <button className="w-full h-[72px]   border-t-2 cursor-pointer  text-[#1565D8]  text-base font-bold leading-tight tracking-tight">
              SEE BEST BOOKS
            </button>
            </>:("BEST BOOKS Did not Re")}
          </div>
        </div>
      </div>
      <hr className="mx-5 my-10" />
      <div className="flex  justify-center my-8">
        <div className="lg:flex">
          <div className="max-w-[265px] p-4 mr-4 h-[240px] rounded-lg border border-[#ECEEF2] flex flex-col justify-center items-center ">
            <div className="border-2  border-dashed ">
              <div className="bg-sky-100 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full p-1 ">
                <img src={tvLogo} alt="Tv" width={50} />
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-[#183B56] text-[22px]  font-semibold leading-[32px] font-hanken italic  tracking-tight">
                Business & Finance
              </span>
              <br />
              <span className="text-[#5A7184] text-[16px] font-sans font-normal">
                Books about Business World
              </span>
            </div>
          </div>
          <div className="w-[265px]  p-4 h-[240px] mr-4 rounded-lg border border-[#ECEEF2] flex flex-col justify-center items-center ">
            <div className="border-2  border-dashed ">
              <div className="bg-sky-100 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full p-1 ">
                <img src={diamondLogo} alt="diamond" width={64} height={64} />
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-[#183B56] text-[22px] font-hanken italic font-semibold leading-[32px]  tracking-tight">
                Self Improvement
              </span>
              <br />
              <span className="text-[#5A7184] font-sans text-[16px] font-normal">
                Books for Motivate Yourself
              </span>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="w-[265px] p-4 h-[240px] mr-4 rounded-lg border border-[#ECEEF2] flex flex-col justify-center items-center ">
            <div className="border-2  border-dashed ">
              <div className="bg-sky-100 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full p-1 ">
                <img src={bookLogo} alt="book" width={50} />
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-[#183B56] text-[22px]  font-hanken italic font-semibold leading-[32px]  tracking-tight">
                Novel Telenovela
              </span>
              <br />
              <span className="text-[#5A7184] text-[16px] font-sans font-normal">
                Books about Great Story
              </span>
            </div>
          </div>
          <div className="w-[265px]   p-4 h-[240px] mr-4 rounded-lg border border-[#ECEEF2] flex flex-col justify-center items-center ">
            <div className="border-2  border-dashed ">
              <div className="bg-sky-100 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full p-1 ">
                <img src={quireLogo} alt="Qurie" width={50} />
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-[#183B56] text-[22px] font-hanken italic font-semibold leading-[32px]  tracking-tight">
                Skill in Future
              </span>
              <br />
              <span className="text-[#5A7184] text-[16px] font-sans font-normal">
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
        <div className="flex flex-col lg:flex-row  justify-center items-center lg:justify-between w-[1140px] h-[250px]  md:h-[200px]  bg-[#1565d8] rounded-xl p-8">
          <span className="text-white text-[36px] font-bold font-hanken italic leading-[48px] tracking-tight">
            Be the First to know
            <br />
            Our Promo before others!
          </span>
          <div className="w-[250px] mb-2 flex flex-col md:flex-row text-center items-center   md:w-[447px]  md:h-[56px] border-2 border-white rounded-lg mt-4 md:mt-10 mr-10   bg-white">
            <img
              src={emailLogo}
              alt="Email"
              className="absolute left-20 mt-[6px]  ml-2"
              width={20}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-none w-[150px] md:w-[245px] ml-8 focus:outline-none"
            />
            <button className="m-2 w-[230px] h-[48px] cursor-pointer md:w-[163px] md:m-0   text-center rounded-md text-white ml-2 py-3 md:py-1.5 text-base font-bold font-sans bg-[#FAAD13]">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
