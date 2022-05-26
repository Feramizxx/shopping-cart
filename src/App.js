import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { MainContext } from "./components/Context";

function App() {

  const [count, setcount]=useState(0)
  const [productList,setProductList]=useState([])
  const data = 
    {
      id: 1,
      productList:productList,
      setProductList:setProductList,
      setcount: setcount,
      count: count,
      total: 0,
      image_path: "/images/image-product-1.jpg",
      price:125
    }

  return (
    <MainContext.Provider value={data}>
      <Navbar/>
      <Main />
    </MainContext.Provider>
  );
}

export default App;
