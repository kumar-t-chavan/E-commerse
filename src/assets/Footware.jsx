import React from 'react'
import shoes3 from '../Images/shoes3.png'
import shoes6 from '../Images/shoes6.png'
import shoes8 from '../Images/shoes8.png'
import shoes9 from '../Images/shoes9.png'
const Footware = () => {
  return (
    <div>
    <div className='main-home h-50'>
                  <div className='box border-2 to-black inline-block'>
                      <img src={shoes6} alt="" height={"250px"} width={"250px"} className='h-81'/>
                    <div className='space'>
                        <h4 className='pl-1.2'>Shoes sky-blue</h4>
                      <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1599</strike></span><span className='heading'>1299$</span></h6>
                      <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                      <button className='btn cursor-pointer'>❤️</button>
                    </div>
                  </div>
  
  
  
  
  
                    <div className='box border-2 to-black inline-block'>
                      <img src={shoes9} alt="" height={"100px"} width={"250px"} className='shirt h-81'/>
                    <div className='space'>
                        <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                      <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                      <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                      <button className='btn cursor-pointer'>❤️</button>
                    </div>
                  </div>
  
  
  
                    <div className='box border-2 to-black inline-block'>
                      <img src={shoes3} alt="" height={"250px"} width={"250px"}  className='balck h-81'/>
                    <div className='space'>
                        <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                      <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                      <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                      <button className='btn cursor-pointer'>❤️</button>
                    </div>
                  </div>
  
  
  
  
                    <div className='box border-2 to-black inline-block'>
                      <img src={shoes8} alt="" height={"250px"} width={"250px"} className='h-81'/>
                    <div className='space'>
                        <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                      <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                      <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                      <button className='btn cursor-pointer'>❤️</button>
                    </div>
                  </div>
  
                   
              </div>
    </div>
  )
}

export default Footware
