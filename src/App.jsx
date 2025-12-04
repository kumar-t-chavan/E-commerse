import React from 'react'
import './index.css'
import Home from './assets/Home'
import Navbar from './assets/Navbar'
import {Routes,Route} from 'react-router-dom'
import Mainfootware from './assets/Mainfootware'
const App = () => {
  return (
    <div>
      <Navbar/>
   
     <Routes>
       <Route path='/footware' element={<Mainfootware/>}/>
       <Route path='/' element={    <Home/>  }/>
     </Routes>
    </div>
  )
}
export default App
