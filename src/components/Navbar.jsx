import logo from '../assets/logo.svg';
import telegram from '../assets/telegram.svg'
import instagram from '../assets/instagram.svg'

function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 w-full bg-[var(--primary-color)] z-10">
        <div className="max-w-[1240px] mx-auto h-[70px] flex items-center justify-center">
          <div className="flex justify-between items-center w-full  px-4">
            {/* Logo */}
            <div>
              <a href="/">
                <img className='w-[159px] h-[41px]' src={logo} alt="Logo zamon" />
              </a>
            </div>

            {/* Navigation */}
            <ul className='flex gap-10 text-white font-poppins'>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#tours">Tours</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>

            {/* Languages & Links*/}
            <ul className='flex items-center gap-5 text-white font-poppins'>
              <li><a href="/uz">UZ</a></li>
              <li><a href="/en">ENG</a></li>
              <li><a href="/ru">RU</a></li>
              <li>
                <a href="https://t.me/zamonbiznestour" target='_blank'>
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
               <li>
                <a href="https://www.instagram.com/zamontour/#" target='_blank'>
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Navbar;
