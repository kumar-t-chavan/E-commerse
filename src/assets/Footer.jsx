import React from 'react'
import insta from '../Images/instagram.png'
import Youtube from '../Images/youtube.png'
import linkdin  from '../Images/linkedin.png'
const Footer = () => {
  return (
    <div className='bg-black text-white h-113 main-footer'>


      <div className='two-box'>

        <div className='box1'>
           <div className='orderlist'>

         <h1>ABOUT</h1>

            <ul>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>IndianMart Stories</li>
                <li>Press</li>
                <li>Corparate Information </li>
            </ul>
           </div>


           <div className='Group'>
            <h1>Group Companies</h1>

            <ul>
                <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
            </ul>


           </div>


           <div className='help'>
                <h1>Help</h1>

               <ul>
                 <li>Payments</li>
                <li>Shipping</li>
                <li>Cancellation & Return</li>
                <li>FAQ</li>
               </ul>
           </div>


           <div className='policy'>
            <h1>CONSUMER POLICY</h1>

                <ul>
                   
                <li>Cancellation & Return</li>
                <li>Terms of Use</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>Sitmap</li>
                <li>Grievance Redressal</li>
                <li>EPR Compliance</li>
                <li>FSSAI Food Safety</li>
                <li>Connect App</li>
                </ul>

               
           </div>

                 <div className='mail'>
                    <h1>Mail Us : </h1>
                    <p className='block'>IndianMart Internet Privated Limited, <br/>
                        Building Alyssa, Begonia and Clove <br/> Embassy Tech Villge,
                        Outer ring road <br/> Devarabeesanahalli Village,
                        Bengaluru, 560103, <br />
                        Karanatak, India
                    </p>
<br />
                    <h1>Social : </h1> <br />
                   <div className='imgfooter'>
                    <a href="https://www.instagram.com/?hl=en"> <img src={insta} alt="" width={20} /></a>
                   <a href="https://www.youtube.com/@kumarchavancoder"> <img src={Youtube} alt=""  width={20} /></a>
                  <a href="https://www.linkedin.com/in/kumar-chavan1552/">
                      <img src={linkdin} alt=""  width={20} />
                  </a>
                   </div>

                    
            </div>

            <div className='office'>

                <h1>Regitration office Address : </h1>

                    <p className='block'>IndianMart Internet Privated Limited, <br/>
                        Building Alyssa, Begonia and Clove <br/> Embassy Tech Villge,
                        Outer ring road <br/> Devarabeesanahalli Village,
                        Bengaluru, 560103, <br />
                        Karanatak, India
                    </p>
            </div>
        </div>


<hr />


<div className='down'>

    <li>💸Become a Seller</li>
    <li>📺Advertise</li>
    <li>🎁Gift Cards</li>
    <li>💁‍♂️Help Center</li>
    <li>&copy; 💻2007-2026 IndianMart.com</li>
    <li><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-69e7ec.svg" alt="" /></li>
   

</div>
        

      </div>

   


    </div>
  )
}

export default Footer
