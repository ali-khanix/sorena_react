import { NavLink } from 'react-router-dom';
import './FooterStyle.css';

import { FiMapPin } from 'react-icons/fi';
import { Button } from '@mui/material';
import { PlaceOutlined } from '@mui/icons-material';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__nav-container">
          <div className="footer__nav-logo-container">
            <img
              src="/images/logo/Logo Sorena_white.svg"
              alt=""
              className="footer__nav-logo"
            />
          </div>

          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Button
                  variant="outlined"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'var(--gray-700)',
                    },
                  }}
                  style={{
                    fontFamily: 'iran yekan',
                    color: 'white',
                    fontSize: '1.4rem',
                    padding: '1rem 1rem',
                    border: '0.5px solid white',
                  }}
                  href="/pdf/کاتالوگ پل ها و بیلبوردهای کانون سورنا مهر البرز.pdf"
                >
                  <div className="mui-content">دانلود کاتالوگ</div>
                </Button>
              </li>

              <li className="footer__nav-item">
                <NavLink className="footer__nav-link" to="/">
                  خانه
                </NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink className="footer__nav-link" to="/media-list">
                  رسانه ها
                </NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink className="footer__nav-link" to="/services">
                  خدمات
                </NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink className="footer__nav-link" to="/about-us">
                  درباره ما
                </NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink className="footer__nav-link" to="/call-us">
                  تماس با ما
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__address">
          <div className="footer__address-karaj">
            <h4>دفتر کرج:</h4>
            <div className="footer__address-location">
              <PlaceOutlined
                sx={{
                  color: 'var(--color-button)',
                  fontSize: '3rem',
                }}
              />
              <p>کرج، آزادگان، برج یادمان، بلوک آ، طبقه 7، واحد آ 1</p>
            </div>

            <div className="footer__address-number">
              <PhoneEnabledOutlinedIcon
                sx={{
                  fontSize: '3rem',
                  color: 'var(--color-button)',
                }}
              />
              <p>026-34205140-41</p>
            </div>
          </div>

          <div
            style={{
              marginTop: '3rem',
            }}
            className="footer__address-ghazvin"
          >
            <h4>دفتر قزوین:</h4>
            <div className="footer__address-location">
              <PlaceOutlined
                sx={{
                  color: 'var(--color-button)',
                  fontSize: '3rem',
                }}
              />
              <p>قزوین، میدان الموت</p>
            </div>

            <div className="footer__address-number">
              <PhoneEnabledOutlinedIcon
                sx={{
                  fontSize: '3rem',
                  color: 'var(--color-button)',
                }}
              />
              <p>026-34205140-41</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
