import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";
import Explore from "~/pages/explore";
import Notifications from "~/pages/notifications";
import Messages from "../pages/messages";
import Lists from "../pages/lists";
import Communities from "../pages/communities";
import Profile from "../pages/profile";
import NotFound from "../pages/notFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: ":slug",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },  
]);

export default routes;
