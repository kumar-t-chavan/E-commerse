import React from 'react'
import './index.css'
import Homemain from './assets/Homemain'
import Navbar from './assets/Navbar'
import {Routes,Route} from 'react-router-dom'
import Mainfootware from './assets/Mainfootware'
import Mainele from './assets/Mainele'
import Fashionmain from './assets/Fashionmain'
import Appliances from './assets/Appliances'
import Appliancesmain from './assets/Appliancesmain'
import Sportsmain from './assets/Sportsmain'
import Wishlist from './assets/Wishlist'
const App = () => {
  return (
    <div>
      <Navbar/>
   
     <Routes>
       <Route path='/footware' element={<Mainfootware/>}/>
       <Route path='/' element={    <Homemain/>  }/>
       <Route path='/ele' element={<Mainele/>}/>
       <Route path='/Fashion' element={<Fashionmain/>}/>
       <Route path='/app' element={<Appliancesmain/>}/>
       <Route path='/sport' element={<Sportsmain/>}/>
       <Route path='/wishlist' element={<Wishlist/>}/>
     </Routes> 
    </div>
  )
}
export default App
