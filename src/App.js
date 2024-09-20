import React from 'react';
import { CartProvider } from './components/CartContext';  // Adjust path according to your project structure
import Cart from './components/Cart';  // Adjust path according to your project structure

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Shopping Cart</h1>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
