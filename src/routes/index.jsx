import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import MainLayout from "../layouts/main";
import Explore from "~/pages/explore";
import Notifications from "~/pages/notifications";
import Messages from "../pages/messages";
import Lists from "../pages/lists";
import Communities from "../pages/communities";
import Profile from "../pages/profile";
import NotFound from "../pages/notFound";
import Settings from "../pages/settings";

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
    ],
  },
  {
    path: "messages/",
    element: <Messages />,
  },
  {
    path: "settings/",
    element: <Settings />,
    children: [
      {
        index: true,
        element: <Settings />,
      },
      {
        path: "account",
        element: <Explore />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
