import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/antalya.jpg';
import img2 from '../assets/dubai.jpg';
import img3 from '../assets/istanbul.jpg';
import img4 from '../assets/sharm.jpg';
import GenericButton from '../components/Generics/GenericButton';

const slides = [
  {
    image: img1,
    city: 'Antalya',
    population: '8.66 M',
    territory: '41.290 KM2',
    avgPrice: '$1.100.200',
  },
  {
    image: img2,
    city: 'Dubai',
    population: '67.41 M',
    territory: '551.500 KM2',
    avgPrice: '$425.600',
  },
  {
    image: img3,
    city: 'Istanbul',
    population: '44.48 M',
    territory: '275.400KM2',
    avgPrice: '$946.000',
  },
  {
    image: img4,
    city: 'Sharm El-Sheyh',
    population: '69.86 M',
    territory: '513.120 KM2',
    avgPrice: '$165.450',
  },
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
        className="w-full h-full bg-cover bg-center transition-all duration-1000"
      />

      {/* Kontent qismi */}
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 z-10 text-white text-center w-full px-4">
        <p className="text-[20px] mb-[20px] font-medium">
          Take a Glimpse Into The Beautiful City Of:
        </p>
        <h1 className="text-[50px] font-bold mb-[30px]">
          {slides[activeIndex].city}</h1>
        <GenericButton label="Go There" href="#contact" />

        {/* Info */}
        <div className="mt-[60px] bg-white py-[30px] px-[60px] rounded-[61px] max-w-[1000px] mx-auto">
          <div className="flex items-center gap-14">
            {/* 1: Population */}
            <div className="flex items-center gap-4">
              <div className="bg-white px-[18px] py-4 rounded-full text-[var(--primary-color)] border border-[var(--primary-color)]">
                <FontAwesomeIcon icon={faUser} size="xl" />
              </div>
              <div className="text-left text-black">
                <p className="text-[#afafaf] text-[15px]">Population:</p>
                <p className="text-[var(--primary-color)] text-[20px] font-bold">
                  {slides[activeIndex].population}
                </p>
              </div>
            </div>

            {/* 2: Territory */}
            <div className="flex items-center gap-4">
              <div className="bg-white px-4 py-4 rounded-full text-[var(--primary-color)] border border-[var(--primary-color)]">
                <FontAwesomeIcon icon={faGlobe} size="xl" />
              </div>
              <div className="text-left text-black">
                <p className="text-[#afafaf] text-[15px]">Territory:</p>
                <p className="text-[var(--primary-color)] text-[20px] font-bold">
                  {slides[activeIndex].territory}
                </p>
              </div>
            </div>

            {/* 3: Price */}
            <div className="flex items-center gap-4">
              <div className="bg-white px-4 py-4 rounded-full text-[var(--primary-color)] border border-[var(--primary-color)]">
                <FontAwesomeIcon icon={faHome} size="xl" />
              </div>
              <div className="text-left text-black">
                <p className="text-[#afafaf] text-[15px]">AVG Price:</p>
                <p className="text-[var(--primary-color)] text-[20px] font-bold">
                  {slides[activeIndex].avgPrice}
                </p>
              </div>
            </div>

            {/* 4: Explore button */}
            <GenericButton label="Explore More" href='/reservation' />
          </div>
        </div>

        {/* Progress barlar */}
        <div className="mt-10 flex gap-10 w-[50%] mx-auto">
          {slides.map((_, index) => (
            <div key={index} className="w-full h-[2px] bg-white rounded overflow-hidden">
              <div
                className={`h-full bg-[var(--primary-color)] ${
                  index === activeIndex ? 'animate-progress' : index < activeIndex ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
