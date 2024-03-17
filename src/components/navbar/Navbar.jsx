import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import CloseIcon from "remixicon-react/CloseFillIcon";

function Navbar() {
  // window.onload = () => {
  //   const navToggle = document.getElementById("nav-toggle");
  //   const navList = document.getElementById("nav-menu");
  //   const navLinks = document.querySelectorAll(".nav__link");

  //   const hideMenu = function () {
  //     navList.classList.remove("show-menu");
  //   };

  //   const linkAction = () => {
  //     hideMenu();
  //   };

  //   navLinks.forEach((link) => link.addEventListener("click", linkAction));

  //   document.addEventListener("keydown", (e) => {
  //     if (e.key === "Escape") {
  //       hideMenu();
  //     }
  //   });

  //   document.addEventListener("click", (e) => {
  //     if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
  //       hideMenu();
  //     }
  //   });
  // };

  const setNewIcon = () => {
    document.querySelector(".nav__download-image").src =
      "/icons/catalogue button/icon2.svg";
  };

  const setOldIcon = () => {
    document.querySelector(".nav__download-image").src =
      "/icons/catalogue button/icon1.svg";
  };

  return (
    <>
      <header id="header" className="header">
        <nav id="nav" className="nav">
          <div
            onClick={() => {
              const navList = document.getElementById("nav-menu");
              navList.classList.add("show-menu");
            }}
            id="nav-toggle"
            className="nav__toggle"
          >
            <img src="/icons/menu icon/menu line horizontal.svg" alt="" />
          </div>
          <div className="nav__logo-container">
            <Link to="/" className="nav__logo-link">
              <img src="/images/logo/لوگو سورنا با حروفِ فارسی.svg" alt="" />
            </Link>
          </div>
          <div className="nav__menu" id="nav-menu">
            <div className="nav__close-icon-container " id="close-icon">
              <CloseIcon
                onClick={() => {
                  const navList = document.getElementById("nav-menu");
                  navList.classList.remove("show-menu");
                }}
                cursor="pointer"
              />
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    const navList = document.getElementById("nav-menu");
                    navList.classList.remove("show-menu");
                  }}
                  to="/"
                  className="nav__link"
                >
                  خانه
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    const navList = document.getElementById("nav-menu");
                    navList.classList.remove("show-menu");
                  }}
                  to="media-list"
                  className="nav__link"
                >
                  رسانه ها
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    const navList = document.getElementById("nav-menu");
                    navList.classList.remove("show-menu");
                  }}
                  to="services"
                  className="nav__link"
                >
                  خدمات
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    const navList = document.getElementById("nav-menu");
                    navList.classList.remove("show-menu");
                  }}
                  to="call-us"
                  className="nav__link"
                >
                  تماس با ما
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    const navList = document.getElementById("nav-menu");
                    navList.classList.remove("show-menu");
                  }}
                  to="about-us"
                  className="nav__link"
                >
                  درباره ما
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            onMouseEnter={setNewIcon}
            onMouseLeave={setOldIcon}
            className="nav__download"
          >
            <a
              href="/pdf/کاتالوگ پل ها و بیلبوردهای کانون سورنا مهر البرز.pdf"
              className="nav__download-content"
            >
              <img
                src="/icons/catalogue button/icon1.svg"
                alt=""
                className="nav__download-image"
              />
              <span>دانلودِ کاتالوگ</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
