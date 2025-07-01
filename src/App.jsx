import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import Offers from './sections/Offers';
import Showcase from './sections/Showcase';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Support from './sections/Support';
import Destinations from './sections/Destinations';
import Countries from './sections/Countries';
import Locations from './sections/Locations';

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Showcase/>
        <Offers/>
        {/* <hr className='text-[#e2dbdb]' />
        <Support/>
        <hr className='text-[#e2dbdb]' />
        <Destinations/>
        <hr className='text-[#e2dbdb]'/>
        <Countries/>
        <Locations/> */}
      </main>
      <Footer/>
    </div>
  )
}

export default App