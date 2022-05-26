import React, { useState, useContext } from "react";
import { MainContext } from "./Context";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const {productList, price}=useContext(MainContext);
  console.log(productList.count)
  const [isMobile, setIsMobile] = useState(false);
  const [toogleCart, setToogleCart] = useState(true);

  const openCartHandler = () => {
    setToogleCart(!toogleCart);
  };
  const openMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(!isMobile);
  };
  return (
    <>
      <nav className={classes.container}>
        <button
          onClick={openMobileMenu}
          id="btn"
          className={classes["mobile-menu-hamburgerbtn"]}
        >
          <img width="15px" src="/images/hamburger.png" />
        </button>
        <div className={classes.logo}>
          <a href="">
            <img src="/images/logo.svg" />
          </a>
        </div>

        <div className={!isMobile ? classes.menu : classes["mobile-menu"]}>
          {isMobile && <button onClick={closeMobileMenu}>X</button>}
          <ul>
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className={classes.cart}>
          <a href="#">
            <img onClick={openCartHandler} src="/images/icon-cart.svg" />
          </a>

          <div className={toogleCart && classes.cartBox}>
            <span>Cart</span>
            <hr />

        { productList.count==undefined ? <p>your cart is empty</p> : 
           
         <ul className={classes['product-list']}>
          <li>
          <img width='50px' src={productList.image_path}/>
          <span>{price+' x '+productList.count} ={`${productList.total}$`}</span>
          
          </li>
        </ul>
          }
          

          
          </div>

          <a href="#">
            <img width="50px" src="/images/image-avatar.png" />
          </a>
        </div>
      </nav>
      <hr className={classes.hr} width="80%" />
    </>
  );
};

export default Navbar;
