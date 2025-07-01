import img from '../assets/footer-bg.jpg';
import GenericButton from './Generics/GenericButton';

const Footer = () => {
  return (
    <footer className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}>
      <div className='py-[75px] text-white flex justify-between items-center'>
        <div className='px-[75px] font-bold'>
          <h2 className='text-[40px]'>Are You Looking To Travel ?</h2>
          <h4 className='text-[20px]'>Make A Reservation By Clicking The Button</h4>
        </div>
        <div className='flex items-center justify-center w-[180px] h-[47px] bg-[var(--primary-color)] text-white border border-white rounded-full text-center py-[8px] px-[5px] mx-auto transition-all duration-300 hover:bg-white hover:text-[var(--primary-color)]'>
          <a className='block w-full text-center'>
            Book Yours Now
          </a>
        </div>
      </div>
      <div className='bg-[var(--primary-color)] py-[25px]'>
        <p className='text-white text-center'>
          Copyright © 2024&nbsp;
          <a href="#" className='font-bold'>Zamon Business Tour. </a>
          All rights reserved. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;