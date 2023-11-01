import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../utils/fireBaseSDK";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUserInfo } from "../slices/userInfoSlice";

function useFormValidation() {
  const dispatch = useDispatch();
  const isWantToCreateAccount = useSelector(
    (store) => store.auth.isWantToCreateAccount
  );
  const getCharacterValidationError = (value) => {
    return `Your password must have at least 1 ${value} character`;
  };
  const formik = useFormik({
    initialValues: {
      name: "User",
      email: "",
      passWord: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name Required"),
      email: Yup.string()
        .email("Email must be in valid Format")
        .required("Email Required"),
      passWord: Yup.string()
        .required("Please enter a password")
        // check minimum characters
        .min(6, "Password must have at least 8 characters")
        // different error messages for different requirements
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    }),

    onSubmit: (values) => {
      if (isWantToCreateAccount) {
        createUserWithEmailAndPassword(auth, values.email, values.passWord)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: values.name,
            })
              .then(() => {
                const { uid, email, displayName } = user;
                dispatch(addUserInfo({ uid, email, displayName }));
              })
              .catch((error) => {
                // An error occurred
                // ...
              });

            // navigate("/browse");
            // // ...
            // console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ":" + errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, values.email, values.passWord)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // const { uid, email, displayName } = user;
            // dispatch(addUserInfo({ uid, email, displayName }));
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ":" + errorMessage);
          });
      }
    },
  });

  return formik;
}

export default useFormValidation;
