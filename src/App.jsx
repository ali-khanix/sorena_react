import RootLayout from './layouts/RootLayout';
import './App.css';
import './data/MediaData';

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

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
      <Route index element={<Home />} />

      <Route path="/media-list" element={<MediaListLayout />} />

      <Route
        path="/media-list/billboards-ghazvin"
        element={<BillobardsGhazvin />}
      />
      <Route
        path="/media-list/billboards-ghazvin/:ghazvinId"
        element={<BillboardsGhazvinDetailPage />}
      />

      <Route path="/media-list/bridges-ghazvin" element={<BridgesGhazvin />} />
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

      <Route path="/services" element={<Services />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/call-us" element={<CallUs />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
