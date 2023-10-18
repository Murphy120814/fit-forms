import { createBrowserRouter } from "react-router-dom";
import App from "../component/App";
import { Home, Calender, Calculator } from "../component/index";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
    ],
  },
]);


