import React, {useState,useEffect} from "react";
import { MainContext,useContext } from "./Context";
import classes from "./Main.module.css";

const Main = () => {

  const {image_path,total,count,setcount,setProductList,productList} =useContext(MainContext)



  const decrease=()=>{
    if(count>0){
      setcount(count-1)
    }
  }
  const increase=()=>{
    setcount(count+1)
  }


  // useEffect(()=>{
  //   // AddToCart();

    
  // }, [productList])

  const AddToCart=()=>{
    const total=count*125;
    if(count==0){
     window.alert('you have to buy at least 1 product')
    }
    else{
      setProductList({
        total:total,
        image_path:image_path,
        count: count
      })
    }
     
  }
 


  return (
    <div className={classes.container}>
      <div className={classes["container-image"]}>
        <div >
          <img   className={classes.firstimg} src={image_path} />
        </div>
        <div className={classes.thumbnalimg}>
          <ul>
            <li>
              <img  src="/images/image-product-2-thumbnail.jpg"/>
            </li>
            <li>
              <img  src="/images/image-product-2-thumbnail.jpg"/>
            </li>
            <li>
              <img src="/images/image-product-3-thumbnail.jpg"/>
            </li>
            <li>
              <img src="/images/image-product-4-thumbnail.jpg"/>
            </li>

          </ul>
        </div>
      </div>
      <div className={classes["container-content"]}>
        <p className={classes["company-title"]}>Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className={classes.productdesc}>
          lorem skdsnv klmvkldm d mkl mlm l ml m mklm lmd fv kldv ldfvlkdm
          lmvlsv
        </p>
        <div className={classes.price}>
          <p>$125.00</p>
          <span>50%</span>
        </div>
        <div className={classes.btns}>
          <div className={classes.counter}>
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
          </div>
          <button  onClick={AddToCart} className={classes.cartbtn}><img width='14px' src="/images/icon-cart.svg"/> Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
