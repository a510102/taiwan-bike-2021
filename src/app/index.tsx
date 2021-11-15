import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Outlet, 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { Home } from './pages/Home/Loadable';
import { store } from '../store';

function App() {
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
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
};


const Layout = () => {
  return (
     <div className="App">
      <header className="App-header">
        Bike
      </header>
      <Outlet />
    </div>
  )
}
export default App;
