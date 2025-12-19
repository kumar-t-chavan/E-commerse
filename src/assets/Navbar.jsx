import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const nevigate = useNavigate()

    return (
        <div className='navbar relative'>
            <nav className="flex justify-evenly items-center h-25  bg-gray-200 px-6 ">
                <h1 className="text-5xl font-bold first-letter:text-amber-800 cursor-pointer">
                  <Link to="/">  IndianMart</Link>
                </h1>
                <input
                    type="text"
                    placeholder="Search 🌐"
                    className="text-center border-2 rounded-lg p-4 w-[450px] outline-none focus:border-blue-500"
                 />
                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="font-semibold cursor-pointer hover:text-blue-600"
                    >
                        Categories🔻
                    </button>

             
                    {open && (
                        <div className="absolute left-0 mt-2 md:mt-4 lg:mt-6 bg-white shadow-lg rounded-md  w-40 text-gray-800 space-y-2 text-start ">

                            <p className="hover:bg-gray-100 px-2 py-1 cursor-pointer rounded">
                               <Link to="/Fashion">Fashion</Link>
                            </p>
    
                            <p className="hover:bg-gray-100 px-2 py-1 cursor-pointer rounded ">
                                <Link to="/footware">Footwear</Link>
                            </p>
                            
                           
                
                            <p className="hover:bg-gray-100 px-2 py-1 cursor-pointer rounded">
                              <Link to="/ele">  Electronics</Link>
                            </p>

                            <p className="hover:bg-gray-100 px-2 py-1 cursor-pointer rounded">
                                
                                  <Link to="/app">  Appliances</Link>
                            </p>

                            <p className="hover:bg-gray-100 px-2 py-1 cursor-pointer rounded">
                              
                                 <Link to="/sport" > Sports</Link>
                            </p>

                        </div>
                    )}


                </div>


<div className='font-semibold cursor-pointer hover:text-blue-600'>
  
      <Link to="/wishlist" >  Wishlist ❤️</Link>
</div>

<div className='font-semibold cursor-pointer hover:text-blue-600' onClick={()=> nevigate("./footware")}>
    Order 🛍️
 
</div>

<div className='font-semibold cursor-pointer hover:text-blue-600'>
    Login 👤                                                                    
</div>


                <div>

                </div>

            </nav>
        </div>
    );
};

export default Navbar;
