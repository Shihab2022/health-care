
import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login";
import HomePageOne from "../pages/home";
import Register from "../pages/register";
import Page404 from "../pages/404";
export default function Router() {
  return useRoutes([
    {  path: "/", element:  <HomePageOne /> },
    {  path: "/login", element: <LoginPage /> },
    {  path: "/register", element: <Register /> },
    { path: "*", element: <Page404 /> },
  ]);
}