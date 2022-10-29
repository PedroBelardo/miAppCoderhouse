import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext.js'
import { NotificationProvider } from './notification/Notification';

function App() {
  return (

    <div className="App">
    <NotificationProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element = {<ItemListContainer />}/>
              <Route path='/category/:categoryId' element = {<ItemListContainer />}/>
              <Route path='/detail/:productId' element = {<ItemDetailContainer />}/>
              <Route path='/cart' element={<h1>Cart</h1>} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </NotificationProvider> 

    </div>
     
  );
}

export default App;
