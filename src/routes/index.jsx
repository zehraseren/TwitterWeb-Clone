import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: "Anasayfa",
  },
  {
    path: "/explore",
    element: "Keşfet",
  },
  {
    path: "/notifications",
    element: "Bildirimler",
  },
]);

export default routes;
