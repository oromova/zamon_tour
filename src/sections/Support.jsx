import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import img1 from '../assets/india.jpg';
import img2 from '../assets/japan.jpg';
import img3 from '../assets/saudi.jpg';
import img4 from '../assets/oman.jpg';
import img5 from '../assets/china.jpg';
import img6 from '../assets/hongkong.jpg';
import img7 from '../assets/europe.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { faTags, faClock, faCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import GenericButton from '../components/Generics/GenericButton';

import Slider from "react-slick";
import { ArrowButton } from '../components/Generics/Arrows';


const cards = [
  { img: img1, title: 'India', checkIns: 234 },
  { img: img2, title: 'Japan', checkIns: 234 },
  { img: img3, title: 'Saudi Arabia', checkIns: 234 },
  { img: img4, title: 'Oman', checkIns: 234 },
  { img: img5, title: 'China', checkIns: 234 },
  { img: img6, title: 'Hong Kong', checkIns: 234 },
  { img: img7, title: 'European(Schengen)', checkIns: 234 },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true, 
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
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Support = () => {
  const sliderRef = useRef(null);
  return (
    <section className="py-[70px]">
      <div className="w-[1240px] mx-auto">
        {/* Title bar */}
        <div className="mb-[80px] w-[500px] mx-auto text-center">
          <h2 className="mb-[20px] text-[30px] font-bold text-[#2a2a2a]">
            Visa Support
          </h2>
          <p className="text-[16px] text-[#afafaf] leading-[30px] font-poppins">
            Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey. 
          </p>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {
            cards.map((card, index) => (
              <div key={index} className="relative h-[500px]">
                <img
                  className='rounded-l-[23px] w-[271px] h-[175px]'
                  src={card.img} alt={card.title} />
                {/* Info Box Start*/}
                <div className='mb-7 w-[271px] h-[380px] absolute top-[10%] left-[60%] transform -translate-x-1/2 bg-white rounded-[23px] p-[30px] shadow-2xl'>
                  <h4 className='text-[20px] text-[#2a2a2a] font-bold'>{card.title}</h4>
                  <FontAwesomeIcon icon={faUsers} className='text-[#afafaf]' />
                  <span className='text-[#afafaf] mr-5'>{card.checkIns} Check Ins</span>
                  <hr className='text-[#e8e0e0] my-7' />
                  <h6 className='font-bold text-[14px] mb-3'>Benefits of our Visa Support service:</h6>
                  <div className='text-[#afafaf] mb-3'>
                    <FontAwesomeIcon icon={faTags} />
                    <span className='ml-2 mb-6 text-[14px]'>5 Days Trip &#62;  Best Prices</span>
                  </div>
                  <div className='text-[#afafaf] mb-3'>
                    <FontAwesomeIcon icon={faClock} />
                    <span className='ml-2 text-[14px]'> Short Processing Time</span>
                  </div>
                  <div className='text-[#afafaf] mb-6'>
                    <FontAwesomeIcon icon={faCheck} />
                    <span className='ml-2 mb-6 text-[14px]'> Trustworthy Assistance</span>
                  </div>
                  <GenericButton
                    href='#reservation'
                    label='Make A Reservation'
                    width="w-[200px]" />
                </div>
                {/* Info Box End*/}
              </div>
            ))
          }
        </Slider>
        {/* Arrows */}
        <div className="flex justify-center gap-4 mb-6">
          <ArrowButton direction="left" onClick={() => sliderRef.current?.slickPrev()} />
          <ArrowButton direction="right" onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>
    </section>
  );
};

export default Support;

