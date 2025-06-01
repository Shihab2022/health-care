
import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "../pages/login";
import HomePageOne from "../pages/home";
import Register from "../pages/register";
export default function Router() {
  return useRoutes([
    // {
    //   path: "/dashboard",
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: (
    //         <PrivateRoute>
    //           <SpaticMainLayout>
    //             <Home />
    //           </SpaticMainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/dashboard/:tabName",
    //       element: (
    //         <PrivateRoute>
    //           <SpaticMainLayout>
    //             <Home />
    //           </SpaticMainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/dashboard/sites",
    //       element: (
    //         <PublicRoute>
    //           <MainLayout hideSidebar hideToggle hidehelpIcon>
    //             <Sites />
    //           </MainLayout>
    //         </PublicRoute>
    //       ),
    //     },
    //     {
    //       path: "/dashboard/sites/:id",
    //       element: (
    //         <PublicRoute>
    //           <MainLayout hideSidebar hideToggle hidehelpIcon>
    //             <SiteDetails />
    //           </MainLayout>
    //         </PublicRoute>
    //       ),
    //     },
    //     {
    //       path: "/dashboard/sites/:id",
    //       element: (
    //         <PrivateRoute>
    //           <MainLayout name="Sites" hideSidebar>
    //             <SiteDetails />
    //           </MainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/site",
    //   children: [
    //     {
    //       path: "/site/recommendations",
    //       element: (
    //         <PrivateRoute>
    //           <MainLayout hideSidebar>
    //             <SiteRecommendations />
    //           </MainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/site/analysis",
    //       element: (
    //         <PrivateRoute>
    //           <SpaticMainLayout headerSectionName="placeSelector">
    //             <SiteAnalysis />
    //           </SpaticMainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/site/analysis/:id",
    //       element: (
    //         <PrivateRoute>
    //           <SpaticMainLayout headerSectionName="placeSelector">
    //             <SiteAnalysis />
    //           </SpaticMainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/visits",
    //   children: [
    //     {
    //       path: "/visits/analysis",
    //       element: (
    //         <PrivateRoute>
    //           <Footfall />
    //         </PrivateRoute>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/account",
    //   children: [
    //     {
    //       path: "/account/password",
    //       element: (
    //         <PrivateRoute>
    //           <SpaticMainLayout>
    //             {" "}
    //             <PasswordChange />
    //           </SpaticMainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/account/profile",
    //       element: (
    //         <PrivateRoute>
    //           <SpaticMainLayout>
    //             <Account />
    //           </SpaticMainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/account/manage-users",
    //       element: (
    //         <PrivateRoute>
    //           <SpaticMainLayout>
    //             <ManageUsers />
    //           </SpaticMainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/map",
    //   children: [
    //     {
    //       path: "view/:mapId",
    //       element: (
    //         <PrivateRoute>
    //           <MainLayout
    //             headerSectionName="dataSetHeader"
    //             name="View Map"
    //             hideSidebar
    //             hideSubheader
    //           >
    //             <ViewMap />
    //           </MainLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "public/:mapId",
    //       element: (
    //         <PublicRoute>
    //           <ViewMap isPublic={true} />
    //         </PublicRoute>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/properties",
    //   children: [
    //     {
    //       path: "/properties",
    //       element: (
    //         <PublicRoute>
    //           <MainLayout hideSidebar hideSubheader hideToggle hidehelpIcon>
    //             <HomeProperties />
    //           </MainLayout>
    //         </PublicRoute>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/report",
    //   children: [
    //     {
    //       path: "/report/sample",
    //       element: (
    //         <PublicLayout>
    //           <Report isSample={true} />
    //         </PublicLayout>
    //       ),
    //     },
    //     {
    //       path: "/report/analysis",
    //       element: (
    //         <PrivateRoute>
    //           <PublicLayout>
    //             <Report generate />
    //           </PublicLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/report/analysis/:siteId",
    //       element: (
    //         <PrivateRoute>
    //           <PublicLayout>
    //             <Report generatedReport />
    //           </PublicLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/report/compare",
    //       element: (
    //         <PrivateRoute>
    //           <PublicLayout>
    //             <Report compare />
    //           </PublicLayout>
    //         </PrivateRoute>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/catchment",
    //   children: [
    //     {
    //       path: "/catchment/:siteId",
    //       element: (
    //         <PrivateRoute>
    //           <Catchment />
    //         </PrivateRoute>
    //       ),
    //     },
    //     {
    //       path: "/catchment/sample/:siteId",
    //       element: (
    //         <PrivateRoute>
    //           <Catchment isSample />
    //         </PrivateRoute>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/brand-fit",
    //   element: (
    //     <PrivateRoute>
    //       <BrandFit />
    //     </PrivateRoute>
    //   ),
    // },
    // {
    //   path: "/autocomplete",
    //   element: (
    //     <PrivateRoute>
    //       <Autocomplete />
    //     </PrivateRoute>
    //   ),
    // },
    // {
    //   path: "/catchment-stores",
    //   element: (
    //     <PrivateRoute>
    //       <CatchmentStores />
    //     </PrivateRoute>
    //   ),
    // },
    // {
    //   path: "/client-admin",
    //   element: (
    //     <PrivateRoute>
    //       <SpaticMainLayout>
    //         <ClientAdmin />
    //       </SpaticMainLayout>
    //     </PrivateRoute>
    //   ),
    // },
    // {
    //   path: "/model-training",
    //   element: (
    //     <PrivateRoute>
    //       <SpaticMainLayout>
    //         <ModelTraining />
    //       </SpaticMainLayout>
    //     </PrivateRoute>
    //   ),
    // },
    // {
    //   path: "/smart-locate",
    //   element: (
    //     <PrivateRoute>
    //       <SpaticMainLayout>
    //         <ModelTuning />
    //       </SpaticMainLayout>
    //     </PrivateRoute>
    //   ),
    // },
    // {
    //   path: "/model-tuning/:id",
    //   element: (
    //     <PrivateRoute>
    //       <SpaticMainLayout>
    //         <ModelTuning isProjectTesting />
    //       </SpaticMainLayout>
    //     </PrivateRoute>
    //   ),
    // },
    // {
    //   path: "/",
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     { path: "/", element: <Navigate to="/dashboard" /> },
    //     { path: "login", element: <Login /> },
    //     { path: "register", element: <Signup /> },
    //     { path: "forgot-password", element: <ForgotPassword /> },
    //     { path: "reset-password", element: <ResetPassword /> },
    //     { path: "confirm-account", element: <ConfirmAccount /> },
    //     { path: "accept-invite", element: <AcceptInvite /> },
    //     { path: "404", element: <NotFound /> },
    //     { path: "login/enact/user", element: <EnactUser /> },
    //     { path: "*", element: <Navigate to="/404" /> },
    //   ],
    // },
    {  path: "/", element:  <HomePageOne /> },
    {  path: "/login", element: <LoginPage /> },
    {  path: "/register", element: <Register /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}