import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/mainLogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const headerLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Landings",
      link: "/",
    },
    {
      name: "Pages",
      link: "/",
    },
    {
      name: "Docs",
      link: "/",
    },
    {
      name: "Help",
      link: "/",
    },
  ];

  return (
    <div className="flex justify-center">
      <nav className="flex justify-between  py-6 w-[1140px] m-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="title">
            <img src={mainLogo} alt="" width={80} />
          </Link>
          <div
            className="menu hidden absolute top-7 right-2 flex-col justify-between w-7 h-5 m-5"
            onClick={handleToggleMenu}
          >
            <span className="h-0.5 w-full bg-black rounded"></span>
            <span className="h-0.5 w-full bg-black rounded"></span>
            <span className="h-0.5 w-full bg-black rounded"></span>
          </div>
        </div>
        <ul className={`sm:flex ${menuOpen ? "flex list-none" : "hidden"}`}>
          {headerLink.map((menu) => {
            return (
              <li key={menu.name}>
                <Link
                  to={menu.link}
                  className="block no-underline p-2 mx-2 "
                  onClick={handleToggleMenu}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to="/search"
              className="block no-underline rounded-md py-1 mt-1  text-[#1565D8] border-2 border-[#1565D8] px-5"
              onClick={handleToggleMenu}
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
