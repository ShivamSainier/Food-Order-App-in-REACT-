import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from "react"

function App() {
  const [cartIsShown,setcartIsShown]=useState(false)

  const showCartHendler=()=>{
    setcartIsShown(true);
    console.log("Hello*********")
  }
  const hideCartHendler=()=>{
    setcartIsShown(false);
  }
  return (
    <>
    <Header onShowCart={showCartHendler} />
    {cartIsShown &&<Cart onHide={hideCartHendler} />}
    <main>
      <Meals />
    </main>
    </>
  );
}

export default App;
