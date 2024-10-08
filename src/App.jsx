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

import { Helmet } from 'react-helmet';

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
                content="خانه بیلبورد, اجاره بیلبورد تبلیغاتی "
              />
              <title>خانه بیلبورد - اجاره بیلبورد تبلیغاتی</title>
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
              <title>خانه بیلبورد - لیست رسانه ها</title>
              <meta charSet="utf-8" />
              <meta
                name="description"
                content="لیست رسانه ها کانون تبلیغاتی سورنا"
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
              <title>خانه بیلبورد - بیلبوردهای محور قزوین کرج</title>
              <meta
                name="description"
                content="لیست بیلبوردها محور قزوین کرج"
              />
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
              <title>خانه بیلبورد - لیست پل های محور کرج قزوین</title>
              <meta name="description" content="لیست پل های محور کرج قزوین" />
            </Helmet>
          </>
        }
      />

      <Route
        path="/media-list/bridges-ghazvin/:bridgesGhazvinId"
        element={<BridgesGhazvinDetailPage />}
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
