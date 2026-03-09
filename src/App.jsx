import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componetes/navbar/Navbar'
import Home from './pages/home/Home'  
import Cart from './pages/cart/Cart'

import Footer from './componetes/Footer/Footer'
import LoginPopUp from './componetes/LoginPopUp/LoginPopUp'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {
  const [showlogin,setshowlogin]=useState(false) ;
  

  return (
    <>
    {showlogin?<LoginPopUp setshowlogin={setshowlogin}/>:<></>}
      <div className="app">
        
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/Cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
      </div>
    </>
  )
}

export default App
