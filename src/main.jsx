import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import "./assets/css/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
