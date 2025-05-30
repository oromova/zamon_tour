import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import Offers from './sections/Offers';
import Showcase from './sections/Showcase';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Support from './sections/Support';

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Showcase/>
        <Offers/>
        <hr className='text-[#e2dbdb]' />
        <Support/>
        <hr className='text-[#e2dbdb]' />
      </main>
      <Footer/>
    </div>
  )
}

export default App