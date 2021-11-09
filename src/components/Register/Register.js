import React from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as FcIcons from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";

const Register = () => {
   const location = useLocation();
   const history = useHistory();
   const { signInUsingGoogle, isLoading, registerUserEmail } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const redirect_uri = location?.state?.form || "/";

   const handleGoogleSignIn = () => {
      signInUsingGoogle(history, redirect_uri);
   };
   const onSubmit = (data) => {
      console.log(data);
      registerUserEmail(
         data.name,
         data.email,
         data.password,
         history,
         redirect_uri
      );
   };
   return (
      <div className="container-fluid form_wrapper">
         <h3 className="sub_heading">Please Create an Account</h3>
         <h1 className="heading">Register Form</h1>
         {/* {authError && <div style={{ color: "red" }}></div>} */}
         {!isLoading && (
            <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
               <div className="input_field">
                  <span>Your Name</span>
                  <input
                     type="text"
                     {...register("displayName", { required: true })}
                  />
                  {errors.displayName && (
                     <span className="error">Name is required</span>
                  )}
               </div>
               <div className="input_field">
                  <span>Your Email</span>
                  <input
                     type="email"
                     {...register("email", { required: true })}
                  />
                  {errors.email && (
                     <span className="error">Email is required</span>
                  )}
               </div>

               <div className="input_field">
                  <span>Your Password</span>
                  <input
                     type="password"
                     {...register("password", { required: true })}
                  />

                  {errors.password && (
                     <span className="error">Give password</span>
                  )}
               </div>

               <div className="input_field">
                  <span>Re-enter Password</span>
                  <input
                     type="password"
                     {...register("checkPassword", { required: false })}
                  />

                  {errors.checkPassword && (
                     <span className="error">Give password again</span>
                  )}
               </div>

               <input
                  type="submit"
                  className="box_btn"
                  value="Create Account"
               />
               <p>
                  already have an account? <Link to="/login">Login now</Link>
               </p>
            </form>
         )}
         <div className="other_login">
            <h3>Sign in via</h3>
            {!isLoading && (
               <button onClick={handleGoogleSignIn}>
                  {" "}
                  <span className="login_icon">
                     <FcIcons.FcGoogle />{" "}
                  </span>
               </button>
            )}
            {isLoading && (
               <Spinner
                  animation="border"
                  variant="info"
                  style={{ width: "4rem", height: "4rem", fontSize: "2rem" }}
               />
            )}
         </div>
      </div>
   );
};

export default Register;
