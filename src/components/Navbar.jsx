import { useState } from "react";
import logo from "../assets/logo.svg";
import telegram from "../assets/telegram.svg";
import instagram from "../assets/instagram.svg";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="z-50 fixed top-0 w-full bg-[var(--primary-color)] shadow-md">
        <div className="max-w-[1240px] mx-auto px-4 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <img className="w-[130px] sm:w-[159px]" src={logo} alt="Zamon logo" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-white font-poppins text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tours">Tours</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>

          {/* Lang & Icons - Desktop */}
          <ul className="hidden md:flex items-center gap-4 text-white text-sm">
            <li><a href="/uz">UZ</a></li>
            <li><a href="/en">ENG</a></li>
            <li><a href="/ru">RU</a></li>
            <li>
              <a href="https://t.me/zamonbiznestour" target="_blank">
                <img src={telegram} alt="telegram" className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zamontour/#" target="_blank">
                <img src={instagram} alt="instagram" className="w-5 h-5" />
              </a>
            </li>
          </ul>

          {/* Mobile Burger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[var(--primary-color)] text-white px-4 py-6 space-y-4">
            <ul className="space-y-2 text-base font-poppins">
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#tours">Tours</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
            <hr className="border-white/30" />
            <ul className="flex gap-4 items-center text-sm font-poppins">
              <li><a href="/uz">UZ</a></li>
              <li><a href="/en">ENG</a></li>
              <li><a href="/ru">RU</a></li>
              <li>
                <a href="https://t.me/zamonbiznestour" target="_blank">
                  <img src={telegram} alt="telegram" className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zamontour/#" target="_blank">
                  <img src={instagram} alt="instagram" className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Padding to offset fixed navbar */}
      <div className="h-[70px]" />
    </header>
  );
}

export default Navbar;
