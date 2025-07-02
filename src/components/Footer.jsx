import img from '../assets/footer-bg.jpg';

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="py-[30px] sm:py-[40px] md:py-[60px] lg:py-[75px] text-white flex flex-col lg:flex-row justify-between items-center relative gap-6 px-6 lg:px-[75px]">
        {/* Text Section */}
        <div className="text-center lg:text-left font-bold max-w-[700px]">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] leading-tight mb-2">
            Are You Looking To Travel?
          </h2>
          <h4 className="text-[16px] sm:text-[18px] lg:text-[20px]">
            Make A Reservation By Clicking The Button
          </h4>
        </div>

        {/* Button Section */}
        <div className="flex items-center w-[180px] h-[47px] bg-[var(--primary-color)] text-white border border-white rounded-full py-[8px] px-[5px] transition-all duration-300 hover:bg-white hover:text-[var(--primary-color)]
        static lg:absolute lg:right-[100px]">
          <a className="block w-full text-center text-[14px] sm:text-[15px]">
            Book Yours Now
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[var(--primary-color)] py-[25px]">
        <p className="text-white text-center text-[14px] sm:text-[15px]">
          Copyright © 2024&nbsp;
          <a href="#" className="font-bold">Zamon Business Tour.</a> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
