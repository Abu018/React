import React, { useState, useContext } from "react";
import logo from "../assets/logo.jpg";
import Modal from "./Modal.jsx";
import ReducerContext from "./ReducerContext.jsx";

function Header() {
  const [cartClicked, setCartClicked] = useState(false);
  const ctx = useContext(ReducerContext);
  function handleCart() {
    setCartClicked(!cartClicked);
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>React Food App</h1>
      </div>
      <nav>
        <button onClick={handleCart}>Cart({ctx.items.length})</button>
        {cartClicked && <Modal open={cartClicked} onClose={handleCart} />}
      </nav>
    </header>
  );
}

export default Header;
