import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import "./assets/css/tailwind.css";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
