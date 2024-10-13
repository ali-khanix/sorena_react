import RootLayout from './layouts/RootLayout';
import './App.css';
import './data/MediaData';
import './index.css';

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';

// Pages
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Services from './pages/services/Services';
import CallUs from './pages/callus/CallUs';
import MediaListLayout from './layouts/MediaListLayout';
import NotFound from './pages/NotFound';

// Sub Pages
import BillobardsGhazvin from './pages/media_list/billboards_ghazvin/BillboardsGhazvin';
import BridgesJajrud from './pages/media_list/bridges_jajrud/BridgesJajrud';
import BridgesGhazvin from './pages/media_list/Bridges_ghazvin/BridgesGhazvin';
import BillBoardsGhom from './pages/media_list/billobards_ghom/BillBoardsGhom';

// Sub Detail Pages
import BillboardsGhazvinDetailPage from './pages/media_list/billboards_ghazvin/BillboardsGhazvinDetailPage';
import BridgesGhazvinDetailPage from './pages/media_list/Bridges_ghazvin/BridgesGhazvinDetailPage';
import BillboardsGhomDetailPage from './pages/media_list/billobards_ghom/BillboardsGhomDetailPage';
import BridgesJajrudDetailPage from './pages/media_list/bridges_jajrud/BridgesJajrudDetailPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <>
            <Home />
            <Helmet>
              <meta
                name="keywords"
                content="بیلبورد, اجاره بیلبورد تبلیغاتی "
              />
              <title>خانه بیلبورد - اجاره بیلبوردهای تبلیغاتی</title>
              <meta
                name="description"
                content="ما به شما مشاوره میدهیم با توجه به شغل و خدماتِ شما، مناسب ترین
            فضاهایِ تبلیغاتی برای اجاره بلیبورد تبلیغاتی را در بهترین لوکیشن ها را انتخاب کنید"
              />
              <meta
                property="og:title"
                content="خانه بیلبورد - اجاره بیلبورد تبلیغاتی"
              />
              <meta
                property="description"
                content="ما به شما مشاوره میدهیم با توجه به شغل و خدماتِ شما، مناسب ترین
            فضاهایِ تبلیغاتی برای اجاره بلیبورد تبلیغاتی را در بهترین لوکیشن ها را انتخاب کنید"
              />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://sorenairan.com" />
              <meta
                property="og:image"
                content="./../public/images/hero/hero1.webp"
              />
            </Helmet>
          </>
        }
      />

      <Route
        path="/media-list"
        element={
          <>
            <MediaListLayout />
            <Helmet>
              <meta name="keywords" content="بیلبورد، بیلبوردهای تبلیغاتی" />
              <title>خانه بیلبورد - لیست بیلبودرهای تبلیغاتی</title>
              <meta charSet="utf-8" />
              <meta
                name="description"
                content="لیست تمامی رسانه ها، بیلبورد ها و بیلبوردهای تبلیغاتی در محورهای اتوبان کرج قزوین و محور قم و عرشه پل در محور جاجرود را میتوانید مشاهده کنید"
              />
            </Helmet>
          </>
        }
      />

      <Route
        path="/media-list/billboards-ghazvin"
        element={
          <>
            <BillobardsGhazvin />
            <Helmet>
              <meta charSet="utf-8" />
              <meta name="keywords" content="بلیبورد، بیلبوردهای تبلیغاتی" />
              <title>
                خانه بیلبورد - لیست بیلبوردهای تبلیغاتی محور قزوین کرج
              </title>
              <meta
                name="description"
                content="لیست بیلبوردهای تبلیغاتی محور قزوین کرج"
              />
            </Helmet>
          </>
        }
      />

      <Route
        path="/media-list/billboards-ghazvin/:billboardsGhazvinId"
        element={
          <>
            <BillboardsGhazvinDetailPage />
            <Helmet>
              <meta charset="utf-8" />
              <title>خانه بیلبورد - جزئیات بیلبوردهای محور آبیک تا قزوین</title>
            </Helmet>
          </>
        }
      />

      <Route
        path="/media-list/bridges-ghazvin"
        element={
          <>
            <BridgesGhazvin />
            <Helmet>
              <meta charSet="utf-8" />
              <meta
                name="keywords"
                content="تبلیغات، تبلیغات بر روی پل، پل تبلیغاتی"
              />
              <title>خانه بیلبورد - لیست پل و تبلیغات بر روی پل</title>
              <meta name="description" content="لیست پل های محور کرج قزوین" />
            </Helmet>
          </>
        }
      />

      <Route
        path="/media-list/bridges-ghazvin/:bridgesGhazvinId"
        element={
          <>
            <BridgesGhazvinDetailPage />
            <Helmet>
              <meta charset="uft-8" />
              <title>خانه بیلبورد - جزئیات پل محور قزوین</title>
            </Helmet>
          </>
        }
      />

      <Route path="/media-list/billboards-ghom" element={<BillBoardsGhom />} />
      <Route
        path="/media-list/billboards-ghom/:billboardsGhomId"
        element={<BillboardsGhomDetailPage />}
      />

      <Route path="/media-list/bridges-jajrud" element={<BridgesJajrud />} />
      <Route
        path="/media-list/bridges-jajrud/:bridgesJajrudId"
        element={<BridgesJajrudDetailPage />}
      />

      <Route
        path="/media-list/bridges-jajrud/:billboardsGhazvinId"
        element={<BillboardsGhazvinDetailPage />}
      />

      <Route
        path="/services"
        element={
          <>
            <Services />
            <Helmet>
              <meta charSet="utf-8" />
              <title>خانه بیلبورد - خدمات</title>
              <meta
                name="description"
                content="در آژانس تبلیغاتی سورنا، طراحی و هویت بصری به عنوان پایه‌ای اساسی برای شناخت برند شما مورد توجه قرار می‌گیرد. با استفاده از دانش و تجربه ما در زمینه طراحی، ما به شما کمک می‌کنیم تا هویت بصری متمایز و جذابی برای برند خود ایجاد کنید."
              />
            </Helmet>
          </>
        }
      />

      <Route
        path="/about-us"
        element={
          <>
            <AboutUs />
            <Helmet>
              <meta charSet="utf-8" />
              <title>خانه بیلبورد - درباره ما</title>
              <meta
                name="description"
                content="از همه مهم تر ما تجسم تخیلات ذهنی را به تصویر می كشیم . سورنا مهر البرز یكی از طراحان اصلی کمپین های تبلیغاتی در ایران است كه عملكـردش شامل مشـاوره و برنامـه ریزی تبلیـغاتی میباشد. این کانون با دارا بودنِ بیش از 5 هزار متر فضای تبلیغاتی که شاملِ عرشه پل و بیلبوردهای تبلیغاتی در محور های مواصلاتی کل کشور میباشد، آماده ی خدمات رسانی و ارائه کمپین های تبلیغاتی به شما عزیزان میباشد."
              />
            </Helmet>
          </>
        }
      />

      <Route
        path="/call-us"
        element={
          <>
            <CallUs />
            <Helmet>
              <meta charSet="utf-8" />
              <title>خانه بیلبورد - تماس با ما</title>
              <meta name="description" content="" />
            </Helmet>
          </>
        }
      />

      <Route
        path="*"
        element={
          <>
            <NotFound />
            <Helmet>
              <title>صفحه پیدا نشد!</title>
            </Helmet>
          </>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
