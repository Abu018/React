// ReducerContext.jsx
import React, { createContext, useState } from "react";

const ReducerContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  incrementQuantity: (id) => {},
  decrementQuantity: (id) => {},
});

export function ReducerContextProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    const existingItemIndex = items.findIndex((item) => item.id === newItem.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems([...items, { ...newItem, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    const existingItemIndex = items.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      if (updatedItems[existingItemIndex].quantity > 1) {
        updatedItems[existingItemIndex].quantity -= 1;
      } else {
        updatedItems.splice(existingItemIndex, 1);
      }
      setItems(updatedItems);
    }
  };

  const incrementQuantity = (id) => {
    const existingItemIndex = items.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    }
  };

  const decrementQuantity = (id) => {
    const existingItemIndex = items.findIndex((item) => item.id === id);
    const updatedItems = [...items];
    if (existingItemIndex !== -1 && items[existingItemIndex].quantity > 1) {
      updatedItems[existingItemIndex].quantity -= 1;
    } else {
      updatedItems.splice(existingItemIndex, 1);
    }
    setItems(updatedItems);
  };

  return (
    <ReducerContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </ReducerContext.Provider>
  );
}

export default ReducerContext;
