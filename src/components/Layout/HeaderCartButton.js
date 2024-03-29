import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext); // this will cause the component to be reevaluated each time the CartContext changes
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0); 

    function showCart() {
        props.openCart(); 
    }

    const { items } = cartCtx;

    const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ""}`;
    useEffect(() => {
      if (items.length === 0) {
        return;
      }
      setButtonIsHighlighted(true); 

      const timer = setTimeout(() => {
          setButtonIsHighlighted(false); 
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }, [items])

  return (
    <button onClick={showCart} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
