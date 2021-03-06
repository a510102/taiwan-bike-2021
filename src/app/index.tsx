import { useEffect } from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Outlet, 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { Home } from './pages/Home/Loadable';
import { UBikeStation } from './pages/UBikeStation/Loadable';
import { BikeRoad } from './pages/BikeRoad/Loadable';
import { ScenicSpotAndFood } from './pages/ScenicSpotANdFood/Loadable';
import { NotFound } from './pages/NotFound/Loadable';
import { store } from '../store';
import { useMedia } from '../helpers';

function App() {
  const { isMobile } = useMedia();
  const countViewHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    if (isMobile) {
      countViewHeight();
      window.addEventListener('resize', () => countViewHeight());
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('resize', () => countViewHeight());
      }
    }
  }, [isMobile]);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="taiwan trip bike" />
      </Helmet>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="bikeStop" element={<UBikeStation />} />
              <Route path="bikeRoad/*" element={<BikeRoad />} />
              <Route path="scenicSpotAndFood/*" element={<ScenicSpotAndFood />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
};


const Layout = () => {
  return (
     <div className="App">
      <Outlet />
    </div>
  )
}
export default App;
