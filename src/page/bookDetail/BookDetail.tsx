import Slider from "./Slider";
import useBookDetail from "../../hooks/useBookDetail";

export default function BookDetail() {
  const { selectedBook } = useBookDetail();

  return (
    <>
      <div>
        <div className="max-w-[1140px] flex  text-center lg:text-start  flex-col justify-center items-center lg:flex-row lg:justify-around mx-20">
          <div className="mx-9">
            <span className=" text-[#FAAD13] text-3xl  italic font-bold font-hanken leading-[60px] tracking-tight">
              {selectedBook?.categories || ""}:
              <br />
            </span>
            <span className="text-[#183B56]   text-2xl md:text-3xl font-hanken italic lg:text-4xl font-bold  leading-[40px] md:leading-[50px] lg:leading-[60px] tracking-tight">
              {selectedBook?.title || ""}
            </span>
            <p className="text-[#183B56] text-md my-3 font-semibold  italic font-hanken leading-normal tracking-tight">
              A BOOK BY {selectedBook?.authors || ""}
            </p>
            <p className=" w-[280px] md:w-fit text-[#5A7184] mt-3 text-sm font-normal font-sans  leading-loose">
              {selectedBook?.description || ""}
            </p>
            <button className="text-white mt-10 bg-[#1565D8] py-4 px-2 font-sans rounded-md font-bold text-sm">
              See on Google Books
            </button>
          </div>

          <div>
            <div className="w-[300px] lg:w-[488px] h-[350px] lg:h-[580px] flex justify-center items-center mt-2 lg:mt-0  bg-gray-200">
              <img
                src={selectedBook?.thumbnail || ""}
                alt="Thumbnail"
                className="w-[200px] lg:w-[250px] h-[320px] lg:h-[374px] cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  h-[550px] bg-[#183B56] p-10 my-14">
        <div className="flex justify-center">
          <Slider />
        </div>
      </div>
    </>
  );
}
