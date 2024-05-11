import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { useTypewriter } from 'react-simple-typewriter';


function HeroSection() {
    const [text] = useTypewriter({
        words: ['Gaming Goods', 'Gaming ID', 'Gaming Accessories'],
        loop: {},
        typeSpeed: 300,
    });

    return (
        <div className="">
            <Carousel className="rounded-md">
                <div className='relative'>
                    <img
                        src="https://assets-global.website-files.com/618d852d383de946ce0e3fa5/6495da7241185414c12ddc02_videoGamePlanet.PNG"
                        alt="Slide 1"
                        className="img1 w-full object-cover opacity-35"
                    />
                    <div className='absolute inset-0 px-24  flex items-center justify-center'>
                        <div className='madimi-one opacity-500 font-semibold'>
                            <div>
                                <h1 className='text-4xl md:text-6xl text-white text-center'>Your Ultimate Destination For Buying<br/><span className='flex justify-center text-pink-600'> {text} </span>
                                </h1>
                                <div className='text-white text-2xl mt-4 flex justify-center'>
                                    {/* Add Tailwind CSS classes to fix button position */}
                                    <button className=' text-3xl btn-grad px-4 py-1 absolute bottom-20 left-1/2 transform -translate-x-1/2'>Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="vanguard.jpg"
                    alt="Slide 2"
                    className="img1 w-full object-cover"
                />
                <img
                    src="omen.jpeg"
                    alt="Slide 3"
                    className="img1 w-full object-cover"
                />
            </Carousel>
        </div>
    );
}

export default HeroSection;
