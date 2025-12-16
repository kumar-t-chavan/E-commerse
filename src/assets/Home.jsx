import React from 'react'
import combo from '../Images/combo.png'
import shirt from '../Images/shirt.png'
import white from '../Images/white.png'
import tshirt from '../Images/T-shirt.png'

const Home = () => {
const handleWishlist = () => {
  const item = {
    img: combo,
    title: "Combo Shirt And Pants",
    discount: "47%",
    oldPrice: "1999",
    price: "1299$",
  };

  // pehle old wishlist le lo
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  wishlist.push(item);

  // fir wapas save karo
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert("Added to Wishlist");
};

  return (
    <div>
        <div className='main-home h-50'>
                <div className='box border-2 to-black inline-block'>
                    <img src={combo} alt="" height={"250px"} width={"250px"} className='h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                    <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'  onClick={handleWishlist}>❤️</button>
                  </div>
                </div>




                  <div className='box border-2 to-black inline-block'>
                    <img src={shirt} alt="" height={"100px"} width={"250px"} className='shirt h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                    <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'  onClick={handleWishlist}>❤️</button>
                  </div>
                </div>



                  <div className='box border-2 to-black inline-block'>
                    <img src={white} alt="" height={"250px"} width={"250px"}  className='balck h-81'/>
                  <div className='space'>
                      <h4 className='pl-1.2'>Combo Shirt And Pants</h4>
                    <h6><span className='text-green-900 font-bold'>47% </span><span><strike>1999</strike></span><span className='heading'>1299$</span></h6>
                    <button className='bg-amber-300 rounded cursor-pointer'>ADD TO CART</button>
                    <button className='btn cursor-pointer'>❤️</button>
                  </div>
                </div>




                  <div className='box border-2 to-black inline-block'>
                    <img src={tshirt} alt="" height={"250px"} width={"250px"} className='h-81'/>
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

export default Home
