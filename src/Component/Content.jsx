import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const cardData = [
    {
      id: 1,
      image: 'https://wallpapers.com/images/featured/fortnite-pictures-b5kfcchwazwiz3cs.jpg',
      title: 'Fortnite',
      description: 'Description for Game 1',
    },
    {
      id: 2,
      image: 'https://images.fallout.wiki/8/89/Fallout76_CatalogImage_900x500-01.png',
      title: 'Fallout76',
      description: 'Description for Game 2',
    },
    {
      id: 3,
      image: 'https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg',
      title: 'Robolox',
      description: 'Description for Game 3',
    },
    {
      id: 4,
      image: 'https://files.bo3.gg/uploads/news/9099/title_image/960x480-1e5cc4703e97abe18753513ecfff2484.webp',
      title: 'CS2',
      description: 'Description for Game 3',
    },
    {
      id: 5,
      image: 'https://img.etimg.com/thumb/width-1600,height-900,imgsize-19860,resizemode-75,msid-105602843/news/international/us/gta-v-rp-heres-what-you-may-like-to-know-about-what-is-it-how-to-play-and-more.jpg',
      title: 'GTA V',
      description: 'Description for Game 3',
    },
    {
      id: 6,
      image: 'https://i.ytimg.com/vi_webp/b6o70W1I8j4/maxresdefault.webp',
      title: 'Warframe',
      description: 'Description for Game 3',
    },
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div>
      
      <h1 className='madimi-one-regular text-center mt-32 mb-10'>POPULAR GAME ITEMS</h1>
    <Slider {...settings}>
      {cardData.map((card) => (
        <div key={card.id} className="px-2">
           
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-3xl">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="  bebas-neue-regular text-center text-4xl font-extrabold mb-2 py-3 text-green-600 ">{card.title}</h2>
             
            </div>
          </div>
        </div>
      ))}
    </Slider>
    
    </div>
  );
};

export default CardSlider;
