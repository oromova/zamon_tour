import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import img1 from '../assets/usa.jpg';
import img2 from '../assets/england.jpg';
import img3 from '../assets/canada.jpg';
import img4 from '../assets/europe.jpg';
import img5 from '../assets/istanbul.jpg';
import img6 from '../assets/dubai.jpg';
import img7 from '../assets/antalya.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faBuilding, faPlane, faTaxi, faUsers } from '@fortawesome/free-solid-svg-icons';
import GenericButton from '../components/Generics/GenericButton';
import Slider from "react-slick";
import { ArrowButton } from '../components/Generics/Arrows';

const cards = [
  { img: img1, title: 'USA', checkIns: 400 },
  { img: img2, title: 'England', checkIns: 234 },
  { img: img3, title: 'Canada', checkIns: 345 },
  { img: img4, title: 'European Union', checkIns: 345 },
  { img: img5, title: 'Istanbul', checkIns: 290 },
  { img: img6, title: 'Dubai', checkIns: 300 },
  { img: img7, title: 'Antalya', checkIns: 500 },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Offers = () => {
  const sliderRef = useRef(null);

  return (
    <section className="py-[70px] overflow-hidden" id="tours">
      <div className="w-full max-w-[1240px] mx-auto px-4">
        {/* Title */}
        <div className="mb-[80px] max-w-[500px] mx-auto text-center">
          <h2 className="mb-[20px] text-[30px] font-bold text-[#2a2a2a]">
            Best Weekly Offers In Each City
          </h2>
          <p className="text-[16px] text-[#afafaf] leading-[30px]">
            Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.
          </p>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="flex justify-center px-2">
              <div className="relative w-full max-w-[271px] h-[500px]">
                <img
                  className="rounded-l-[23px] w-full h-[350px] object-cover"
                  src={card.img}
                  alt={card.title}
                />
                {/* Info Box */}
                <div className="absolute top-[10%] left-[70%] -translate-x-1/2 bg-white rounded-[23px] p-[30px] shadow-2xl w-full max-w-[271px] h-[380px]">
                  <h4 className="text-[20px] text-[#2a2a2a] font-bold">{card.title}</h4>
                  <FontAwesomeIcon icon={faUsers} className="text-[#afafaf]" />
                  <span className="text-[#afafaf] mr-5">{card.checkIns} Check Ins</span>
                  <span className="text-[#afafaf]">/person</span>
                  <hr className="text-[#e8e0e0] my-7" />
                  <h6 className="font-bold text-[14px] mb-3">Deal Includes:</h6>
                  <div className="text-[#afafaf] mb-3">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span className="ml-2 text-[14px]">5 Days Trip &#62; Hotel included</span>
                  </div>
                  <div className="text-[#afafaf] mb-3">
                    <FontAwesomeIcon icon={faPlane} />
                    <span className="ml-2 text-[14px]">Airplane Bill Included</span>
                  </div>
                  <div className="text-[#afafaf] mb-6">
                    <FontAwesomeIcon icon={faBuilding} />
                    <span className="ml-2 text-[14px]">Daily Places Visit</span>
                  </div>
                  <GenericButton
                    href="#reservation"
                    label="Make A Reservation"
                    width="w-[200px]"
                  />
                </div>
              </div>
            </div>
          ))}
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

export default Offers;
