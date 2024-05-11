import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Content4 from './Content4';

function Navbar() {

  const[showIcon,setIcon]=useState(false);
 
  return (
    <>
      
       <div className=' px-2 md:px-10  md:py-3 py-3'>
            <div className='md:flex justify-between'>
              
                <div className='flex justify-between'>
              
                <div className='logo madimi-one-regular '>
                    <h2 className='font-extrabold'>GAMEHIVE</h2>
                    
                </div>
                <div>
                      
                <div onClick={()=>setIcon(!showIcon)} className=' text-white  md:hidden mt-3 md:mt-0'>
                  <button className='text-3xl'> {showIcon ?<IoCloseSharp/>:<GiHamburgerMenu/>}</button>
                </div>
                    </div>
                </div>
               

                
               
               

                <div className=' nav text-white mt-2'>
                    <ul className={'hidden md:flex gap-5 roboto-regular-italic mt-2'}>
                        <li className='hover:text-red-500 py-2 md:py-0   mt-9 md:mt-0  ' ><Link to={Content4}>STORE</Link></li>
                        <li className='hover:text-red-500 py-2 md:py-0 '>ABOUT</li>
                        <li className='hover:text-red-500 py-2 md:py-0 '>COMMUNITY</li>
                        <li className='hover:text-red-500 py-2 md:py-0 '>SUPPORT</li>
                        <li className=' hover:text-red-500 py-2 md:py-0 '>SIGN IN</li>
                    </ul>
                  
                </div>
                <div className='md:hidden'>
                {showIcon&&(
                    <div>
                        <ul className={'md:flex gap-5 roboto-regular-italic mt-2 text-white'}>
                        <li className='hover:text-red-500 py-2 md:py-0   mt-9 md:mt-0  ' >STORE</li>
                        <li className='hover:text-red-500 py-2 md:py-0 '>ABOUT</li>
                        <li className='hover:text-red-500 py-2 md:py-0 '>COMMUNITY</li>
                        <li className='hover:text-red-500 py-2 md:py-0 '>SUPPORT</li>
                        <li className=' hover:text-red-500 py-2 md:py-0 '>SIGN IN</li>
                    </ul>
                    <div className=' text-white mt-1'>
                     <div className='flex gap-3 mt-2 '>
                        <button className='  roboto-regular-italic btn-grad px-3 py-1'>ADD TO CART</button>
                        <button className='roboto-regular-italic btn-grad px-3 py-1'>LOGIN</button>
                     </div>
                </div>
                    </div>
                    )}</div>
                <div className=' text-white mt-1 hidden md:block'>
                     <div className='flex gap-3 mt-2 '>
                        <button className='  roboto-regular-italic btn-grad px-3 py-1'>ADD TO CART</button>
                        <button className='roboto-regular-italic btn-grad px-3 py-1'>LOGIN</button>
                     </div>
                </div>
            </div>
            <div>
            </div>
            </div>
       
            </>
    
  );
}

export default Navbar