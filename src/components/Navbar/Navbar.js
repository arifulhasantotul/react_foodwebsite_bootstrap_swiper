import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import pic from "../../images/picformal.png";
import "./Navbar.css";
import { SidebarData } from "./NavbarData";
import SubMenu from "./SubMenu";

const Navbar = () => {
   const [openSidebar, setOpenSidebar] = useState(false);
   const toggleSidebar = () => setOpenSidebar(!openSidebar);

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
                     <img src={pic} alt="" />
                  </div>
                  <div className="name_job">
                     <div className="profile_name">Ariful Hasan</div>
                     <div className="job">Web Developer</div>
                  </div>
                  <div className="logout_icon">
                     <BiIcons.BiLogOut
                        style={{
                           width: "2rem",
                           marginRight: "0.7rem",
                           cursor: "pointer",
                        }}
                     />
                  </div>
               </div>
            </nav>
         </IconContext.Provider>
      </>
   );
};

export default Navbar;
