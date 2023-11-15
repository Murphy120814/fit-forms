import React, { useEffect } from "react";
import {
  Navbar,
  Footer,
  Home,
  Calender,
  Calculator,
  SignIn,
  ForgotPassword,
  PersonalInfo,
  TalkToCoach,
} from "./index";
import { useDispatch } from "react-redux";
import { isDark } from "../slices/themeSlice";

import toggleTheme from "../utils/toggle";
import { Outlet, createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/home",
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
      {
        path: "/talkToCoach",
        element: <TalkToCoach />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/personalInfo",
        element: <PersonalInfo />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    function dispatchThemeAction() {
      return dispatch(
        isDark(Boolean(localStorage.getItem("color-theme") === "dark"))
      );
    }
    toggleTheme(dispatchThemeAction);
  }, []);

  return (
    <div className="bg-white dark:bg-midnightBlack scroll-smooth">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
