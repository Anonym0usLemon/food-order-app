import { useReducer } from "react";
import CartContext from "./cart-context";

/*
    Now you have a component that can manage all your cart data
    It will also contain all the logic for the cart data which you
    can use within each child component. 
*/

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; 
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === "REMOVE") {

    }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCartHandler(item) {
    dispatchCartAction({type: "ADD", item: item});
  }

  function removeItemFromCartHandler(id) {
    dispatchCartAction({type: "REMOVE", id: id});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
