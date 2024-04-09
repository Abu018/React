import React from "react";
import classes from "../components/MainNavigation.module.css";
import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "Product-1jhgjgh" },
  { id: "p2", title: "Product-2" },
  { id: "p3", title: "Product-3" },
  { id: "p4", title: "Product-4" },
];
function Products() {
  return (
    <div>
      <h1 className={classes.header}>Products</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
