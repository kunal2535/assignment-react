import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Product from "./Product";
import styles from "./Main.module.css";
const About = () => {
  return (
    <div className={styles["page-content"]}>
      <h1>About Page</h1>
      <Link to="product">Product Details</Link>
      <Routes>
        <Route path="product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default About;
