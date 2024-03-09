import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import CloseIcon from 'remixicon-react/CloseFillIcon';

function Navbar() {
  const navLinks = document.querySelectorAll('.nav__link');
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');

  const showMenu = function () {
    navMenu?.classList.add('show-menu');
  };

  const hideMenu = function () {
    navMenu?.classList.remove('show-menu');
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('show-menu');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu?.contains(e.target) && !navToggle?.contains(e.target)) {
      hideMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e?.key === 'Escape') {
      hideMenu();
    }
  });

  const setNewIcon = () => {
    document.querySelector('.nav__download-image').src =
      '/src/assets/public/icons/catalogue button/icon2.svg';
  };

  const setOldIcon = () => {
    document.querySelector('.nav__download-image').src =
      '/src/assets/public/icons/catalogue button/icon1.svg';
  };

  return (
    <header className="header">
      <nav className="nav">
        <div onClick={showMenu} className="nav__toggle">
          <img
            src="./../public/icons/menu icon/menu line horizontal.svg"
            alt=""
          />
        </div>
        <div className="nav__logo-container">
          <Link to="/" className="nav__logo-link">
            <img
              src="./../public/images/logo/لوگو سورنا با حروفِ فارسی.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="nav__menu" id="nav-menu">
          <CloseIcon onClick={hideMenu} className="nav__close-icon" />
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                خانه
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/لیست-رسانه-ها" className="nav__link">
                رسانه ها
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/خدمات" className="nav__link">
                خدمات
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/تماس-با-ما" className="nav__link">
                تماس با ما
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/درباره-ما" className="nav__link">
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
            href="/src/assets/public/pdf/کاتالوگ پل ها و بیلبوردهای کانون سورنا مهر البرز.pdf"
            className="nav__download-content"
          >
            <img
              src="/src/assets/public/icons/catalogue button/icon1.svg"
              alt=""
              className="nav__download-image"
            />
            <span>دانلودِ کاتالوگ</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
