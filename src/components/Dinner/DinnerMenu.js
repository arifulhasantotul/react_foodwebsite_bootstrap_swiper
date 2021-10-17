import React from "react";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import Rating from "react-rating";

const DinnerMenu = (props) => {
   const { name, imgURL, price, rating } = props.dinner;
   return (
      <div className="col col-12 col-md-6 col-lg-4 box">
         <span className="box_heart">
            {" "}
            <FaIcons.FaHeart />{" "}
         </span>
         <span className="box_eye">
            {" "}
            <FaIcons.FaEye />{" "}
         </span>
         <img src={imgURL} alt="" />
         <h3>{name}</h3>
         <span className="box_star">
            <Rating
               initialRating={rating}
               emptySymbol={<FaIcons.FaRegStar />}
               fullSymbol={<FaIcons.FaStar />}
               readonly
            />
         </span>
         <h3 className="box_price">{price} Tk</h3>
         <button className="box_btn">
            {" "}
            <HiIcons.HiOutlineShoppingCart /> Add To Cart
         </button>
      </div>
   );
};

export default DinnerMenu;
