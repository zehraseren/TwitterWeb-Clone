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
import YourAccount from "../pages/settings/components/YourAccount";
import Monetization from "../pages/settings/components/Monetization";
import ManageSubscriptions from "../pages/settings/components/ManageSubscriptions";
import Security from "../pages/settings/components/Security";
import PrivacySafety from "../pages/settings/components/PrivacySafety";
import NotificationSettings from "../pages/settings/components/NotificationSettings";
import Accessibility from "../pages/settings/components/Accessibility";
import AdditionalResources from "../pages/settings/components/AdditionalResources";

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
        element: <YourAccount/>
      },
      {
        path: "monetization",
        element: <Monetization/>
      },
      {
        path: "i/premium_sign_up",
        element: <YourAccount/>
      },
      {
        path: "manage_subscriptions",
        element: <ManageSubscriptions/>
      },
      {
        path: "security_and_account_access",
        element: <Security/>
      },
      {
        path: "privacy_and_safety",
        element: <PrivacySafety/>
      },
      {
        path: "notifications",
        element: <NotificationSettings/>
      },
      {
        path: "accessibility_display_and_languages",
        element: <Accessibility/>
      },
      {
        path: "about",
        element: <AdditionalResources/>
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
