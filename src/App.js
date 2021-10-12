import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from "react"
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setcartIsShown]=useState(false)

  const showCartHendler=()=>{
    setcartIsShown(true);

  }
  const hideCartHendler=()=>{
    setcartIsShown(false);
  }
  return (
    <CartProvider>
    <Header onShowCart={showCartHendler} />
    {cartIsShown &&<Cart onHide={hideCartHendler} />}
    <main>
      <Meals />
    </main>
    </CartProvider>
  );
}

export default App;
