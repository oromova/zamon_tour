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
  <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-10 text-white text-center w-full px-4">
    <p className="text-[16px] sm:text-[18px] mb-[16px] font-medium">
      Take a Glimpse Into The Beautiful City Of:
    </p>
    <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-bold mb-[20px]">
      {slides[activeIndex].city}
    </h1>
    <GenericButton label="Go There" href="#contact" />

    {/* Info */}
    <div className="mt-[40px] bg-white py-6 px-4 sm:px-8 md:px-[60px] rounded-2xl md:rounded-[61px] max-w-[65%] md:max-w-[1000px] mx-auto">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-14">
        {/* Population */}
        <div className="flex items-center gap-4">
          <div className="bg-white px-5 py-4 rounded-full text-[var(--primary-color)] border border-[var(--primary-color)]">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </div>
          <div className="text-left text-black">
            <p className="text-[#afafaf] text-[14px]">Population:</p>
            <p className="text-[var(--primary-color)] text-[18px] font-bold">
              {slides[activeIndex].population}
            </p>
          </div>
        </div>

        {/* Territory */}
        <div className="flex items-center gap-4">
          <div className="bg-white px-5 py-4 rounded-full text-[var(--primary-color)] border border-[var(--primary-color)]">
            <FontAwesomeIcon icon={faGlobe} size="lg" />
          </div>
          <div className="text-left text-black">
            <p className="text-[#afafaf] text-[14px]">Territory:</p>
            <p className="text-[var(--primary-color)] text-[18px] font-bold">
              {slides[activeIndex].territory}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <div className="bg-white px-5 py-4 rounded-full text-[var(--primary-color)] border border-[var(--primary-color)]">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </div>
          <div className="text-left text-black">
            <p className="text-[#afafaf] text-[14px]">AVG Price:</p>
            <p className="text-[var(--primary-color)] text-[18px] font-bold">
              {slides[activeIndex].avgPrice}
            </p>
          </div>
        </div>

        {/* Explore More Button */}
        <div>
          <GenericButton label="Explore More" href="/reservation" />
        </div>
      </div>
    </div>

    {/* Progress Bars */}
    <div className="mt-10 flex gap-4 md:gap-10 w-full max-w-[500px] mx-auto">
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
