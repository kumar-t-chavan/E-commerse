import React from 'react'
import combo from '../assets/../Images/combo.png'

const Home = () => {

 

  return (
    <div>
        <div className='main-home h-50'>
                <div className='box border-2 to-black inline-block'>
                    <img src={combo} alt="" height={"250px"} width={"250px"} className='h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                    <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'  >❤️</button>
                  </div>
                </div>




                  <div className='box border-2 to-black inline-block'>
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/4/i/c/8-eagle-f-b-black-06-cloker-black-original-imahgphm8hznjvdg.jpeg?q=70" alt="" height={"100px"} width={"250px"} className='shirt h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Men Flip Flop</h4>
                    <h6><span className='text-green-900 font-bold'>81% </span><span><strike>899</strike></span><span className='heading'>181$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer' >❤️</button>
                  </div>
                </div>



                  <div className='box border-2 to-black inline-block'>
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-watch/i/4/n/1-arabic-vilante-men-women-original-imahgd8ztspm6f6h.jpeg?q=70" alt="" height={"250px"} width={"250px"}  className='balck h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Men Watch</h4>
                    <h6><span className='text-green-900 font-bold'>56% </span><span><strike>499</strike></span><span className='heading'>129$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'>❤️</button>
                  </div>
                </div>




                  <div className='box border-2 to-black inline-block'>
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/p/m/4/-original-imahf5fvzt5qnfg2.jpeg?q=70" alt="" height={"250px"} width={"250px"} className='h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>HRX by Hrithik Roshan</h4>
                    <h6><span className='text-green-900 font-bold'>70% </span><span><strike>4999</strike></span><span className='heading'>1399$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'>❤️</button>
                  </div>
                </div>

                 
            </div>
    </div>
  )
}

export default Home
