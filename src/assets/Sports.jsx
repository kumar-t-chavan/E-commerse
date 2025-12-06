import React from 'react'
import tenis from '../Images/tenis.png'
import car from '../Images/car.png'
import ball from '../Images/ball.png'
import bat from '../Images/bat.png'
const Sports = () => {
  return (
    <div>
        <div className='main-home h-50'>
                <div className='box border-2 to-black inline-block'>
                    <img src={tenis} alt="" height={"250px"} width={"250px"} className='h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                    <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'>❤️</button>
                  </div>
                </div>




                  <div className='box border-2 to-black inline-block'>
                    <img src={car} alt="" height={"100px"} width={"250px"} className='shirt h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                    <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'>❤️</button>
                  </div>
                </div>



                  <div className='box border-2 to-black inline-block'>
                    <img src={ball} alt="" height={"250px"} width={"250px"}  className='balck h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                    <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'>❤️</button>
                  </div>
                </div>




                  <div className='box border-2 to-black inline-block'>
                    <img src={bat} alt="" height={"250px"} width={"250px"} className='h-81'/>
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

export default Sports
