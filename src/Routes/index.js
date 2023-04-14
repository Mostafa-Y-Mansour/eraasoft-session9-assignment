import RootLayout from "../layouts/RootLayout";
import AdminLayout from "../layouts/AdminLayout";
import About from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Users from "../pages/UsersPage";
import UserPage from "../pages/UserPage";

export const RootRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/admin",
        element: <AdminLayout />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/users/:id",
        element: <UserPage />,
      },
    ],
  },
];
