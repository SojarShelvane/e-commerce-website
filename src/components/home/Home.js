import { Divider } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Home.css";
import { fetchProducts } from "../../redux/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import Products from "../products/Products";
import ProvidedServices from "./ProvidedServices";
import HomeCrousal from "./HomeCrousal";
const Home = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location.pathname.split(""));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <HomeCrousal />
      <ProvidedServices />
      {/*  <Products data={products} /> */}
      <Outlet />
      <Divider />
    </>
  );
};

export default Home;
