import { Children, createContext, useCallback, useReducer } from "react";
const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});
function cartReduer(state, action) {
  if (action.type === "ADD_ITEM") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItem = [...state.items];
    if (exisitingCartItemIndex > -1) {
      const updatedItem = {
        ...state.items[exisitingCartItemIndex],
        quantity,
      };
      updatedItem[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItem.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItem };
  }
  if (action.type === "REMOVE_ITEM") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exisitingCartItem = state.items[exisitingCartItemIndex];
    const updatedItems = [...state.items];

    if (exisitingCartItemIndex.quantity === 1) {
      updatedItems.splice(exisitingCartItem, 1);
    } else {
      const updatedItem = {
        ...exisitingCartItem,
        quantity: exisitingCartItem.quantity - 1,
      };
    }
    updatedItems[exisitingCartItemIndex] = updatedItem;
  }
}
export default function CartContext({ Children }) {
  const [cartData, setCartData] = useState({
    id: null,
    name: "",
    price: "",
    quantity: 0,
    description: "",
  });
  useReducer(cartReduer, { items: [] });
  return;
  <CartContext.Provider>{Children}</CartContext.Provider>;
}
