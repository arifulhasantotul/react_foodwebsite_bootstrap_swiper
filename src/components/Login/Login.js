import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import * as FcIcons from "react-icons/fc";
import "./Login.css";

const Login = () => {
   const location = useLocation();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const redirect_uri = location?.state?.form || "/";
   const onSubmit = (data) => {
      console.log(data);
      // signInWithEmail(data.email, data.password, redirect_uri);
   };
   return (
      <div className="container-fluid form_wrapper">
         <h3 className="sub_heading">Please Login</h3>
         <h1 className="heading">Login Form</h1>
         {/* {authError && <div style={{ color: "red" }}></div>} */}
         <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
            <div className="input_field">
               <span>Your Email</span>
               <input type="email" {...register("email", { required: true })} />
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

               {errors.password && <span className="error">Give password</span>}
            </div>

            <input type="submit" className="box_btn" value="Login" />
            <p>
               don't have account? <Link to="/register">Create one</Link>
            </p>
         </form>
         <div className="other_login">
            <h3>Sign in via</h3>
            <button>
               {" "}
               <span className="login_icon">
                  <FcIcons.FcGoogle />{" "}
               </span>
            </button>
         </div>
      </div>
   );
};

export default Login;
