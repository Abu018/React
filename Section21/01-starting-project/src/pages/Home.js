import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../components/MainNavigation.module.css";

function Home() {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <div>
      <h1 className={classes.header}>My home page </h1>
      <p className={classes.header}>
        {" "}
        Go to <Link to="products"> List of products</Link>
      </p>
      <p className={classes.header}>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
}

export default Home;
