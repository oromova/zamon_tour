import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import Offers from './sections/Offers';
import Showcase from './sections/Showcase';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Showcase/>
        <Offers/>
      </main>
      <Footer/>
    </div>
  )
}

export default App