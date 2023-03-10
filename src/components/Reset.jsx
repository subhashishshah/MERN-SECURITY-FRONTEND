import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../Helperfunctions/validate";
const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {},
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen ">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter a new Password
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                {...formik.getFieldProps("password")}
                type="text"
                placeholder="Password"
              />
              <input
                className={styles.textbox}
                {...formik.getFieldProps("confirmPassword")}
                type="text"
                placeholder="Confirm Password"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
