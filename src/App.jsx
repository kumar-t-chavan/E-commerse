import React from 'react'
import './index.css'
import Home from './assets/Home'
import Navbar from './assets/Navbar'
import {Routes,Route} from 'react-router-dom'
import Mainfootware from './assets/Mainfootware'
import Mainele from './assets/Mainele'
const App = () => {
  return (
    <div>
      <Navbar/>
   
     <Routes>
       <Route path='/footware' element={<Mainfootware/>}/>
       <Route path='/' element={    <Home/>  }/>
       <Route path='/ele' element={<Mainele/>}/>
     </Routes>
    </div>
  )
}
export default App
