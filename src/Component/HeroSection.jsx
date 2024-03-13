import React from 'react'
import { Carousel } from "@material-tailwind/react";
import {useTypewriter} from 'react-simple-typewriter';


function HeroSection() {
    const [text]=useTypewriter({
        words:['Gaming Goods','Gaming ID','Gaming Accesories'],
        loop:{},
        typeSpeed:200,
    });
  return (
  
        <div className="">
            
     <Carousel className="rounded-md">
        <div className='relative'>
      <img
      src="jett.png"
        alt=" 1"
      className="img1 w-full object-cover opacity-35"
      />
      <div className='absolute inset-0 h-full w-full px-24 mt-24 '>
           <div className='flex justify-between text-white '>
                <div className='madimi-one text-6xl opacity-100 font-semibold text-left'>
                    <div>
                  <h1 className=' '>Your Ultimate <br/>Destination<br/> For  Buying<br/><span  style={{fontWeight:'bold',color:'pink'}}> {text} </span>
                  </h1>
                  </div>
                  
                </div>

                <div className='clock'>
                      <div className='mt-10'>
                        <div>
                        <h1 className='text-3xl madimi-one'>NEW DAILY GIVEAWAY</h1>
                        </div>
                       
                      
                        
                      </div>
                      
                </div>
                
           </div>
      </div>
      </div>
      
      <img
        src="vanguard.jpg"
        alt=" 2"
        className="img1 w-full object-cover"
      />
      <img
        src="omen.jpeg"
        alt="3"
        className="img1 w-full object-cover"
      />
    </Carousel>
  



    
</div>

    
    
  )
}

export default HeroSection