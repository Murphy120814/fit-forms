import React, { useEffect } from "react";
import NavLogo from "./NavLogo";
import DarkModeToggle from "./DarkModeToggle";
import SignInSignUp from "./SignInSignUp";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUserInfo, removeUserInfo } from "../../slices/userInfoSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/fireBaseSDK";
import SignOut from "./SignOut";
import { setIsAuthenticated } from "../../slices/authSlice";
import pandaAvatar from "../../assets/panda-bear.png";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSingInPageOpen, isAuthenticated } = useSelector(
    (store) => store.auth
  );
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log(user);
        const { uid, email, displayName } = user;

        dispatch(addUserInfo({ uid, email, displayName }));
        dispatch(setIsAuthenticated(!isAuthenticated));
        navigate("/home");
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.'
        dispatch(removeUserInfo());
        dispatch(setIsAuthenticated(!isAuthenticated));
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
      <nav
        id="nav"
        className="bg-white dark:bg-[#1F1E23] fixed w-full z-20 h-auto top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md md:shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLogo />
          <div className="flex md:order-2 items-center md:gap-3">
            {!isAuthenticated ? (
              <div>{!isSingInPageOpen ? <SignInSignUp /> : null}</div>
            ) : (
              <div className="flex items-center gap-2">
                {/* <Link to="/personalInfo">
                  <img
                    className="h-10 w-200 rounded-full cursor-pointer"
                    src={pandaAvatar}
                    alt="userProfile"></img>
                </Link> */}

                <SignOut handleSignOut={handleSignOut} />
              </div>
            )}

            {/* (
              <SignOut handleSignOut={handleSignOut} />
            )} */}
            <DarkModeToggle />
          </div>
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
            {isAuthenticated && <NavLinks />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
