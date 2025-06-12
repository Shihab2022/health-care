import { useRoutes } from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePageOne from '../pages/home';
import Register from '../pages/register';
import Page404 from '../pages/404';
import CreateDoctor from '../pages/doctor/createDoctor';
import CreateSpecialties from '../pages/doctor/createSpecialties';
import CreateSchedule from '../pages/doctor/createSchedule';
export default function Router() {
  return useRoutes([
    {
      path: '/create',
      children: [
        {
          path: '/create/doctor',
          element: <CreateDoctor />,
        },
        {
          path: '/create/specialties',
          element: <CreateSpecialties />,
        },
        {
          path: '/create/schedule',
          element: <CreateSchedule />,
        },
      ],
    },
    { path: '/', element: <HomePageOne /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <Page404 /> },
  ]);
}
