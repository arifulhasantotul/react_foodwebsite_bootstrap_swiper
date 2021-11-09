import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import pic from "../../images/user.png";
import "./Navbar.css";
import { SidebarData } from "./NavbarData";
import SubMenu from "./SubMenu";

const Navbar = () => {
   const { user, logout } = useAuth();
   const history = useHistory();
   const [openSidebar, setOpenSidebar] = useState(false);
   const toggleSidebar = () => setOpenSidebar(!openSidebar);

   const goToLogin = () => {
      history.push("/login");
   };

   return (
      <>
         <button
            className={openSidebar ? "close toggle_btn" : "toggle_btn"}
            clicked={openSidebar}
            onClick={toggleSidebar}
         ></button>
         <IconContext.Provider
            value={{ color: "#fff", size: "3rem", minWidth: "7.8rem" }}
         >
            <nav className={openSidebar ? "sidebar" : "sidebar close"}>
               {/* sidebar logo  */}
               <div className="sidebar_logo">
                  <BiIcons.BiCarousel />
                  <span className="logo_name">BlackPepper</span>
               </div>
               <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
                  {/* slick sidebar container  */}
                  <ul className="nav_menu_items">
                     {SidebarData.map((menuItem) => (
                        <SubMenu key={menuItem.id} item={menuItem}></SubMenu>
                     ))}
                  </ul>
               </IconContext.Provider>
               <div className="profile_details">
                  <div className="profile_content">
                     <img
                        src={user.photoURL ? user.photoURL : pic}
                        alt="user icon"
                     />
                  </div>
                  <div className="name_job">
                     <div className="profile_name">
                        {user.displayName
                           ? user.displayName.slice(0, 15)
                           : "Not Found"}
                     </div>
                     <div className="job">
                        {user.email ? user.email.slice(0, 15) : "Not Found"}
                     </div>
                  </div>
                  <div className="logout_icon">
                     {user.displayName || user.email ? (
                        <button onClick={logout} className="navbar_user_btn">
                           {" "}
                           <BiIcons.BiLogOut
                              style={{
                                 width: "2rem",
                                 cursor: "pointer",
                              }}
                           />{" "}
                        </button>
                     ) : (
                        <button onClick={goToLogin} className="navbar_user_btn">
                           {" "}
                           <BiIcons.BiKey
                              style={{ width: "2rem", cursor: "pointer" }}
                           />{" "}
                        </button>
                     )}
                  </div>
               </div>
            </nav>
         </IconContext.Provider>
      </>
   );
};

export default Navbar;
