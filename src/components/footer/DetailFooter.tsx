import mainLogo from "../../assets/images/mainLogo.png";
import circle from "../../assets/images/Layer.png";
import { Link } from "react-router-dom";
export default function DetailFooter() {
  const productLink = [
    {
      name: "Landing Page",
      link: "/",
    },
    {
      name: "Features",
      link: "/",
    },
    {
      name: "Documentation",
      link: "/",
    },
    {
      name: "Referral Program",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
  ];
  const servicesLinks = [
    {
      name: "Documentation",
      link: "/",
    },
    {
      name: "Design",
      link: "/",
    },
    {
      name: "Themes",
      link: "/",
    },
    {
      name: "Illustrations",
      link: "/",
    },
    {
      name: "UI Kit",
      link: "/",
    },
  ];
  const companyLinks = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Terms",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
  ];

  const moreLinks =[
    {
      name: "Documentation",
      link: "/",
    },
    {
      name: "License",
      link: "/",
    },
    {
      name: "Change Log",
      link: "/",
    },
  ]
  return (
    <>
      <div className="flex justify-center md:mx-[106px] w-[1140px]">
        <div className="flex flex-col-reverse sm:flex-row   m-10">
          <div className=" text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <img src={mainLogo} alt="" width={80} />
            </div>
            <p className="py-8 text-[#5A7184]">
              Build a modern and creative
              <br /> website with crealand
            </p>
            <div className="flex justify-center">
              <img src={circle} alt="" width={30} className="mx-1" />
              <img src={circle} alt="" width={30} className="mx-1" />
              <img src={circle} alt="" width={30} className="mx-1" />
              <img src={circle} alt="" width={30} className="mx-1" />
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-14    md:grid-cols-4 md:grid-flow-row sm:grid-cols-2 sm:grid-flow-row sm:gap-12 sm:ml-32">
            <div className="flex flex-col">
              <h1 className="text-[#183B56] mb-4 text-lg leading-[24.79px] font-bold font-sans">
                Product
              </h1>
              {productLink.map((productLink) => {
                return (
                  <Link
                    to={productLink.link}
                    className="text-[#183B56] mb-4 text-[16px]   leading-[21.79px] font-normal font-sans py-1"
                  >
                    {productLink.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#183B56] mb-4 text-[16px] py-1 leading-[24.79px] font-bold font-sans">
                Services
              </h1>
              {servicesLinks.map((servicesLink) => {
                return (
                  <Link
                    to={servicesLink.link}
                    className="text-[#183B56] mb-4 text-[16px]  leading-[24.79px] font-normal font-sans py-1"
                  >
                    {servicesLink.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#183B56] mb-4 py-1 text-lg font-bold font-sans leading-[24.79px]">
                Company
              </h1>
              {companyLinks.map((companyLink) => {
                return (
                  <Link
                    to={companyLink.link}
                    className="text-[#183B56] mb-4 py-1 text-[16px]  leading-[21.79px] font-normal font-sans"
                  >
                    {companyLink.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#183B56] mb-4 py-1 text-lg font-bold font-sans">
                More
              </h1>
              {moreLinks.map((moreLink) => {
                return (
                  <Link
                    to={moreLink.link}
                    className="text-[#183B56] mb-4 py-1 text-base font-normal font-sans"
                  >
                    {moreLink.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
