import React, { useEffect, useState } from "react";
import Menu from "./Menu.jsx";

function Resturnat({ cartItems, setCartItems }) {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(true); // Set to true initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const repData = await response.json();
        setItems(repData);
      } catch (error) {
        setError(error);
      } finally {
        setIsFetching(false); // Set to false after fetching, regardless of success or failure
      }
    };

    fetchData();
  }, []);
  return (
    <ul id="meals">
      {items.map((meals) => (
        <Menu
          key={meals.id}
          meal={meals}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </ul>
  );
}

export default Resturnat;
