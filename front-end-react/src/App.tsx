/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import HomePageOne from './pages/home';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from './routes';

const router = createBrowserRouter([{ path: "*", Component: Router }]);
function App() {
  return (
    <>
        {/* <Provider store={store}></Provider> */}
             <RouterProvider router={router} />
     
    </>
  );
}

export default App;
