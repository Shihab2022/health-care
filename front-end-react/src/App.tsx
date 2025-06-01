/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { Provider } from "react-redux";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from './routes';

import { store } from './store';

const router = createBrowserRouter([{ path: "*", Component: Router }]);
function App() {
  return (
    <>
        <Provider store={store}>
             <RouterProvider router={router} />
     </Provider>
    </>
  );
}

export default App;
