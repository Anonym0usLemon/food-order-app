import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false); 

  function showCart() {
      setCartIsShown(true);
  }

  function hideCart() {
    setCartIsShown(false); 
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart closeCart={hideCart} />}
      <Header openCart={showCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
